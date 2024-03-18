const RecordList = require('../models/db')
const RecordService = require("../services/recordlist-services"); // แก้ชื่อให้ถูกต้อง

exports.createRecord = async (req, res, next) => {
  const { userId, memberId, date, loan, deposit } = req.body;
  try {
      // ตรวจสอบว่ามีข้อมูล userId ที่ส่งมาหรือไม่
      if (!userId) {
          return res.status(400).json({ message: "ชื่อผู้ใช้ไม่ถูกต้อง" });
      }
      
      // เรียกใช้งาน createRecord จาก RecordService โดยไม่ต้องระบุ RecordService
      await RecordService.createRecord(
          userId, 
          memberId, 
          date,
          loan, 
          deposit
      );

      // ส่งคำตอบกลับไปยังผู้ใช้งาน
      res.json({ message: "สมัครเรียบร้อยแล้ว" });
  } catch (err) {
      // ถ้าเกิดข้อผิดพลาดในขณะทำงาน ส่งไปยัง middleware ถัดไป
      next(err);
  }
};

exports.getRecord = async (req, res, next) => {
  try {
    const recordAll = await RecordService.getRecord();
    res.json(recordAll);
  } catch (err) {
    next(err);
  }
};

exports.updateRecord = async (req, res, next) => {
  const recordId = parseInt(req.params.recordId);
  const updaterecord = req.body;
  try {
      await RecordServic.updateRecord(recordId, updaterecord);
      res.json({ message: "Update order Success" });
  } catch (err) {
      next(err);
  }
};

exports.deleteRecord = async (req, res, next) => {
  const recordId = parseInt(req.params.recordId);
  try {
      await RecordService.deleteRecord(recordId);
      res.json({ message: "Delete order Success" });
  } catch (err) {
      next(err);
  }
}

exports.getRecordById = async (req, res, next) => {
  try {
    const recordAll = await RecordService.getRecordById();
    res.json(recordAll);
  } catch (err) {
    next(err);
  }
};
