import * as React from 'react';
import { reduxForm } from 'redux-form';

import { TaskForm } from '../../components/forms/TaskForm/TaskForm';
import { createTaskConnector } from '../../components/forms/TaskForm/connectors/createTaskConnector';

const Form = reduxForm({
    form: 'createTask',
    validate: values => {
        const errorObj = {};

        if (!values.name) {
            errorObj.name = 'input task name!';
        }

        if (!values.description) {
            errorObj.description = 'input task description!';
        }

        return errorObj;
    }
})(TaskForm);

const CreateTaskContainer = createTaskConnector(Form);

export class CreateTaskPage extends React.Component {
    render() {
        return (
            <div className="CreateTask">
                CREATE NEW TASK NOW!!!!! XXXTENTACTIONXXX
                <CreateTaskContainer id="id0" />
            </div>
        )
    }
}