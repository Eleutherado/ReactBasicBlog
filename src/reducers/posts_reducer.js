import { FETCH_POSTS, VIEW_POST } from "../actions/index";
const INITIAL_STATE = { allPosts: [], post: null };

export default (state= INITIAL_STATE, action) => {
    switch(action.type){
        case FETCH_POSTS:
          return { ...state, allPosts: action.payload.data };
        case VIEW_POST:
          return { ...state, post: action.payload.data };

        default:
          return state;
    }
}
