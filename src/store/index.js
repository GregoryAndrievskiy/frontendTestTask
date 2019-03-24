import { combineReducers, createStore, applyMiddleware } from "redux";
import { reducer as formReducer } from "redux-form";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";

import { tasksReducer } from "./tasks/reducer";
import { tasksSaga } from "./tasks/saga";

const sagaMiddleware = createSagaMiddleware();
const middlewares = [
    sagaMiddleware
];

const reducers = combineReducers({
    form: formReducer,
    tasks: tasksReducer
});

const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(...middlewares))
);

const sagas = [
    tasksSaga()
];

const rootSaga = function* () {
    yield all(sagas);
};

sagaMiddleware.run(rootSaga);

export { store };
