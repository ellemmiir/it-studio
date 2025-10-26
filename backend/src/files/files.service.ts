import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { File, FileDocument } from '../schemas/file.schema';
import * as Minio from 'minio';

@Injectable()
export class FilesService {
  private minioClient: Minio.Client;

  constructor(
    @InjectModel(File.name) private fileModel: Model<FileDocument>,
  ) {
    this.minioClient = new Minio.Client({
      endPoint: process.env.MINIO_ENDPOINT || 'localhost',
      port: parseInt(process.env.MINIO_PORT || '9000'),
      useSSL: process.env.MINIO_USE_SSL === 'true',
      accessKey: process.env.MINIO_ACCESS_KEY || 'minioadmin',
      secretKey: process.env.MINIO_SECRET_KEY || 'minioadmin123',
    });
  }

  async uploadFile(file: any, ownerId: string, linkedTo?: { type: string; id: string }): Promise<File> {
    const fileName = `${Date.now()}-${file.originalname}`;
    const bucketName = process.env.MINIO_BUCKET || 'it-studio-files';

    await this.minioClient.putObject(bucketName, fileName, file.buffer, file.size, {
      'Content-Type': file.mimetype,
    });

    const fileDoc = new this.fileModel({
      filename: file.originalname,
      size: file.size,
      mime: file.mimetype,
      url: `${process.env.MINIO_ENDPOINT || 'localhost'}:${process.env.MINIO_PORT || '9000'}/${bucketName}/${fileName}`,
      ownerId,
      linkedTo,
      virusScanned: true,
    });

    return fileDoc.save();
  }

  async getFile(id: string): Promise<File | null> {
    return this.fileModel.findById(id).exec();
  }

  async deleteFile(id: string): Promise<boolean> {
    const file = await this.fileModel.findById(id).exec();
    if (!file) return false;

    try {
      const bucketName = process.env.MINIO_BUCKET || 'it-studio-files';
      await this.minioClient.removeObject(bucketName, file.url.split('/').pop() || '');
      await this.fileModel.findByIdAndDelete(id).exec();
      return true;
    } catch (error) {
      return false;
    }
  }
}
