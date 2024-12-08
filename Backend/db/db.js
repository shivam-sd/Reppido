const mongoose = require("mongoose");

function connectToDB() {
  mongoose.connect(
    process.env.DB_CONNECT).then(() => {
        console.log("Connect To DB");
    }).catch(error => console.log(error));
}



module.exports = connectToDB;