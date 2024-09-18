const db = require('../config/connection');
const { User, Appointment, Practitioner, Service, Review } = require('../models');
const cleanDB = require('./cleanDB');


const UserData = require('./techData.json');

db.once('open', async () => {
  await cleanDB('Tech', 'teches');

  await User.insertMany(techData);

  console.log('Technologies seeded!');
  process.exit(0);
});
