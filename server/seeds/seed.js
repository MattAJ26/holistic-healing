const db = require('../config/connection');
const { User, Appointment, Practitioner, Service, Review } = require('../models');
const cleanDB = require('./cleanDB');
const bcrypt = require('bcrypt');


const UserData = require('./userData.json');
const AppointmentData = require('./appointmentData.json');
const PractitionerData = require('./practitionerData.json');
const ServiceData = require('./serviceData.json');
const ReviewData = require('./reviewData.json');
// const RoleData = require('./roleData.json');

db.once('open', async () => {
  await cleanDB('User', 'users');
  await cleanDB('Appointment', 'appointments');
  await cleanDB('Practitioner', 'practitioners');
  await cleanDB('Service', 'services');
  await cleanDB('Review', 'reviews');
  //await cleanDB('Role', 'roles');


  // Create an admin user
  const adminUser = {
    username: 'admin',
    email: 'admin@example.com',
    password: await bcrypt.hash('adminpassword', 10), // Hash the password
    role: 'Admin', // Set the role for admin user
  };

  // Insert the admin user and normal users
  await User.insertMany([adminUser, ...UserData]);
  await Practitioner.insertMany(PractitionerData);
  await Service.insertMany(ServiceData);
  await Appointment.insertMany(AppointmentData);
  await Review.insertMany(ReviewData);
 


  console.log('All data seeded!');
  process.exit(0);
});
