import { Module } from '@nestjs/common';
import { SubscriptionController } from './controller';

@Module({
    controllers: [SubscriptionController],
})
export class SubscriptionModule {}
