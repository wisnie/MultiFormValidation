import React from 'react';

const emailValidationRegEx = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

export default class EmailInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
    }

    handleChange = (event) => {
        this.setState({ value: event.target.value }, () => {
            this.props.handleStatusChange({
                Email: emailValidationRegEx.test(this.state.value)
            });
        });
    };

    render() {
        return (
            <label>
                Email
                <input onChange={this.handleChange} value={this.state.value} />
            </label>
        );
    }
}
