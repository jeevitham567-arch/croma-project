import {useEffect, useState} from "react";
import API from "../services/api";
import AddProduct from "./AddProduct";


function AdminDashboard(){


const [products,setProducts] = useState([]);



useEffect(()=>{

getProducts();

},[]);



const getProducts = async()=>{

try{

const res = await API.get("/products");

setProducts(res.data);

}

catch(error){

console.log(error);

}

}




const deleteProduct = async(id)=>{


try{

await API.delete(`/products/${id}`);

getProducts();

}

catch(error){

console.log(error);

}

}




return(

<div className="adminPage">


<h1 className="adminTitle">
Admin Dashboard
</h1>



<div className="addProductBox">

<AddProduct/>

</div>



<h2 className="productHeading">
All Products
</h2>




<div className="adminProductGrid">


{

products.map((product)=>(


<div

className="adminProductCard"

key={product._id}

>


<img

src={product.image}

alt={product.name}

/>



<h3>
{product.name}
</h3>



<h4>
₹ {product.price}
</h4>



<p>
{product.category}
</p>



<p>
{product.description}
</p>



<button

onClick={()=>deleteProduct(product._id)}

>

Delete

</button>


</div>


))


}



</div>


</div>

)

}


export default AdminDashboard;