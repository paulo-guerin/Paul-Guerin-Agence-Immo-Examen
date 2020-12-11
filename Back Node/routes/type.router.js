const express = require('express');
const router = express.Router();
const type_controller = require('../controllers/type.controller');
const auth = require('../middleware/auth');
const agent = require('../middleware/agent');

router.get('/',auth(),agent(),type_controller.type_list);
router.get('/:id',auth(),agent(),type_controller.type_detail);
router.post('/addType',auth(),agent(),type_controller.type_add);
router.put('/:id',auth(),agent(),type_controller.type_edit);
router.delete('/:id',auth(),agent(),type_controller.type_delete);

module.exports = router;