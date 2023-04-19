import { Injectable } from '@nestjs/common';
import { CreateLogsDTO } from '../../dtos/CreateLogsDTO';
import { InjectModel } from '@nestjs/mongoose';
import { Logs } from '../../schemas/logs.schema';
import { Model } from 'mongoose';

@Injectable()
export class CreateLogsService {
    constructor(@InjectModel(Logs.name) private logModel: Model<Logs>) { }
    async execute(createLogsDTO: CreateLogsDTO) {
        const createdLog = new this.logModel({
            invoice: createLogsDTO.invoice,
            date_log: new Date(),
            description: createLogsDTO.description
        });
        return createdLog.save();
    }

}