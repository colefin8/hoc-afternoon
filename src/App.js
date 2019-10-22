import React, { Component } from "react";
import ExchangedCurrency from "./Components/CurrencyConverter";

class App extends Component {
  render() {
    return (
      <>
        <h1>HOC</h1>
        <ExchangedCurrency />
      </>
    );
  }
}

export default App;
