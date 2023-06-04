import './App.css';

function App() {
  const subPush = () => {
    navigator.serviceWorker.ready
      .then(reg => reg.pushManager.subscribe({ userVisibleOnly: true }))
      .then(sub => console.log('push sub success', sub))
      .catch(err => console.error('push sub failed', err));
  }

  const notification = () => {
    if (Notification.permission === 'granted') {
      "uh";
    } else {
      Notification.requestPermission();
      subPush();
    }
  };

  return (
    <>
      <h1>hOrizON pLAnNIng</h1>
      <div className="card">
        <button onClick={notification}>Notification</button>
      </div>
    </>
  )
}

export default App
