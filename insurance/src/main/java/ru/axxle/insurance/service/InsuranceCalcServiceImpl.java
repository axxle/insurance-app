package ru.axxle.insurance.service;

import ru.axxle.insurance.InsuranceCalc;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.Period;
import java.time.format.DateTimeFormatter;
import java.time.temporal.ChronoUnit;
import java.util.Date;

public class InsuranceCalcServiceImpl implements InsuranceCalcService {
    private String factorRealtyTypeApartment;
    private String factorRealtyTypeHouse;
    private String factorRealtyTypeRoom;
    private String factorRealtyBuildYearLessThan2000;
    private String factorRealtyBuildYearBetween2000and2014;
    private String factorRealtyBuildYear2015AndMore;
    private String factorRealtyAreaLessThan50;
    private String factorRealtyAreaBetween50and100;
    private String factorRealtyAreaMore100;

    public InsuranceCalcServiceImpl() {
    }

    public InsuranceCalcServiceImpl(String factorRealtyTypeApartment, String factorRealtyTypeHouse, String factorRealtyTypeRoom, String factorRealtyBuildYearLessThan2000, String factorRealtyBuildYearBetween2000and2014, String factorRealtyBuildYear2015AndMore, String factorRealtyAreaLessThan50, String factorRealtyAreaBetween50and100, String factorRealtyAreaMore100) {
        this.factorRealtyTypeApartment = factorRealtyTypeApartment;
        this.factorRealtyTypeHouse = factorRealtyTypeHouse;
        this.factorRealtyTypeRoom = factorRealtyTypeRoom;
        this.factorRealtyBuildYearLessThan2000 = factorRealtyBuildYearLessThan2000;
        this.factorRealtyBuildYearBetween2000and2014 = factorRealtyBuildYearBetween2000and2014;
        this.factorRealtyBuildYear2015AndMore = factorRealtyBuildYear2015AndMore;
        this.factorRealtyAreaLessThan50 = factorRealtyAreaLessThan50;
        this.factorRealtyAreaBetween50and100 = factorRealtyAreaBetween50and100;
        this.factorRealtyAreaMore100 = factorRealtyAreaMore100;
    }

    @Override
    public InsuranceCalc calc(InsuranceCalc insuranceCalc) {
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");  //в модели поменять типы для этих полей
        LocalDate startDate = LocalDate.parse(insuranceCalc.getInsuranceStartDate(), formatter);
        LocalDate endDate = LocalDate.parse(insuranceCalc.getInsuranceEndDate(), formatter);

        BigDecimal amount = new BigDecimal(insuranceCalc.getInsuranceAmount()); //перевести в int
        int d = countNumberOfDays(startDate, endDate);
        BigDecimal days = new BigDecimal(d);
        BigDecimal factorRealtyType = takeRealtyTypeFactor(insuranceCalc.getRealtyType());
        BigDecimal factorRealtyBuildYear = takeRealtyBuildYearFactor(Integer.parseInt(insuranceCalc.getRealtyBuildYear()));
        BigDecimal factorRealtyArea = takeRealtyAreaFactor(insuranceCalc.getRealtyArea());
        BigDecimal premium = calc(amount,
                days,
                factorRealtyType,
                factorRealtyBuildYear,
                factorRealtyArea
        );
        insuranceCalc.setInsurancePremium(premium.setScale(2, RoundingMode.HALF_UP).toPlainString());
        insuranceCalc.setInsuranceCalcDate(new SimpleDateFormat("yyyy-MM-dd").format(new Date()));
        return insuranceCalc;
    }

    public int countNumberOfDays(LocalDate startDate, LocalDate endDate) {
        return (int) ChronoUnit.DAYS.between(startDate, endDate);
    }

    public BigDecimal calc(BigDecimal amount,
                           BigDecimal days,
                           BigDecimal factorRealtyType,
                           BigDecimal factorRealtyBuildYear,
                           BigDecimal factorRealtyArea) {
        //Страховая премия = (Страховая сумма / кол-во дней) * Коэф.ТН * Коэф.ГП * Коэф.Пл
        //insurancePremium = (insurancAmount / insuranceDays) * factorRealtyType * factorRealtyBuildYear * factorRealtyArea;
        BigDecimal premium = amount.divide(days, RoundingMode.HALF_UP);
        premium = premium.multiply(factorRealtyType).multiply(factorRealtyBuildYear).multiply(factorRealtyArea);
        return premium;
    }

    public BigDecimal takeRealtyTypeFactor(String realtyType){
        if ("квартира".equals(realtyType)) {
            return new BigDecimal(this.factorRealtyTypeApartment);
        }
        if ("дом".equals(realtyType)) {
            return new BigDecimal(this.factorRealtyTypeHouse);
        }
        if ("комната".equals(realtyType)) {
            return new BigDecimal(this.factorRealtyTypeRoom);
        }
        return null;
    }

    public BigDecimal takeRealtyBuildYearFactor(int buildYear){
        BigDecimal result = null;
        if (buildYear < 2000) {
            result = new BigDecimal(this.factorRealtyBuildYearLessThan2000);
        }
        if (buildYear >= 2000 && buildYear <= 2014) {
            result = new BigDecimal(this.factorRealtyBuildYearBetween2000and2014);
        }
        if (buildYear >= 2015) {
            result = new BigDecimal(this.factorRealtyBuildYear2015AndMore);
        }
        return result;
    }

    public BigDecimal takeRealtyAreaFactor(double area) {
        //можно не делать округление, если: в БД тип будет подходящий + валидация входящих
        System.out.print(area);
        area = new BigDecimal(String.valueOf(area)).setScale(1, RoundingMode.HALF_UP).doubleValue();
        System.out.println(" --> " + area);
        /*
        43.1 --> 43.1
        43.1 --> 43.1
        50.0 --> 50.0
        50.0 --> 50.0
        51.0 --> 51.0
        100.0 --> 100.0
        100.0 --> 100.0
        99.9 --> 99.9
        99.9999999999 --> 100.0
        100.0000001 --> 100.0
        100.049999 --> 100.0
        100.05 --> 100.1
        100.050001 --> 100.1
        100.0999999 --> 100.1
        100.1 --> 100.1
        180.0 --> 180.0
        */

        BigDecimal result = null;
        if (area < 50.0) {
            result = new BigDecimal(this.factorRealtyAreaLessThan50);
        }
        if (area >= 50.0 && area <= 100.0) {
            result = new BigDecimal(this.factorRealtyAreaBetween50and100);
        }
        if (area > 100.0) {
            result = new BigDecimal(this.factorRealtyAreaMore100);
        }
        return result;
    }

    public String getFactorRealtyTypeApartment() {
        return factorRealtyTypeApartment;
    }

    public void setFactorRealtyTypeApartment(String factorRealtyTypeApartment) {
        this.factorRealtyTypeApartment = factorRealtyTypeApartment;
    }

    public String getFactorRealtyTypeHouse() {
        return factorRealtyTypeHouse;
    }

    public void setFactorRealtyTypeHouse(String factorRealtyTypeHouse) {
        this.factorRealtyTypeHouse = factorRealtyTypeHouse;
    }

    public String getFactorRealtyTypeRoom() {
        return factorRealtyTypeRoom;
    }

    public void setFactorRealtyTypeRoom(String factorRealtyTypeRoom) {
        this.factorRealtyTypeRoom = factorRealtyTypeRoom;
    }

    public String getFactorRealtyBuildYearLessThan2000() {
        return factorRealtyBuildYearLessThan2000;
    }

    public void setFactorRealtyBuildYearLessThan2000(String factorRealtyBuildYearLessThan2000) {
        this.factorRealtyBuildYearLessThan2000 = factorRealtyBuildYearLessThan2000;
    }

    public String getFactorRealtyBuildYearBetween2000and2014() {
        return factorRealtyBuildYearBetween2000and2014;
    }

    public void setFactorRealtyBuildYearBetween2000and2014(String factorRealtyBuildYearBetween2000and2014) {
        this.factorRealtyBuildYearBetween2000and2014 = factorRealtyBuildYearBetween2000and2014;
    }

    public String getFactorRealtyBuildYear2015AndMore() {
        return factorRealtyBuildYear2015AndMore;
    }

    public void setFactorRealtyBuildYear2015AndMore(String factorRealtyBuildYear2015AndMore) {
        this.factorRealtyBuildYear2015AndMore = factorRealtyBuildYear2015AndMore;
    }

    public String getFactorRealtyAreaLessThan50() {
        return factorRealtyAreaLessThan50;
    }

    public void setFactorRealtyAreaLessThan50(String factorRealtyAreaLessThan50) {
        this.factorRealtyAreaLessThan50 = factorRealtyAreaLessThan50;
    }

    public String getFactorRealtyAreaBetween50and100() {
        return factorRealtyAreaBetween50and100;
    }

    public void setFactorRealtyAreaBetween50and100(String factorRealtyAreaBetween50and100) {
        this.factorRealtyAreaBetween50and100 = factorRealtyAreaBetween50and100;
    }

    public String getFactorRealtyAreaMore100() {
        return factorRealtyAreaMore100;
    }

    public void setFactorRealtyAreaMore100(String factorRealtyAreaMore100) {
        this.factorRealtyAreaMore100 = factorRealtyAreaMore100;
    }
}
