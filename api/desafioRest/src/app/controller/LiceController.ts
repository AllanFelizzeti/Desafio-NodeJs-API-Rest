import { Request, Response, Router } from 'express';
import Licenca from '../entities/Lice';
import Licerepository from '../repositories/Licerepository';
import IUlice from '../interfaces/IUlice';

const liceRouter = Router();

liceRouter.get('/', async (_req: Request, res: Response): Promise<Response> => {
  const lices = await Licerepository.getLices();
  return res.status(200).json(lices);
});

liceRouter.post('/', async (req: Request, res: Response): Promise<Response> => {
  const { numero, orgao_ambiental, emissao, validade, empresa_id, empresa } = req.body;

  const newlice: IUlice = {
    emissao,
    numero,
    orgao_ambiental,
    validade,
    empresa_id,
    empresa,
  };

  const lice = await Licerepository.createlice(newlice);

  return res.status(201).json(lice);
});

liceRouter.put('/:id', async (req: Request, res: Response): Promise<Response> => {
  const id = Number(req.params.id);
  const { numero, orgao_ambiental, emissao, validade, empresa_id, empresa } = req.body;

  const updatedLice: IUlice = {
    emissao,
    numero,
    orgao_ambiental,
    validade,
    empresa_id,
    empresa,
  };

  const result = await Licerepository.updatelice(id, updatedLice);

  return res.status(200).json(result);
});

liceRouter.delete('/:id', async (req: Request, res: Response): Promise<Response> => {
  const id = parseInt(req.params.id);
  await Licerepository.deletelice(id);
  return res.status(204).send();
});

export default liceRouter;
