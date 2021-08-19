export const SET_ACTIVE_SCENE = "SET_ACTIVE_SCENE";
export const SET_ALLSCENES = "SET_ALLSCENES";

export const setAllScenes = (scenes) => {
  return {
    type: SET_ALLSCENES,
    payload: scenes,
  };
};
export const setActiveScence = (scene) => {
  return {
    type: SET_ACTIVE_SCENE,
    scene,
  };
};
