import React from 'react';
import Input from './Input';
import Textarea from './Textarea';
import CodeInput from './CodeInput';

export default class CompanyInformationForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { validationStatus: {} };
    }

    checkFormValidation = () => {
        const statusObject = this.state.validationStatus;

        if (Object.keys(statusObject).length !== 3) return false;

        for (const property in statusObject) {
            if (statusObject[property] === false) return false;
        }
        return true;
    };

    handleValidationStatusChange = (inputStatus) => {
        this.setState({ validationStatus: { ...this.state.validationStatus, ...inputStatus } });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.checkFormValidation()) {
            this.props.handleFormChange();
        }
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <Input name="Company Name" handleStatusChange={this.handleValidationStatusChange} />
                <CodeInput handleStatusChange={this.handleValidationStatusChange} />
                <Textarea
                    name="What is your buisness about"
                    handleStatusChange={this.handleValidationStatusChange}
                />
                <button type="submit">Submit</button>
            </form>
        );
    }
}
