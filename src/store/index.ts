import { createStore, combineReducers } from "redux"

import fruitReducer from "./modules/fruits/reducer"

const reducers = combineReducers({fruits: fruitReducer})

const store = createStore(reducers)

export default store;

