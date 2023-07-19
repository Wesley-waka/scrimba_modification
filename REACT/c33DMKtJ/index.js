import React, { useState, useRef, forwardRef } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  let focusRef = useRef(null)

  return (
    <section>
      <h2>Email Signup</h2>
      <input type="text" value={name} placeholder="Name" onChange={(e) => {
        setName(e.target.value)
        if (name.length >= 10) {
          focusRef.current.focus()
        }
      }} />
      <input type="text" value={email} placeholder="Email" onChange={(e) => {
        setEmail(e.target.value)
      }} />
      <FancyButton ref={focusRef}>Submit</FancyButton>
    </section>
  )
}

const FancyButton = forwardRef((props, ref) => {
  return <button ref={ref}>{props.children}</button>
})

ReactDOM.render(<App />, document.getElementById('root'));
