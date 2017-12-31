import makeActionCreator from '../../../factory/makeActionCreator';

export const GET_MUSIC_LIST = 'GET_MUSIC_LIST';
export const GET_MUSIC_LIST_SUCCESS = 'GET_MUSIC_LIST_SUCCESS';
export const GET_MUSIC_LIST_ERROR = 'GET_MUSIC_LIST_ERROR';

export const getMusicList = makeActionCreator(GET_MUSIC_LIST, 'para');
export const getMusicListSuccess = makeActionCreator(GET_MUSIC_LIST_SUCCESS, 'data');
export const getMusicListError = makeActionCreator(GET_MUSIC_LIST_ERROR, 'error');
