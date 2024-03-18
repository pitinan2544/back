const Member = require("../services/member-service");

exports.createMember = async (req, res, next) => {
    const { memberName, address, phone, birthday, idCard, loan, deposit } = req.body;
    try {
        if (!memberName) {
            return res.status(400).json({ message: "ชื่อผู้ใช้ไม่ถูกต้อง" });
        }

        await Member.createMemberInService(
            memberName,
            address,
            phone,
            birthday,
            idCard,
            loan,
            deposit
        );
        res.json({ message: "สมัครเรียบร้อยแล้ว" });
    } catch (err) {
        next(err);
    }
};

exports.getMember = async (req, res, next) => {
    try {
      const allMember = await Member.getMember();
      res.json(allMember);
    } catch (err) {
      next(err);
    }
};

exports.updateMember = async (req, res, next) => {
    const memberId = parseInt(req.params.memberId);
    const updatedMember = req.body;
    try {
        await Member.updateMemberById(memberId, updatedMember);
        res.json({ message: "Update Member Success" });
    } catch (err) {
        next(err);
    }
  };

exports.deleteMember = async (req, res, next) => {
    const memberId = parseInt(req.params.memberId);
    try {
        await Member.deleteMember(memberId);
        res.json({ message: "Delete Member Success" });
    } catch (err) {
        next(err);
    }
  };

  exports.getMemberById = async (req, res, next) => {
    const memberId = parseInt(req.params.memberId); // ดึง memberId จาก params
    try {
      const MemberById = await Member.getMemberById(memberId); // ส่ง memberId ไปยัง getMemberById
      res.json(MemberById);
    } catch (err) {
      next(err);
    }
};
