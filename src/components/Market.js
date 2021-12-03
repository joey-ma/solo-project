// presentation component that renders a single box for each market

import React from 'react';
import LabeledText from './LabeledText';

const Market = function ({
  index,
  location,
  cards,
  percentage,
  addCard,
  deleteCard,
}) {
  return (
    <div className="marketBox">
      <LabeledText label="Market ID" text={index} />
      <LabeledText label="Location" text={location} />
      <LabeledText label="Cards" text={cards} />
      <LabeledText label="% of total" text={percentage} />
      <div className="flex">
        <button className="addCard" onClick={addCard}>+</button>
        <button className="deleteCard" onClick={deleteCard}>-</button>
      </div>
    </div>
  );
};

export default Market;
