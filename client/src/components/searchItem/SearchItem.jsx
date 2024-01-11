import "./searchItem.css";

const SearchItem = () => {
  return (
    <div className="searchItem">
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">APartman</h1>
        <span className="siDistance">Merkezden 500m uzakta </span>
        <span className="siTaxiOp">Ücretsiz Uçuş Taksisi</span>
        <span className="siSubtitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam tempore nisi vero, odit aliquid necessitatibus enim vel rem veniam illo labore, officia ab corporis minus cupiditate placeat? Quis, explicabo maxime?
        </span>
        <span className="siFeatures">
          Salonlu • 1 Banyo • 21m² 1 Full Ytaklı
        </span>
        <span className="siCancelOp">Ücretsiz İptal Etme Hakkı  </span>
        <span className="siCancelOpSubtitle">
          Daha Sonra İptal Edebilirsiniz O yuzden Sımdı Bu Fıyatta Rezerve Edin
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Harika </span>
          <button>8.9</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">$112</span>
          <span className="siTaxOp">Vergi ve harçlar dahildir</span>
          <button className="siCheckButton">Müsaitliği görün</button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
