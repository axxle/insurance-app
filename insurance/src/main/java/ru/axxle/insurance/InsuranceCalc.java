package ru.axxle.insurance;

import javax.validation.constraints.Pattern;

public class InsuranceCalc {
    @Pattern (regexp = "^[1-9]{1}[0-9]{0,}$", message = "Можно ввести только целое число")
    private String insuranceAmount;
    private String realtyType;
    private String realtyBuildYear;
    private double realtyArea;
    private String insuranceStartDate;
    private String insuranceEndDate;
    private String insuranceCalcDate;
    private String insurancePremium;

    public InsuranceCalc() {}

    public InsuranceCalc(String insuranceAmount, String realtyType, String realtyBuildYear, double realtyArea, String insuranceStartDate, String insuranceEndDate, String insuranceCalcDate, String insurancePremium) {
        this.insuranceAmount = insuranceAmount;
        this.realtyType = realtyType;
        this.realtyBuildYear = realtyBuildYear;
        this.realtyArea = realtyArea;
        this.insuranceStartDate = insuranceStartDate;
        this.insuranceEndDate = insuranceEndDate;
        this.insuranceCalcDate = insuranceCalcDate;
        this.insurancePremium = insurancePremium;
    }

    public InsuranceCalc(String insuranceAmount, String realtyType, String realtyBuildYear, double realtyArea, String insuranceStartDate, String insuranceEndDate) {
        this.insuranceAmount = insuranceAmount;
        this.realtyType = realtyType;
        this.realtyBuildYear = realtyBuildYear;
        this.realtyArea = realtyArea;
        this.insuranceStartDate = insuranceStartDate;
        this.insuranceEndDate = insuranceEndDate;
    }

    public String getInsuranceAmount() {
        return insuranceAmount;
    }

    public void setInsuranceAmount(String insuranceAmount) {
        this.insuranceAmount = insuranceAmount;
    }

    public String getRealtyType() {
        return realtyType;
    }

    public void setRealtyType(String realtyType) {
        this.realtyType = realtyType;
    }

    public String getRealtyBuildYear() {
        return realtyBuildYear;
    }

    public void setRealtyBuildYear(String realtyBuildYear) {
        this.realtyBuildYear = realtyBuildYear;
    }

    public double getRealtyArea() {
        return realtyArea;
    }

    public void setRealtyArea(double realtyArea) {
        this.realtyArea = realtyArea;
    }

    public String getInsuranceStartDate() {
        return insuranceStartDate;
    }

    public void setInsuranceStartDate(String insuranceStartDate) {
        this.insuranceStartDate = insuranceStartDate;
    }

    public String getInsuranceEndDate() {
        return insuranceEndDate;
    }

    public void setInsuranceEndDate(String insuranceEndDate) {
        this.insuranceEndDate = insuranceEndDate;
    }

    public String getInsuranceCalcDate() {
        return insuranceCalcDate;
    }

    public void setInsuranceCalcDate(String insuranceCalcDate) {
        this.insuranceCalcDate = insuranceCalcDate;
    }

    public String getInsurancePremium() {
        return insurancePremium;
    }

    public void setInsurancePremium(String insurancePremium) {
        this.insurancePremium = insurancePremium;
    }
}