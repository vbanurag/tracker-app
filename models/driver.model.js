import { Schema, model } from 'mongoose';

const DriverSchema = new Schema({
    name: String, //UserName
    email: { type: String, lowercase: true }, //UserEmail
    location: Object,
    cabId: String,
});


const Driver = model('Driver', DriverSchema);
Driver.createIndexes({ location: '2dsphere' });
export default Driver;