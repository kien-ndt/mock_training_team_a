/**
 * bố cục chung nằm trong contextBox (bọc sau)
 */
import React, { useEffect, useState } from 'react'
import ContentBox from '../../common-components/content_box'
import SectionA from './sectionA'
import SectionB from './sectionB'
import SectionC from './sectionC'
import {idFormSectionA, idFormSectionB, idFormSectionC} from './common/constants'
import Stepper from '../../../pages/registration/stepper'
import Styles from './registration.module.css'

/**
 * step: 1-5
 * submitData: data of all steps, value one step: submitData[step]
 */
type stateType = {
    step: number
    submitData?: any
}
function RegistrationComponent(){

    const [state, setState] = useState<stateType>({
        step: 0
    })

    const totalStep = 5

    /**
     * custom action when click next button
     * @param step current step
     * @param data data will submit in step
     */
    const submitCurrentStep = (step: number, data: any):void => {
        let newSubmitData: any = state.submitData?{...state.submitData}:{}
        newSubmitData[step] = data;
        setState({
            step: step + 1,
            submitData: newSubmitData
        })
    }

    /**
     * Back to previous registration component
     * @param step current step
     */
    const backClick = (step: number):void => {
        let newSubmitData: any = state.submitData?{...state.submitData}:{}
        // newSubmitData[step] = undefined;
        setState({
            step: step - 1,
            submitData: newSubmitData
        })
    }
    const listRegistrationComponentsName: Array<string> = [
        "company information",
        "section b",
        "section c",
        "upload the following documents",
        "submission"
    ]
    /**
     * List component according steps in registration
     */
    const listRegistrationComponents: Array<JSX.Element> = [
        <SectionA submitForm={(data: any) => submitCurrentStep(state.step, data)} formId={idFormSectionA}/>, 
        <SectionB submitForm={(data: any) => submitCurrentStep(state.step, data)} formId={idFormSectionB}/>, 
        <SectionC submitForm={(data: any) => submitCurrentStep(state.step, data)} formId={idFormSectionC}/>
    ]
    /**
     * List id form
     */
    const listIdForm: Array<string> = [idFormSectionA, idFormSectionB, idFormSectionC]
    /**
     * Get component according step
     */
    const getRegistrationComponents = (step: number): JSX.Element => {
        return listRegistrationComponents[step]
    }
    /**
     * Get id component will be submitted
     */
    const getRegistrationFormId = (step: number): string => {
        return listIdForm[step]
    }

    return(
        <ContentBox 
            backButton={{onClick: () => backClick(state.step)}}
            nextButton={{type: "submit", form: getRegistrationFormId(state.step)}}
        >            
            <Stepper step={String(state.step+1)} />
            <h4 className={Styles["registration-note"]}>Step {state.step+1}/{totalStep}</h4>            
            <h2 className={Styles["registration-title"]}>{listRegistrationComponentsName[state.step]}</h2>
            {getRegistrationComponents(state.step)}
        </ContentBox>
    )
}
export default RegistrationComponent