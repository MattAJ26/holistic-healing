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


  const users = [
    {
      username: 'admin',
      email: 'admin@example.com',
      password: await bcrypt.hash('adminpassword', 10), // Hash the password
      role: 'Admin', // Set the role for admin user
    },
    {
      username: "healingseeker01",
      email: "seeker01@gmail.com",
      password: await bcrypt.hash("password123", 10),
      role: "Client"
    },
  
    {
      username: "naturelover99",
      email: "lover99@gmail.com",
      password: await bcrypt.hash("natureheal99", 10),
      role: "Client"
    },
  
    {
      username: "meditationguru",
      email: "guru@gmail.com",
      password: await bcrypt.hash("meditation2024", 10),
      role: "Client"
    }
  ]
  

  // Insert the admin user and normal users
  await User.insertMany(users);
  await Practitioner.insertMany(PractitionerData);
  await Service.insertMany(ServiceData);
  await Appointment.insertMany(AppointmentData);
  await Review.insertMany(ReviewData);
 


  console.log('All data seeded!');
  process.exit(0);
});
