import React, { useState } from 'react'
import axios from 'axios'

function Currency() {
    const[currency, setCurrency] = useState('')
    const[number, setNumber] =useState(1)
   
    const urlwon = `https://api.freecurrencyapi.com/v1/latest?apikey=${import.meta.env.VITE_APP_CURRENCY_KEY}&base_currency=EUR&currencies=KRW`;
    const urleur = `https://api.freecurrencyapi.com/v1/latest?apikey=${import.meta.env.VITE_APP_CURRENCY_KEY}&base_currency=KRW&currencies=EUR`;

    const getWon = () => {
        axios.get(urlwon).then((response) => {
            setCurrency(response.data);
        })
        
    }

    const getEur = () => {
        axios.get(urleur).then((response) => {
            setCurrency(response.data);
        })
    }


  return (
    <div>
        <div className='header'>        
            <h1>Currency Converter EURO to KOREAN WON</h1>
        </div>
        <div className='converter'>
            <input type='text' placeholder='Your Money' onChange={(e) => setNumber(e.target.value)} />
            <button onClick={getWon}>WON</button>
            <button onClick={getEur}>EURO</button>
        </div>
        <div className='display--converter'>
            {currency ? <div>{(number *(Object.values(currency.data)[0])).toFixed(2)}</div> : null}
            {/* {won.data ? <h2>{won.data.KRW}</h2> : null } */}
        </div>
    </div>
  )
}

export default Currency