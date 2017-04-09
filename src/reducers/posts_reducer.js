import { FETCH_POSTS } from "../actions/index";
const INITIAL_STATE = { allPosts: [], posts:null };

export default (state= INITIAL_STATE, action) => {
    switch(action.type){
        case FETCH_POSTS:
            return { ...state, allPosts: action.payload.data };
        default:
            return state;
    }
}
