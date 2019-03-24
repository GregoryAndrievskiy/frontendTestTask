import * as React from "react";

import { TasksList } from "../../components/TasksList/TasksList";
import { tasksListConnector } from "../../components/TasksList/connectors/tasksListConnector";

const TasksListContainer = tasksListConnector(TasksList);

export class StartPage extends React.Component {
    render() {
        return (
            <div>
                <TasksListContainer />
            </div>
        )
    }
}
