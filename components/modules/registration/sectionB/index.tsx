import RegistrationForm from "../common/form"
import { idFormSectionB } from '../common/constants'
import { formFields } from './formFields'
import axios from 'axios';
import { useContext, useEffect, useState } from "react";
import {optionValueTypeSelectBox} from "../../../common-components/custom-type"
import { MainContext } from "../../../../context/MainContext";

const fetcher = (url: string) => axios.get(url).then(res => res.data)

type inputProps = {
    submitForm?: (data: any) => void
    formId: string
}
function SectionB(props: inputProps) {
    
    const { updateContentComponentId } = useContext(MainContext)
    useEffect(() => {
        updateContentComponentId("sectionB")
    }, [])
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