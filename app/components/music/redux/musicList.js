import {
    GET_MUSIC_LIST,
    GET_MUSIC_LIST_SUCCESS,
    GET_MUSIC_LIST_ERROR,
} from './actions';

const initialState = {
    loading: false,
    data: [],
    error: false,
}

function MusicList(state = initialState, action){
    switch(action.type){
        case GET_MUSIC_LIST:
            return Object.assign(state, {
                loading: true,
            });
        case GET_MUSIC_LIST_SUCCESS:
            return Object.assign(state, {
                data: action.data,
            });
        default:
            return state;
    }
}

export default MusicList;

export {
    getMusicList,
} from './actions';
