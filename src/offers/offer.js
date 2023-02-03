import React from 'react'
import "../App.css"
import {Cookies, CookiesProvider} from 'react-cookie'
import CustomizedDialogs from './dialog'
import BTC from './BTCpayment'
import gobtc from '../pics/gobtcpayment.png'

const Offer = () => {
  return (
    <div className='box'>
      <CookiesProvider>
        <div>
          <img src={gobtc} className="go"  />
          <h1>Golang Tutorial</h1>
          </div>
        <CustomizedDialogs>
          <BTC />
        </CustomizedDialogs>
      </CookiesProvider>
    </div>
  )
}

export default Offer
