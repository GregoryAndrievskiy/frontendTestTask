import { connect } from "react-redux";
import { tasksActions } from "../../../../store/tasks/actions";

const mapDispatchToProps = (dispatch) => ({
    onSubmit: (values) => {
        dispatch({
            type: tasksActions.createTask,
            payload: values
        });
    }
});

export const createTaskConnector = connect(() => ({}), mapDispatchToProps);
