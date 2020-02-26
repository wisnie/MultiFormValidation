import React from 'react';
import IntroductionForm from './IntroductionForm';
import CompanyInformationForm from './CompanyInformationForm';
import PanelNavigation from './PanelNavigation';
import Confirmation from './Confirmation';

const NAV_ARRAY = ['Introduction', 'Company', 'Confirmation'];

export default class FormsPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = { activeForm: 0 };
    }

    handleFormChange = () => {
        this.setState({ activeForm: this.state.activeForm + 1 });
    };

    render() {
        const forms = [
            <IntroductionForm handleFormChange={this.handleFormChange} />,
            <CompanyInformationForm handleFormChange={this.handleFormChange} />,
            <Confirmation />
        ];
        return (
            <div>
                <PanelNavigation navArray={NAV_ARRAY} />
                {forms[this.state.activeForm]}
            </div>
        );
    }
}
