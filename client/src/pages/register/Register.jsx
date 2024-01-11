import axios from "axios";
import { useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";
import "./register.css";
import { register } from "../../redux/apiCalls";

const Register = () => {

  const user = useSelector((state) => state.user?.currentUser?.username);

  console.log(user)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [passwordVerf, setPasswordVerf  ] = useState("")



  const handleClick = (e) => {
    register(dispatch, { email, username, password });
      if(user!=null){
        navigate("/signin");
      }
  };



  return (
    <div className="register">
      <div className="lContainer">
        <input
          type="text"
          placeholder="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="lInput"
        />
        <input
          type="text"
          placeholder="username"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="lInput"
        />
        <input
          type="password"
          placeholder="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="lInput"
        />
        <input
          type="password"
          placeholder="password Again"
          id="passwordVerf"
          value={passwordVerf}
          onChange={(e) => setPasswordVerf(e.target.value)}
          className="lInput"
        />
        <button 
          onClick={(e)=>handleClick()}
          className="lButton">
          Register
        </button>
      </div>
    </div>
  );
};

export default Register;
