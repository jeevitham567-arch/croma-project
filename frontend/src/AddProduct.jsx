import {useState} from "react";
import API from "../services/api";


function AddProduct(){

const [name,setName]=useState("");
const [price,setPrice]=useState("");
const [description,setDescription]=useState("");
const [image,setImage]=useState("");



const addProduct=async()=>{


try{

await API.post("/products",{

name,
price,
description,
image

});


alert("Product Added Successfully");


setName("");
setPrice("");
setDescription("");
setImage("");


}

catch(error){

console.log(error);
alert("Error adding product");

}


}



return(

<div style={{
padding:"30px",
margin:"20px",
border:"1px solid gray",
borderRadius:"10px"
}}>


<h2>
Add New Product
</h2>



<input
value={name}
placeholder="Product Name"
onChange={(e)=>setName(e.target.value)}
/>


<br/><br/>



<input
value={price}
placeholder="Product Price"
onChange={(e)=>setPrice(e.target.value)}
/>


<br/><br/>



<input
value={image}
placeholder="Product Image URL"
onChange={(e)=>setImage(e.target.value)}
/>


<br/><br/>



<textarea

value={description}

placeholder="Description"

onChange={(e)=>setDescription(e.target.value)}

></textarea>



<br/><br/>



<button onClick={addProduct}>

Add Product

</button>



</div>


)

}


export default AddProduct;