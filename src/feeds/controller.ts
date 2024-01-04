import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller()
export class FeedController {
    @ApiTags('학생')
    @ApiOperation({
        summary: '구독 중인 모든 학교 페이지 소식 목록 조회 (뉴스피드)',
    })
    @Get('/feeds')
    listAllFeeds() {
        return '';
    }

    @ApiTags('학생')
    @ApiOperation({
        summary: '구동 중인 학교 페이지 별 소식 목록 조회',
    })
    @Get('/feeds/schools/:schoolId')
    listSchoolFeeds() {
        return '';
    }
}
