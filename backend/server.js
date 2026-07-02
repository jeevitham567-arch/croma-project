const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");


dotenv.config({
    path: path.join(__dirname, ".env")
});


const connectDB = require("./config/db");


const productRoutes = require("./routes/productRoutes");
const authRoutes = require("./routes/authRoutes");
const cartRoutes = require("./routes/cartRoutes");
const orderRoutes = require("./routes/orderRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const paymentRoutes = require("./routes/paymentRoutes");


const app = express();

app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}));

app.use(express.json());


connectDB()
.then(()=>{

    console.log("MongoDB Connected");

})
.catch((err)=>{

    console.log("DB Error:",err);

    process.exit(1);

});



app.get("/",(req,res)=>{

    res.send("Server running");

});



app.use("/api/auth", authRoutes);

app.use("/api/products", productRoutes);

app.use("/api/cart", cartRoutes);

app.use("/api/orders", orderRoutes);

app.use("/api/category", categoryRoutes);

app.use("/api/payment", paymentRoutes);



app.use((req,res)=>{

    res.status(404).json({

        message:"Route not found"

    });

});


const PORT = process.env.PORT || 5000;


app.listen(PORT,()=>{

    console.log(`Server running on port ${PORT}`);

});