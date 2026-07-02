const Order=require("../models/Order");
const createOrder=async(req,res)=>{

try{
const {
products,
totalAmount
}=req.body;

const order=await Order.create({
userId:req.user.id,
products,

totalAmount
});
res.json(order);
}catch(error){
res.status(500).json({
message:error.message
});
}
};

const getOrders=async(req,res)=>{

try{
const orders=await Order.find({
userId:req.user.id
})
.populate("products.productId");
res.json(orders);

}catch(error){
res.status(500).json({
message:error.message
});
}
};
module.exports={
createOrder,
getOrders
};