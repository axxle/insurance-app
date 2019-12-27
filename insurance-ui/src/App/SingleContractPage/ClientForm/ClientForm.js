import React from 'react';

class ClientForm extends React.Component {
    render() {
        return(
            <div className="client-form">
                <div>
                    <b>СТРАХОВАТЕЛЬ</b>
                </div>
                <div>
                    <button id="openSearchHolderDialog">Выбрать</button>
                    <label htmlFor="holderFullName"> ФИО </label>
                    <input type="text" id="holderFullName" name="fullName"/>
                    <button>Изменить</button>
                </div>
                <div>
                    <label htmlFor="holderBirthDate">Дата рождения</label>
                    <input type="date" id="holderBirthDate" name="birthDate"/>
                    <label htmlFor="holderPassportSeries"> Паспорт серия </label>
                    <input type="text" id="holderPassportSeries" name="passportSeries"/>
                    <label htmlFor="holderPassportNumber"> номер </label>
                    <input type="text" name="passportNumber" id="holderPassportNumber"/>
                </div>
            </div>
        );
    }
}

export default ClientForm;
