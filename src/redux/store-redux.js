import {combineReducers,createStore} from 'redux';

import {profileReducer} from './profile-reducer';
import {dialogReducer} from './dialog-reducer';
import {sidebarReducer} from './sidebar-reducer';
import { usersReducer } from './users-reducer';
import { authReducer } from './auth-reducer';


let redusers = combineReducers({
    sidebarDataPage: sidebarReducer,
    profileDataPage: profileReducer,
    dialogsDataPage: dialogReducer,
    usersDataPage: usersReducer,
    auth: authReducer
  });
  
export let store = createStore(redusers );