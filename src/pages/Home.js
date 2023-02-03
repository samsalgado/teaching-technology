import '../App.css';
import Topbar from './topbar';
import Info from '../info/info';
import Footer from '../footer';
export function Home() {
    return (
        <>
        <header>
        <Topbar />
        </header>
            <Info />
       <br></br>
       
        <footer>
            <Footer />
        </footer>
    </>
    )
}
