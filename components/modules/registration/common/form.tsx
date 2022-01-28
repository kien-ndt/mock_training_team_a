/**
 * form có ở section A và submission
 * session A cho phép edit, submission disable
 * react-hook-form
 * https://mui.com/components/grid/
 * sử dụng grid để chia bố cục
 */
import React from 'react';
import { useForm, Controller  } from 'react-hook-form'
import { formInput } from './commonType'
import TextFieldCustom from '../../../common-components/input';
import SelectBoxCustom from '../../../common-components/selectbox'
import Grid from '@mui/material/Grid';
import LabelForm from './labelForm';

/**
 * fields -> list fields of form, contains properties: label (which show to screen), rules: validate form (inprogress)
 *              property (field form return), type (selectbox or input) and optionsSelect: option for selectbox, compulsory property - label
 * submitForm -> callback submitform
 * formId -> id form, serve for submiting button outside form <button type='submit' form={formId}/>
 */
type propsType = {
    fields: Array<formInput>
    submitForm: (data: any) => void
    formId: string
}

/**
 * template form component, receive array input props fields, callback submitForm and formId to be submitted from anywhere
 */
function RegistrationForm(props: propsType) {
    const { control, handleSubmit } = useForm();

    const {fields, submitForm, formId} = props;

    return (
        <form onSubmit={handleSubmit(submitForm)} id={formId}>
            <Grid container spacing={2}>
            {
                fields && fields.length > 0 &&
                fields.map((item, index) => (
                    <React.Fragment key={"controlel"+index}>                    
                        <Grid item xs={4}>
                            <LabelForm label={item.label} style={item.labelStyle}/>
                        </Grid>
                        <Grid item xs={8}>
                            <Controller
                                name={item.property}
                                rules={item.rules}
                                control={control}
                                render={
                                    ({ field }) => {
                                        if (item.type === "input") {
                                            return <TextFieldCustom {...field} fullWidth placeholder={item.placeholder}/>
                                        }
                                        else{
                                            return <SelectBoxCustom {...field} fullWidth options={item.optionsSelect} placeholder={item.placeholder}/>
                                        }
                                    }
                                }
                            />
                            
                        </Grid>
                    </React.Fragment>
                ))
            }
            
            </Grid>
        </form>
    );


}
export default RegistrationForm