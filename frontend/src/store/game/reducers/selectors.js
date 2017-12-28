export default function(globalState) {
    const state = globalState.game;
    const getActiveGame = () => state.activeGame;
    const getAllGame = () => state.game;
    const getFetchGameStatus = () => state.fetchGameStatus;
    const getCreateGameStatus = () => state.createGameStatus;
    const getUpdateGametatus = () => state.updateGametatus;
    return {
      getActiveGame,
      getCreateGameStatus,
      getUpdateGametatus,
      getAllGame,
      getFetchGameStatus
    };
  }
  