const express = require('express');
const router = express.Router();
const { joiSchema } = require('../../models/transactions');
const validation = require('../../middlewares/validation');

const ctrl = require('../../controllers/transactions');

router.get('/', ctrl.listTransactions);

router.get('/:transactionId', ctrl.getById);

router.post('/', validation(joiSchema), ctrl.add);

router.put('/:transactionId', ctrl.update);

router.delete('/:transactionId', ctrl.remove);

module.exports = router;
