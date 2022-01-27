/**
 * https://mui.com/components/pagination/
 */
import React, { FC, useEffect, useState } from 'react';
import Styles from './pagination.module.css'
import Button from '@mui/material/Button';

type propsType = {
    /**
     * summary pages
     */
    count: number
    /**
     * current page
     */
    page: number
    /**
     * callback when choosing new page
     */
    onPageChange?: (newPage: number) => void
    /**
     * show button back or next 1 page
     */
    showNearButton?: true
    /**
     * show button back to first or next to last page
     */
    showLastButton?: true
    /**
     * count pages will showed in pagination
     */
    countPagesShow: number

    /**
     * custom style button
     */
    buttonStyle?: React.CSSProperties
    /**
     * container pagination style
     */
    containerStyle?: React.CSSProperties
}

/**
 * Pagination
 */
function PaginationButtons(props: propsType) {

    const {count, page, onPageChange, showNearButton, showLastButton, countPagesShow, buttonStyle, containerStyle} = props

    let elementButtonStyle = buttonStyle?buttonStyle:{}
    let elementContainerStyle = containerStyle?containerStyle:{}

    const [state, setState] = useState<number>(page)

    useEffect(() => {
        setState(page)
    }, [page])

    const handlePageChange = (params: number):void => {
        setState(params);
        onPageChange?onPageChange(params):undefined;
    }

    /**
     * create one page button
     */
    const generateButton= (numberPageWillCreated: number):JSX.Element => {
        return(
            <Button 
                key={"newbutton"+numberPageWillCreated}
                className={state===numberPageWillCreated?Styles["button"]+' '+ Styles["active"]:Styles["button"]}  
                variant="contained"
                onClick={() => handlePageChange(numberPageWillCreated)}
                style={elementButtonStyle}
            >
                {numberPageWillCreated}                
            </Button>
        )
    }

    /**
     * create list page buttons
     */
     const generateListButton = () => {

        let listButtonComponent: JSX.Element[] = [];

        let numberButtonBefore = 0;
        let numberButtonAfter = 0;

        numberButtonBefore = Math.floor((countPagesShow - 1)/2)
        numberButtonAfter = countPagesShow - 1 - numberButtonBefore;
        while (state - numberButtonBefore < 1) {
            numberButtonBefore -= 1;
            numberButtonAfter += 1;
        }
        while (state + numberButtonAfter > count) {
            numberButtonAfter -= 1;
            if (state - numberButtonBefore -1 >= 1) {
                numberButtonBefore += 1
            }
        }

        for (let i=state-numberButtonBefore; i<state; i++) {
            listButtonComponent.push(generateButton(i));
        }
        for (let i=state; i<=state + numberButtonAfter; i++) {
            listButtonComponent.push(generateButton(i));
        }

        return (
            <>
                {listButtonComponent}
            </>
        )

    }

    const handleNearBeforeClick = () => {
        handlePageChange(state-1>0?state-1:state);
    }

    const handleFirstClick = () => {
        handlePageChange(1);
    }

    const handleNearAfterClick = () => {
        handlePageChange(state+1<=count?state+1:state);
    }

    const handleLastClick = () => {
        handlePageChange(count);
    }

    return (
        <div className={Styles["container"]} style={elementContainerStyle}>
            {
                showLastButton && 
                <Button 
                    className={Styles["button"]}  
                    variant="contained"
                    disabled={state===1?true:false}
                    onClick={handleFirstClick}
                    style={elementButtonStyle}
                >
                    {"<<"}
                </Button>
            }
            {
                showNearButton && 
                <Button 
                    className={Styles["button"]}  
                    variant="contained"                    
                    disabled={state===1?true:false}
                    onClick={handleNearBeforeClick}
                    style={elementButtonStyle}
                >
                    {"<"}
                </Button>
            }      
            {
                generateListButton()
            }      
            {
                showNearButton && 
                <Button
                    className={Styles["button"]}  
                    variant="contained"
                    disabled={state===count?true:false}
                    onClick={handleNearAfterClick}
                    style={elementButtonStyle}
                >
                    {">"}
                </Button>
            }
            {
                showLastButton && 
                <Button
                    className={Styles["button"]}  
                    variant="contained"
                    disabled={state===count?true:false}
                    onClick={handleLastClick}
                    style={elementButtonStyle}
                >
                    {">>"}
                </Button>
            }
        </div>

    );
}
export default PaginationButtons