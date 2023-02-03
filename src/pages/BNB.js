import "../App.css";
import Info4 from "../info/info4";
import Topbar from "./topbar";
import Offer4 from "../offers/offer4";
import Footer from '../footer';
import outline from "../outlines/bnboutline.png"
import BSC from '../pics/bsc.png';
export function BNB() {
    return( 
    <div>
        <header>
            <Topbar />
        </header>
        <Offer4 />
        <Info4 />
        <br></br>
        <br></br>
        <img src={BSC} className="REACT" alt="" />
        <br></br>
        <br></br>
        <img src={outline} className="outline" alt="" />
        <footer>
            <Footer />
        </footer>
    </div>
    )
}

