export default function(globalState) {
    const state = globalState.rule;
    const getAllRules = () => state.rule;
    return {
        getAllRules
    };
  }
  