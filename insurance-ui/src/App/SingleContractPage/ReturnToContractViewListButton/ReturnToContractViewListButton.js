import React from 'react';

class ReturnToContractViewListButton extends React.Component {
    render() {
        return (
            <button className="return-to-contract-view-list-button"
                    onClick={() => this.props.onClick()}>
                К списку договоров
            </button>
        );
    }
}

export default ReturnToContractViewListButton;
