import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as freezer} from './ducks/freezer';
import thunk from 'redux-thunk';
import logger from './middleware/logger';

const rootReducer = combineReducers({
  freezer,
  foo: (state = { hello: 'world' }, action) => state,
});

export default createStore(rootReducer, applyMiddleware(thunk, logger));
