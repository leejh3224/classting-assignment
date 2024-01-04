import { Body, Controller, Delete, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { SchoolService } from './service';
import { CreateSchoolRequest } from './dto/createSchoolRequest';

@Controller()
export class SchoolController {
    constructor(private schoolService: SchoolService) {}

    @ApiTags('학교 관리자')
    @ApiOperation({
        summary: '학교 페이지 생성',
    })
    @Post('/schools')
    createSchool(@Body() body: CreateSchoolRequest) {
        return this.schoolService.create(body);
    }

    @ApiTags('학교 관리자')
    @ApiOperation({
        summary: '학교 페이지 내 소식 작성',
    })
    @Post('/schools/:schoolId/news')
    createNews() {
        return;
    }

    @ApiTags('학교 관리자')
    @ApiOperation({
        summary: '학교 페이지 내 소식 수정',
    })
    @Put('/schools/:schoolId/news/:newsId')
    updateNews() {
        return;
    }

    @ApiTags('학교 관리자')
    @ApiOperation({
        summary: '학교 페이지 내 소식 삭제',
    })
    @Delete('/schools/:schoolId/news/:newsId')
    deleteNews() {
        return;
    }

    @ApiTags('학생')
    @ApiOperation({
        summary: '학교 페이지 구독',
    })
    @Post('/schools/:schoolId/subscription')
    subscribeSchool() {
        return;
    }

    @ApiTags('학생')
    @ApiOperation({
        summary: '학교 페이지 구독 취소',
    })
    @Delete('/schools/:schooldI/subscription')
    unsubscribeSchool() {
        return;
    }
}
