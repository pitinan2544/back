const prisma = require("../models/db")

exports.createMemberInService = async (memberName, address, phone, birthday, idCard, loan, deposit) => {
    try {
        return await prisma.member.create({
            data: {
                memberName,
                address,
                phone,
                birthday,
                idCard,
                loan,
                deposit
            }
        });
    } catch (error) {
        throw new Error(`Failed to create user: ${error.message}`);
    }
};

exports.getMember = async () => {
    try {
      const allMember = await prisma.member.findMany();
      return allMember;
    } catch (err) {
      throw err;
    }
};

exports.updateMemberById = async (memberId, updatedMember) => {
  try {
    await prisma.member.update({
      where: { id: memberId },
      data: {
        memberName: updatedMember.memberName,
        address: updatedMember.address,
        phone: updatedMember.phone,
        birthday: updatedMember.birthday,
        idCard: updatedMember.idCard,
        loan : updatedMember.loan,
        deposit : updatedMember.deposit 
      },
    });
  } catch (err) {
    console.error('Update error:', err);
    throw err;
  }
};


exports.deleteMember = async (memberId) => {
    try {
      await prisma.member.delete({
        where: { id: memberId },
      });
    } catch (err) {
      throw err;
    }
  };

  exports.getMemberById = async (memberId) => {
    try {
      const member = await prisma.member.findFirst({
        where: {
          id: memberId
        }
      });
      return member;
    } catch (err) {
      throw err;
    }
};
