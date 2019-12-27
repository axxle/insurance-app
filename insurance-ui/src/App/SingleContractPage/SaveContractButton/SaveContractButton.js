import React from 'react';

class SaveContractButton extends React.Component {
    render() {
        return (
            <button className="save-contract-button"
                    onClick={() => this.props.onClick()}>
                Сохранить
            </button>
        );
    }
}
export default SaveContractButton;
