import { Module } from '@nestjs/common';
import { SchoolController } from './controller';

@Module({
    controllers: [SchoolController],
})
export class SchoolModule {}
