import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices';

@Injectable()
export class KafkaConsumerService 
  extends ServerKafka
  implements OnModuleDestroy 
{
  constructor() {
    super({
      client: {
        clientId: 'notifications',
        brokers: ['topical-pony-13249-kafka.upstash.io:9092']
        sasl: {
          mechanism: 'scram-sha-256',
          username: 
          'dG9waWNhbC1wb255LTEzMjQ5JHgip-9C1Mz7uqgL5cY1z3_x0dzOAD7WTJ3o-Mc',
          password: 
          'dG9waWNhbC1wb255LTEzMjQ5JHgip-9C1Mz7uqgL5cY1z3_x0dzOAD7WTJ3o-Mc',
        },
        ssl: true,
      },
    });
  }
  async onModuleDestroy() {
    await this.close();
  }
}