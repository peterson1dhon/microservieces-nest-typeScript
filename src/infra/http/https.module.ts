import { UnreadNotification } from './../../aplication/use-cases/unread-notification';
import { ReadNotification } from './../../aplication/use-cases/read-notification';
import { GetRecipientNotifications } from './../../aplication/use-cases/get-recipient-notifications';
import { CountRecipientNotifications } from './../../aplication/use-cases/count-recipient-notifications';
import { CancelNotification } from './../../aplication/use-cases/cancel-notification';
import { DatabaseModule }  from './../database/database.module';
import { NotificationsController } from './controllers/notifications.controller';
import { Module } from '@nestjs/common';
import { SendNotification } from '@application/use-cases/send-notification';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationsController],
  providers: [
    SendNotification,
    CancelNotification,
    CountRecipientNotifications,
    GetRecipientNotifications,
    ReadNotification,
    UnreadNotification,
  ],
})
export class HttpModule {}
