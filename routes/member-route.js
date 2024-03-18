const express = require('express')
const router = express.Router()
const member = require('../controllers/member-controller')

router.post("/create",member.createMember)
router.get("/all",member.getMember)
router.put("/update/:memberId",member.updateMember)
router.delete("/delete/:memberId",member.deleteMember)
router.get("/getbyid/:memberId",member.getMemberById)

module.exports = router
