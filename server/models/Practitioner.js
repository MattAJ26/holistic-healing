const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

// Practitioner schema
// -------------------
const practitionerSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },

  bio: {
    type: String,
    required: true,
  },

  specialties: [
    {
      type: String,
      required: true,
    },
  ],

  certifications: [
    {
      type: String,
    },
  ],

  availableDates: [
    {
      type: Date,
    },
  ],

  ratings: [
    {
      type: Review,
    },
  ],

  createdAt: {
    type: Date,
    default: Date.now,
    get: timestamp => dateFormat(timestamp),
  },

});

const Practitioner = model('Practitioner', practitionerSchema);

module.exports = Practitioner;
