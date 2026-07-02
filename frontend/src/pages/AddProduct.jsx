import {useState} from "react";
import API from "../services/api";


function AddProduct(){


const [name,setName] = useState("");
const [price,setPrice] = useState("");
const [description,setDescription] = useState("");
const [category,setCategory] = useState("");
const [image,setImage] = useState("");



const handleSubmit = async(e)=>{

e.preventDefault();


try{


const response = await API.post("/products",{

name,

price:Number(price),

description,

category,

image

});


console.log(response.data);


alert("Product Added Successfully");


setName("");
setPrice("");
setDescription("");
setCategory("");
setImage("");


}
catch(error){

console.log(error.response?.data);


alert(
error.response?.data?.message || error.message
);

}


}



return(


<div>


<h1>Add Product</h1>


<form onSubmit={handleSubmit}>


<input

type="text"

placeholder="Product Name"

value={name}

onChange={(e)=>setName(e.target.value)}

/>


<br/>


<input

type="number"

placeholder="Price"

value={price}

onChange={(e)=>setPrice(e.target.value)}

/>


<br/>


<input

type="text"

placeholder="Category"

value={category}

onChange={(e)=>setCategory(e.target.value)}

/>


<br/>


<textarea

placeholder="Description"

value={description}

onChange={(e)=>setDescription(e.target.value)}

>


</textarea>


<br/>


<input

type="text"

placeholder="Image URL"

value={image}

onChange={(e)=>setImage(e.target.value)}

/>


<br/>


<button type="submit">

Add Product

</button>


</form>


</div>


)

}


export default AddProduct;