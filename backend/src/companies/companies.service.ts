import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Company, CompanyDocument } from '../schemas/company.schema';

@Injectable()
export class CompaniesService {
  constructor(
    @InjectModel(Company.name) private companyModel: Model<CompanyDocument>,
  ) {}

  async findAll(): Promise<Company[]> {
    return this.companyModel.find().exec();
  }

  async findOne(id: string): Promise<Company | null> {
    return this.companyModel.findById(id).exec();
  }

  async create(companyData: any): Promise<Company> {
    const company = new this.companyModel(companyData);
    return company.save();
  }

  async update(id: string, companyData: any): Promise<Company | null> {
    return this.companyModel.findByIdAndUpdate(id, companyData, { new: true }).exec();
  }

  async delete(id: string): Promise<boolean> {
    const result = await this.companyModel.findByIdAndDelete(id).exec();
    return !!result;
  }
}

