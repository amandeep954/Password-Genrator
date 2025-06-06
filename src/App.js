import { useState } from 'react';
import './App.css';
import { LC, NC, SC, UC } from './data/PassChar';

function App() {
  let [uppercase, setuppercase] = useState(false)
  let [lowercase, setlowercase] = useState(false)
  let [number, setnumber] = useState(false)
  let [symbols, setsymbols] = useState(false)
  let [passwordlen,setpasswordlen] = useState(10)
  let [fpass,setfpass] = useState('')

  let createPassword = () => {
    let charSet = ''
    let finalPass=''
    if (uppercase || lowercase || number || symbols) {
      if (uppercase) charSet += UC;
      if (lowercase) charSet += LC;
      if (number) charSet += NC;
      if (symbols) charSet += SC;
       for(let i=0; i < passwordlen; i++){
         finalPass+=charSet.charAt( Math.floor(Math.random()*charSet.length))
       }
       setfpass(finalPass)
    }
    else {
      alert('Please one CheckBox!...')
    }
  }
  let copyPass=()=>{
    navigator.clipboard.writeText(fpass)
  }

  return (
    <>
      <div className='passwordBox'>
        <h3>Password Genrator</h3>

        <div className='passwordBoxIn'>
          <input  type='text' readOnly value={fpass}/> <button onClick={copyPass}>Copy</button>
        </div>
        <div className='passLength'>
          <label>Password length</label>
          <input value={passwordlen} type='number' onChange={(event)=>setpasswordlen(event.target.value)} max={20} min={10} />
        </div>
        <div className='passLength'>
          <label>Include uppercase letters</label>
          <input type='checkbox' checked={uppercase} onClick={() => setuppercase(!uppercase)} />
        </div>
        <div className='passLength'>
          <label>Include lowercase letters</label>
          <input type='checkbox' checked={lowercase} onClick={() => setlowercase(!lowercase)} />
        </div>
        <div className='passLength'>
          <label >Include number</label>
          <input checked={number} onClick={() => setnumber(!number)} type='checkbox' />
        </div>
        <div className='passLength'>
          <label >Include symbols</label>
          <input checked={symbols} onClick={() => setsymbols(!symbols)} type='checkbox' />
        </div>
        <button onClick={createPassword} className='btn'>Generate password </button>
      </div>
    </>
  );
}

export default App;
