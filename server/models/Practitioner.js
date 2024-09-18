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
      user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },

      rating: {
        type: Number,
        min: 1,
        max: 5,
      },

      review: {
        type: String,
      },
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
