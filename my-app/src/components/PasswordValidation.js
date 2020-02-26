import React from 'react';

const strongPasswordRegEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const mediumPasswordRegEx = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

function checkPasswordStrength(password) {
    if (!password) return null;
    if (strongPasswordRegEx.test(password)) return 'Password is strong';
    if (mediumPasswordRegEx.test(password)) return 'Password is medium';
    return 'Password is weak';
}

export default class PasswordValidation extends React.Component {
    constructor(props) {
        super(props);
        this.state = { password: '', confirmationPassword: '' };
    }

    handleChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;

        this.setState(
            {
                [name]: value
            },
            () => {
                this.props.handleStatusChange({
                    Password: this.state.password === this.state.confirmationPassword
                });
            }
        );
    };

    render() {
        return (
            <>
                <label>
                    Password
                    <input
                        onChange={this.handleChange}
                        value={this.state.password}
                        name="password"
                        type="password"
                    />
                </label>
                <p>{checkPasswordStrength(this.state.password)}</p>
                <label>
                    Password Confirmation
                    <input
                        onChange={this.handleChange}
                        value={this.state.confirmationPassword}
                        name="confirmationPassword"
                        type="password"
                    />
                </label>
            </>
        );
    }
}
