import { combineReducers } from 'redux';
import router from './router_reducer';
import user from './user_reducer';

export default combineReducers({
    router,
    user
});