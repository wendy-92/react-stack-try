import { combineReducers } from 'redux';
import MusicList, * as MusicListActions from './MusicList';
import { watchGetMusicList } from './musicListSaga';

const music = combineReducers({
    MusicList,
});

export {
    MusicListActions,
};

export function* watchMusic(){
    yield [
        watchGetMusicList(),
    ]
}

export default music;