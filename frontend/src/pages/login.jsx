import {useState} from "react";
import API from "../services/api";
import {useNavigate} from "react-router-dom";


function Login(){


const [email,setEmail] = useState("");

const [password,setPassword] = useState("");

const navigate = useNavigate();



const handleLogin = async(e)=>{


e.preventDefault();


try{


const res = await API.post("/auth/login",{

email,

password

});



localStorage.setItem(

"token",

res.data.token

);



localStorage.setItem(

"role",

res.data.role

);



alert("Login Successful");



if(res.data.role === "admin"){


navigate("/admin-dashboard");


}

else{


navigate("/user-dashboard");


}



}


catch(error){


console.log(error.response);


alert(

error.response?.data?.message ||

"Login Failed"

);


}


};



return(

<div className="loginPage">


<form onSubmit={handleLogin}>


<h1>
Login
</h1>


<input

type="email"

placeholder="Email"

onChange={(e)=>setEmail(e.target.value)}

/>



<input

type="password"

placeholder="Password"

onChange={(e)=>setPassword(e.target.value)}

/>



<button>

Login

</button>



</form>


</div>

)

}


export default Login;