import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const TypeOrmConfig: TypeOrmModuleOptions ={
    "type": "mysql",
    "host": "localhost",
    "port": 3306,
    "username": "nest_db_config",
    "password": "nest_DB_c0nf",
    "database": "root",
    "entities": [],
    "synchronize": true
}