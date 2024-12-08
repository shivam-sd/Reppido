const captionModel = require("../models/caption.model");

module.exports.createCaption = async ({
    firstname , lastname , email , password,
    color , plate , capacity , vehicalType
}) => {
    if(!firstname  || !email || !password || !color || !plate || !capacity || !vehicalType){
        throw new Error("All the fields are required");
    }
    const caption = captionModel.create({
        fullname:{
            firstname,
            lastname
        },
        email,
        password,
        vehical:{
            color,
            plate,
            capacity,
            vehicalType
        }
    })
    return caption
}