package ru.axxle.insurance.web.validation;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.web.client.HttpStatusCodeException;
import org.springframework.web.client.RestTemplate;
import ru.axxle.insurance.web.WebInsuranceCalc;

public class Validator {

    private String validateUrl;

    @Autowired
    RestTemplate restTemplate;

    public Validator() {
    }

    public Validator(String validateUrl) {
        this.validateUrl = validateUrl;
    }

    public void validate (WebInsuranceCalc webModel) {
        WebInsuranceCalc validatedWebModel = null;
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        HttpEntity<WebInsuranceCalc> entity = new HttpEntity<WebInsuranceCalc>(webModel,headers);
        try {
            HttpEntity<WebInsuranceCalc> result = restTemplate.exchange(validateUrl, HttpMethod.POST, entity, WebInsuranceCalc.class);
            validatedWebModel = result.getBody();
        } catch(HttpStatusCodeException e) {
            if (e.getRawStatusCode() == 400) {
                throw new HttpMessageNotReadableException(e.getResponseBodyAsString());
            } else {
                throw e;
            }
        }

    }

    public String getValidateUrl() {
        return validateUrl;
    }

    public void setValidateUrl(String validateUrl) {
        this.validateUrl = validateUrl;
    }

    public RestTemplate getRestTemplate() {
        return restTemplate;
    }

    public void setRestTemplate(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }
}
