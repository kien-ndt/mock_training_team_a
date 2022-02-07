import React from "react"
import {optionValueTypeSelectBox} from "../../../common-components/custom-type"

export declare type formInput = {
    label: string
    labelStyle?: React.CSSProperties
    property: string
    type: "input" | "selectbox"
    rules?: any
    optionsSelect?: Array<optionValueTypeSelectBox>
    placeholder?:string
    readOnly?: boolean | undefined
}

/**
 * list countries return when get from api: "https://countriesnow.space/api/v0.1/countries/positions"
 */
export declare type countryApiResponse = {
    error: boolean
    msg: string
    data?: [
        {
            name: string
            iso2?: string
            long?: number
            lat?: number
        }
    ]
}

