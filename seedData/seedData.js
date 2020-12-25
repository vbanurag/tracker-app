import { seedData as data } from './data'
import Driver from '../models/driver.model';


export const seedData = async (req, res) => {
    try {
        Driver.insertMany(data);
        return res.status(200).json({ message: 'Done !!' });
    } catch (err) {
        return res.status(400).json({ message: 'Error' });
    }
} 