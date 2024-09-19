const { User, Appointment, Practitioner, Service, Review,Role } = require('../models');

const resolvers = {
  // query
  // ----
  Query: {

    users: async () => {
      return User.find({}).populate('roles');
    },

   appointments: async () => {
  return Appointment.find({}).populate('user').populate({
    path: 'user',
        populate: 'roles',
  }).populate('practitioner').populate({
    path: 'practitioner',
    populate: 'ratings',
  })
    
},

services: async () => {
  return Service.find({}).populate('practitioner')
},

roles: async () => {
  return Role.find({});
},

reviews: async () => {
  return Review.find({}).populate('practitioner').populate('service');
},

practitioners: async () => {
  return Practitioner.find({}).populate('ratings').populate({
    path: 'ratings',
    populate: 'service',
  });
},


// find data by id
// ---------------
appointment: async (parent, args) => {
  return Appointment.findById(args.id)
    .populate({
      path: 'user',    
      populate: {
        path: 'roles', 
      },
    })
    .populate('practitioner'); 
},

practitioner: async (parent, args) => {
  return Practitioner.findById(args.id);
},

role: async (parent, args) => {
  return Role.findById(args.id);
},

service: async (parent, args) => {
  return Service.findById(args.id).populate('practitioners')
},

user: async (parent, args) => {
  return User.findById(args.id).populate('roles')
},

  },
  // Mutation
  // -------

  Mutation: {
     addAppointment: async (parent, {userId, practitionerId, appointmentDate, notes }) => {
      const user = await User.findById(userId);
            const practitioner = await Practitioner.findById(practitionerId);

            if (!user || !practitioner) {
                throw new Error('User or Practitioner not found');
            }

      // Create and return the new Appointment object
      return await Appointment.create({ 
        user: userId,
        practitioner: practitionerId,
        appointmentDate,
        notes,
        });
    },


    addReview: async (parent, {userId, rating, comment,}) => {
      const user = await User.findById(userId);
      return await Review.create({
        user: userId,
        rating,
        comment
      })
    },

    addUser: async (parent, {username,  email, password}) => {
      return await User.create({
      username,
      email,
      password
      })
    },


    // update
    // ------

    
  },


};

module.exports = resolvers;
