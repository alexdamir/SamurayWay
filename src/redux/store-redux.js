import {combineReducers,createStore} from 'redux';

import {profileReducer} from './profile-reducer';
import {dialogReducer} from './dialog-reducer';
import {sidebarReducer} from './sidebar-reducer';


let redusers = combineReducers({
    sidebarDataPage: sidebarReducer,
    profileDataPage: profileReducer,
    dialogsDataPage: dialogReducer
  });
  
export let store = createStore(redusers );