import { Module } from '@nestjs/common';
import { FeedController } from './controller';

@Module({
    controllers: [FeedController],
})
export class FeedModule {}
