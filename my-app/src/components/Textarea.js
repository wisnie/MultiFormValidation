import React from 'react';

export default class Textarea extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
    }

    handleChange = (event) => {
        this.setState({ value: event.target.value }, () => {
            this.props.handleStatusChange({ [this.props.name]: !!this.state.value });
        });
    };

    render() {
        return (
            <label>
                {this.props.name}
                <textarea onChange={this.handleChange} value={this.state.value} />
            </label>
        );
    }
}
