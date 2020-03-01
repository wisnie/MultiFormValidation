import React from 'react';
import Input from './Input';
import { getNextSection } from './utilities/getSection';
import { strongPasswordRegEx, emailRegExValidation } from './utilities/regEx';

export default class IntroductionForm extends React.Component {
    state = {
        username: '',
        email: '',
        password: '',
        passwordConf: ''
    };

    checkEmailValidation = () => {
        return emailRegExValidation.test(this.state.email);
    };

    checkPasswordValidation = () => {
        return this.state.password === this.state.passwordConf;
    };

    checkFormValidation = () => {
        return this.state.username && this.checkEmailValidation() && this.checkPasswordValidation();
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

    checkPasswordStrength = (password) => {
        if (password) {
            return strongPasswordRegEx.test(password) ? 'Password is strong' : 'Password is weak';
        }
        return null;
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="form">
                <Input
                    name="username"
                    value={this.state.username}
                    onChange={this.handleInputValueChange}
                />
                <Input
                    name="email"
                    value={this.state.email}
                    onChange={this.handleInputValueChange}
                />
                <Input
                    name="password"
                    value={this.state.password}
                    type="password"
                    onChange={this.handleInputValueChange}
                />
                <Input
                    name="passwordConf"
                    value={this.state.passwordConf}
                    type="password"
                    description="Password Confirmation"
                    onChange={this.handleInputValueChange}
                />
                <p className="paragraph">{this.checkPasswordStrength(this.state.password)}</p>
                <button type="submit" className="button">
                    Submit
                </button>
            </form>
        );
    }
}
