/**
 * textfield
 */
import React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
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

    if (!fullWidth) {
        elementStyle.width = "200px"
    }

    return(
        <>
            <OutlinedInput
                ref={ref}
                id="outlined-weight"
                name={name?name:"input-name"}
                fullWidth={fullWidth?fullWidth:false}
                placeholder={placeholder?placeholder:""}
                value={value?value:""}   
                readOnly={readOnly?readOnly:false}       
                onChange={onChange?onChange:()=>{return}}      
                inputProps={{
                    className: Styles["outline-input"],
                    style: elementStyle
                }}
            />
        </>
    )
})

export default TextFieldCustom