import RegistrationForm from "../common/form"
import { idFormSectionB } from '../common/constants'
import { formFields } from './formFields'
import axios from 'axios';
import { useEffect, useState } from "react";
import {optionValueTypeSelectBox} from "../../../common-components/custom-type"

const fetcher = (url: string) => axios.get(url).then(res => res.data)

type inputProps = {
    submitForm?: (data: any) => void
    formId: string
}
function SectionB(props: inputProps) {
    return(
        <>
            <RegistrationForm 
                fields={formFields()}
                submitForm={props.submitForm?props.submitForm:(data)=>{console.log(data)}}
                formId={props.formId}
            />
        </>
    )
}
export default SectionB