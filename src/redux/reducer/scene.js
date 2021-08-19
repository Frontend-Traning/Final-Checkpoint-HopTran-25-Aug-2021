import { SET_ALLSCENES, SET_ACTIVE_SCENE } from "../actions/scene";

const initialState = {
  listScenes: [],
  activeId: null,
};
const sceneReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ALLSCENES: {
      return {
        ...state,
        listScenes: action.payload,
        activeId: action.payload[0]?.id,
      };
    }
    case SET_ACTIVE_SCENE: {
      const newActiveId = action.scene?.id;
      return { ...state, activeId: newActiveId };
    }
    default: {
      return state;
    }
  }
};

export default sceneReducer;
