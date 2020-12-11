const express = require('express');
const router = express.Router();
const option_controller = require('../controllers/option.controller');
const auth = require('../middleware/auth');
const agent = require('../middleware/agent');

router.get('/',auth(),agent(),option_controller.option_list);
router.get('/:id',auth(),agent(),option_controller.option_detail);
router.post('/addOption',auth(),agent(),option_controller.option_add);
router.put('/:id',auth(),agent(),option_controller.option_edit);
router.delete('/:id',auth(),agent(),option_controller.option_delete);

module.exports = router;