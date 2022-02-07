import RegistrationForm from "../common/form"
import { useContext, useEffect, useState } from "react";
import { MainContext } from "../../../../context/MainContext";
import { formFields } from "../sectionA/formFields"


type inputProps = {
    data: any
}

function Submission(props: inputProps) {
    const { updateContentComponentId } = useContext(MainContext)

    const { data } = props

    const getSessionAFormField = () => {        
        const sessionAFields = formFields();
        sessionAFields.forEach((item, index) => {
            sessionAFields[index].labelStyle = undefined;
            sessionAFields[index].type = "input";
            sessionAFields[index].readOnly = true
            sessionAFields[index].placeholder = ""
        })
        return sessionAFields
    }

    useEffect(() => {
        updateContentComponentId("submission")
    }, [])

    return(
        <>
            <RegistrationForm 
                fields={getSessionAFormField()}
                submitForm={(data)=>{return}}
                formId={"sessionasubmission"}
                defaultValue={data[0]}
            />
        </>
    )
}
export default Submission