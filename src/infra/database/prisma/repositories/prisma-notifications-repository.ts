/* eslint-disable prettier/prettier */
import { PrismaNotificationMapper } from "../mappers/prisma-notification-mapper";
import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { Notification } from "@application/entities/notification";
import { NotificationsRepository } from "@application/repositories/notifications-repostiory";

@Injectable()
export class PrismaNotificationsRepository implements NotificationsRepository {
  constructor(private prisma: PrismaService) {}

  async findById(notificationId: string): Promise<Notification | null> {
    const notification = await this.prisma.notification.findUnique({
      where: { 
        id: notificationId,
      },
    });

    if (!notification) {
      return null;
    }

    return PrismaNotificationMapper.toDomain(notification);
  }

  async findManyByRecipient(recipient: string): Promise<Notification[]> {
    const notifications = await this.prisma.notification.findMany({
      where: {
        recipient,
      },
    });

    return notifications.map((notification) => {
      return PrismaNotificationMapper.toDomain(notification);
    });
  }

  async countManyByRecipientId(recipient: string): Promise<number> {
    const count = await this.prisma.notification.count({
      where: {
        recipient,
      },
    });

    return count;
  }

  async create(notification: Notification): Promise<void> {
    const raw = PrismaNotificationMapper.toPrisma(notification);
    
    await this.prisma.notification.create({ data: raw, });
  }

  async save(notification: Notification): Promise<void> {
    const raw = PrismaNotificationMapper.toPrisma(notification);
    await this.prisma.notification.update({
      where: {
        id: raw.id,
      },
    });
  }
} 
