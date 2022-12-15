import { CreateNotificationBody } from './create-notification-body';
import { PrismaService } from './prisma.service';
export declare class AppController {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    getHello(): import(".prisma/client").PrismaPromise<import(".prisma/client").Notification[]>;
    create(body: CreateNotificationBody): Promise<void>;
}
