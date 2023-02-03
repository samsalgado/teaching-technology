import '../App.css';
import Info1 from '../info/info1';
import outline from '../outlines/gooutline.png';
import Topbar from './topbar';
import Offer from '../offers/offer';
import GO from '../pics/go.png'
import Footer from '../footer';
export function Golang() {

    return(
        <div>
            <header>
            <Topbar />
            </header>
            <Offer />
            <Info1 />
            <br></br>
            <img src={GO} className="REACT" alt='' />
            <br></br>
            <br></br>
            <img src={outline} className="outline" alt="" />
            <footer>
                <Footer />
            </footer>
        </div>
    )
    }


