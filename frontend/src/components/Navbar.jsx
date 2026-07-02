import { Link } from "react-router-dom";


function Navbar(){


let cart=[];


return(


<div className="navbar">



<div className="logo">

croma

</div>




<div className="menu">

☰ Menu

</div>




<input

className="search"

placeholder="What are you looking for?"

/>




<div className="location">

📍 Select Location

</div>





<div className="icons">



<Link to="/">

🏠 Home

</Link>




<Link to="/login">

👤 Login

</Link>





<Link to="/register">

Register

</Link>





<div>

🛒 Cart ({cart.length})

</div>




</div>




</div>


)

}


export default Navbar;