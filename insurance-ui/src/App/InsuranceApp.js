import React from 'react';
import SingleContractPage from "./SingleContractPage/SingleContractPage";
import CreateNewContractButton from "./ContractViewListPage/CreateNewContractButton/CreateNewContractButton";
import OpenExistContractButton from "./ContractViewListPage/OpenExistContractButton/OpenExistContractButton";
import ContractViewListPage from "./ContractViewListPage/ContractViewListPage";

class InsuranceApp extends React.Component {
    constructor(props) {
        super(props);
        //получить от сервера ContractViewList
        this.state = {
            currentPage: "ContractViewListPage",
            selectedContractId: null,
            contractModel: {
                status: "NEW",
                calcInfo: {},
                holderInfo: {},
                realtyLocation: {}
            }
        }
    }

    handleClickCreateNewContractButton() {
        this.setState({
            currentPage: "SingleContractPage"
        });
    }

    handleClickByTable() {
        let contractId = "какТоВыдернутьАйди";
        this.setState({
            selectedContractId: [contractId]
        });
    }

    handleDblClickByTable() {
        let contractId = "какТоВыдернутьАйди";
        this.setState({
            selectedContractId: [contractId],
            currentPage: "SingleContractPage"
        });
    }

    handleClickOpenExistContractButton() {
        this.setState({
            currentPage: "SingleContractPage"
        });
    }

    handleClickSaveContractButton() {
        console.log("handleClickSaveContractButton()");
    }

    handleClickReturnToContractViewListButton() {
        this.setState({
            currentPage: "ContractViewListPage"
        });
    }

    render() {
        return (
            <div className="insurance-app">
                {this.state.currentPage === "ContractViewListPage" ?
                    <CreateNewContractButton fOnClick={() => this.handleClickCreateNewContractButton() }/>
                    : null}
                {this.state.currentPage === "ContractViewListPage" ?
                    <OpenExistContractButton
                        selectedContractId={this.state.selectedContractId}
                        onClick={() => this.handleClickOpenExistContractButton()}/>
                    : null}
                {this.state.currentPage === "ContractViewListPage" ?
                    <div className="contract-view-list-page">
                        <ContractViewListPage
                            onClick={() => this.handleClickByTable()}
                            onDblClick={() => this.handleDblClickByTable()}/>
                    </div>  : null}
                {this.state.currentPage === "SingleContractPage" ?
                    <div className="single-contract-page">
                        <SingleContractPage selectedContractId={this.state.selectedContractId}
                            onClickSaveContractButton = {() => this.handleClickSaveContractButton() }
                            onClickReturnToContractViewListButton = {() => this.handleClickReturnToContractViewListButton()}
                        />
                    </div>  : null}
            </div>
        );
    }
}



export default InsuranceApp;
