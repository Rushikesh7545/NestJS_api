import { companyService } from './company.service';
import { Company } from './dto/company.entity';
export declare class CompanyController {
    private companyService;
    constructor(companyService: companyService);
    findAll(): Promise<Company[]>;
    create(companyData: Company): Promise<Company>;
    update(id: any, companyData: Company): Promise<Company>;
    delete(id: any): Promise<Company>;
}
