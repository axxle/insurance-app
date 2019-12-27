import React from 'react';

class CreateNewContractButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            insuranceAmount: 100
        };
        //this.onClick = this.props.fOnClick;
    }
    render() {
        return (
            <button className="create-new-contract-button"
                    onClick={ this.props.fOnClick }>
                Создать договор
            </button>
        );
    }
}
export default CreateNewContractButton;
