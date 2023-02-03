import { Routes} from 'react-router';
import './App.css';
import { Route } from 'react-router';
import { Home } from './pages/Home';
import {Cplusplus} from './pages/C++';
import {Bitcoin} from './pages/Bitcoin';
import { JavaScript } from './pages/JavaScript';
import {Golang} from './pages/Golang';
import {NotFound} from './pages/NotFound';
import { Python } from './pages/Python';
import {BNB} from './pages/BNB';
function App() {
  return( 

  <Routes>
    <Route exact path="/" element={<Home />} />
    <Route path="/404" element={<NotFound />} />
    <Route path="/go" element={<Golang />}/>
    <Route path="/c++" element={<Cplusplus />}/>
    <Route path="/js" element={<JavaScript />}/>
    <Route path="/py" element={<Python />}/>
    <Route path="/btc" element={<Bitcoin />}/>
    <Route path="/bnb" element={<BNB />} />

  </Routes>
    
  )
}

export default App;
