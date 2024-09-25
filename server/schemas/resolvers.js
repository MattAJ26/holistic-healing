const { User, Appointment, Practitioner, Service, Review } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

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
  return Service.find({}).populate('practitioners')
},

// roles: async () => {
//   return Role.find({});
// },

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

// role: async (parent, args) => {
//   return Role.findById(args.id);
// },

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
     addAppointment: async (parent, {user, practitioner, appointmentDate, notes }) => {
      const userData = await User.findOne({ _id: user
      });
            const practitionerData = await Practitioner.findOne({ _id: practitioner});

            if (!userData || !practitionerData) {
                throw new Error('User or Practitioner not found');
            }

      // Create and return the new Appointment object
      return await Appointment.create({ 
        user: userData,
        practitioner: practitionerData,
        appointmentDate,
        notes,
        });
    },


    addReview: async (parent, {user, rating, comment,}) => {
      const userData = await User.findOne({_id: user});
      if (!userData) {
                throw new Error('User not found');
            }

      return await Review.create({
        user: userData,
        rating,
        comment
      })
    },

    addUser: async (parent, {username, email, password}) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    
    addService: async (parent, {practitioner, name, description, duration, price}) => {

       const practitionerData = await Practitioner.findOne({ _id: practitioner});

            if (!practitionerData) {
                throw new Error('Practitioner not found');
            }

      return await Service.create({
       practitioner: practitionerData,
      name, 
      description, 
      duration, 
      price
      })
    },

    // update
    // ------
    updateUser: async (parent, { id, username, email, password }) => {
      // Find and update the matching class using the destructured args
      return await User.findOneAndUpdate(
        { _id: id }, 
        { username, email, password  },
        // Return the newly updated object instead of the original
        { new: true }
      );
    },
      updateAppointment: async (parent, { id, appointmentDate, notes }) => {
      // Find and update the matching class using the destructured args
      return await Appointment.findOneAndUpdate(
        { _id: id }, 
        { appointmentDate, notes  },
        // Return the newly updated object instead of the original
        { new: true }
      );
    },

    updateReview: async (parent, { id, rating, comment }) => {
      // Find and update the matching class using the destructured args
      return await Review.findOneAndUpdate(
        { _id: id }, 
        { rating, comment},
        // Return the newly updated object instead of the original
        { new: true }
      );
    },

     updateService: async (parent, { id, description, duration, price }) => {
      // Find and update the matching class using the destructured args
      return await Service.findOneAndUpdate(
        { _id: id }, 
        { description, duration, price},
        // Return the newly updated object instead of the original
        { new: true }
      );
    },


    // delete
    // -----

    removeUser: async (parent, { userId }) => {
      return User.findOneAndDelete({ _id: userId });
    },

     cancelAppointment: async (parent, { appointmentId }) => {
      return Appointment.findOneAndDelete({ _id: appointmentId });
    },
    
    deleteService: async (parent, { serviceId }) => {
      return Service.findOneAndDelete({ _id: serviceId });
    },
    
    // Auth

    login: async (parent, { email, password }, context) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);
      console.log('Generated Token:', token); // Log the token

      return { token, user };
    },

  },

};

module.exports = resolvers;
