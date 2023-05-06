import Empresa from "../entities/Emp";
import IUemp from "../interfaces/IUemp";
import { AppDataSource } from "../../database/data-source";

const empresaRepository = AppDataSource.getRepository(Empresa);

const getEmps = (): Promise<IUemp[]> => {
  return empresaRepository.find();
}

export default { getEmps };