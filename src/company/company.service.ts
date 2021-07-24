import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Company } from './dto/company.entity';
import { UpdateResult, DeleteResult } from  'typeorm';
@Injectable()
export class companyService {
  constructor(
    @InjectRepository(Company)
    private readonly CompanyRepository: Repository<Company>,
  ) {}

  async findAll(): Promise<Company[]> {
    return this.CompanyRepository.find();
  }

  async  create(company: Company): Promise<Company> {
    return await this.CompanyRepository.save(company);
}

async update(company: Company): Promise<UpdateResult> {
    return await this.CompanyRepository.update(company.id, company);
}

async delete(id): Promise<DeleteResult> {
    return await this.CompanyRepository.delete(id);
}
}