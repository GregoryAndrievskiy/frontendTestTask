import * as React from 'react';
import { Link } from "react-router-dom";

class TabMenu extends React.Component {
    render() {
        return (
            <ul className="nav nav-pills nav-fill">
                <li className="nav-item">
                    <Link to="/add" className="nav-link">
                        Create new task
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/about" className="nav-link">
                        About app
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/" className="nav-link">
                        To main page
                    </Link>
                </li>
            </ul>
        );
    }
}

export default TabMenu;