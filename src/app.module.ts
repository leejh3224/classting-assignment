import { Module } from '@nestjs/common';
import { SchoolModule } from './schools/module';
import { SubscriptionModule } from './subscriptions/module';
import { FeedModule } from './feeds/module';

@Module({
    imports: [SchoolModule, SubscriptionModule, FeedModule],
})
export class AppModule {}
