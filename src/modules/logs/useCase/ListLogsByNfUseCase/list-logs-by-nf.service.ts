import { Injectable } from '@nestjs/common';
import { CreateLogsDTO } from '../../dtos/CreateLogsDTO';
import { InjectModel } from '@nestjs/mongoose';
import { Logs } from '../../schemas/logs.schema';
import { Model } from 'mongoose';

@Injectable()
export class ListLogsByNFService {
    constructor(@InjectModel(Logs.name) private logModel: Model<Logs>) { }
    async execute(invoice: string) {
        const data = await this.logModel.find({
            invoice,
        }).exec();

        return data
    }

}