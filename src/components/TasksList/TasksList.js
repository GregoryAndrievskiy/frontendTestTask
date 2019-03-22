import * as React from 'react';
import shortid from "shortid";

export class TasksList extends React.Component {
    constructor(props) {
        super(props);
        this.renderTask.bind(this);
    }

    componentDidMount() {
        //this.props.onMount();
    }

    render() {
        if (!this.props.items) {
            return null;
        }

        return (
            <div className="">
                <div>Your events are: {this.props.items.map(this.renderTask)}</div>
            </div>
        )
    }

    renderTask(item) {
        return (
            <div key={shortid.generate().toString()}>
                <div>task name: {item.name}</div>
            </div>
        );
    }
}