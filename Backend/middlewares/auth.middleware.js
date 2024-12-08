const userModel = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const blacklistTokenModel = require("../models/blacklistToken.model");
const captionModel = require("../models/caption.model");

module.exports.authUser = async (req,res,next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
    if(!token){
        return res.status(401).json({message:"Unauthorized"})
    }

    const isBlacklisted = await userModel.findOne({token:token});

    if(isBlacklisted){
        return res.status(401).json({ message: "Unauthorized"});
    }

    try{
        const decoded = jwt.verify(token , process.env.JWT_SECRET)
        const user = await userModel.findById(decoded._id)

        req.user = user;

        return next();
    }
    catch(err){
        return res.status(401).json({message:"Unauthorized"});
    }
}

module.exports.authCaption = async (req,res,next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[ 1 ];

    if(!token){
        return res.status(401).json({ message: 'Unauthorized' });
    }

    const isBlacklisted = await blacklistTokenModel.findOne({token:token});


    if(isBlacklisted){
        return res.status(401).json({message:"Unauthorized"});
    }
    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const caption = await captionModel.findById(decoded._id);
        req.caption = caption;

        return next();
    }catch(err){
        console.log(err);

        res.status(401).json({message: "Unauthorized"});
    }
}