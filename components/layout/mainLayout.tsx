/**
 * là giao diện toàn app, chứa sidebar, content, header, footer
 * props: children (nội dung của content)
 * mục đích chỉ chia route tới registration và dashboard, mà cần link giữa label timeline active và label trên sidebar
 * vì vậy cần state lưu lại trạng thái sidebar, truyền trạng thái này vào content và có hàm callback để set lại nếu click trên timeline ở sidebar hoặc các mục con
 * state: trạng thái hiện tại của sidebar(đang chọn mục nào...)
 * truyền trạng thái sidebar, callback qua useContext
 */

import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Sidebar } from './sidebar/sidebar';
import Styles from "./mainLayout.module.css";
import { MainContextProvider } from '../../context/MainContext'
import ButtonAppBar from './header/header';
import MainContent from './content';
import Image from 'next/image';

const drawerWidth = 300;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
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
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
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
  paddingBottom: 0,
  paddingTop: 0,
  boxSizing: "border-box",
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  height: "64px",
  justifyContent: 'space-between',
}));

export default function PersistentDrawerLeft(props: { children: any, titleContent?: string }) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <MainContextProvider>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
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
            width={open ? `calc(100% - ${drawerWidth}px)` : "100%"}
          />
        </AppBar>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              overflowY: "scroll",
              width: drawerWidth,
              boxSizing: 'border-box',
            },
          }}
          PaperProps={{
            className: Styles["sidebar-area"]
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >

          <DrawerHeader>
            <Image src="/vercel.svg" width={72} height={16} />
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'ltr' ? <MenuIcon /> : <MenuIcon />}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <Sidebar />
        </Drawer>



        <Main open={open} style={{ padding: 0 }}>
          <DrawerHeader />
          <MainContent title={props.titleContent ? props.titleContent : "."}>
            {props.children}
          </MainContent>
        </Main>
      </Box>
    </MainContextProvider>
  );
}

// export {}