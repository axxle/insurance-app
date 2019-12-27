import React from 'react';
import {validateField} from "../../validate-insurance-app";
import axios from "axios";

class CalcForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            insuranceAmount: 100
        };
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    handleUserInput(e) {
        let fieldName = e.target.name;
        let value = e.target.value;
        //validateField(fieldName, value);

    }

    onChange(event) {
        //Провалидировать поле
        //      Если невалидно - то: 1) стиль invalid 2) вывоод errorMessage 3) сохраняем значение в виде строки
        //      Если валидно - то сохраняем в нужном типе
        let validateResult = validateField(event.target.name, event.target.value);
        console.log(validateResult);
        /*if (validateResult.isValid) {
            this.setState({ [event.target.name]:  validateResult.value});
            return;
        }*/
        //console.log(validateResult.errorMessage);
        //1) стиль invalid 2) вывоод errorMessage 3) сохраняем значение в виде строки
        //this.setState({ [event.target.name]:  event.target.value});
    }

    onSubmit = event => {
        axios.post("http://localhost:8080/insurance/calc",
            {'insuranceAmount': this.state.insuranceAmount})
            .then(r => console.log(r))
            .catch(e => console.log(e));
        event.preventDefault();
    }

    render() {
        return (
            <fieldset className="tFormContainer">
                <legend>Расчет</legend>
                <form id="calcForm" className="form-group" onSubmit={this.onSubmit}>
                    <div>
                        <label htmlFor="insuranceAmount">Страховая сумма</label>
                        <input type="number" className="form-control" name="insuranceAmount" id="insuranceAmount"
                               value={this.state.insuranceAmount}
                               onChange={this.onChange} />
                    </div>
                    <div>
                        <label htmlFor="insuranceStartDate">Срок действия с</label>
                        <input type="date" className="form-control" name="insuranceStartDate" id="insuranceStartDate"
                               value={this.state.insuranceStartDate}
                               onChange={this.onChange} />
                    </div>
                    <div>
                        <label htmlFor="insuranceEndDate"> по </label>
                        <input type="date" className="form-control" name="insuranceEndDate" id="insuranceEndDate"
                               value={this.state.insuranceEndDate}
                               onChange={this.onChange}/>
                    </div>
                    <div>
                        <label htmlFor="realtyType">Тип недвижимости</label>
                        <input list="realtyTypeList" className="form-control" name="realtyType" id="realtyType" value={this.state.realtyType}
                               onChange={this.onChange} />
                        <datalist id="realtyTypeList">
                            <option value="квартира" title="apartment"/>
                            <option value="дом" title="house"/>
                            <option value="комната" title="room"/>
                        </datalist>
                    </div>
                    <div>
                        <label htmlFor="realtyBuildYear">Год постройки</label>
                        <input type="text" className="form-control" name="realtyBuildYear" id="realtyBuildYear"
                               value={this.state.realtyBuildYear}
                               onChange={this.onChange} />
                    </div>
                    <div>
                        <label htmlFor="realtyArea">Площадь, кв.м.</label>
                        <input type="text" className="form-control" name="realtyArea" id="realtyArea"
                               value={this.state.realtyArea}
                               onChange={this.onChange} />
                    </div>
                    <div>
                        <input className="btn btn-primary" type="submit" value="Рассчитать"/>
                        <button type="submit" className="btn btn-primary">Рассчитать</button>
                    </div>
                    <div>
                        <label htmlFor="insuranceCalcDate">Дата расчета</label>
                        <input type="date" className="form-control" name="insuranceCalcDate" id="insuranceCalcDate" readOnly />
                    </div>
                    <div>
                        <label htmlFor="insurancePremium">Премия</label>
                        <input type="text" className="form-control" name="insurancePremium" id="insurancePremium" />
                    </div>
                </form>
            </fieldset>
        );
    }
}
export default CalcForm;
