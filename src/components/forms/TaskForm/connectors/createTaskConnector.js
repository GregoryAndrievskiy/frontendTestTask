import { connect } from 'react-redux';
import { customHistory } from "../../../../history";

import { tasksActions } from '../../../../store/tasks/actions';

const mapStateToProps = state => ({});

const mapDispatchToProps = (dispatch) => ({
    onSubmit: (values) => {
        dispatch({
            type: tasksActions.createTask,
            payload: values
        });

        customHistory.push('/');
    }
});

export const createTaskConnector = connect(mapStateToProps, mapDispatchToProps);
