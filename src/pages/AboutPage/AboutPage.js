import * as React from 'react';
import TabMenu from '../../components/TabMenu/TabMenu';

export class AboutPage extends React.Component {
    render() {
        return (
            <div>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                Something 'bout this app etc
                <TabMenu />
            </div>
        )
    }
}
