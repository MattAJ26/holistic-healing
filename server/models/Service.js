
const { Schema, model } = require('mongoose');


// Service Schema
// ---------------

const serviceSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  duration: {
    type: Number, 
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  practitioners: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Practitioner',
    },
  ],
});

const Service = model('Service', serviceSchema);


module.exports = Service;