import * as React from "react";

import "./Loader.css";

export class Loader extends React.Component {
    render() {
        return (
            <div className="Loader">
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        )
    }
}