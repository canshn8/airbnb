import React from 'react'
import "./dashboard.css";
import { useSelector } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import Sidebar from '../../../components/sidebar/Sidebar';

const Dashboard = () => {

  const user = useSelector((state) => state.user?.currentUser?.username);
  const admin = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user);
  console.log(admin)

  return (
    <div>
       <div className="container">
         <Sidebar/>
          <main>
            <h1>İstatiskler</h1>
            <div className="analyse">
              <div className="sales">
                <div className="status">
                  <div className="info">
                    <h3>Toplam Satıs</h3>
                    <h1>$65,024</h1>
                  </div>
                  <div className="progresss">
                    <svg>
                      <circle cx={38} cy={38} r={36} />
                    </svg>
                    <div className="percentage">
                      <p>+81%</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="visits">
                <div className="status">
                  <div className="info">
                    <h3>Site Ziyareti</h3>
                    <h1>24,981</h1>
                  </div>
                  <div className="progresss">
                    <svg>
                      <circle cx={38} cy={38} r={36} />
                    </svg>
                    <div className="percentage">
                      <p>-48%</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="searches">
                <div className="status">
                  <div className="info">
                    <h3>Aramalar</h3>
                    <h1>14,147</h1>
                  </div>
                  <div className="progresss">
                    <svg>
                      <circle cx={38} cy={38} r={36} />
                    </svg>
                    <div className="percentage">
                      <p>+21%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="new-users">
              <h2>Yeni Eklenenler</h2>
              <div className="user-list">
                <div className="user">
                  <img src="images/profile-2.jpg" />
                  <h2>dubai</h2>
                  <p>54 Min Ago</p>
                </div>
                <div className="user">
                  <img src="images/profile-3.jpg" />
                  <h2>Ankara</h2>
                  <p>3 Hours Ago</p>
                </div>
                <div className="user">
                  <img src="images/profile-4.jpg" />
                  <h2>İstanbul</h2>
                  <p>6 Hours Ago</p>
                </div>
                <div className="user">
                  <img src="images/plus.png" />
                  <h2>Fazlası</h2>
                </div>
              </div>
            </div>
            <div className="recent-orders">
              <h2>Ödeme</h2>
              <table>
                <thead>
                  <tr>
                    <th>Yer Adı</th>
                    <th>Yer</th>
                    <th>Ödeme</th>
                    <th>Durum</th>
                    <th />
                  </tr>
                </thead>
                <tbody />
              </table>
              <a href="#">Hepsini Göster</a>
            </div>
          </main>
          <div className="right-section">
            <div className="nav">
              <button id="menu-btn">
                <span className="material-icons-sharp">
                  menu
                </span>
              </button>
           
              <div className="profile">
                <div className="info">
                  {
                  user.isAdmin === true ?
                    <small className="text-muted">Hoşgeldin Admin {user}</small>
                    :
                    <p>Merhaba, <b>{user}</b></p>
                  }
                </div>
                <div className="profile-photo">
                  <img src="images/profile-1.jpg" />
                </div>
              </div>
            </div>
            <div className="user-profile">
              <div className="logo">
                <img src="images/logo.png" />
                <h1>Can</h1>
                <h2>Admin</h2>
                <p>Fullstack Web Developer</p>
                <p>M E R N</p>
                <a href="https://github.com/canshn8">github.com/canshn8</a>
              </div>
            </div>
            <div className="reminders">
              <div className="notification">
                <div className="icon">
                  <span className="material-icons-sharp">
                  </span>
                </div>
                <div className="content">
                  <div className="info">
                    <h3></h3>
                    <small className="text_muted">
                    </small>
                  </div>
                </div>
              </div>
              <div className="notification deactive">
                <div className="icon">
                  <span className="material-icons-sharp">
                  </span>
                </div>
                <div className="content">
                  <div className="info">
                    <h3></h3>
                    <small className="text_muted">
                    </small>
                  </div>
                </div>
              </div>
              <div className="notification add-reminder">
                <div>
                  <h3> Ekle</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}


export default Dashboard