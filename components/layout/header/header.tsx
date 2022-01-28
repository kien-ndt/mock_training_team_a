import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import greens  from '@mui/material/colors';
import IconButtons from "./ButtonHeader";
import BottomAppBar from "./DropDownList";
import Styles from './header.module.css'

type inputProps = {
    iconSidebar: JSX.Element
    width: string
}
export default function ButtonAppBar(props: inputProps) {
    
    const {iconSidebar, width} = props
  
    return (
        <React.Fragment>
            <div className={Styles['container']} style={{width: width}}>
                {iconSidebar}
                <div></div>
                <div className={Styles['tool-button']}> 
                   <IconButtons/>     

                </div> 
            </div>
        
        </React.Fragment>
  );
}