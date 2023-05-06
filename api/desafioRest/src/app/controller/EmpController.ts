import { Request, Response, Router } from 'express'
import Empresa from '../entities/Emp'
import EmpRepository from '../repositories/EmpRepository'
import IUemp from '../interfaces/IUemp'

const empRouter = Router();

empRouter.get('/', async (_req : Request, res: Response): Promise<Response> => {
  const emps = await EmpRepository.getEmps();
  return res.status(200).json(emps);
})

export default empRouter;