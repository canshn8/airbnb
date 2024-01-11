import { useNavigate } from "react-router-dom";
import "./mailList.css"
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear,  } from "@fortawesome/free-solid-svg-icons";

const MailList = () => {

  const user = useSelector((state) => state.user?.currentUser?.username);

  const navigate = useNavigate()

  const handleClick = () => {
    if(user !== null){
      alert(`Size Popüler Teklifler Göndericez ${user}`)
    }if(user === null){
      navigate("/signin")
    }
  }

  return (
    <div className="mail">

      <h1 className="mailTitle">Zamanı Koru Paranı Koru!</h1>
      <span className="mailDesc">Giriş Yap Sana Uygun Fırsatları Gonderlim</span>
      {
        user ? 
        <div className="mailInputContainer">
          <input type="text" placeholder={`${user}`} />
          <button onClick={handleClick}>Gönder</button>
        </div>
        :
        <div className="mailInputContainer">
          <input type="text" placeholder={`Hemen Teklif Almaya Başlayın`} />
          <button onClick={handleClick}>Gönder</button>
        </div>
      }
    </div>
  )
}

export default MailList