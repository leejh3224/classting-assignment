import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { School } from './models/school';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateSchoolRequest } from './dto/createSchoolRequest';

@Injectable()
export class SchoolService {
    constructor(
        @InjectRepository(School)
        private schoolRepository: Repository<School>,
    ) {}

    async create(params: CreateSchoolRequest) {
        const newSchool = this.schoolRepository.create(params);
        const {
            raw: { insertId },
        } = await this.schoolRepository.insert(newSchool);
        return this.schoolRepository.findOneBy({
            id: insertId,
        });
    }
}
