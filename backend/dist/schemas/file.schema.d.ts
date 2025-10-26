import { Document } from 'mongoose';
export type FileDocument = File & Document;
export declare class File {
    filename: string;
    size: number;
    mime: string;
    url: string;
    ownerId: string;
    linkedTo?: {
        type?: string;
        id?: string;
    };
    virusScanned: boolean;
}
export declare const FileSchema: import("mongoose").Schema<File, import("mongoose").Model<File, any, any, any, Document<unknown, any, File, any, {}> & File & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, File, Document<unknown, {}, import("mongoose").FlatRecord<File>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<File> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
