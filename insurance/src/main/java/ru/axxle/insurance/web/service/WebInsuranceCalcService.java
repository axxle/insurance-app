package ru.axxle.insurance.web.service;

import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.web.bind.MethodArgumentNotValidException;
import ru.axxle.insurance.web.WebInsuranceCalc;

public interface WebInsuranceCalcService {

    WebInsuranceCalc calc (WebInsuranceCalc webModel) throws HttpMessageNotReadableException;

}
