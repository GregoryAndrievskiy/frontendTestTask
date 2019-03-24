import * as React from "react";

import { Loader } from "../Loader/Loader";

import "./TasksList.css";

export class TasksList extends React.Component {
    constructor(props) {
        super(props);
        this.renderTask.bind(this);
    }

    componentDidMount() {
        this.props.onMount();
    }

    render() {
        if (!this.props.isLoading && this.props.items.length === 0) {
            return null;
        }

        return (
            <div>
                {
                    this.props.isLoading ?
                        <Loader /> :
                        this.props.items.map(this.renderTask)
                }
            </div>
        )
    }

    renderTask(item) {
        return (
            <div key={item.id} className="TaskList-Item">
                <div className="TaskList-Name">{item.name}</div>
                <div className="TaskList-Description">{item.description}</div>
            </div>
        );
    }
}