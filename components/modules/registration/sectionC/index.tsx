import RegistrationForm from "../common/form"
import { idFormSectionC } from '../common/constants'
import { formFields } from './formFields'
import axios from 'axios';
import { useEffect, useState } from "react";
import {optionValueTypeSelectBox} from "../../../common-components/custom-type"

const fetcher = (url: string) => axios.get(url).then(res => res.data)

function SectionC() {
    const submitForm = (data: any) => {
        console.log(data)
    }


    return(
        <>
            <RegistrationForm 
                fields={formFields()}
                submitForm={submitForm}
                formId={idFormSectionC}
            />
            <button type="submit" form={idFormSectionC}>123123</button>
        </>
    )
}
export default SectionC