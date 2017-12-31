import { take } from 'redux-saga/effects';

import {
    GET_MUSIC_LIST,
} from './actions';

export function* watchGetMusicList() {
    while(true){
        const action = yield take(GET_MUSIC_LIST);
        console.log('get action', action);
    }
    
}