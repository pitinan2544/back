const prisma = require("../models/db");

exports.createRecord = async (userId, memberId, date, loan, deposit) => {
  try {
      return await prisma.recordList.create({
          data: {
              userId: parseInt(userId), // แปลงเป็น integer
              memberId: parseInt(memberId), // แปลงเป็น integer
              date,
              loan,
              deposit
          }
      });
  } catch (error) {
      throw new Error(`Failed to create user: ${error.message}`);
  }
};

// get Record
exports.getRecord = async () => {
    try {
      const allRecords = await prisma.recordList.findMany();
      return allRecords;
    } catch (err) {
      throw err;
    }
  };
  
  // Update Record
  exports.updateRecord = async (RecordId, updatedRecord) => {
    try {
      await prisma.Record.update({
        where: { id: RecordId },
        data: updatedRecord,
      });
    } catch (err) {
      throw err;
    }
  };
  
  // Delete Record
  exports.deleteRecord = async (RecordId) => {
    try {
      await prisma.recordList.delete({
        where: { id: RecordId },
      });
    } catch (err) {
      throw err;
    }
  };