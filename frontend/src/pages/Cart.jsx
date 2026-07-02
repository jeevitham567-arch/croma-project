import {useCart} from "../context/CartContext";


function Cart(){


const {
cart,
removeFromCart,
increaseQty,
decreaseQty

}=useCart();



const total = cart.reduce(

(sum,item)=>

sum + item.price * item.quantity

,0

);



return(


<div className="cartPage">


<h1>
My Cart
</h1>



{

cart.length === 0 ?


<h2>
Cart is Empty
</h2>



:


<>


{

cart.map((item)=>(


<div

className="cartItem"

key={item._id}

>


<img

src={item.image}

alt={item.name}

/>



<div>


<h2>
{item.name}
</h2>


<p>
₹ {item.price}
</p>



<button

onClick={()=>decreaseQty(item._id)}

>

-

</button>



<span>

 {item.quantity}

</span>



<button

onClick={()=>increaseQty(item._id)}

>

+

</button>



<br/>

<button

onClick={()=>removeFromCart(item._id)}

>

Remove

</button>


</div>



</div>


))


}



<h2>

Total : ₹ {total}

</h2>



<button className="checkout">

Checkout

</button>


</>


}



</div>


)

}


export default Cart;