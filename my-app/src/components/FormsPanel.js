import React from 'react';
import IntroductionForm from './IntroductionForm';
import CompanyInformationForm from './CompanyInformationForm';
import PanelNavigation from './PanelNavigation';
import Confirmation from './Confirmation';
import { getFirstSection, getSectionsArray } from './utilities/getSection';

export default class FormsPanel extends React.Component {
    state = {
        activeSection: getFirstSection()
    };

    handleFormChange = (value) => {
        this.setState({ activeSection: value });
    };

    render() {
        const { activeSection } = this.state;
        return (
            <div className="form-panel">
                <PanelNavigation navArray={getSectionsArray()} />
                {activeSection === 'introduction' && (
                    <IntroductionForm
                        onChange={this.handleFormChange}
                        activeSection={this.state.activeSection}
                    />
                )}
                {activeSection === 'company' && (
                    <CompanyInformationForm
                        onChange={this.handleFormChange}
                        activeSection={this.state.activeSection}
                    />
                )}
                {activeSection === 'confirmation' && <Confirmation />}
            </div>
        );
    }
}
