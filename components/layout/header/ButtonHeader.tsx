import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LogoutIcon from '@mui/icons-material/Logout';
import TuneIcon from '@mui/icons-material/Tune';
import BottomAppBar from './buttonInfo';
import { makeStyles } from '@mui/styles';

type Props = {

  acc: string;
  size: "small" | "medium" | "large" | undefined

}

export default function IconButtons() {

  const useStyles = makeStyles({
    corlorText: {
      color: 'yellow',
    }
  })

  const classes = useStyles();
  return (
    <Stack direction="row" spacing={1}>
      <IconButton style={{ paddingTop: 0, paddingBottom: 0 }} className={classes.corlorText}>
        <SearchIcon />
      </IconButton>
      <IconButton style={{ paddingTop: 0, paddingBottom: 0 }} className={classes.corlorText}>
        <TuneIcon />
      </IconButton>
      <IconButton style={{ paddingTop: 0, paddingBottom: 0 }} className={classes.corlorText}>
        <NotificationsNoneIcon />
      </IconButton>
      <BottomAppBar />
      <IconButton style={{ paddingTop: 0, paddingBottom: 0 }} className={classes.corlorText}>
        <LogoutIcon />
      </IconButton>
    </Stack>
  );
} 