import RegistrationForm from "../common/form"
import { formFields } from './formFields'
import { useContext, useEffect, useState } from "react";
import { MainContext } from "../../../../context/MainContext";


type inputProps = {
    submitForm?: (data: any) => void
    formId: string
}

function SectionC(props: inputProps) {
    const submitForm = (data: any) => {
        console.log(data)
    }

    const { updateContentComponentId } = useContext(MainContext)
    useEffect(() => {
        updateContentComponentId("sectionC")
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
export default SectionC