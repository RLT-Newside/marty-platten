import logo from './assets/Logo.jpg'
import './App.css'

function App() {
  return(
    <>
    <div className="app-container">
      <header className="header">
        <img src={logo} alt="Logo" className="logo" />
      </header>
    </div>
    <div>
      <h1>Marty Plattenbeläge</h1>
    </div>
    <div>
      <img src={logo} alt='image'></img>
    </div>
    <div>
      <p>Telefon: 056 664 44 36</p>
      <p>Email: marty-platten@bluewin.ch</p>
      <p>Adresse: Obere Büelhalde 9, 5634 Merenschwand</p>
    </div>
    </>
  )

}

export default App
