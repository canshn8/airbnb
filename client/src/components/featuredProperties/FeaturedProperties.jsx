import "./featuredProperties.css";

const FeaturedProperties = () => {
  return (
    <div className="fp">
      <div className="fpItem">
         <img
          src={""}
          alt=""
          className="fpImg"
        />
        <span className="fpName">Aparthotel Stare Miasto</span>
        <span className="fpCity">Madrid</span>
        <span className="fpPrice">Başlayan Fiyatlarla 120</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;
