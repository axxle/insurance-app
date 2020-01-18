package ru.axxle.insurance.web;

public class WebInsuranceContractView {
    private int contractId;
    private String contractNumber;
    private String contractDate;
    private String policyHolder;
    private String insurancePremium;
    private String policyDuration;

    public WebInsuranceContractView(){}

    public WebInsuranceContractView(int contractId, String contractNumber, String contractDate, String policyHolder, String insurancePremium, String policyDuration) {
        this.contractId = contractId;
        this.contractNumber = contractNumber;
        this.contractDate = contractDate;
        this.policyHolder = policyHolder;
        this.insurancePremium = insurancePremium;
        this.policyDuration = policyDuration;
    }

    public int getContractId() {
        return contractId;
    }

    public void setContractId(int contractId) {
        this.contractId = contractId;
    }

    public String getContractNumber() {
        return contractNumber;
    }

    public void setContractNumber(String contractNumber) {
        this.contractNumber = contractNumber;
    }

    public String getContractDate() {
        return contractDate;
    }

    public void setContractDate(String contractDate) {
        this.contractDate = contractDate;
    }

    public String getPolicyHolder() {
        return policyHolder;
    }

    public void setPolicyHolder(String policyHolder) {
        this.policyHolder = policyHolder;
    }

    public String getInsurancePremium() {
        return insurancePremium;
    }

    public void setInsurancePremium(String insurancePremium) {
        this.insurancePremium = insurancePremium;
    }

    public String getPolicyDuration() {
        return policyDuration;
    }

    public void setPolicyDuration(String policyDuration) {
        this.policyDuration = policyDuration;
    }
}