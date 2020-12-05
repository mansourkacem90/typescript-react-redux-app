import { combineReducers } from '@reduxjs/toolkit';
import clicksReducer from '.';

const clicks = { count: clicksReducer };
export let rootReducer: any = combineReducers({ ...clicks });

export default function createReducer(injectedReducers = {}) {
  rootReducer = combineReducers({ ...clicks, ...injectedReducers });
  return rootReducer;
}

export type RootState = ReturnType<typeof rootReducer>;
