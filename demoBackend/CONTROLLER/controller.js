//const pool = require("../CONNECTION/connection.js").connectionThread.thread()
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const ObjectId = require('mongodb').ObjectId;
const { MongoClient }=require("mongodb");
// 
const uri = "mongodb+srv://user:g535psI3udUuvH7r@cluster0.154jxih.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri);
let pool=client.db("ea")


module.exports.registerUser = async (req, res, next) => {
  let { username, email, password } = req.body;

  if (!username|| !email|| !password) {
    return res.status(400).send("Bad error field");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const userRegistration = await pool
    .collection("user")
    .insertOne({ username: username, email: email, password: hashedPassword });

  return res
    .status(200)
    .json({ name: username, message: "user successfully created" });
};
module.exports.loginUser = async (req, res, next) => {
    let {  email, password } = req.body;
  
    if (!email|| !password) {
      return res.status(400).send("Bad error field");
    }
  
    
  
    const userRegistration = await pool
      .collection("user")
      .findOne({email: email})

      if(userRegistration===null){
        return res.status(400).send("No such email id exist in database")
      }else{
        const userPassword=await bcrypt.compare(password,userRegistration.password)
        if(userPassword){
            var token = jwt.sign({ userId: userRegistration._id }, 'shhhhh');
           return res
      .status(200)
      .json({message:"User Logged In successfully",token:token});


        }else{
           return  res
            .status(400)
            .send("Password is incorrect");

        }
      }

  
    
  };
  module.exports.userProfile=async (req,res,next)=>{

    if(!req.headers.authorization){
      return res.status(400).send("Missing JWT token")
    }

    var token = jwt.verify(req.headers.authorization, 'shhhhh');

    const userRegistration= await pool
      .collection("user")
      .findOne({_id:new ObjectId(token.userId)})
      if(userRegistration===null){
       return  res.status(400).send("Invalid Token Id")
      }else{
       return  res.status(200).json({message:userRegistration})

      }

  }
