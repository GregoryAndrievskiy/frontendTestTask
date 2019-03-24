import shortid  from "shortid";
import { tasksActions } from "./actions";

const initialState = { status: "OK", items: {} };

export const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
        case tasksActions.createTaskSuccess:
            const id = shortid.generate().toString();

            return {
                ...state,
                items: {
                    ...state.items,
                    [id]: {
                        id,
                        ...action.payload
                    }
                }
            };
        case tasksActions.fetchTasksRequest:
            return {
                ...state,
                status: "LOADING"
            };
        case tasksActions.fetchTasksSuccess:
            return {
                ...state,
                status: "OK",
                items: {
                    ...state.items,
                    ...action.payload
                }
            };
        default:
            return state;
    }
};
