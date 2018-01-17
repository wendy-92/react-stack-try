import {
    getMusicList,
    getMusicListSuccess,
    getMusicListError,
  } from './actions';

import { get } from '../../../util/request';

export function incrementAsync() {
    return dispatch => {
        return get('www.baidu.com').then(function(response){
            console.log(response);
        })
    }
}