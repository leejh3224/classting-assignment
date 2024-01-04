import { Module } from '@nestjs/common';
import { SchoolModule } from './schools/module';
import { SubscriptionModule } from './subscriptions/module';
import { FeedModule } from './feeds/module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: process.env.DEFAULT_DB_HOST,
            port: Number(process.env.DEFAULT_DB_PORT),
            username: process.env.DEFAULT_DB_USER,
            password: process.env.DEFAULT_DB_PASSWORD,
            database: process.env.DEFAULT_DB_NAME,
            autoLoadEntities: true,
            synchronize: false,
        }),
        SchoolModule,
        SubscriptionModule,
        FeedModule,
    ],
})
export class AppModule {}
