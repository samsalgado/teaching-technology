import '../App.css';
import outline from "../outlines/coutline.PNG";
import Topbar from './topbar';
import Info2 from '../info/info2';
import Footer from '../footer';
import C from '../pics/c++.png'
import Offer3 from '../offers/offer3';
export function Cplusplus() {
    return(
        <div>
            <header>
            <Topbar />
            </header>
            <Offer3 />
            <Info2 />
            <br></br>
            <br></br>
            <img src={C} className="REACT" alt='' />
            
            <img src={outline} className="outline" alt="" />
            <footer>
                <Footer />
            </footer>
        </div>
    )

}

