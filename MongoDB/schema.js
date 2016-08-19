var dbObj = require("./db.js");

var User = dbObj.mongoose.Schema({
    id: Number,
    fname: String,
    lname: String,
    usnm: String,
    email: String,
    pswd: String
});

var Post=dbObj.mongoose.Schema({
    p_id:Number,
    p_title:String,
    p_desc:String,
    usnm:String,
    url:String,
    likes:Number,
    comments:this.Comments
});
    
var Comments=dbObj.mongoose.Schema({
    usnm:String,
    msg:String,
    time:new Date(),
    likes:Number
});

module.exports.usertable=dbObj.db.model("UserTable",User);
module.exports.userposts=dbObj.db.model("Posts",Post);