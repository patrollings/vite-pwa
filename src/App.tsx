import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/favicon.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const notification = () => {
    if (Notification.permission === 'granted') {
      setTimeout(() => {
        new Notification('Meme', { body: 'more meme' });
      }, 3000);
    } else {
      Notification.requestPermission();
    }
  };

  const biometrics = () => {
    1;
  };

  return (
    <>
      <h1>hOrizON pLAnNIng</h1>
      <div className="card">
        <button onClick={notification}>Notification</button>
        <button onClick={biometrics}>Biometrics</button>
      </div>
    </>
  )
}

export default App
