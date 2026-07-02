const Cart = require("../models/Cart");

const addToCart = async (req, res) => {

    try {

        console.log("REQUEST BODY:", req.body);
        console.log("USER:", req.user);


        const { productId, quantity } = req.body;


        if (!productId) {

            return res.status(400).json({

                message: "ProductId is required"

            });

        }


        let cart = await Cart.findOne({

            userId: req.user.id

        });


        if (!cart) {


            cart = await Cart.create({

                userId: req.user.id,

                products: [

                    {

                        productId: productId,

                        quantity: quantity || 1

                    }

                ]

            });


        } 
        
        else {


            const existingProduct = cart.products.find(

                item => item.productId.toString() === productId

            );


            if (existingProduct) {


                existingProduct.quantity = 
                existingProduct.quantity + (quantity || 1);


            } 
            
            else {


                cart.products.push({

                    productId: productId,

                    quantity: quantity || 1

                });


            }


            await cart.save();


        }


        res.status(201).json({

            message:"Product added to cart",

            cart

        });



    } catch(error) {


        res.status(500).json({

            message:error.message

        });


    }

};

const getCart = async(req,res)=>{


    try{


        const cart = await Cart.findOne({

            userId:req.user.id

        })
        .populate("products.productId");



        if(!cart){

            return res.status(404).json({

                message:"Cart empty"

            });

        }


        res.json(cart);



    }catch(error){


        res.status(500).json({

            message:error.message

        });


    }


};




module.exports = {

    addToCart,

    getCart

};