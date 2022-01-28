import {formInput} from '../common/commonType'
import {optionValueTypeSelectBox} from "../../../common-components/custom-type"

export const formFields = (countriesOption?: Array<optionValueTypeSelectBox>): Array<formInput> => {

    let countriesOptionElement: Array<optionValueTypeSelectBox> = []

    if (countriesOption && countriesOption.length > 0){
        countriesOptionElement = countriesOption;
    }

    return(
    [
        {
            label: "Name of Company ",
            labelStyle: {
                fontWeight: "bold"
            },
            property: "nameCompany",
            type: "input",
            placeholder: "Name of Company"
        },
        {
            label: "Registered Business Address",
            labelStyle: {
                fontWeight: "bold"
            },
            property: "addressLine1",
            type: "input",
            placeholder: "Address Line 1"
        },
        {
            label: "",
            property: "addressLine2",
            type: "input",
            placeholder: "Address Line 2"
        },
        {
            label: "",
            property: "addressLine3",
            type: "input",
            placeholder: "Address Line 3"
        },
        {
            label: "Country",
            property: "country",
            type: "selectbox",
            optionsSelect: countriesOptionElement,
            placeholder: "Select Country"
        },
        {
            label: "City",
            property: "city",
            type: "input",
            placeholder: "City"
        },
        {
            label: "Postal Code",
            property: "postalCode",
            type: "input",
            placeholder: "Postal Code"
        },
        {
            label: "Country of Incorporation",
            property: "countryOfIncorporation",
            type: "input",
            placeholder: "Country of Incorporation"
        },
        {
            label: "Nature of Business",
            property: "natureOfBusiness",
            type: "input",
            placeholder: "Nature of Business"
        },
    ]
    )
}
