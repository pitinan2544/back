const userServices = require("../services/user-services");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken')
const db = require("../models/db")

exports.registerUser = async (req, res, next) => {
  const { username, password, Address, Phone, idCard } = req.body;
  try {
    if (!username) {
      return res.status(400).json({ message: "ชื่อผู้ใช้ไม่ถูกต้อง" });
    }
    const hashedPassword = await bcrypt.hash(password,10);
    await userServices.createUser(
       username,
       hashedPassword, 
       Address, 
       Phone, 
       idCard);
    res.json({ message: "สมัครเรียบร้อยแล้ว" });
  } catch (err) {
    next(err);
  }
};

exports.login = async (req,res,next) =>{
  const {username,password} = req.body
  try {
      //validation
  if(!(username.trim() && password.trim())){
    throw new Error('username or password must not blank')
  }

  // find username in db.user
  const user = await db.user.findFirstOrThrow({where : { username}})
  // check password
  const pwOk = await bcrypt.compare(password, user.password)
  if(!pwOk){
    throw new Error('invalid login')
  }
  // issue jwt token 
  const payload = {id : user.id}
  const token = jwt.sign(payload,process.env.JWT_SECRET,{
    expiresIn:'30d'
  })
  console.log(token)
 res.json({token : token})
  } catch (error) {
    next(error)
  }

};

exports.getme = (req,res,next) =>{
  res.json(req.user)
}