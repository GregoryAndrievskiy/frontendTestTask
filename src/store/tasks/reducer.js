import shortid  from 'shortid';
import { tasksActions } from './actions';

const initialState = {
    items: {
       [shortid.generate().toString()]: {
            name: 'test task',
            description: 'start it whenever'
        },
        [shortid.generate().toString()]: {
            name: 'test task',
            description: 'start it whenever'
        }
    }
};

export const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
        case tasksActions.createTask:
            console.log('tasksActions action', action);
            return {
                ...state,
                items: {
                    ...state.items,
                    [shortid.generate().toString()]: {
                        ...action.payload
                    }
                }
            };
        default:
            return state;
    }
};
