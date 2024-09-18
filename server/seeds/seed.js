const db = require('../config/connection');
const { User, Appointment, Practitioner, Service, Review } = require('../models');
const cleanDB = require('./cleanDB');


const UserData = require('./userData.json');
const AppointmentData = require('./appointmentData.json');
const PractitionerData = require('./practitionerData.json');
const ServiceData = require('./serviceData.json');
const ReviewData = require('./reviewData.json');




db.once('open', async () => {
  await cleanDB('User', 'users');
  await cleanDB('Appointment', 'appointments');
  await cleanDB('Practitioner', 'practitioners');
  await cleanDB('Service', 'services');
   await cleanDB('Review', 'reviews');


  await User.insertMany(UserData);
  await Appointment.insertMany(AppointmentData);
  await Practitioner.insertMany(PractitionerData);
  await Service.insertMany(ServiceData);
  await Review.insertMany(ReviewData);


  console.log('All data seeded!');
  process.exit(0);
});
