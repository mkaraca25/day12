import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Bugün 30 Ağustos Zafer Bayramı </h1>
      <Karsila isim="Melik" yas="25"/>
    </div>
  );
}
const Karsila=(props)=>{
  return(
    <h2>Merhaba {props.isim} {props.yas}</h2>
  )
}

export default App;
