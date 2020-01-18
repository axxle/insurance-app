package ru.axxle.insurance.web.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import ru.axxle.insurance.web.WebInsuranceContractView;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.Arrays;
import java.util.Date;
import java.util.List;

@RestController
@RequestMapping(value = InsuranceContractViewController.REQUEST_PATH)
public class InsuranceContractViewController {
	public static final String REQUEST_PATH = "/insurance/view/contracts";
	public static final String VIEW_ALL = "/";

	@RequestMapping(
			value = VIEW_ALL,
			method = RequestMethod.GET
	)
	public @ResponseBody
	ResponseEntity<List<WebInsuranceContractView>> getAll() {
		List<WebInsuranceContractView> webInsuranceContractViewList = Arrays.asList(
				new WebInsuranceContractView(
						1,
						"000001",
						"03.02.2015",
						"Иванов Иван Иваныч2",
						"1367,23",
						"03.02.2015-02.08.2015"),
				new WebInsuranceContractView(
						2,
						"000002",
						"16.02.2015",
						"Смирнов Петр Петрович2",
						"2314,42",
						"16.02.2015-15.07.2015"),
				new WebInsuranceContractView(
						3,
						"000003",
						"03.02.2015",
						"Петров Петр Сергеевич2",
						"1367,23",
						"03.02.2015-02.08.2015"));
		return new ResponseEntity<>(webInsuranceContractViewList, HttpStatus.OK);
	}
}