import {optionValueTypeSelectBox} from "../../../common-components/custom-type"

export declare type formInput = {
    label: string
    property: string
    type: "input" | "selectbox"
    rules?: any
    optionsSelect?: Array<optionValueTypeSelectBox>
    placeholder?:string
}

