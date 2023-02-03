import '../App.css';
import outline from "../outlines/react-outline.png";
import Topbar from './topbar';
import Offer2 from '../offers/offer2';
import Info3 from '../info/info3';
import Footer from '../footer';
import REACT from "../pics/REACT.png";
export function JavaScript() {
    return(
        <div>
            <header>
            <Topbar />
            </header>
            <Offer2 />
            <Info3 />
            <br></br>
            <img src={REACT} className="REACT" alt='' />
            <br></br>
            <br></br>
            <img src={outline} className="outline" alt="" />
            <footer>
                <Footer />
            </footer>
        </div>
    )

}

