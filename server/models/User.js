const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

// User Schema
// -----------
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function (value) {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,6})+$/.test(value);
      },
      message: 'Invalid email address format',
    },
  },

  password: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        return value.length >= 8;
      },
      message: 'Password must be at least 8 characters long',
    },
  },

  roles: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Role',
    },
  ],

  createdAt: {
    type: Date,
    default: Date.now,
    get: timestamp => dateFormat(timestamp),
  },
});

const User = model('User', userSchema);

module.exports = User;
