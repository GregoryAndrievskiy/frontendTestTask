import * as React from 'react';
import { Link } from "react-router-dom";

class TabMenu extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <Link to="/add">
                        Create new task
                    </Link>
                </div>
                <div>
                    <Link to="/about">
                        About app
                    </Link>
                </div>
                <div>
                    <Link to="/">
                        To main page
                    </Link>
                </div>
            </div>
        );
    }
}

export default TabMenu;