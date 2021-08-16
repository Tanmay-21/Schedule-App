const { Schema, model } = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

/**
 * @class User
 */
const userSchema = new Schema({
  googleId: { type: String, required: true },
  username: { type: String, required: true },
  fullname: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  adminBatches: [
    { type: Schema.Types.ObjectId, ref: 'Batch' }
  ]
}, {
  timestamps: true
});

userSchema.plugin(uniqueValidator);

module.exports = model('User', userSchema);
