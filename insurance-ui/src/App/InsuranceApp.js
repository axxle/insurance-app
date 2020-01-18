import React from 'react';
import SingleContractPage from "./SingleContractPage/SingleContractPage";
import ContractViewListPage from "./ContractViewListPage/ContractViewListPage";
import FormControlExample from "./FormControlExample";

export default function InsuranceApp() {
    //let [currentPage, setCurrentPage] = React.useState("ContractViewListPage");
    let [currentPage, setCurrentPage] = React.useState("SingleContractPage");

    let handleOpenOrEditContract = () => {
        setCurrentPage("SingleContractPage");
    };

    let handleReturnToViewList = () => {
        setCurrentPage("ContractViewListPage");
    };

    return (
        <div className="insurance-app">
            {currentPage === "ContractViewListPage"
                ? <ContractViewListPage openSingleContractPage = {handleOpenOrEditContract} />
                : null}
            {currentPage === "SingleContractPage"
                ? <SingleContractPage returnToViewList = {handleReturnToViewList} />
                : null}
        </div>
    );

}

