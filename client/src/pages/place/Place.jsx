import { addPlace, addFavorite } from "../../redux/cartRedux";
import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect, startTransition } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import styled from "styled-components";
import { publicRequest } from "../../requestMethods";
import { AiOutlinePlus } from "react-icons/ai";
import { CgRemove } from "react-icons/cg";
import Select from 'react-select'
import axios from "axios";
import './place.css'
import "react-date-range/dist/styles.css";
// import {format} from "timeago.js"
import "react-date-range/dist/theme/default.css";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import {
  faBed,
  faBedPulse,
  faBookDead,
  faBottleDroplet,
  faCalendar,
  faCalendarAlt,
  faCalendarCheck,
  faCalendarMinus,
  faLocationDot,
  faMattressPillow,
  faMedal,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



const Place = () => {

  const LoggedIn = useSelector((state) => state.user?.isLoggedIn);
  const [place, setPlace] = useState({});
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const dispatch = useDispatch();
  const navigate = useNavigate()


  useEffect(() => {
    const getPlace = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/places/find/" + id);
        setPlace(res.data);
      } catch { }
    };
    getPlace();
  }, [id]);


  const handleClick = () => {
    if (LoggedIn === true) {
      dispatch(addPlace({ ...place }));
    }
    else {
      alert("Lütfen Giriş Yapmayı Deneyin")
      navigate(`/place/${id}`)
    }
  }

  const handleFavorite = () => {
    if (LoggedIn === true) {
      dispatch(addFavorite({ ...place }));
    }
    else {
      alert("Lütfen Giriş Yapmayı Deneyin")
      navigate(`/place/${id}`)
    }
  }


  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);


  const options = [
    { value: 'child', label: 'Çocuk' },
    { value: 'adult', label: 'Yetişkin' },
    { value: 'pet', label: 'Hayvan' }
  ]



  return (
    <div className="Container">
      <Navbar />
      <div className="imgContainer">
        <img className="image" src={place.img} />
        <img className="image" src={place.img} />
        <img className="image" src={place.img} />
        <img className="image" src={place.img} />
      </div>
      <div className="deneme">
        <div className="infoContainer">
          <div className="infohead">
            <div className="infoTitle">
              <h1 id="" className="infoInItTitle">&nbsp;{place.title}&nbsp;</h1>
            </div>
            <div className="infoDescCont">
              <p className=" infoDesc">12 misafir 5 yatak odası 5 yatak 5 banyo</p>
            </div>
            {/* <div className="infoContEvul">
            <FontAwesomeIcon icon={faStar} className="placeIcon" />
            <p className="evul">1 değerlendirme</p>
          </div> */}
          </div>
          <div className="infoAvatar">
            <img src="https://i.ibb.co/5nZpRRK/man-in-suit.webp" className="avatar" />
            <p className="homeOwner">Ev Sahibi: <span className="homeOwnerName">{place?.creator?.username}</span></p>
            <p>{` "MM/dd/yyyy"`}</p>
          </div>
            <hr />

          <div className="infoReq">
            <ul className="inf">
              <li>
              <FontAwesomeIcon icon={faMedal} className="placeIcon" />
              </li>
              <li>
              <FontAwesomeIcon icon={faLocationDot} className="placeIcon" />
              </li>
              <li>
              <FontAwesomeIcon icon={faCalendar} className="placeIcon" />
              </li>
            </ul>
            <ul className="firsat">
              <li className="titleLi">Mehmet Faik Süper Ev Sahibi</li>
              <li>Süper Ev Sahipleri deneyimli, yüksek puanlı ev sahipleridir</li>
              <li className="titleLi">Mükemmel konum</li>
              <li>Yakın zamanda konaklayan misafirler bu konuma %90 oranında 5 yıldızlı puan verdi.</li>
              <li className="titleLi">Ücretsiz iptal için son tarih 25 Şubat
              </li>
            </ul>
          </div>
          <div className="infoAboutPlace">
            <p className="askAbtOfSlpBd" style={{fontSize:"25px"}}>Nerede Uyuyacaksınız?</p>
            <div className="boxInfo">
              <FontAwesomeIcon icon={faBed} className="faBed" />
              <FontAwesomeIcon icon={faBed} className="faBed" />
              <h2>Yatak Odası</h2>
              <p style={{fontSize:"17px"}}>1 çift kişilik yatak, 1 kanepe</p>
            </div>
          </div>
        </div>
        <div className="body">
          <div className="head">
            <div className="title">
              <span id="fiyat" className="span">&nbsp;<b>{`19.000₺`}&nbsp;</b></span>
            </div>
          </div>
          <div className="card" >
            <div className="placeSearchItem">
              <span
                onClick={() => setOpenDate(!openDate)}
                className="placeSearchText"
                id="start"
              >Giriş  {`${format(date[0].startDate, "MM/dd/yyyy")}`}
              </span>
              <span
                onClick={() => setOpenDate(!openDate)}
                className="placeSearchText"
                id="end"
              > Çıkış  {`${format(
                date[0].endDate,
                "MM/dd/yyyy"
              )}`}</span>

              {openDate && (
                <DateRange
                  editableDateInputs={true}
                  onChange={(item) => setDate([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={date}
                  className="date"
                  minDate={new Date()}
                />
              )}
            </div>
            <div
              className=""
              id="numberGuest"
            >
              <Select minMenuHeight={1100} options={options} className="selc" />
            </div>
          </div>
          <div className="footer">
            <button
              onClick={handleClick}
              className="button"
            >
              Rezerve Edin
            </button>
            <p className="ds">Henüz sizden tahsilat yapılmayacak</p>
            <p className="fiyatDs"><span className="leftS">49.999 ₺ x 5 gece</span>  <span className="rightS">249.995 ₺</span></p>
            <br />
            <hr />
            <br />
            <h3 className="total"><span className="leftS">Vergiler Hariç Toplam</span> <span className="rightS">249.995₺</span></h3>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Place;


