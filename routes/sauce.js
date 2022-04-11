const express = require('express');
const router = express.Router();

const sauceCtrl = require('../controllers/sauce')
const auth = require('../middleware/auth')
const multer = require("../middleware/multer-config")
const idCompare = require ("../middleware/idCompare")

router.post('/', auth,   multer ,  sauceCtrl.createSauce)

router.get('/:id',auth, sauceCtrl.getOneSauce);

router.put('/:id', auth, idCompare,   multer,   sauceCtrl.modifySauce);

router.delete('/:id',auth , idCompare, sauceCtrl.deleteSauce );

router.get('/' , auth, sauceCtrl.getAllSauces);

router.post("/:id/like", auth, sauceCtrl.likeSauce );

module.exports = router;