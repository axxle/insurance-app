
export function validateField(fieldName, value) {

    if(fieldName === "insuranceAmount") {
        if (!isNaN(value)) {
            let regExp = new RegExp("^([1-9]{1}[0-9]{0,})|[0]$");
            if (regExp.test(value.toString())) {
                return {
                    isValid: true,
                    normalizedValue: parseInt(value)
                };
            }
        }
        return {
            isValid: false,
            errorMessage: "Можно указать только целое число",
            returnedValue: value
        };
    }

    if(fieldName === "insuranceStartDate") {
        let regExp = new RegExp("^[0-9]{4}[-][0-9]{2}[-][0-9]{2}$");
        if (regExp.test(value)) {
            var now = new Date();
            var currentDateStr = now.getFullYear()+"-"+(now.getMonth()+1)+"-"+now.getDate();
            var currentDate = new Date(currentDateStr);
            var inputedStartDate = new Date(value);
            if (inputedStartDate >= currentDate) {
                return {
                    isValid: true,
                    normalizedValue: value
                };
            }
        } else {
            return {
                isValid: false,
                errorMessage: 'Неверный формат, ожидается строка в формате "yyyy-MM-dd"',
                returnedValue: value
            };
        }
        return {
            isValid: false,
            errorMessage: "Срок действия полиса  c должен быть >= текущей дате",
            returnedValue: value
        };
    }

    if(fieldName === "insuranceEndDate") {
        let regExp = new RegExp("^[0-9]{4}[-][0-9]{2}[-][0-9]{2}$");
        if (regExp.test(value)) {
            return {
                isValid: true,
                normalizedValue: value
            };
        }
        return {
            isValid: false,
            errorMessage: 'Неверный формат, ожидается строка в формате "yyyy-MM-dd"',
            returnedValue: value
        }; /*
        return {
            isValid: false,
            errorMessage: 'Срок действия полиса "по" должен быть > "срок действия полиса с"',
            returnedValue: value
        }*/
    }

    if(fieldName === "realtyType") {
        if (value === "квартира" || value === "дом" || value === "комната") {
            return {
                isValid: true,
                normalizedValue: value
            };
        }
        return {
            isValid: false,
            errorMessage: "Можно указать одно значение из списка: квартира, дом, комната. Другие значение не принимаются.",
            returnedValue: value
        };
    }

    if(fieldName === "realtyBuildYear") {
        console.log("fieldName === realtyBuildYear");
        console.log(typeof value);
        console.log(parseInt(value));
        let now = new Date();
        if (parseInt(value) > now.getFullYear()) {
            return {
                isValid: false,
                errorMessage: "Год должен быть четырехзначный и не больше текущего года.",
                returnedValue: value
            }
        }
    }
    //    Должна быть возможность ввода не целых чисел, после запятой доступен только 1 знак
    if(fieldName === "realtyArea") {
        //cvfn
        if (!false) {
            return {
                isValid: false,
                errorMessage: "Должна быть возможность ввода не целых чисел, после запятой доступен только 1 знак",
                returnedValue: value
            }
        }
    }
    return {
        isValid: false,
        returnedValue: value
    };
}

export function validateCalcForm(calcForm) {
    let fieldsForValidate = {
            insuranceAmount: false,
            realtyType: false,
            realtyBuildYear: false,
            realtyArea: false,
            insuranceStartDate: false,
            insuranceEndDate: false
    };
    let calcFormErrorMessages = {};
    let formIsValid = true;
    for (let key in fieldsForValidate) {
        let fieldValidateResult = validateField(key, calcForm[key]);
        if (!fieldValidateResult.isValid) {
            calcFormErrorMessages[key] = fieldValidateResult;
        }
        formIsValid = formIsValid && fieldValidateResult.isValid;
    }
    /*
        //Срок действия договора не может быть больше года."
    //"insuranceStartDate"
    //"insuranceEndDate"
    if(fieldName === "insuranceStartDate") {
        //...проверки
        return {
            isValid: false,
            errorMessage: "Срок действия полиса  c должен быть >= текущей дате",
            fieldName: fieldName,
            fieldValue: value,
            returnedValue: value
        }
    }
     */
    if (formIsValid) {
        return {
            isValid: formIsValid
        };
    }
    return {
        isValid: formIsValid,
        errorMessages: calcFormErrorMessages
    };
}
