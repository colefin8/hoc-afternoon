import React, { useState } from "react";
import CurrencyDisplay from "./CurrencyDisplay";

const withCurrency = BaseComponent => () => {
  const [currencyChosen, changeCurrencyChosen] = useState(false),
    [selectedCurrency, changeSelectedCurrency] = useState("Select Currency"),
    [amount, changeAmount] = useState(0),
    [cards, changeCards] = useState([]);

  const currencyData = [
    { name: "Japanese Yen", symbol: "¥", rate: 113.6, id: 0 },
    { name: "British Pound", symbol: "£", rate: 0.77, id: 1 },
    { name: "Canadian Dollar", symbol: "CAD", rate: 1.32, id: 2 },
    { name: "Mexican Peso", symbol: "Mex$", rate: 20.41, id: 3 },
    { name: "Swiss Franc", symbol: "Fr.", rate: 1.01, id: 4 }
  ];

  const mappedOptions = currencyData.map((e, i) => {
    return (
      <option key={i} value={i}>
        {e.name}
      </option>
    );
  });

  const handleAmountIncrease = () => {
    changeAmount(amount + 1);
  };

  const handleAmountDecrease = () => {
    if (amount === 0) {
      return;
    } else {
      changeAmount(amount - 1);
    }
  };

  const handleOptionSelect = e => {
    const value = e.target.value;
    changeSelectedCurrency(value);
    changeCurrencyChosen(value === "Select Currency" ? false : true);
    if (cards.findIndex(e => +e.id === +value) === -1)
      cards.push(currencyData[value]);
  };
  return (
    <>
      <select value={selectedCurrency} onChange={handleOptionSelect}>
        <option value={"Select Currency"}>Select Country</option>
        {mappedOptions}
      </select>
      {currencyChosen ? (
        <>
          {" "}
          <button onClick={() => handleAmountIncrease()}>+</button>
          <button onClick={() => handleAmountDecrease()}>-</button>{" "}
        </>
      ) : (
        <>
          <button>+</button>
          <button>-</button>
        </>
      )}
      {currencyChosen ? (
        <BaseComponent cards={cards} amount={amount} />
      ) : (
        <h2>Please Select Currency</h2>
      )}
    </>
  );
};

const ExchangedCurrency = withCurrency(CurrencyDisplay);

export default ExchangedCurrency;
