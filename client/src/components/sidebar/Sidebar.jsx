import "./sidebar.css"
import { MdLineStyle } from "react-icons/md";
import { CgComment, CgTranscript } from "react-icons/cg";
import { AiOutlineUser, AiTwotoneShop, AiOutlineUserAdd, AiOutlineFolderAdd } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Sidebar() {
    return (
            <div className="container">
            <aside>
                <div className="toggle">
                    <div className="logo">
                        <img src="images/logo.png" />
                        <h2>CAN<span className="danger">BNB</span></h2>
                    </div>
                    <div className="close" id="close-btn">
                        <span className="material-icons-sharp">
                            close
                        </span>
                    </div>
                </div>
                <div className="sidebar">
                    <a href="#">
                        <span className="message-count"></span>
                    </a>
                    <a href="#">
                        <h3>Favoriler</h3>
                    </a>
                    <a href="#">
                        <h3>Soru ve Talepler</h3>
                    </a>
                    <a href="#">
                        <h3>ÖzelFırsatlar</h3>
                    </a>
                    <a href="#">
                        <h3>İşlemler Merkezi</h3>
                    </a>
                    <a href="#">
                        <h3>Rapor</h3>
                    </a>
                    <a href="#">
                        <h3>Bilgilerim</h3>
                    </a>
                    <Link to={"/advert"}>
                        <h3>İlanlarım</h3>
                    </Link>
                    <a href="#">
                        <h3>Çıkış</h3>
                    </a>
                </div>
            </aside>
        </div>

    
  )
}