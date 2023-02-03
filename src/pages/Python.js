import '../App.css';
import Info5 from '../info/info5';
import outline from '../outlines/pyoutline.png';
import Topbar from './topbar';
import Offer5 from '../offers/offer5';
import Footer from '../footer';
import PY from '../pics/py.png';
export function Python() {

    return(
        <div>
            <header>
            <Topbar />
            </header>
            
            <Offer5 />
            <br></br>
            <Info5 />

            <img src={PY} className="REACT" alt='' />
            <img src={outline} className="outline" alt="" />
            <footer>
                <Footer />
            </footer>
        </div>
    )
    }




