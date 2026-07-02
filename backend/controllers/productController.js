const Product = require("../models/Product");


// CREATE PRODUCT
exports.addProduct = async (req, res) => {

  try {

    console.log("BODY:", req.body);


    const { name, price, description, category, image } = req.body;


    if (!name || !price) {

      return res.status(400).json({

        message: "Name and Price are required"

      });

    }


    const product = await Product.create({

      name,
      price,
      description,
      category,
      image

    });


    res.status(201).json(product);


  } catch (err) {


    console.log("ADD ERROR:", err);


    res.status(500).json({

      message: err.message

    });


  }

};




// GET ALL PRODUCTS
exports.getProducts = async (req, res) => {


  try {


    const products = await Product.find();


    console.log("TOTAL PRODUCTS:", products.length);


    console.log(products);



    res.status(200).json(products);



  } catch (err) {


    console.log("GET ERROR:", err);


    res.status(500).json({

      message: err.message

    });


  }


};




// GET SINGLE PRODUCT
exports.getProduct = async (req, res) => {


  try {


    const product = await Product.findById(req.params.id);



    if (!product) {


      return res.status(404).json({

        message: "Product not found"

      });


    }



    res.json(product);



  } catch (err) {


    res.status(500).json({

      message: err.message

    });


  }


};




// UPDATE PRODUCT
exports.updateProduct = async (req, res) => {


  try {


    const product = await Product.findByIdAndUpdate(

      req.params.id,

      req.body,

      { new:true }

    );


    res.json(product);



  } catch(err) {


    res.status(500).json({

      message:err.message

    });


  }


};




// DELETE PRODUCT
exports.deleteProduct = async (req,res)=>{


  try{


    await Product.findByIdAndDelete(req.params.id);



    res.json({

      message:"Deleted successfully"

    });



  }catch(err){


    res.status(500).json({

      message:err.message

    });


  }


};