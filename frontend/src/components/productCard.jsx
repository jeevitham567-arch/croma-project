import {useCart} from "../context/CartContext";


function ProductCard({ product }) {


const {addToCart}=useCart();



return (

<div style={styles.card}>


<img

src={product.image}

alt={product.name}

style={styles.image}

/>



<h3 style={styles.name}>

{product.name}

</h3>



<p style={styles.category}>

{product.category}

</p>



<p style={styles.price}>

₹ {product.price}

</p>



<p style={styles.oldPrice}>

₹ {Number(product.price)+5000}

</p>



<p>

⭐⭐⭐⭐⭐

</p>



<p style={styles.description}>

{product.description}

</p>




<button

style={styles.btn}

onClick={()=>addToCart(product)}

>

Add to Cart

</button>



</div>

)

}



const styles={


card:{

width:"260px",

padding:"15px",

borderRadius:"15px",

border:"1px solid #ddd",

background:"white",

boxShadow:"0 2px 10px rgba(0,0,0,0.1)"

},


image:{

width:"100%",

height:"200px",

objectFit:"cover",

borderRadius:"10px"

},


name:{

fontSize:"20px",

margin:"10px 0"

},


category:{

color:"gray"

},


price:{

fontSize:"22px",

fontWeight:"bold"

},


oldPrice:{

textDecoration:"line-through",

color:"gray"

},


description:{

fontSize:"14px"

},


btn:{

background:"black",

color:"white",

border:"none",

padding:"12px 25px",

borderRadius:"8px",

cursor:"pointer",

marginTop:"10px"

}


}


export default ProductCard;