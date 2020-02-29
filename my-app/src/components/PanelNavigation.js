import React from 'react';

export default class PanelNavigation extends React.Component {
    render() {
        return (
            <nav className="panel-nav">
                <ul>
                    {this.props.navArray.map((navItem, index) => (
                        <li key={index}>{navItem}</li>
                    ))}
                </ul>
            </nav>
        );
    }
}
