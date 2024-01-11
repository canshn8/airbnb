import { useSelector } from "react-redux";
import "./navbar.css"
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/userRedux";


const Navbar = () => {

  const user = useSelector((state) => state.user?.currentUser?.username);

  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logout())
  }

  const handleClick = () => {}

  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo"><Link to={"/"}>can</Link></span>
        <div className="navItems">
        <>
          {
            user ?
            <div className="navItems">
              <Link to={'/'}>{user}</Link>
              <Link onClick={handleLogout} className="rightIcon" href="/">ÇIKIŞ</Link>
              <Link onClick={handleClick} className="rightIcon" to={`/profile`}>İlan Ekle</Link>
            </div>
            :
            <div className="navItems">
              <Link to={'/signup'}><button className="navButton">Kayıt</button></Link>
              <Link to={'/signin'}><button className="navButton">Giriş</button></Link>
            </div>
          }
        </>
        </div>
      </div>
    </div>
  )
}

export default Navbar