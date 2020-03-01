import React from 'react';
import PropTypes from 'prop-types';

export default class Input extends React.Component {
    static defaultProps = {
        type: 'text',
        description: ''
    };

    handleChange = (event) => {
        this.props.onChange(this.props.name, event.target.value);
    };

    render() {
        return (
            <label className="label">
                {this.props.description || this.props.name}
                <input
                    className="input"
                    type={this.props.type}
                    onChange={this.handleChange}
                    value={this.props.value}
                />
            </label>
        );
    }
}

Input.propTypes = {
    name: PropTypes.string,
    value: PropTypes.string,
    type: PropTypes.string,
    description: PropTypes.string,
    onChange: PropTypes.func
};
