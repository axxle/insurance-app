import React from 'react';
import CalcForm from "./CalcForm/CalcForm";
import ClientForm from "./ClientForm/ClientForm";
import RealtyLocationForm from "./RealtyLocationForm/RealtyLocationForm";
import SaveContractButton from "./SaveContractButton/SaveContractButton";
import ReturnToContractViewListButton from "./ReturnToContractViewListButton/ReturnToContractViewListButton";
import axios from "axios";

class SingleContractPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedContractId: null
        };
    }

    componentDidMount() {
        let url = "http://localhost:8080/insurance/contract";
        if (this.props.selectedContractId === null) {
            url += "/prefill";
        } else {
            url += "/" + this.props.selectedContractId;
        }
        axios.get(url)
            .then(res => {
                const insuranceContract = res.data;
                this.setState({insuranceContract});
            })
    }

    render() {
        return (
            <div className="single-contract-page">
                <div>
                    <CalcForm />
                    <div className="single-contract-page">
                        <label htmlFor="contractId">№ договора</label>
                        <input type = "text" id = "contractId" name = "contractId" />
                        <label htmlFor="contractDate" required>Дата заключения</label>
                        <input type="date" id="contractDate" name="contractDate" readOnly />
                    </div>
                    <ClientForm />
                    <RealtyLocationForm />
                    <SaveContractButton onClick={() => this.props.onClickSaveContractButton()}/>
                    <ReturnToContractViewListButton onClick={() => this.props.onClickReturnToContractViewListButton()}/>
                </div>
            </div>
        );
    }
}

export default SingleContractPage;
