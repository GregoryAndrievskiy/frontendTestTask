import shortid from "shortid";

import { timer } from "../utils/helpers";

const RESPONSE_TIME = 3000;

const tasks = [
    {
        name: "and another one test task",
        description: "start it whenever"
    },
    {
        name: "another test task",
        description: "start it whenever"
    }
];

const createTasks = array => {
    return array.reduce((acc, task) => {
        const id = shortid.generate().toString();

        acc[id] = {
            id,
            ...task
        };

        return acc;
    }, {});
};

const responseTasks = createTasks(tasks);

export const api = {
    post: async data => {
        return data;
    },
    read: async () => {
        await timer(RESPONSE_TIME);
        return responseTasks;
    }
};
