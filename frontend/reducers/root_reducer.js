import { combineReducers } from 'redux';
import { todos } from './todos_reducer';

export const RootReducer = combineReducers({
  todos
});
