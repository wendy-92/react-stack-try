import { combineReducers } from 'redux';
import MusicList, * as MusicListActions from './MusicList';


const music = combineReducers({
    MusicList,
});

export default music;

export {
    MusicListActions,
};

export {
    incrementAsync,
} from './musicAsyn';