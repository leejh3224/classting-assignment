import { Module } from '@nestjs/common';
import { SchoolController } from './controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { School } from './models/school';
import { SchoolService } from './service';

@Module({
    imports: [TypeOrmModule.forFeature([School])],
    providers: [SchoolService],
    controllers: [SchoolController],
})
export class SchoolModule {}
