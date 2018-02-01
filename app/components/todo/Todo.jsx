import {observable} from 'mobx-react';

export default class Todo {
    id = Math.random();
    @observable title = "";
    @observable finished = false;
}