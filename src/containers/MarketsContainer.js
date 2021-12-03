import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/actions';
import MarketCreator from '../components/MarketCreator';
import MarketsDisplay from '../components/MarketsDisplay';

const mapStateToProps = ({ markets }) => ({
  newLocation: markets.newLocation,
  totalCards: markets.totalCards,
  marketList: markets.marketList,
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

const MarketsContainer = function (props) {
  return (
    <div className="innerbox">
      <span>
        <h4>Market Info</h4>
        <p>(This is the MarketsContainer.)</p>

      </span>
      <span>
        <MarketCreator
          newLocation={props.newLocation}
          updateLocation={props.updateLocation}
          addMarket={props.addMarket}
        />
        <MarketsDisplay
          totalCards={props.totalCards}
          marketList={props.marketList}
          addCard={props.addCard}
          deleteCard={props.deleteCard}
        />
      </span>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(MarketsContainer);
