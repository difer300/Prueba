import { connect } from 'react-redux';

import { actions as actionGame, selectors as selectorsGame } from '../store/game';
import Winner from '../components/Winner';

function mapStateToProps(state) {
  const game = selectorsGame(state);
  return {
    game: game.getActiveGame(),
    createGameStatus: game.getCreateGameStatus()
  };
}

export default connect(mapStateToProps, {
  clearState: actionGame.clear
})(Winner);
