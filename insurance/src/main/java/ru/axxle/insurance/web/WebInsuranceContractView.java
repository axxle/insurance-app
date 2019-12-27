package ru.axxle.insurance.web;

import java.math.BigDecimal;
import java.util.Date;

public class WebInsuranceContractView {
    private String contractId;
    private Date contractDate;
    private String policyHolder;
    private BigDecimal premium;
    private String contractDuration;

    public WebInsuranceContractView(){}

    public WebInsuranceContractView(String contractId) {
        this.contractId = contractId;
    }


    public WebInsuranceContractView(String contractId, Date contractDate, String policyHolder, BigDecimal premium, String contractDuration) {
        this.contractId = contractId;
        this.contractDate = contractDate;
        this.policyHolder = policyHolder;
        this.premium = premium;
        this.contractDuration = contractDuration;
    }

    public String getContractId() {
        return contractId;
    }

    public void setContractId(String contractId) {
        this.contractId = contractId;
    }

    public Date getContractDate() {
        return contractDate;
    }

    public void setContractDate(Date contractDate) {
        this.contractDate = contractDate;
    }

    public String getPolicyHolder() {
        return policyHolder;
    }

    public void setPolicyHolder(String policyHolder) {
        this.policyHolder = policyHolder;
    }

    public BigDecimal getPremium() {
        return premium;
    }

    public void setPremium(BigDecimal premium) {
        this.premium = premium;
    }

    public String getContractDuration() {
        return contractDuration;
    }

    public void setContractDuration(String contractDuration) {
        this.contractDuration = contractDuration;
    }
}