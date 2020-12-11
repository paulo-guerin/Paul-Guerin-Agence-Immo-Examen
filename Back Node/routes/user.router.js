const express = require('express');
const router = express.Router();
const user_controller = require('../controllers/user.controller');
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');

router.get('/',auth(),admin(),user_controller.user_list);
router.get('/:id',auth(),admin(),user_controller.user_detail);
router.post('/addUser',user_controller.user_add);
router.post('/login',user_controller.user_login);
router.put('/:id',auth(),admin(),user_controller.user_edit);
router.delete('/:id',auth(),admin(),user_controller.user_delete);

module.exports = router;