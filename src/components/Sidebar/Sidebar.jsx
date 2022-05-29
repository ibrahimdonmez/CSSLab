import React from 'react';
import { Link  } from 'react-router-dom'
import '../Sidebar/Sidebar.scss';

class Sidebar extends React.Component {

    render() {
        return (
            <div>
                <div className="Sidebar">
                    <div className="bg-dark border-right" id="sidebar-wrapper">
                        <div className="sidebar-heading">
                            <Link  className="navbar-brand sidebar-title" to="/Sidebar">
                                <span>CSSLab</span>  
                                <i className='bx bx-test-tube'></i>         
                            </Link>
                        </div>
                        <hr style={{color: 'white'}}/>
                        <div className="list-group list-group-flush">
                            <Link  className="list-group-item list-group-item-action" to="/BorderLab"> <i className='bx bx-test-tube icon'></i> BorderLab </Link>
                            <Link  className="list-group-item list-group-item-action" to="/BackgroundLab"> <i className='bx bx-test-tube icon'></i> BackgroundLab </Link>
                            {/* <Link className="list-group-item list-group-item-action bg-dark" activeClassName="active" to="/Admin/Yemekler"> Yemekler </Link> */}
                            {/* <Link className="list-group-item list-group-item-action bg-dark" activeClassName="active" to="/Admin/YemekEkle"> Yemek Ekle </Link> */}
                            {/* <Link className="list-group-item list-group-item-action bg-dark" activeClassName="active" to="/Admin/YemekMalzemesiEkle"> Yemek Malzemesi Ekle </Link> */}
                            {/* <Link className="list-group-item list-group-item-action bg-dark" activeClassName="active" to="/Admin/YemekMalzemeleri"> Yemek Malzemeleri </Link> */}
                            {/* <Link className="list-group-item list-group-item-action bg-dark" activeClassName="active" to="/Admin/Kullanicilar"> Kullanıcılar </Link> */}
                            {/* <Link className="list-group-item list-group-item-action bg-dark" activeClassName="active" to="/Admin/GeriBildirimler"> Geri Bildirimler </Link> */}
                            {/* <Link className="list-group-item list-group-item-action bg-dark" activeClassName="active" to="/Admin/iletisim"> İletişim </Link> */}
                            {/* <Link className="list-group-item list-group-item-action bg-dark" activeClassName="active" to="/Admin/hakkimizda"> Hakkımızda </Link> */}
                        </div>
                        <div className="sidebar-footer">
                            <hr style={{color: 'white'}}/>
                            <span>© Copyright İbrahim Dönmez</span>  
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Sidebar;
