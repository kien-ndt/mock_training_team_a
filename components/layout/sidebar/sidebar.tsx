import React, { useContext, useEffect } from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Collapse from '@mui/material/Collapse';
import GridViewIcon from '@mui/icons-material/GridView';
import { useState } from 'react';
import Styles from './sidebar.module.css'
import SelectBoxCustom from '../../common-components/selectbox';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { ListItem } from 'material-ui';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import IconButton from '@mui/material/IconButton';
import ButtonAppBar from '../header/header';
import { listSidebarItem, inputSidebarItem } from './sidebar.item';
import { MainContext } from '../../../context/MainContext';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      {/* <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Persistent drawer
          </Typography>
        </Toolbar>
      </AppBar> */}
       <AppBar position="fixed" open={open} >
      <ButtonAppBar 
        iconSidebar={          
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
        }
      />
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        
        <Divider />
       <Sidebar/>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        
        <Typography paragraph>
          
        </Typography>
      </Main>
    </Box>
  );
}


export function Sidebar() {
    const [open, setOpen] = useState<any>({});
    const { contentComponentId } = useContext(MainContext)

    const listItem: Array<inputSidebarItem> = listSidebarItem;

    // const getKey = (depth: number, index: number):string => {
    //     return String(depth) + "-"+ String(index);
    // }

    const isListItemActive = (elementId: string, contentComponentId: string, depth: number):boolean => {
      const listComponentId = contentComponentId.split('/');
      let idCompare: string = "";
      for (let i=0; i<=depth; i++) {
        idCompare = idCompare + (i!==0?"/":"") + listComponentId[i]
      }
      if (elementId.localeCompare(idCompare) === 0) return true
      return false;
    }

    useEffect(() => {
      if (contentComponentId) {
        let openStatus: any = {...open}
        const listComponentId = contentComponentId.split('/');
        let idSplit: string = "";
        for (let i=0; i<listComponentId.length; i++) {
          idSplit = idSplit + (i!==0?"/":"") + listComponentId[i]
          openStatus[idSplit] = true
        }
        setOpen(openStatus)
      }
    }, [contentComponentId])

    /**
     * container: one row contain icon - label - icon
     * icon: style for all lv icon
     * text: style for all lv text
     * lv+number: style for special lv
     * go to childComponent -> increase depth and wrap in Collapse, call recursive generateListComponent
     */
    const generateListComponent = (list: Array<inputSidebarItem>, depth: number = 0): JSX.Element => {
        let res: Array<JSX.Element> = [];

        if (list && list.length > 0) {
            list.forEach((element, index) => {
                let handleClickOpen = () => {
                    return;
                }
                if (element.childComponents && element.childComponents.length >0){
                    handleClickOpen = () => {
                        let newStateOpen = {...open};
                        if (newStateOpen[element.id] === false || newStateOpen[element.id] === true) {
                            newStateOpen[element.id] = !newStateOpen[element.id]
                        }
                        else {
                            newStateOpen[element.id] = true
                        }
                        setOpen(newStateOpen)
                    }
                }
                res.push(
                    <ListItemButton 
                        onClick = {() => {handleClickOpen(); if(element.onClick)element.onClick()}} 
                        key={element.id + index}
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
                            primaryTypographyProps={
                              {
                                className: isListItemActive(element.id, contentComponentId, depth)?
                                            Styles["text"] + " " + Styles[String("lv"+depth)]  + " " + Styles["active"]:
                                            Styles["text"] + " " + Styles[String("lv"+depth)]
                              }
                            }
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
                    <Collapse in={typeof open[element.id] === "boolean"?open[element.id]:false} timeout={500} unmountOnExit={undefined} key={element.id+" collape" + index}>
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
        style={{maxWidth: 400}}
            
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


