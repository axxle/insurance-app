package ru.axxle.insurance.web;

import javax.validation.constraints.Pattern;

public class WebInsuranceCalc {
    private long insuranceAmount;
    //private String realtyType;
    private String realtyType;
    public static final String realtyBuildYearCheckPattern = "^([1]{1}[0-9]{3})|([2]{1}[0]{1}[0-1]{1}[0-9]{1})$"; //да, надо подумать получше решение
    public static final String realtyBuildYearCheckMessage = "Год должен быть четырехзначный и не больше текущего года";
    @Pattern (regexp = realtyBuildYearCheckPattern, message = realtyBuildYearCheckMessage)
    private String realtyBuildYear;

    public static final String realtyAreaCheckPattern = "^([0]([\\.][1-9]){1,1})|([1-9]{1}([0-9]{0,})([\\.][0-9]){0,1})$";
    public static final String realtyAreaCheckMessage = "Введите целое или не целое число с точностью до 1 знака";
    @Pattern (regexp = realtyAreaCheckPattern, message = realtyAreaCheckMessage)
    private String realtyArea;


    public static final String insuranceStartDateCheckPattern = "^[0-9]{4}[-][0-9]{2}[-][0-9]{2}$"; //проверяет только yyyy-MM-dd
    public static final String insuranceStartDateCheckMessage = "Срок действия полиса  <с> должен быть >= текущей дате";
    @Pattern (regexp = insuranceStartDateCheckPattern, message = insuranceStartDateCheckMessage)
    private String insuranceStartDate;

    public static final String insuranceEndDateCheckPattern = "^[0-9]{4}[-][0-9]{2}[-][0-9]{2}$"; //проверяет только yyyy-MM-dd
    public static final String insuranceEndDateCheckMessage = "Срок действия полиса <по> должен быть > срок действия полиса <с>. Срок действия договора не может быть больше года";
    @Pattern (regexp = insuranceEndDateCheckPattern, message = insuranceEndDateCheckMessage)
    private String insuranceEndDate;

    public static final String insuranceCalcDateCheckPattern = "^[0-9]{4}[-][0-9]{2}[-][0-9]{2}$"; //проверяет только yyyy-MM-dd
    public static final String insuranceCalcDateCheckMessage = "Год должен быть четырехзначный и не больше текущего года";
    //@Pattern (regexp = insuranceCalcDateCheckPattern, message = insuranceCalcDateCheckMessage)        //проверяем только при сохранения договора
    private String insuranceCalcDate;

    //Заполняется автоматически после выполнения расчета, не может быть отрицательной, округлять до 2 цифр после запятой
    public static final String insurancePremiumCheckPattern = "^([0]([\\.][1-9][0-9]{0,1}){1})|([0]([\\.][0-9][1-9]{0,1}){1})|(([1-9]{1}[0-9]{0,})([\\.][1-9][0-9]{0,1}){1})$";
    public static final String insurancePremiumCheckMessage = "Заполняется автоматически после выполнения расчета, не может быть отрицательной, округлять до 2 цифр после запятой";
    //@Pattern (regexp = insurancePremiumCheckPattern, message = insurancePremiumCheckMessage) //проверяем только при сохранения договора
    private String insurancePremium;

    public WebInsuranceCalc() {}

    public WebInsuranceCalc(long insuranceAmount, String realtyType, String realtyBuildYear, String realtyArea, String insuranceStartDate, String insuranceEndDate, String insuranceCalcDate, String insurancePremium) {
        this.insuranceAmount = insuranceAmount;
        this.realtyType = realtyType;
        this.realtyBuildYear = realtyBuildYear;
        this.realtyArea = realtyArea;
        this.insuranceStartDate = insuranceStartDate;
        this.insuranceEndDate = insuranceEndDate;
        this.insuranceCalcDate = insuranceCalcDate;
        this.insurancePremium = insurancePremium;
    }

    public WebInsuranceCalc(long insuranceAmount, String realtyType, String realtyBuildYear, String realtyArea, String insuranceStartDate, String insuranceEndDate) {
        this.insuranceAmount = insuranceAmount;
        this.realtyType = realtyType;
        this.realtyBuildYear = realtyBuildYear;
        this.realtyArea = realtyArea;
        this.insuranceStartDate = insuranceStartDate;
        this.insuranceEndDate = insuranceEndDate;
    }


    public long getInsuranceAmount() {
        return insuranceAmount;
    }

    public void setInsuranceAmount(long insuranceAmount) {
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

    public String getRealtyArea() {
        return realtyArea;
    }

    public void setRealtyArea(String realtyArea) {
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