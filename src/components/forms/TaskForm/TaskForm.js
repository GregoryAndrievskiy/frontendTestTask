import * as React from "react";
import { Field } from "redux-form";

export class TaskForm extends React.Component {
    render() {
        const { handleSubmit } = this.props;
        const { valid } = this.props;

        return (
            <div className="card">
                <form onSubmit={handleSubmit} className="card-body">
                    <div>
                        <label className="grey-text font-weight-light" >Input task name:</label>
                        <Field name="name" component="input" type="text" className="form-control" />
                    </div>
                    <div>
                        <label className="grey-text font-weight-light" >Input task description:</label>
                        <Field name="description" component="input" type="textarea" className="form-control" />
                    </div>
                    <button type="submit" disabled={!valid} className="button mt-3">
                        Add new task
                    </button>
                </form>
            </div>
        );
    }
}
