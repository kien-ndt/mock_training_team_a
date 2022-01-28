/**
 * form có ở section A và submission
 * session A cho phép edit, submission disable
 * react-hook-form
 * https://mui.com/components/grid/
 * sử dụng grid để chia bố cục
 */
import React from 'react';
import { useForm, Controller  } from 'react-hook-form'
import { formInput } from './formInput'
import TextFieldCustom from '../../../common-components/input';
import SelectBoxCustom from '../../../common-components/selectbox'
import { idFormSectionA } from './constants'
import Grid from '@mui/material/Grid';
import LabelForm from './labelForm';

type propsType = {
    fields: Array<formInput>
    submitForm: (data: any) => void
    formId: string
}

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
                            <LabelForm label={item.label} bold/>
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