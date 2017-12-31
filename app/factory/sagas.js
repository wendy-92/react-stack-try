import { watchMusic } from '../components/music/redux';

export default function* rootSaga(){
    yield [
        watchMusic(),
    ]
}