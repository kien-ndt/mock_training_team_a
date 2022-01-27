/**
 * Selectbox 
 * 3 classes to custom reduce to 2 (2 props style)
 */
import * as React from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Styles from './selectbox.module.css';


type optionValueType = {
    label: string,
}

type propsType = {
    name?: string
    placeholder?: string
    value?: optionValueType | undefined
    /**
     * array of choices, compulsory property: label
     */
    options?: Array<optionValueType>
    readOnly?: boolean
    fullWidth?: boolean
    style?: React.CSSProperties
    itemStyle?: React.CSSProperties
    onChange?: (params: any) => void
}

 function SelectBoxCustom(props: propsType) {

    const {name, placeholder, value, options, readOnly, onChange, itemStyle, style, fullWidth} = props

    const elementStyle = style?style:{}
    const itemElementStyle = itemStyle?itemStyle:{}


    if (!fullWidth) {
        elementStyle.width = "200px"
        itemElementStyle.width = "200px"
    }


    return (
        <>
        <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            name={name?name:""}
            value={''}
            onChange={onChange?onChange:()=>{return}}
            className={Styles["select-box-mock"]}
            style={elementStyle}
            displayEmpty
            fullWidth={fullWidth?fullWidth:false}
            readOnly={readOnly?readOnly:false}
            SelectDisplayProps={{
                className: Styles["select-box-mock-contain"]
            }}
            
            renderValue={(selected) => {
                if (selected === '') {
                  return <div style={{color: "#aaa"}}>{placeholder}</div>;
                }    
                return selected;
            }}
        >
            {
                options && options.length > 0 &&
                options.map((option, index) => (
                    <MenuItem 
                        key={index+"menuitem"}
                        className={Styles["option-select-box-mock"]} 
                        style={itemElementStyle}
                        value={option.label}>
                            {option.label}
                    </MenuItem>
                ))
            }
        </Select>
        </>
    );
 }
 
export default SelectBoxCustom