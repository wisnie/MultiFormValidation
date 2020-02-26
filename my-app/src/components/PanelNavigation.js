import React from 'react';

export default class PanelNavigation extends React.Component {
    render() {
        return (
            <nav>
                <ul>
                    {this.props.navArray.map((navItem) => (
                        <li key={navItem}>{navItem}</li>
                    ))}
                </ul>
            </nav>
        );
    }
}
