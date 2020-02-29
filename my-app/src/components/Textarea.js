import React from 'react';
import PropTypes from 'prop-types';

export default class Textarea extends React.Component {
    handleChange = (event) => {
        this.props.onChange(this.props.name, event.target.value);
    };

    render() {
        return (
            <label>
                <textarea
                    onChange={this.handleChange}
                    value={this.props.value}
                    placeholder={this.props.placeholder}
                />
            </label>
        );
    }
}

Textarea.propTypes = {
    name: PropTypes.string,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func
};
