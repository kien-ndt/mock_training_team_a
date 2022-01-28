import RegistrationForm from "../common/form"
import { idFormSectionB } from '../common/constants'
import { formFields } from './formFields'
import axios from 'axios';
import { useEffect, useState } from "react";
import {optionValueTypeSelectBox} from "../../../common-components/custom-type"

const fetcher = (url: string) => axios.get(url).then(res => res.data)

function SectionB() {
    const submitForm = (data: any) => {
        console.log(data)
    }


    return(
        <>
            <RegistrationForm 
                fields={formFields()}
                submitForm={submitForm}
                formId={idFormSectionB}
            />
            <button type="submit" form={idFormSectionB}>123123</button>
        </>
    )
}
export default SectionB