import { SendNotification } from '@application/use-cases/SendNotification';
import { NotificationController } from './controllers/notifications.controller';
import { KafkaConsumerService } from './kafka-consumer.service';
import { Module } from '@nestjs/common';
import { DatabaseModule } from '@infra/database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [KafkaConsumerService, SendNotification],
  controllers: [NotificationController],
});
export class NotificationModule {}
