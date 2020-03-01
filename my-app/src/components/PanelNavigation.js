import React from 'react';

export default function PanelNavigation(props) {
    return (
        <nav className="panel-nav">
            <ul className="panel-nav__list">
                {props.navArray.map((navItem, index) => (
                    <li className="panel-nav__item" key={index}>
                        {navItem}
                    </li>
                ))}
            </ul>
        </nav>
    );
}
