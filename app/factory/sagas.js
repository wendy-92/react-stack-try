import { watchMusic } from '../components/music/redux';
import watchAndLog from '../util/watchLog';

export default function* rootSaga(){
    yield [
        watchMusic(),
        watchAndLog(),
    ]
}