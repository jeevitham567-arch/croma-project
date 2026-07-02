import {useEffect,useState} from "react";
import "./Hero.css";


function Hero(){


const banners=[

{
title:"Laptop Deals",
subtitle:"Can't Be Missed",
price:"Starting at ₹47,999*",
image:"https://images.unsplash.com/photo-1593642702821-c8da6771f0c6"
},


{
title:"Biggest Daily",
subtitle:"Price Drops",
price:"Amazing Offers",
image:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
},


{
title:"Smart TV Deals",
subtitle:"Entertainment Zone",
price:"Starting at ₹29,999*",
image:"https://images.unsplash.com/photo-1593359677879-a4bb92f829d1"
},


{
title:"Latest Mobiles",
subtitle:"Best Smartphones",
price:"Starting at ₹9,999*",
image:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
}

];



const [index,setIndex]=useState(0);



useEffect(()=>{


const timer=setInterval(()=>{


setIndex((prev)=>

(prev+1)%banners.length

);


},3000);



return()=>clearInterval(timer);


},[]);



return(


<div className="hero">



<div className="heroContent">


<h1>

{banners[index].title}

<br/>

{banners[index].subtitle}

</h1>


<p>

{banners[index].price}

</p>


<button>

Shop Now

</button>


</div>




<div className="heroImage">


<img

src={banners[index].image}

alt="banner"

/>


</div>



</div>


)

}


export default Hero;