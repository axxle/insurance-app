package ru.axxle.insurance.web.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import ru.axxle.insurance.web.WebInsuranceContractView;

import java.math.BigDecimal;
import java.util.Arrays;
import java.util.Date;
import java.util.List;

@RestController
@RequestMapping(value = InsuranceContractViewController.REQUEST_PATH)
public class InsuranceContractViewController {
	public static final String REQUEST_PATH = "/insurance/view";
	public static final String VIEW_ALL = "/";

	@RequestMapping(
			value = VIEW_ALL,
			method = RequestMethod.GET
	)
	public @ResponseBody
	ResponseEntity<List<WebInsuranceContractView>> getAll() {
		List<WebInsuranceContractView> webInsuranceContractViewList = Arrays.asList(
				new WebInsuranceContractView("112112",
						new Date(),
						"Иванов Иван Иваныч",
						new BigDecimal("120000"),
						"10.10.2019-09.10.2020"),
				new WebInsuranceContractView("112113",
						new Date(),
						"Федоров Федор Федорович",
						new BigDecimal("150000"),
						"11.10.2019-10.10.2020"));
		return new ResponseEntity<>(webInsuranceContractViewList, HttpStatus.OK);
	}
}