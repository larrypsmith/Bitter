import { combineReducers } from 'redux';
import entitiesReducer from './entities_reducer';
import sessionReducer from './session_reducer';
import errorsReducer from './errorsReducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  errors: errorsReducer,
  entities: entitiesReducer
})

export default rootReducer;

