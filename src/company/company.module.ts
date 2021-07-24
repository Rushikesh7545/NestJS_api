import { Module } from '@nestjs/common';
import { CompanyController } from './company.controller';
import { companyService } from './company.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Company } from './dto/company.entity';
@Module({
  imports: [TypeOrmModule.forFeature([Company])],
  controllers: [CompanyController],
  providers: [companyService],
})
export class CompanyModule {}

