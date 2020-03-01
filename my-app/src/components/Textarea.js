import React from 'react';
import PropTypes from 'prop-types';

export default function Textarea(props) {
    function handleChange(event) {
        props.onChange(props.name, event.target.value);
    }

    return (
        <label>
            <textarea
                className="textarea"
                onChange={handleChange}
                value={props.value}
                placeholder={props.placeholder}
            />
        </label>
    );
}

Textarea.propTypes = {
    name: PropTypes.string,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func
};
