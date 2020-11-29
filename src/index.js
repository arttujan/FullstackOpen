import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Display = ({counter}) => {
  return (
    <div>{counter}</div>
  )
}

const Button = ({handleClick, text}) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const App = (props) => {
  const [ counter, setCounter ] = useState(0)

  const plussaalaskuri = () => setCounter(counter + 1)
  const nollaalaskuri = () => setCounter(0)
  const miinustalaskuri = () => setCounter(counter - 1)

  return (
    <div>
      <Display counter={counter}/>
      <Button handleClick={plussaalaskuri} text='plussaa laskuriin'/>
      <Button handleClick={nollaalaskuri} text='nollaa laskuri'/>
      <Button handleClick={miinustalaskuri} text='miinusta laskurista'/>
  </div>
  )
}


ReactDOM.render(
  <App />, 
  document.getElementById('root')
)

