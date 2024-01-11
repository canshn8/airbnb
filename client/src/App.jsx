import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useSelector } from "react-redux";
import Home from "./pages/home/Home";
import Profile from "./pages/user/profile/Profile";
import Advert from "./pages/user/advert/Advert";
import Place from "./pages/place/Place";
import PlaceList from "./pages/placeList/PlaceList";
import Hotel from "./pages/hotel/Hotel";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import "./style.css";
const App = () => {

  const user = useSelector((state) => state.user?.currentUser?.username);
  const Logged = useSelector((state) => state.user?.isLoggedIn);
  console.log(user,Logged)

  return (
    <Router>
      <Routes>

        <Route
          path="/" 
          element={<Home />} 
        />
        <Route
          path="/signin" 
          // element={Logged ? <Home/> : <Navigate to={"/signin"}/>}
          element={<Login/>}
        />
        <Route
          path="/signup" 
          // element={Logged ? <Home/> : <Navigate to={"/signup"}/>}
          element={<Register/>}
        />
        <Route 
          path="/profile" 
          element={Logged ? <Profile/> : <Navigate to={"/signin"}/>}
        />
         <Route 
          path="/hotels" 
          element={Logged ? <Hotel/> : <Navigate to={"/signin"}/>}
        />
        <Route 
          path="/advert" 
          element={Logged ? <Advert/> : <Navigate to={"/signin"}/>}
        />
        <Route
          path="/places/:category" 
          element={Logged ? <PlaceList/> : <Navigate to={"/signin"}/>}
        />
        <Route
          path="/place/:id" 
          element={Logged ? <Place/> : <Navigate to={"/signin"}/>}
        />
        
      </Routes>
    </Router>
  )
};

export default App;