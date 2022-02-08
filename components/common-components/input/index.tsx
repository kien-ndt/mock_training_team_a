/**
 * textfield
 */
import React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import TextField from '@mui/material/TextField';
import Styles from "./input.module.css"

type propsType = {
    /**
     * placeholder value
     */
    placeholder?: string
    /**
     * value in input
     */
    value?: string
    /**
     * can edit or not
     */
    readOnly?: boolean
    /**
     * same size to container
     */
    fullWidth?:boolean
    name?: string
    /**
     * style custom
     */
    style?:React.CSSProperties
    onChange?: (params: any) => void
}
const TextFieldCustom = React.forwardRef((props: propsType, ref: any) => {

    const {name, placeholder, value, readOnly, onChange, fullWidth, style} = props

    const elementStyle = style? style: {};

    if (!fullWidth && !style?.width) {
        elementStyle.width = "200px"
    }

    return(
        <>
            <TextField
                ref={ref}
                variant={readOnly?"standard":"outlined"}
                id="outlined-weight"
                name={name?name:"input-name"}
                fullWidth={fullWidth?fullWidth:false}
                placeholder={placeholder?placeholder:""}
                value={value?value:""}   
                // readOnly={readOnly?readOnly:false}       
                disabled={readOnly?readOnly:false}
                onChange={onChange?onChange:()=>{return}}                    
                inputProps={readOnly?{
                    className: Styles["outline-input"] + " " + Styles["disabled"],
                    style: elementStyle,  
                }:{
                    className: Styles["outline-input"],
                    style: elementStyle,  
                }}
                InputProps={
                    readOnly?{disableUnderline: true}:{}
                }                
            />
        </>
    )
})

export default TextFieldCustom