import React from 'react';
import IntroductionForm from './IntroductionForm';
import CompanyInformationForm from './CompanyInformationForm';
import PanelNavigation from './PanelNavigation';
import Confirmation from './Confirmation';

const NAV_ARRAY = ['Introduction', 'Company', 'Confirmation'];

export default class FormsPanel extends React.Component {
    state = {
        activeForm: 'introduction'
    };

    handleFormChange = (value) => {
        this.setState({ activeForm: value });
    };

    render() {
        return (
            <div className="form-panel">
                <PanelNavigation navArray={NAV_ARRAY} />
                {this.state.activeForm === 'introduction' && (
                    <IntroductionForm onChange={this.handleFormChange} />
                )}
                {this.state.activeForm === 'company' && (
                    <CompanyInformationForm onChange={this.handleFormChange} />
                )}
                {this.state.activeForm === 'confirmation' && <Confirmation />}
            </div>
        );
    }
}
