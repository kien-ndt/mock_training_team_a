import React, { useEffect } from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Collapse from '@mui/material/Collapse';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import GridViewIcon from '@mui/icons-material/GridView';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useState } from 'react';
import Styles from './sidebar.module.css'
import SelectBoxCustom from '../../common-components/selectbox';
/**
 * sidebar
 */
function Sidebar() {
    const [open, setOpen] = useState<any>({});

    /**
     * type input convert to component
     * icon -> first icon of row
     * label -> label of row
     * label2 -> other label, under label
     * endIcon -> icon end of row
     * childComponents -> items in dropdown
     */
    type inputItems = {
        icon?: JSX.Element
        label: string
        label2?: string
        endIcon?:JSX.Element
        childComponents?: Array<inputItems>
    }

    const listItem: Array<inputItems> = [
        {
            icon: <HomeOutlinedIcon style={{fontWeight: 900}} sx={{fontWeight: 900}} />,
            label: "Dashboard",
            childComponents: [
                {
                    icon: <GridViewIcon/>,
                    label: "Perimeter Protection",
                    endIcon: <ChevronRightIcon />
                },
                {
                    icon: <GridViewIcon />,
                    label: "Asset Protection",
                    endIcon: <ChevronRightIcon />
                },
                {
                    icon: <GridViewIcon />,
                    label: "Asset Control",
                    label2: "(Smart Locks)",
                    endIcon: <ChevronRightIcon />
                },
                {
                    icon: <GridViewIcon />,
                    label: "Perimeter Protection",
                    endIcon: <ChevronRightIcon />
                },
                {
                    icon: <GridViewIcon />,
                    label: "Perimeter Protection",
                    endIcon: <ChevronRightIcon />
                },
            ]
        },
        {
            icon: <AppRegistrationIcon />,
            label: "Registration",
            childComponents: [
                {
                    label: "Section A"
                },
                {
                    label: "Section B"
                },
                {
                    label: "Section C"
                },
                {
                    label: "Attachments"
                },
                {
                    label: "Submission"
                },
            ]
        }
    ]

    const getKey = (depth: number, index: number):string => {
        return String(depth) + "-"+ String(index);
    }

    /**
     * container: one row contain icon - label - icon
     * icon: style for all lv icon
     * text: style for all lv text
     * lv+number: style for special lv
     * go to childComponent -> increase depth and wrap in Collapse, call recursive generateListComponent
     */
    const generateListComponent = (list: Array<inputItems>, depth: number = 0): JSX.Element => {
        let res: Array<JSX.Element> = [];

        if (list && list.length > 0) {
            list.forEach((element, index) => {
                let handleClickOpen = () => {
                    return;
                }
                if (element.childComponents && element.childComponents.length >0){
                    handleClickOpen = () => {
                        let newStateOpen = {...open};
                        if (newStateOpen[getKey(depth, index)] === false || newStateOpen[getKey(depth, index)] === true) {
                            newStateOpen[getKey(depth, index)] = !newStateOpen[getKey(depth, index)]
                        }
                        else {
                            newStateOpen[getKey(depth, index)] = true
                        }
                        setOpen(newStateOpen)
                    }
                }
                res.push(
                    <ListItemButton 
                        onClick = {() => handleClickOpen()} 
                        key={getKey(depth, index)}
                        className={Styles["container"] + " " + Styles[String("lv"+depth)]}
                    >
                    {
                        element.icon && 
                        <ListItemIcon 
                            className={Styles["icon"] + " " + Styles[String("lv"+depth)]}
                            
                        >
                            {element.icon}
                        </ListItemIcon>
                    }
                    
                    {
                        !element.icon && 
                        <ListItemIcon 
                            className={Styles["icon"] + " " + Styles[String("lv"+depth)]}
                            style={{visibility: "hidden"}}
                        >
                            <GridViewIcon />
                        </ListItemIcon>
                    }
                    {
                        <ListItemText 
                            // className={Styles["text"] + " " + Styles[String("lv"+depth)]}
                            primaryTypographyProps={{className: Styles["text"] + " " + Styles[String("lv"+depth)]}}
                        >                            
                            <div>{element.label}</div>
                            {element.label2 && <div>{element.label2}</div>}
                        </ListItemText>
                    }
                    {
                        element.endIcon && 
                        <ListItemIcon
                            className={Styles["icon"]}
                        >
                            {element.endIcon}
                        </ListItemIcon>

                    }
                    </ListItemButton>
                )
                if (element.childComponents && element.childComponents.length >0){    
                    res.push(                
                    <Collapse in={typeof open[getKey(depth, index)] === "boolean"?open[getKey(depth, index)]:false} timeout={500} unmountOnExit={undefined} key={getKey(depth, index)+"collape"}>
                        {generateListComponent(element.childComponents, depth+1)}
                    </Collapse>
                    )
                }
            })
        }

        return (
            <>
                {res}
            </>
        );
    }

  return (
      <div>
    <List
        // sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        component="nav"
        disablePadding
        style={{maxWidth: 300}}
            
        subheader={
            <ListSubheader component="div" id="nested-list-subheader">
                <SelectBoxCustom 
                    fullWidth 
                    placeholder='Line of Business'
                />
            </ListSubheader>
        }
    >   
        {
            listItem && listItem.length>0 &&
            generateListComponent(listItem)
        }    
    </List>
    </div>
  );
}

export default Sidebar
