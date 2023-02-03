import React from 'react'
import "../App.css"
import { CookiesProvider} from 'react-cookie'
import CustomizedDialogs from './dialog'
import BTC from './BTCpayment'
import btcpayment from '../pics/btc.png';
const Offer1 = () => {
  return (
    <div className='box'>
       <CookiesProvider>
        <div>
          <img src={btcpayment} className='go' />
        <h1>Bitcoin Tutorial</h1>
        </div>
        <CustomizedDialogs>
          <BTC />
        </CustomizedDialogs>
      </CookiesProvider>

    </div>
  )
}

export default Offer1
