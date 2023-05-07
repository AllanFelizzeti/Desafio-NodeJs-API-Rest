import Empresa from "../entities/Emp";
import IUemp from "../interfaces/IUemp";
import { AppDataSource } from "../../database/data-source";

const empresaRepository = AppDataSource.getRepository(Empresa);

const getEmps = (): Promise<IUemp[]> => {
  return empresaRepository.find();
}

const createEmp = (emp: IUemp): Promise<Empresa> => {
  const newEmp = empresaRepository.create(emp);
  return empresaRepository.save(newEmp);
}

const updateEmp = async (id: number, emp: IUemp): Promise<Empresa | null> => {
  const existingEmp = await empresaRepository.findOne({ where: { id } });

  if (!existingEmp) {
    return null;
  }

  const updatedEmp = empresaRepository.merge(existingEmp, emp);

  return empresaRepository.save(updatedEmp);
}

const deleteEmp = async (id: number): Promise<boolean> => {
  const result = await empresaRepository.delete({ id });
  return result.affected !== 0;
}

export default { getEmps, createEmp, updateEmp, deleteEmp };