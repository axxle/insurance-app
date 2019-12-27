package ru.axxle.insurance.web.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.client.HttpStatusCodeException;
import org.springframework.web.client.RestTemplate;
import ru.axxle.insurance.InsuranceCalc;
import ru.axxle.insurance.service.InsuranceCalcService;
import ru.axxle.insurance.web.WebInsuranceCalc;

import java.util.ArrayList;
import java.util.List;

public class WebInsuranceCalcServiceImpl implements WebInsuranceCalcService {

    @Autowired
    private InsuranceCalcService calcService;

    public WebInsuranceCalc calc(WebInsuranceCalc webModel) throws HttpMessageNotReadableException {
        webModel.setInsuranceCalcDate("2019-12-23");
        webModel.setInsurancePremium("12001.1");
        return webModel;
    }

    public WebInsuranceCalcServiceImpl() {
    }

    public WebInsuranceCalcServiceImpl(InsuranceCalcService calcService) {
        this.calcService = calcService;
    }

    public InsuranceCalcService getCalcService() {
        return calcService;
    }

    public void setCalcService(InsuranceCalcService calcService) {
        this.calcService = calcService;
    }
}
