import Licenca from "../entities/Lice";
import IUlice from "../interfaces/IUlice";
import { AppDataSource } from "../../database/data-source";

const licencaRepository = AppDataSource.getRepository(Licenca);

const getLices = (): Promise<IUlice[]> => {
  return licencaRepository.find();
}

const createlice = (lice: IUlice): Promise<Licenca> => {
  const newlice = licencaRepository.create(lice);
  return licencaRepository.save(newlice);
}

const updatelice = async (id: number, lice: IUlice): Promise<Licenca | null> => {
  const existinglice = await licencaRepository.findOne({ where: { id } });

  if (!existinglice) {
    return null;
  }

  const updatedlice = licencaRepository.merge(existinglice, lice);

  return licencaRepository.save(updatedlice);
}

const deletelice = async (id: number): Promise<boolean> => {
  const lice = await licencaRepository.findOne({ where: { id } });

  if (!lice) {
    return false;
  }

  await licencaRepository.delete(id);

  return true;
};

export default { getLices, createlice, updatelice, deletelice };