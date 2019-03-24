import { call, put, takeEvery } from 'redux-saga/effects';

import { api } from "../../api";
import { tasksActions } from "./actions";
import { customHistory } from "../../utils/history";

const sagaCreateTask = function* ({ payload }) {
    try {
        const task = yield call(api.post, payload);
        yield put({ type: tasksActions.createTaskSuccess, payload: task });
        customHistory.push("/");
    } catch (e) {
        yield put({ type: tasksActions.createTaskError });
    }
};

const sagaFetchTasks = function* () {
    yield put({ type: tasksActions.fetchTasksRequest });

    try {
        const tasks = yield call(api.read);
        yield put({ type: tasksActions.fetchTasksSuccess, payload: tasks });
    } catch (e) {
        yield put({ type: tasksActions.fetchTasksError });
    }
};

export const tasksSaga = function* () {
    yield takeEvery(tasksActions.createTask, sagaCreateTask);
    yield takeEvery(tasksActions.fetchTasks, sagaFetchTasks);
};
