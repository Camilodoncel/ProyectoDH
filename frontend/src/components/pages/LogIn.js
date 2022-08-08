import React , {useState} from "react";
import { useNavigate, Link } from "react-router-dom";
import Register from "./Register";



const LogIn= ({ userInfo }) => {
const [logIn, setLogIn] = useState({ email: "", password: "" });
const navigate = useNavigate();

 
  return (
    <form>
      <input placeholder="Email" type="email" 
      onChange={(e) => setLogIn({...LogIn, email: e.target.value})}/>

      <input placeholder="Password" type="password"
       onChange={(e) => setLogIn({...LogIn, password: e.target.value})}/>
      

      <button onClick label ="submit"> Ingresar </button>

      <span>Aun no Tienes Cuenta? <a onClick={() => navigate("/register")}> Registrar</a> </span>
    
    </form>
  );
};

export default LogIn;