
import './index.js';
import './App.css';
import './index.css';
import React, {useState} from 'react'
 import Text from './Component/Text';
function App() {
 
  // state
  const [weight, setWeight] = useState(0)
  const [height, setHeight] = useState(0)
  const [bmi, setBmi] = useState('')
  const [message, setMessage] = useState('')
 
  let calcBmi = (event) => {
    //prevent submitting to the server
    event.preventDefault()
 
    if (weight === 0 || height === 0) {
      alert('Please enter a valid weight and height')
    } else {
      let bmi = (weight / (height * height) * 703)
      setBmi(bmi.toFixed(1))
 
      // Logic for message
 
      if (bmi < 18) {
        setMessage('You are underweight')
      } else if (bmi >= 18 && bmi < 25) {
        setMessage('You are a healthy weight')
      } else {
        setMessage('You are overweight')
      }
    }
  }
 
 
  let restart = () => {
    window.location.restart()
  }
 
  return (
    <div className="app">
      <Text/>
    <div className='container'>
      <h2 className='center'>BMI Calculator</h2>
      <form onSubmit={calcBmi}>
 
        <div>
          <label>Weight (lbs)</label>
          <input value={weight} onChange={(e) => setWeight(e.target.value)} />
        </div>
 
        <div>
          <label>Height (in)</label>
          <input value={height} onChange={(event) => setHeight(event.target.value)} />
        </div>
 
        <div>
          <button className='btn' type='submit'>Submit</button>
          <button className='btn btn-outline' onClick={restart} type='submit'>Restart</button>
        </div>
      </form>
 
      <div className='center'>
        <h3>Your BMI is: {bmi}</h3>
        <p>{message}</p>
      </div>
    </div>
  </div>
  );
}
 
export default App;