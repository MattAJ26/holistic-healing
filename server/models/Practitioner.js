const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

// Practitioner schema
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
      validate: {
        validator: function(value) {
          return value > Date.now();
        },
        message: 'Available date must be in the future',
      },
    },
  ],
  ratings: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Review',
    },
  ],
}, { timestamps: true });

const Practitioner = model('Practitioner', practitionerSchema);


module.exports = Practitioner;
