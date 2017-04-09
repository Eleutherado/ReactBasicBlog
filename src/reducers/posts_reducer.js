import { FETCH_POSTS } from "../actions/index";
const INITIAL_STATE = {};

export default (state= INITIAL_STATE, action) {
    switch(action.type){
        case FETCH_POSTS:

        default:
            return state;
    }
}
