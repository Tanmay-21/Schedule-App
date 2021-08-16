const express = require('express');

const tableControllers = require('../controllers/table-controllers');

const router = express.Router();

router.get('/:bid', tableControllers.GetCellsForBatch);

router.post('/', tableControllers.CreateBatch);

router.post('/cell', tableControllers.AddCellForBatch);

router.patch('/cell/:cid', tableControllers.EditCellForBatch);

router.delete('/cell/:cid', tableControllers.DeleteCellForBatch);

module.exports = router;
