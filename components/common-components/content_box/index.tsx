/**
 * phần màu trắng trong các hình
 * props: chidren (các component nó bọc) array button (góc phải dưới chân trang)
 * output ra được: paper, có phần children ở giữa trang, và các array button ở góc phải cuối trang
 */
import React from "react"
import Styles from "./contentBox.module.css"
import ButtonUI from "../button/index"

type inputProps = {
    children?: any
    listButtons?: Array<JSX.Element>
    nextButton?: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
    backButton?: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
}

function ContentBox(props: inputProps){

    const {children, listButtons, backButton, nextButton} = props

    return(
        <div className={Styles["content-box-container"]}>            
            <div className={Styles["content-box-content"]}>
                {children}
            </div>  
            <div className={Styles["content-box-footer"]}>
                {
                    backButton &&
                    <button {...backButton}>back</button>
                }
                {
                    nextButton &&                    
                    <button {...nextButton}>next</button>
                }
            </div>              
        </div>
    )
}

export default ContentBox
