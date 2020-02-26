import React from 'react';

const codeValidation = /[0-9]{16}/;

export default class CodeInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
    }

    handleChange = (event) => {
        this.setState({ value: event.target.value }, () => {
            this.props.handleStatusChange({
                CodeInput: codeValidation.test(this.state.value)
            });
        });
    };

    render() {
        return (
            <label>
                Confirmation Code (16 numbers)
                <input onChange={this.handleChange} value={this.state.value} />
            </label>
        );
    }
}
