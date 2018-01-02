import { connect } from 'react-redux';

import { actions as actionGame, selectors as selectorsGame } from '../store/game';
import Ranking from '../components/Ranking';

function mapStateToProps(state) {
  const game = selectorsGame(state);
  return {
    getAllGame: game.getAllGame()
  };
}

export default connect(mapStateToProps, {
  fetchGame: actionGame.fetch,
  clearState: actionGame.clear
})(Ranking);
