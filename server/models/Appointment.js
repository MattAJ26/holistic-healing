const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

// Appointment Schema
// -----------------

const appointmentSchema = new Schema({
  user:{
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  practitioner:{
    type: Schema.Types.ObjectId,
    ref: 'Practitioner',
    required: true,
  },

  appointmentDate: {
    type: Date,
    required: true,
    validate: {
        validator: function(value) {
            return value > Date.now();
        },
        message: 'Appointment date must be in the future'
    }
},


  status: {
    type: String,
    enum: ['Scheduled', 'Completed', 'Cancelled'],
    default: 'Scheduled',
  },

  notes: {
    type: String,
  },

  createdAt: {
    type: Date,
    default: Date.now,
    get: timestamp => dateFormat(timestamp),
  },

});

const Appointment = model('Appointment', appointmentSchema);


module.exports = Appointment;