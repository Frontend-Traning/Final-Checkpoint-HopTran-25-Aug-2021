import { SET_ALLSCENES, SET_ACTIVE_SCENE } from "../actions/scene";

const initialState = {
  listScenes: [],
  activeId: null,
  defaultLocation: [],
};
const sceneReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ALLSCENES: {
      return {
        ...state,
        listScenes: action.payload,
        activeId: action.payload[0]?.id,
        defaultLocation: action.payload[0]?.defaultLocation,
      };
    }
    case SET_ACTIVE_SCENE: {
      const newDefaultLocation = state.listScenes.find(
        (item) => item.id === action.id
      ).defaultLocation;
      return {
        ...state,
        activeId: action.id,
        defaultLocation: newDefaultLocation,
      };
    }
    default: {
      return state;
    }
  }
};

export default sceneReducer;
