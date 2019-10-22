import React from "react";

const CurrencyDisplay = props => {
  const { cards, amount } = props;
  const mapped = cards.map(e => {
    return (
      <p key={e.name}>
        US Dollar ${amount.toFixed(2)} - {e.name} {e.symbol}
        {(amount * e.rate).toFixed(2)}
      </p>
    );
  });
  return <div>{mapped}</div>;
};

export default CurrencyDisplay;
