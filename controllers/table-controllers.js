const mongoose = require('mongoose');

const HttpError = require('../models/http-error');
const { Batch, Cell } = require('../models');

/**
 * 
 * @param {Object} req 
 * @param {Object} res 
 * @param {Function} next 
 * @returns {Object}
 */
const GetCellsForBatch = async (req, res, next) => {
  const BatchId = req.params.bid;

  let Cells;
  try {
    Cells = await Cell.find({ cellBatch: BatchId });
  } catch (err) {
    const error = new HttpError('Something went wrong!', 500);
    return next(error);
  }

  if (!Cells || Cells.length === 0) {
    const error = new HttpError('No Cells found for this Batch', 404);
    return next(error);
  }

  res.json({ cells: Cells.map(cell => cell.toObject({ getters: true })) });
};

/**
 * 
 * @param {Object} req 
 * @param {Object} res 
 * @param {Function} next 
 * @returns {Object}
 */
const CreateBatch = async (req, res, next) => {
  const { title } = req.body;

  const CreatedBatch = new Batch({
    batchTitle: title,
  });

  try {
    await CreatedBatch.save();
  } catch (err) {
    const error = new HttpError('Something went wrong!', 500);
    return next(error);
  }

  res.status(201).json({ batch: CreatedBatch.toObject({ getters: true }) });
};

/**
 * 
 * @param {Object} req 
 * @param {Object} res 
 * @param {Function} next 
 * @returns {Object}
 */
const AddCellForBatch = async (req, res, next) => {
  const { code, title, type, link, incharge, batch, day, start, hours } = req.body;

  const CreatedCell = new Cell({
    subjectCode: code,
    subjectTitle: title,
    classType: type,
    classLink: link,
    classIncharge: incharge,
    cellBatch: batch,
    cellDay: day,
    cellStart: start,
    cellHours: hours
  });

  let CurrentBatch;
  try {
    CurrentBatch = await Batch.findById(batch);
  } catch (err) {
    const error = new HttpError('Adding Cell failed!', 500);
    return next(error);
  }

  if (!CurrentBatch) {
    const error = new HttpError('No such batch exists!', 404);
    return next(error);
  }

  try {
    const SESSION = await mongoose.startSession();
    SESSION.startTransaction();

    await CreatedCell.save({ session: SESSION });
    CurrentBatch.batchCells.push(CreatedCell);
    await CurrentBatch.save({ session: SESSION });

    await SESSION.commitTransaction();
    SESSION.endSession();
  } catch (err) {
    const error = new HttpError('Adding Cell failed!', 500);
    return next(error);
  }

  res.status(201).json({ cell: CreatedCell.toObject({ getters: true }) });
};

/**
 * 
 * @param {Object} req 
 * @param {Object} res 
 * @param {Function} next 
 * @returns {Object}
 */
const EditCellForBatch = async (req, res, next) => {
  const { code, title, type, link, incharge } = req.body;
  const CellId = req.params.cid;

  let CurrentCell;
  try {
    CurrentCell = await Cell.findById(CellId);
  } catch (err) {
    const error = new HttpError('Something went wrong!', 500);
    return next(error);
  }

  if (!CurrentCell) {
    const error = new HttpError('No such cell exists!', 404);
    return next(error);
  }

  CurrentCell.subjectCode = code;
  CurrentCell.subjectTitle = title;
  CurrentCell.classType = type;
  CurrentCell.classLink = link;
  CurrentCell.classIncharge = incharge;

  try {
    await CurrentCell.save();
  } catch (err) {
    const error = new HttpError('Something went wrong!', 500);
    return next(error);
  }

  res.status(200).json({ cell: CurrentCell.toObject({ getters: true }) });
};

/**
 * 
 * @param {Object} req 
 * @param {Object} res 
 * @param {Function} next 
 * @returns {Object}
 */
const DeleteCellForBatch = async (req, res, next) => {
  const CellId = req.params.cid;

  let CurrentCell;
  try {
    CurrentCell = await (await Cell.findById(CellId)).populated('cellBatch');
  } catch (err) {
    const error = new HttpError('Something went wrong!', 500);
    return next(error);
  }

  if (!CurrentCell) {
    const error = new HttpError('No such cell exists!', 404);
    return next(error);
  }

  try {
    const SESSION = await mongoose.startSession();
    SESSION.startTransaction();

    await CurrentCell.deleteOne({ session: SESSION });
    CurrentCell.cellBatch.batchCells.pull(CurrentCell);
    await CurrentCell.cellBatch.save({ session: SESSION });

    await SESSION.commitTransaction();
    SESSION.endSession();
  } catch (err) {
    const error = new HttpError('Removing Cell failed!', 500);
    return next(error);
  }

  res.status(200).json({message: 'Deleted Cell.'});
};

module.exports = {
  GetCellsForBatch: GetCellsForBatch,
  CreateBatch: CreateBatch,
  AddCellForBatch: AddCellForBatch,
  EditCellForBatch: EditCellForBatch,
  DeleteCellForBatch: DeleteCellForBatch,
};
