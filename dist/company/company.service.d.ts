import { Repository } from 'typeorm';
import { Company } from './dto/company.entity';
import { UpdateResult, DeleteResult } from 'typeorm';
export declare class companyService {
    private readonly CompanyRepository;
    constructor(CompanyRepository: Repository<Company>);
    findAll(): Promise<Company[]>;
    create(company: Company): Promise<Company>;
    update(company: Company): Promise<UpdateResult>;
    delete(id: any): Promise<DeleteResult>;
}
