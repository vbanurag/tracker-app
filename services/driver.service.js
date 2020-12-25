import Driver from '../models/driver.model';

export const getDataForLocation = async (query) => {
    try {
        let data = await Driver.find(query).exec();
        return data;
    } catch (err) {
        return {
            message: 'Failed'
        }
    }
}