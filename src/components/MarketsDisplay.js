import React from 'react';
import Market from './Market';

// presentation component that renders in Market components

const percentOfTotal = (cardCount, total) => (
  cardCount ? ((cardCount / total) * 100).toFixed(2) : 0);

const marketMaker = (market, idx, props) => (
  <Market
    {...market}
    key={idx}
    percentage={percentOfTotal(market.cards, props.totalCards)}
    index={idx}
    addCard={() => props.addCard(idx)}
    deleteCard={() => props.deleteCard(idx)}
  />
);

const MarketsDisplay = function (props) {
  return (
    <div className="displayBox">
      <h4>Markets</h4>
      <div className="allMarkets">
        {props.marketList.map((market, idx) => marketMaker(market, idx, props))}
      </div>
    </div>
  );
};

export default MarketsDisplay;
