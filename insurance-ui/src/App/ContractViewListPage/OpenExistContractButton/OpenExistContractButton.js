import React from 'react';

class OpenExistContractButton extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            insuranceAmount: 100
        };
    }

    render() {
        return (
            <button className="open-exist-contract-button"
                    onClick={ this.props.onClick } disabled={ this.props.selectedContractId === null ? true : false }>
                Открыть договор
            </button>
        );
    }
}

export default OpenExistContractButton;
