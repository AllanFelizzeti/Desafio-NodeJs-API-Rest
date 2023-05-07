import { Router } from 'express'
import empRouter from '../app/controller/EmpController'
import liceRouter from '../app/controller/LiceController';

const routers = Router();

routers.use('/emp', empRouter);

routers.use('/lice', liceRouter);

export default routers;