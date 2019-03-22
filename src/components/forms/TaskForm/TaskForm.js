import * as React from 'react';
import { Field } from 'redux-form';

export class TaskForm extends React.Component {
    componentDidMount() {
        console.log('this edit props componentDidMount', this.props);
    }
    render() {
        const { handleSubmit } = this.props;
        const { valid } = this.props;
        console.log('Create event form this.props', this.props);

        return (
            <div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <h3>Input task name:</h3>
                        <Field name='name' component='input' type='text' />
                    </div>
                    <div>
                        <h3>Input task description:</h3>
                        <Field name='description' component='input' type='textarea' />
                    </div>
                    <button type='submit' disabled={!valid}>
                        Register
                    </button>
                </form>
            </div>
        );
    }
}
