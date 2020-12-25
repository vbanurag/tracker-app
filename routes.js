import express from 'express';
import { getAllDrivers } from './controllers/driver.controller';
import { seedData } from './seedData/seedData';

const router = express.Router();

//for seeding the DB
router.get('/seed', seedData);

router.post('/update/:id/location', () => { });  ///for updating the location

router.post('/alldrivers', getAllDrivers);

export default router;