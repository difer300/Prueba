import { connect } from 'react-redux';

import { actions, selectors } from '../store/game';

import Register from '../components/Register';

function mapStateToProps(state) {
  const game = selectors(state);

  return {
    createGameStatus: game.getCreateGameStatus()
  };
}


export default connect(mapStateToProps, {
  createGame: actions.create
})(Register);
