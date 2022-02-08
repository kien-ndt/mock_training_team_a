import RegistrationForm from "../common/form"
import { useContext, useEffect, useState } from "react";
import { MainContext } from "../../../../context/MainContext";
import { formFields as formFieldsA} from "../sectionA/formFields"
import { formFields as formFieldsB} from "../sectionB/formFields"
import { formFields as formFieldsC} from "../sectionC/formFields"
import TextFieldCustom from "../../../common-components/input"
import Grid from "@mui/material/Grid"


type inputProps = {
    data: any
}

const titleSectionStyle = {
    color: "red", 
    backgroundColor: "rgb(245, 194, 194)"
}

function Submission(props: inputProps) {
    const { updateContentComponentId } = useContext(MainContext)

    const { data } = props

    const getSessionAFormField = () => {        
        const sessionAFields = formFieldsA();
        sessionAFields.forEach((item, index) => {
            sessionAFields[index].labelStyle = undefined;
            sessionAFields[index].type = "input";
            sessionAFields[index].readOnly = true
            sessionAFields[index].placeholder = ""
        })
        return sessionAFields
    }

    const getSessionBFormField = () => {        
        const sessionBFields = formFieldsB();
        sessionBFields.forEach((item, index) => {
            sessionBFields[index].labelStyle = undefined;
            sessionBFields[index].type = "input";
            sessionBFields[index].readOnly = true
            sessionBFields[index].placeholder = ""
        })
        return sessionBFields
    }

    const getSessionCFormField = () => {        
        const sessionCFields = formFieldsC();
        sessionCFields.forEach((item, index) => {
            sessionCFields[index].labelStyle = undefined;
            sessionCFields[index].type = "input";
            sessionCFields[index].readOnly = true
            sessionCFields[index].placeholder = ""
        })
        return sessionCFields
    }

    useEffect(() => {
        updateContentComponentId("submission")
    }, [])

    return(
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <TextFieldCustom fullWidth value="Section A" readOnly style={titleSectionStyle}/>
            </Grid>
            <Grid item xs={12}>
                <RegistrationForm 
                    fields={getSessionAFormField()}
                    submitForm={(data)=>{return}}
                    formId={"sessionasubmission"}
                    defaultValue={data[0]}
                />
            </Grid>            
            <Grid item xs={12}>
                <TextFieldCustom fullWidth value="Section B" readOnly style={titleSectionStyle}/>
            </Grid>
            <Grid item xs={12}>
                <RegistrationForm 
                    fields={getSessionBFormField()}
                    submitForm={(data)=>{return}}
                    formId={"sessionbsubmission"}
                    defaultValue={data[1]}
                />
            </Grid>

            <Grid item xs={12}>
                <TextFieldCustom fullWidth value="Section C" readOnly style={titleSectionStyle}/>
            </Grid>
            <Grid item xs={12}>
                <RegistrationForm 
                    fields={getSessionCFormField()}
                    submitForm={(data)=>{return}}
                    formId={"sessioncsubmission"}
                    defaultValue={data[2]}
                />
            </Grid>
        </Grid>
    )
}
export default Submission