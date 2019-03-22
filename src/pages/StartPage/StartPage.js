import * as React from 'react';

import TabMenu from '../../components/TabMenu/TabMenu';

import { TasksList } from '../../components/TasksList/TasksList';
import { tasksListConnector } from '../../components/TasksList/connectors/tasksListConnector';

const TasksListContainer = tasksListConnector(TasksList);

export class StartPage extends React.Component {
    render() {
        return (
            <div>
                YOU ARE AT START PAGE NOW!!!!! XXXTENTACTIONXXX
                <TabMenu />

                <TasksListContainer />
            </div>
        )
    }
}
