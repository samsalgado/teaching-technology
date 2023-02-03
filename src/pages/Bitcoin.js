import '../App.css';
import Info1 from '../info/infobtc';
import outline from '../outlines/btcoutline.png';
import Topbar from './topbar';
import Offer1 from '../offers/offer1';
import B from '../pics/BTCPIC.png'
import Footer from '../footer';
export function Bitcoin() {

    return(
        <div>
            <header>
            <Topbar />
            </header>
            <Offer1 />
            <Info1 />
            <br></br>
            <img src={B} className="REACT" alt='' />
            <br></br>
            <br></br>
            <img src={outline} className="outline" alt="" />
            <footer>
                <Footer />
            </footer>
        </div>
    )
    }


