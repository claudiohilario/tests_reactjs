import { ADD_ARTICLE } from '../constants/action-types';


const initialState = {
  articles: [],
};

function rootReducer(state = initialState, action) {
  console.log('ACTION_TYPE: ', action.type);
  console.log('ACTION_PAYLOAD: ', action.payload);

  if (action.type === ADD_ARTICLE) {
    return { ...state, articles: state.articles.concat(action.payload) };
  }

  return state;
}

export default rootReducer;
