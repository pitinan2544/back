const express = require('express')
const router = express.Router()
const record = require('../controllers/recordlist-controller')

router.post("/create",record.createRecord)
router.get("/getrecord",record.getRecord)
router.delete("/delete/:recordId",record.deleteRecord)
module.exports = router
