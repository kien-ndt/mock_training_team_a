import RegistrationForm from "../common/form"
import { idFormSectionC } from '../common/constants'
import { formFields } from './formFields'
import { useEffect, useState } from "react";
import {optionValueTypeSelectBox} from "../../../common-components/custom-type"


type inputProps = {
    submitForm?: (data: any) => void
    formId: string
}

function SectionC(props: inputProps) {
    const submitForm = (data: any) => {
        console.log(data)
    }


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
export default SectionC