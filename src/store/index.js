import { combineReducers, createStore } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { composeWithDevTools } from "redux-devtools-extension";
import { tasksReducer } from "./tasks/reducer";

const reducers = combineReducers({
    form: formReducer,
    tasks: tasksReducer
});

const store = createStore(
    reducers,
    composeWithDevTools()
);

export { store };
