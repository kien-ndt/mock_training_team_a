import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LogoutIcon from '@mui/icons-material/Logout';
import TuneIcon from '@mui/icons-material/Tune';
import BottomAppBar from './dropDownList';
import { makeStyles } from '@mui/styles';

type Props = {

  acc: string;
  size: "small" | "medium" | "large" | undefined


}

const useStyles = makeStyles({
  root: {
    color: 'white',
  }
})



export default function IconButtons() {
  const classes = useStyles();
  return (
    <Stack direction="row" spacing={1}>
      <IconButton style={{ paddingTop: 0, paddingBottom: 0 }} className={classes.root}>
        <SearchIcon />
      </IconButton>
      <IconButton style={{ paddingTop: 0, paddingBottom: 0 }} className={classes.root}>
        <TuneIcon />
      </IconButton>
      <IconButton style={{ paddingTop: 0, paddingBottom: 0 }} className={classes.root}>
        <NotificationsNoneIcon />
      </IconButton>
      <BottomAppBar />
      <IconButton style={{ paddingTop: 0, paddingBottom: 0 }} className={classes.root}>
        <LogoutIcon />
      </IconButton>
    </Stack>
  );
} 