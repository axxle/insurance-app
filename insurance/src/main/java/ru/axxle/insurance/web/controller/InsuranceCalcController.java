package ru.axxle.insurance.web.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import ru.axxle.insurance.web.WebInsuranceCalc;
import ru.axxle.insurance.web.service.WebInsuranceCalcService;
import ru.axxle.insurance.web.validation.Validator;


@RestController
@RequestMapping(value = InsuranceCalcController.REQUEST_PATH)
public class InsuranceCalcController {

	public static final String REQUEST_PATH = "/insurance/calc";

	@Autowired
	WebInsuranceCalcService webInsuranceCalcService;

	@Autowired
	private Validator validator;

	@RequestMapping(method = RequestMethod.POST,
			produces = MediaType.APPLICATION_JSON_UTF8_VALUE
	)
	public ResponseEntity<Object> calc(@RequestBody WebInsuranceCalc entity) {
		try {
			validator.validate(entity);
			WebInsuranceCalc calcedModel = webInsuranceCalcService.calc(entity);
			return new ResponseEntity<Object>(calcedModel, HttpStatus.OK);
		} catch (HttpMessageNotReadableException e) {
			return new ResponseEntity<Object>(e.getMessage(), HttpStatus.BAD_REQUEST);
		}
	}
}