const jwt = require("jsonwebtoken");



const auth =async (req,res,next)=>{
    const token = req.cookies.jwt;
  await jwt.verify(token,"mynameissalimfromphgawaraandadityahelloworld");
next();
}


module.exports = auth