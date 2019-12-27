package ru.axxle.insurance.service;

import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import ru.axxle.insurance.InsuranceCalc;

import java.math.BigDecimal;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = {"file:src/test/resources/WEB-INF/applicationContext.xml"})
public class InsuranceCalcServiceImplTest {

    @Autowired
    InsuranceCalcServiceImpl calcService;

    @Test
    public void calcTest() throws Exception {
        InsuranceCalc calcModel = new InsuranceCalc();
        //Страховая премия = (Страховая сумма / кол-во дней) * Коэф.ТН * Коэф.ГП * Коэф.Пл
        //insurancePremium = (insurancAmount / insuranceDays) * factorRealtyType * factorRealtyBuildYear * factorRealtyArea;
        calcModel.setInsuranceAmount("366000");
        calcModel.setRealtyType("дом");
        calcModel.setRealtyBuildYear("2015");
        calcModel.setRealtyArea(200.1);
        calcModel.setInsuranceStartDate("2019-12-18");
        calcModel.setInsuranceEndDate("2020-12-18");
        calcModel.setInsuranceCalcDate("");
        Assert.assertNotNull(calcService);
        calcModel = calcService.calc(calcModel);
        Assert.assertNotNull(calcModel);
        Assert.assertEquals("6000.00", calcModel.getInsurancePremium());
    }

    @Test
    public void takeRealtyTypeFactorTest(){
        Assert.assertEquals(new BigDecimal(calcService.getFactorRealtyTypeApartment()), calcService.takeRealtyTypeFactor("квартира"));
        Assert.assertEquals(new BigDecimal(calcService.getFactorRealtyTypeHouse()), calcService.takeRealtyTypeFactor("дом"));
        Assert.assertEquals(new BigDecimal(calcService.getFactorRealtyTypeRoom()), calcService.takeRealtyTypeFactor("комната"));
    }

    @Test
    public void takeRealtyBuildYearFactorTest(){
        Assert.assertEquals(new BigDecimal(calcService.getFactorRealtyBuildYearLessThan2000()), calcService.takeRealtyBuildYearFactor(1955));
        Assert.assertEquals(new BigDecimal(calcService.getFactorRealtyBuildYearLessThan2000()), calcService.takeRealtyBuildYearFactor(1999));
        Assert.assertNotEquals(new BigDecimal(calcService.getFactorRealtyBuildYearLessThan2000()), calcService.takeRealtyBuildYearFactor(2000));
        Assert.assertNotEquals(new BigDecimal(calcService.getFactorRealtyBuildYearLessThan2000()), calcService.takeRealtyBuildYearFactor(2001));

        Assert.assertNotEquals(new BigDecimal(calcService.getFactorRealtyBuildYearBetween2000and2014()), calcService.takeRealtyBuildYearFactor(1999));
        Assert.assertEquals(new BigDecimal(calcService.getFactorRealtyBuildYearBetween2000and2014()), calcService.takeRealtyBuildYearFactor(2000));
        Assert.assertEquals(new BigDecimal(calcService.getFactorRealtyBuildYearBetween2000and2014()), calcService.takeRealtyBuildYearFactor(2008));
        Assert.assertEquals(new BigDecimal(calcService.getFactorRealtyBuildYearBetween2000and2014()), calcService.takeRealtyBuildYearFactor(2014));
        Assert.assertNotEquals(new BigDecimal(calcService.getFactorRealtyBuildYearBetween2000and2014()), calcService.takeRealtyBuildYearFactor(2015));

        Assert.assertNotEquals(new BigDecimal(calcService.getFactorRealtyBuildYear2015AndMore()), calcService.takeRealtyBuildYearFactor(2014));
        Assert.assertEquals(new BigDecimal(calcService.getFactorRealtyBuildYear2015AndMore()), calcService.takeRealtyBuildYearFactor(2015));
        Assert.assertEquals(new BigDecimal(calcService.getFactorRealtyBuildYear2015AndMore()), calcService.takeRealtyBuildYearFactor(2015));
    }

    @Test
    public void takeRealtyAreaFactor(){
        Assert.assertEquals(new BigDecimal(calcService.getFactorRealtyAreaLessThan50()), calcService.takeRealtyAreaFactor(43.1));
        Assert.assertNotEquals(new BigDecimal(calcService.getFactorRealtyAreaLessThan50()), calcService.takeRealtyAreaFactor(50.0));//??? если прилетит число 50.000000001

        Assert.assertEquals(new BigDecimal(calcService.getFactorRealtyAreaBetween50and100()), calcService.takeRealtyAreaFactor(50.0));
        Assert.assertEquals(new BigDecimal(calcService.getFactorRealtyAreaBetween50and100()), calcService.takeRealtyAreaFactor(51.0));
        Assert.assertEquals(new BigDecimal(calcService.getFactorRealtyAreaBetween50and100()), calcService.takeRealtyAreaFactor(100.0));
        Assert.assertEquals(new BigDecimal(calcService.getFactorRealtyAreaBetween50and100()), calcService.takeRealtyAreaFactor(100.0));//??? если прилетит число 100.000000001

        Assert.assertNotEquals(new BigDecimal(calcService.getFactorRealtyAreaMore100()), calcService.takeRealtyAreaFactor(99.9));
        Assert.assertNotEquals(new BigDecimal(calcService.getFactorRealtyAreaMore100()), calcService.takeRealtyAreaFactor(99.9999999999));
        //нужно округлять
        Assert.assertNotEquals(new BigDecimal(calcService.getFactorRealtyAreaMore100()), calcService.takeRealtyAreaFactor(100.0000001));//??? если прилетит число 100.000000001
        Assert.assertNotEquals(new BigDecimal(calcService.getFactorRealtyAreaMore100()), calcService.takeRealtyAreaFactor(100.049999));
        Assert.assertEquals(new BigDecimal(calcService.getFactorRealtyAreaMore100()), calcService.takeRealtyAreaFactor(100.05)); //тип огруления - математический? думаю да
        Assert.assertEquals(new BigDecimal(calcService.getFactorRealtyAreaMore100()), calcService.takeRealtyAreaFactor(100.050001));
        Assert.assertEquals(new BigDecimal(calcService.getFactorRealtyAreaMore100()), calcService.takeRealtyAreaFactor(100.0999999));
        Assert.assertEquals(new BigDecimal(calcService.getFactorRealtyAreaMore100()), calcService.takeRealtyAreaFactor(100.1));
        Assert.assertEquals(new BigDecimal(calcService.getFactorRealtyAreaMore100()), calcService.takeRealtyAreaFactor(180.0));
    }
}