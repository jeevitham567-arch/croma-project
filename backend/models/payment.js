const mongoose = require("mongoose");
const paymentSchema = new mongoose.Schema({

    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },

    order:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Order",
        required:true
    },

    amount:{
        type:Number,
        required:true
    },

    paymentMethod:{
        type:String,
        enum:["UPI","CARD","COD","NETBANKING"],
        required:true
    },

    paymentStatus:{
        type:String,
        enum:["pending","success","failed"],
        default:"pending"
    },

    transactionId:{
        type:String
    }
},{timestamps:true});


module.exports = mongoose.model("Payment", paymentSchema);