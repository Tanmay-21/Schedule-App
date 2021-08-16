const mongoose = require('mongoose');

const Schema = mongoose.Schema;

/**
 * @class Cell
 */
const cellSchema = new Schema({
  subjectCode: { type: String, required: true },
  subjectTitle: { type: String, required: true },
  classType: { type: String, required: true },
  classLink: { type: String },
  classIncharge: { type: String },
  cellBatch: { type: Schema.Types.ObjectId, ref: 'Batch', required: true },
  cellDay: { type: String, required: true },
  cellStart: { type: String, required: true },
  cellHours: { type: String, required: true }
}, {
  timestamps: true
});

module.exports = mongoose.model('Cell', cellSchema);