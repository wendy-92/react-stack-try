import {
    GET_MUSIC_LIST,
    GET_MUSIC_LIST_SUCCESS,
    GET_MUSIC_LIST_ERROR,
} from './actions';

const initialState = {
    data: [],
    loading: false,
    error: false,
}

export default function musicList(state = initialState, action){
    switch(action.type){
        case GET_MUSIC_LIST:
            return Object.assign({}, state, {
                loading: true,
            });
        case GET_MUSIC_LIST_SUCCESS:
            return Object.assign({}, state, {
                data: action.data,
            });
        case GET_MUSIC_LIST_ERROR:
            return Object.assign({}, state, {
                error: true,
            });
        default: return state;
    }
}

export {
    getMusicList,
} from './actions';

export {
    incrementAsync,
} from './musicAsyn';