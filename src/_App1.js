import React, { Component } from 'react'
import "./App.css"

export class App extends Component {
  render() {
    return (
      <div>
        <h1>Selamlar</h1>
        <Karsila  isim="Melik" yas="25" />
      </div>
    )
  }
}
class Karsila extends Component {
  constructor(props) {
    super(props);
    this.state = {
      durum:"İyi",
      deger:33
    }
  }
  degeriAzalt=()=>{
    this.setState(
      previousState=>({
        deger:previousState.deger-1,
        durum:previousState.durum="Kötü"
      })
      )
    }
    degeriArt=()=>{
      this.setState(
        previousState=>({
          deger:previousState.deger+1,
          durum:previousState.durum=="İyi"?"Kötü":"İyi"
        })
      )
    }
    degeriGuncelle=()=>{
      this.setState(
        previousState=>({
          durum:(previousState.deger+1)%2==0?"Çift":"Tek",
          deger:previousState.deger+1,
        })
      )
    }
  render() 
  {
    return (
      <div id="Karsila">
        <h2>Merhaba {this.props.isim} {this.props.yas}</h2>
        <p>Durumunuz {this.state.durum} </p>
        <h6>Değeriniz {this.state.deger}</h6>
        <button onClick={this.degeriGuncelle}>Güncelle</button>
        <button onClick={this.degeriAzalt}>Azalt</button>
        <button onClick={this.degeriArt}>Artır ve durumu güncelle</button>
      </div>
    
    )
  }
}

export default App