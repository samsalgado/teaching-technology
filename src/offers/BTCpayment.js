import React from 'react'
import AddtoCart from '../addtocart/addtocart';
import '../App.css';
const BTC = () => {
  return (
    <div className='description'>

    <p>
      Bitcoin Address:bc1q4r9xtp5dczqyvr077ksqj3lsctk9hx2r78
    </p>
    <p>
      Cashapp Tag:$btcForFemales
    </p>
    <div>
      <AddtoCart />
    </div>
    </div>
  )
}

export default BTC