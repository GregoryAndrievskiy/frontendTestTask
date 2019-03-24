import { connect } from "react-redux";
import { tasksActions } from "../../../store/tasks/actions";


const mapStateToProps = state => {
    const items = Object.keys(state.tasks.items).map(id => state.tasks.items[id]);
    const isLoading = state.tasks.status === "LOADING";

    return { items, isLoading };
};

const mapDispatchToProps = dispatch => ({
    onMount: () => {
        dispatch({
            type: tasksActions.fetchTasks
        });
    }
});

export const tasksListConnector = connect(mapStateToProps, mapDispatchToProps);
