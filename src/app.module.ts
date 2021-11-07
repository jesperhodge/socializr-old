import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { EventsModule } from './events/events.module';
import { PrismaService } from './prisma.service';

@Module({
  imports: [UsersModule, EventsModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
