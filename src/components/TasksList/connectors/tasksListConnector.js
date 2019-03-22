import { connect } from 'react-redux';

const mapStateToProps = state => {
    const items = Object.keys(state.tasks.items).map(id => state.tasks.items[id]);

    return { items };
};

const mapDispatchToProps = dispatch => ({

});

export const tasksListConnector = connect(mapStateToProps, mapDispatchToProps);
