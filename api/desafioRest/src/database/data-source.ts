import "reflect-metadata"
import { DataSource } from "typeorm"
import { CreateEmpresaTable1683374672000 } from './migrations/1683374672000-CreateEmpresaTable'
import  Empresa  from '../app/entities/Emp'

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "test",
    synchronize: true,
    logging: false,
    entities: [Empresa],
    migrations: [CreateEmpresaTable1683374672000],
    subscribers: [],
})
