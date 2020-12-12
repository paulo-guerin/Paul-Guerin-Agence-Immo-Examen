const express = require('express');
const router = express.Router();
const property_controller = require('../controllers/property.controller');
const auth = require('../middleware/auth');
const agent = require('../middleware/agent');

router.get('/',property_controller.property_list);
router.get('/:id',property_controller.property_detail);
router.post('/addProperty',auth(),agent(),property_controller.property_add);
router.put('/:id',auth(),agent(),property_controller.property_edit);
router.delete('/:id',auth(),agent(),property_controller.property_delete);

module.exports = router;