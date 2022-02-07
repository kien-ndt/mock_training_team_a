/**
 * Selectbox 
 * 3 classes to custom reduce to 2 (2 props style)
 */
import * as React from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Styles from './selectbox.module.css';
import { optionValueTypeSelectBox } from '../custom-type'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

type propsType = {
    name?: string
    placeholder?: string
    value?: optionValueTypeSelectBox | undefined
    /**
     * array of choices, compulsory property: label
     */
    options?: Array<optionValueTypeSelectBox>
    readOnly?: boolean
    fullWidth?: boolean
    style?: React.CSSProperties
    itemStyle?: React.CSSProperties
    onChange?: (params: any) => void
    defaultValue?: optionValueTypeSelectBox | undefined
}

const SelectBoxCustom = React.forwardRef((props: propsType, ref: any) => {

    const { name, placeholder, value, options, readOnly, onChange, itemStyle, style, fullWidth, defaultValue } = props

    const elementStyle = style ? style : {}
    const itemElementStyle = itemStyle ? itemStyle : {}


    if (!fullWidth) {
        elementStyle.width = style?.width ? style.width : "200px";
        itemElementStyle.width = style?.width ? style.width : "200px";
    }


    return (
        <>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                ref={ref}
                name={name ? name : ""}
                value={value ? value : ""}
                onChange={onChange ? onChange : () => { return }}
                className={Styles["select-box-mock"]}
                style={elementStyle}
                displayEmpty
                // defaultValue={defaultValue ? defaultValue : { label: "" }}
                fullWidth={fullWidth ? fullWidth : false}
                readOnly={readOnly ? readOnly : false}
                SelectDisplayProps={{
                    className: Styles["select-box-mock-contain"]
                }}
                MenuProps={{
                    disableScrollLock: true,
                }}
                // IconComponent={() => (
                //     <ChevronLeftIcon />
                // )}
                renderValue={(selected) => {
                    if (selected === '') {
                        return <div style={{ color: "#aaa" }}>{placeholder}</div>;
                    }
                    return selected;
                }}
            >
                {
                    options && options.length > 0 &&
                    options.map((option, index) => (
                        <MenuItem
                            key={index + "menuitem"}
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
)
export default SelectBoxCustom