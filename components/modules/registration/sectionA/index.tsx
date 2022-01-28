import RegistrationForm from "../common/form"
import { idFormSectionA } from '../common/constants'
import { formFields } from './formFields'
import { countryApiResponse } from '../common/commonType'
import axios from 'axios';
import useSWR from 'swr'
import { useEffect, useState } from "react";
import {optionValueTypeSelectBox} from "../../../common-components/custom-type"

const fetcher = (url: string) => axios.get(url).then(res => res.data)


type inputProps = {
    submitForm?: (data: any) => void
    formId: string
}
function SectionA(props: inputProps) {
    const listCountryUrl = "https://countriesnow.space/api/v0.1/countries/positions"

    const { data, error } = useSWR<countryApiResponse>(listCountryUrl, fetcher, {refreshInterval: 24*60*60*1000})
    const [countryOptions, setCountryOptions] = useState<Array<optionValueTypeSelectBox>>([])

    useEffect(() => {
        if (data && data.data && data.data.length > 0) {
            const listCountries = data.data;
            let newListCountryOptions: Array<optionValueTypeSelectBox> = [];
            listCountries.map((country, index) => {
                newListCountryOptions.push({
                    label: country.name,
                })
            })
            setCountryOptions(newListCountryOptions)
        }
    }, [data])


    return(
        <>
            <RegistrationForm 
                fields={formFields(countryOptions)}
                submitForm={props.submitForm?props.submitForm:(data)=>{console.log(data)}}
                formId={props.formId}
            />
        </>
    )
}
export default SectionA