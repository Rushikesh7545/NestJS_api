import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
// import { CompanyController } from './company/company.controller';
// import { companyService } from './company/company.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompanyModule } from './company/company.module';
import {TypeOrmConfig} from './config/typeorm.config'
@Module({
  imports: [
    CompanyModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        TypeOrmConfig,
        type: 'mysql',
        host: process.env.DB_HOST,
        port: parseInt(process.env.DB_PORT) || 3306,
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: false
      })
    })
  ],
  // controllers: [CompanyController],
  // providers: [companyService],
})
export class AppModule {}