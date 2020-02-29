import React from 'react';
import Input from './Input';

export default class IntroductionForm extends React.Component {
    state = {
        username: '',
        email: '',
        password: '',
        passwordConf: ''
    };

    checkEmailValidation = () => {
        const emailRegExValidation = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
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
            this.props.onChange('company');
        }
    };

    checkPasswordStrength = (password) => {
        const strongPasswordRegEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
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
                <p>{this.checkPasswordStrength(this.state.password)}</p>
                <button type="submit">Submit</button>
            </form>
        );
    }
}
