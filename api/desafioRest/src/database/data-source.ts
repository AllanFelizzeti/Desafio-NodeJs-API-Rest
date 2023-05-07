import "reflect-metadata"
import { DataSource } from "typeorm"
import { CreateEmpresaTable1683374672000 } from './migrations/1683374672000-CreateEmpresaTable'
import { CreateLicencaTable1683467987571 } from './migrations/1683467987571-CreateLicencaTable'
import  Empresa  from '../app/entities/Emp'
import  Licenca  from '../app/entities/Lice'

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "test",
    synchronize: true,
    logging: false,
    entities: [Empresa, Licenca],
    migrations: [CreateEmpresaTable1683374672000, CreateLicencaTable1683467987571],
    subscribers: [],
})
