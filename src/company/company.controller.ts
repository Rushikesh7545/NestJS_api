import { Controller,Get, Param,Post,Put, Delete,Body } from '@nestjs/common';
import {companyService} from './company.service';
import { Company } from './dto/company.entity';
@Controller('company')
export class CompanyController {

    constructor(private companyService: companyService){}
    @Get()
    findAll(): Promise<Company[]> {
      return this.companyService.findAll();
    }
    @Post('create')
    async create(@Body() companyData: Company): Promise<Company> {
      return this.companyService.create(companyData);
    }
    @Put(':id/update')
    async update(@Param('id') id, @Body() companyData: Company): Promise<Company> {
        companyData.id = Number(id);
        return this.companyService.update(companyData);
    }   
    @Delete(':id/delete')
    async delete(@Param('id') id): Promise<Company> {
      return this.companyService.delete(id);
    }  
  }


