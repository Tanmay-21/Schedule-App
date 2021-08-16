const mongoose = require('mongoose');

const Schema = mongoose.Schema;

/**
 * @class Batch
 */
const batchSchema = new Schema({
  batchTitle: { type: String, required: true },
  batchAdmins: [
    { type: Schema.Types.ObjectId, ref: 'User' }
  ],
  batchCells: [
    { type: Schema.Types.ObjectId, ref: 'Cell' }
  ]
}, {
  timestamps: true
});

module.exports = mongoose.model('Batch', batchSchema);