import {  CiShoppingCart,CiSearch} from "react-icons/ci";
import {  GrFavorite} from "react-icons/gr";
import { Link } from "react-router-dom";
import "./place.css"
import styled from "styled-components";

const Place = ({ item }) => {
  return (
    <div className="place">
      <div className="placeItem">
        <img
          src={item.img}
          alt=""
          className="placeImg"
        />
        <Link to={`/place/${item._id}`}>
        <div className="placeTitles">
          <h1>{item.title}</h1>
          <h2>{item.desc}</h2>
        </div>
        </Link>
      </div>        
    </div>
  );
};

export default Place;