import {useState} from "react";
import API from "../services/api";
import "./Register.css";


function Register(){


const [name,setName] = useState("");

const [email,setEmail] = useState("");

const [password,setPassword] = useState("");



const handleRegister = async(e)=>{


e.preventDefault();



try{


const res = await API.post("/auth/register",{


name,

email,

password


});



console.log(res.data);



alert("Register Successful");



setName("");

setEmail("");

setPassword("");



}



catch(error){


console.log(error.response);



alert(

error.response?.data?.message ||

"Register Failed"

);


}


};




return(


<div className="registerPage">


<form onSubmit={handleRegister}>


<h1>

Create Account

</h1>




<input


type="text"

placeholder="Name"

value={name}

onChange={(e)=>setName(e.target.value)}


/>





<input


type="email"

placeholder="Email"

value={email}

onChange={(e)=>setEmail(e.target.value)}


/>





<input


type="password"

placeholder="Password"

value={password}

onChange={(e)=>setPassword(e.target.value)}


/>





<button type="submit">

Register

</button>




</form>



</div>


)

}



export default Register;