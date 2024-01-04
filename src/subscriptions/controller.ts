import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller()
export class SubscriptionController {
    @ApiTags('학생')
    @ApiOperation({
        summary: '구독 중인 학교 페이지 목록 조회',
    })
    @Get('/subscriptions')
    listSubscriptions() {
        return;
    }
}
