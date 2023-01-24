import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';
import { CitieController } from './controllers/CitieController';

const router = Router();

const citieController = new CitieController();

router.get('/cities', citieController.listCities);

router.post('/cities', citieController.create);

export { router };