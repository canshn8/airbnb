import axios from "axios";
import { useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";
import "./login.css";
import { login } from "../../redux/apiCalls";

const Login = () => {
 
  const user = useSelector((state) => state.user?.currentUser?.username);
  console.log(user)

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = (e) => {
    login(dispatch, { username, password });
    if(user!=null){
      navigate("/");
    }
  };


  return (
    <div className="login">
      <div className="lContainer">
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
        <button 
          onClick={(e)=>handleClick()}
          className="lButton">
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
