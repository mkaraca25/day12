import React, { Component } from "react";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      butonuGoster: false,
    };
  }
  guncelle = () => {
    this.setState((oncesi) => ({
      butonuGoster: !oncesi.butonuGoster,
    }));
  };
render() {
    const { butonuGoster } = this.state;

    if (butonuGoster == true) {
      return (
        <div className="App">
          <button onClick={this.guncelle}>Butonu Göster/Gizle</button>
          <button>BUTONUMUZ</button>
          <img width="500" src={require("./img.jpg")} />
        </div>
      );
    } else {
      return (
        <div className="App">
          <button onClick={this.guncelle}>Butonu Göster/Gizle</button>
        </div>
      );
    }
  }
}

export default App;