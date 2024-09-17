const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');


// Review schema
// -------------

const reviewSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },

  practitioner: {
    type: Schema.Types.ObjectId,
    ref: 'Practitioner',
  },

  service: {
    type: Schema.Types.ObjectId,
    ref: 'Service',
  },

  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },

  comment: {
    type: String,
    trim: true,
  },

  createdAt: {
    type: Date,
    default: Date.now,
    get: timestamp => dateFormat(timestamp),
  },

});

const Review = model('Review', reviewSchema);



module.exports = Review;