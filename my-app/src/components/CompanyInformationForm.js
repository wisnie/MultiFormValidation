import React from 'react';
import Input from './Input';
import Textarea from './Textarea';

export default class CompanyInformationForm extends React.Component {
    state = {
        companyName: '',
        companyCode: '',
        about: ''
    };

    checkCompanyCodeValidation = () => {
        const companyCodeRegExValidation = /[0-9]{16}/;
        return companyCodeRegExValidation.test(this.state.companyCode);
    };

    checkFormValidation = () => {
        return this.state.companyName && this.state.about && this.checkCompanyCodeValidation();
    };

    handleInputValueChange = (key, value) => {
        this.setState({ [key]: value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.checkFormValidation()) {
            this.props.onChange('confirmation');
        }
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="form">
                <Input
                    name="companyName"
                    description="Company Name"
                    onChange={this.handleInputValueChange}
                />
                <Input
                    name="companyCode"
                    description="Company Code (16 numbers)"
                    onChange={this.handleInputValueChange}
                />
                <Textarea
                    name="about"
                    placeholder="What is your buisness about..."
                    onChange={this.handleInputValueChange}
                />
                <button type="submit">Submit</button>
            </form>
        );
    }
}
