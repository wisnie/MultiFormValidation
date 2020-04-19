import React from 'react';
import Input from './Input';
import Textarea from './Textarea';
import { getNextSection } from './utilities/getSection';
import { companyCodeRegExValidation } from './utilities/regEx';

export default class CompanyInformationForm extends React.Component {
    state = {
        companyName: '',
        companyCode: '',
        about: ''
    };

    checkCompanyCodeValidation = () => {
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
            this.props.onChange(getNextSection(this.props.activeSection));
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
                <button type="submit" className="button">
                    Submit
                </button>
            </form>
        );
    }
}
