import { Router } from 'express'
import empRouter from '../app/controller/EmpController'

const routers = Router();

routers.use('/emp', empRouter);

export default routers;