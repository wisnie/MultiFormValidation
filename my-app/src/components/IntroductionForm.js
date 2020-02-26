import React from 'react';
import Input from './Input';
import PasswordValidation from './PasswordValidation';
import EmailInput from './EmailInput';

export default class IntroductionForm extends React.Component {
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
                <Input name="Username" handleStatusChange={this.handleValidationStatusChange} />
                <EmailInput handleStatusChange={this.handleValidationStatusChange} />
                <PasswordValidation handleStatusChange={this.handleValidationStatusChange} />
                <button type="submit">Submit</button>
            </form>
        );
    }
}
