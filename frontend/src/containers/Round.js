import { connect } from 'react-redux';

import { actions as actionGame, selectors as selectorsGame } from '../store/game';
import { actions as actionRule, selectors as selectorsRule } from '../store/rule';

import Round from '../components/Round';

function mapStateToProps(state) {
  const game = selectorsGame(state);
  const rule = selectorsRule(state);
  return {
    createGameStatus: game.getCreateGameStatus(),
    updateGameStatus: game.getUpdateGametatus(),
    game: game.getActiveGame(),
    rule: rule.getAllRules()
  };
}


export default connect(mapStateToProps, {
  updateGame: actionGame.update,
  fetchRule: actionRule.fetch,
  clearState: actionGame.clear
})(Round);
