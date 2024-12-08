const captionModel = require("../models/caption.model");
const blacklistTokenModel = require("../models/blacklistToken.model")
const captionSevice = require("../services/caption.service");
const {validationResult} = require("express-validator");

module.exports.registerCaption = async(req,res,next) => {
    const error = validationResult(req);
    if(!error.isEmpty()){
       return res.status(400).json({error:error.array()});
    }

    const {fullname , email , password , vehical} = req.body;

    const captionAllreadyExist = await captionModel.findOne({email});

    if(captionAllreadyExist){
       return res.status(400).json({message:"caption all ready exist"});
    }

    const hashedPassword = await captionModel.hashPassword(password);

    const caption = await captionSevice.createCaption({
        firstname:fullname.firstname,
        lastname:fullname.lastname,
        email,
        password:hashedPassword,
        color:vehical.color,
        plate:vehical.plate,
        capacity:vehical.capacity,
        vehicalType:vehical.vehicalType
    });

    const token = caption.genrateAuthToken();
    res.status(201).json({token , caption});
}


module.exports.loginCaption = async (req,res,next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }

    const {email, password} = req.body;

    const caption = await captionModel.findOne({email}).select('+password');

    if(!caption){
        return res.status(401).json({message: "invalid email or password"});
    }

    const isMetch = await caption.comparePassword(password);
    
    if(!isMetch){
        return res.status(401).json({message:"invalid email or password"});
    }

    const token = caption.genrateAuthToken();

    res.cookie("token" , token);

    res.status(200).json({token , caption});
}


module.exports.getCaptionProfile = async (req,res,next) => {
    res.status(200).json({caption: req.caption});
}

module.exports.logoutCaption = async (req,res,next) =>{
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];

    await blacklistTokenModel.create({token});

    res.clearCookie('token');

    res.status(200).json({message:"Logout Successfully"});
}