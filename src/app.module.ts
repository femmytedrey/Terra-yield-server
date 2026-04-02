import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';
import { CropsModule } from './modules/crops/crops.module';

@Module({
  controllers: [AppController],
  providers: [AppService, PrismaService],
  imports: [AuthModule, PrismaModule, CropsModule],
})
export class AppModule {}
