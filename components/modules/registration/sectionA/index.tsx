import RegistrationForm from "../common/form"
import { idFormSectionA } from '../common/constants'
import { formFields } from './formFields'
import { countryApiResponse } from '../common/commonType'
import axios from 'axios';
import useSWR from 'swr'
import { useEffect, useState } from "react";
import {optionValueTypeSelectBox} from "../../../common-components/custom-type"

const fetcher = (url: string) => axios.get(url).then(res => res.data)

function SectionA() {
    const listCountryUrl = "https://countriesnow.space/api/v0.1/countries/positions"

    const { data, error } = useSWR<countryApiResponse>(listCountryUrl, fetcher, {refreshInterval: 24*60*60*1000})
    const [countryOptions, setCountryOptions] = useState<Array<optionValueTypeSelectBox>>([])
    const submitForm = (data: any) => {
        console.log(data)
    }

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
                submitForm={submitForm}
                formId={idFormSectionA}
            />
            <button type="submit" form={idFormSectionA}>123123</button>
        </>
    )
}
export default SectionA