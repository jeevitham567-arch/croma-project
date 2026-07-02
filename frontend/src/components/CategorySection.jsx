function CategorySection(){

const categories = [
{
name:"Mobiles",
icon:"📱"
},
{
name:"Laptops",
icon:"💻"
},
{
name:"TV",
icon:"📺"
},
{
name:"Audio",
icon:"🎧"
},
{
name:"Appliances",
icon:"🧊"
}
];


return(

<div className="categorySection">


<h1>
Shop By Category
</h1>


<div className="categories">


{
categories.map((item,index)=>(


<div 
className="categoryCard"
key={index}
>


<h2>
{item.icon}
</h2>


<p>
{item.name}
</p>


</div>


))
}



</div>


</div>

)

}


export default CategorySection;