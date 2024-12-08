const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const captionSchema = new mongoose.Schema({
    fullname:{
        firstname:{
            type:String,
            required:true,
            minlength:[6,"Firstname must be at least 3 character"]
        },
        lastname:{
            type:String,
            minlength:[6,"Lastname must be at least 3 charater"]
        }
    },
    email:{
        type:String,
        minlength:[4, "Email must be at least 4 character"],
        unique:true,
        required:true
    },
    password:{
        type:String,
        minlength:[6 , "Password must be at least 6 character"]
    },
    socketId:{
        type:String
    },
    status:{
        type:String,
        enum : ["active" , "inactive"],
        default: "inactive",
    },
    vehical:{
        color:{
            type:String,
            required:true,
            minlength:[3,"Color must be at least 3 character"]
        },
        plate:{
            type:String,
            required:true,
            minlength:[3,"Plate must be at least 3 character"]
        },
        capacity:{
            type:Number,
            required:true,
            min:[1,"Capacity must be at least 1"]
        },
        vehicalType:{
            type:String,
            required:true,
            enum:["car","motorcycle","auto"]
        },
        location:{
            lat:{
                type:Number
            },
            lng:{
                type:Number
            }
        }
    }
})


captionSchema.methods.genrateAuthToken = function(){
    const token = jwt.sign({ _id: this._id} , process.env.JWT_SECRET , {expiresIn: '24h'});
    return token;
}

captionSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password , this.password);
}

captionSchema.statics.hashPassword = async function(password){
    return await bcrypt.hash(password, 10);
}

const captionModel = mongoose.model("caption" , captionSchema);

module.exports = captionModel