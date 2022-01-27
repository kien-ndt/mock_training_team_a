import React from 'react';
import Styles from "./common.registration.module.css"
type propsType = {
    style?: React.CSSProperties
    label: string
    bold?: boolean
}
function LabelForm(props: propsType) {

    const {style, label, bold} = props

    let elementStyle = style?style:{}

    if (bold) {
        elementStyle.fontWeight = "bold"
    }

    return(
        <>
            <div className={Styles["label"]} style={elementStyle}>
                {label}
            </div>
        </>
    )
}

export default LabelForm