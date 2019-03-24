import * as React from "react";
import { reduxForm } from "redux-form";

import { TaskForm } from "../../components/forms/TaskForm/TaskForm";
import { createTaskConnector } from "../../components/forms/TaskForm/connectors/createTaskConnector";

const Form = reduxForm({
    form: "createTask",
    validate: values => {
        const errors = {};

        if (!values.name) {
            errors.name = "input task name!";
        }

        if (!values.description) {
            errors.description = "input task description!";
        }

        return errors;
    }
})(TaskForm);

const CreateTaskContainer = createTaskConnector(Form);

export class CreateTaskPage extends React.Component {
    render() {
        return (
            <div>
                <CreateTaskContainer />
            </div>
        )
    }
}
