import { Request, Response, Router } from 'express';
import Empresa from '../entities/Emp';
import EmpRepository from '../repositories/EmpRepository';
import IUemp from '../interfaces/IUemp';

const empRouter = Router();

empRouter.get('/', async (_req: Request, res: Response): Promise<Response> => {
  const emps = await EmpRepository.getEmps();
  return res.status(200).json(emps);
});

empRouter.post('/', async (req: Request, res: Response): Promise<Response> => {
  const { razao_social, cnpj, cep, cidade, estado, bairro, complemento } = req.body;

  const newEmp: IUemp = {
    razao_social,
    cnpj,
    cep,
    cidade,
    estado,
    bairro,
    complemento,
  };

  const emp = await EmpRepository.createEmp(newEmp);

  return res.status(201).json(emp);
});

empRouter.put('/:id', async (req: Request, res: Response): Promise<Response> => {
  const id = parseInt(req.params.id);
  const { razao_social, cnpj, cep, cidade, estado, bairro, complemento } = req.body;

  const updatedEmp: IUemp = {
    razao_social,
    cnpj,
    cep,
    cidade,
    estado,
    bairro,
    complemento,
  };

  const emp = await EmpRepository.updateEmp(id, updatedEmp);

  if (!emp) {
    return res.status(404).json({ message: 'Empresa não encontrada.' });
  }

  return res.status(200).json(emp);
});

empRouter.delete('/:id', async (req: Request, res: Response): Promise<Response> => {
  const id = parseInt(req.params.id);
  await EmpRepository.deleteEmp(id);
  return res.status(204).send();
});

export default empRouter;
