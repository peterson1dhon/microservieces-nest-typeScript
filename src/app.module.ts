import { MessagingModule } from './infra/messaging/kafka/messaging.module';
import { Module } from '@nestjs/common';
import { HttpModule } from './infra/http/https.module';
import { DatabaseModule } from './infra/database/database.module';

@Module({
  imports: [HttpModule, DatabaseModule, MessagingModule],
})
export class AppModule {}
