import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import AlarmIcon from '@mui/icons-material/Alarm';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LogoutIcon from '@mui/icons-material/Logout';
import TuneIcon from '@mui/icons-material/Tune';
import BottomAppBar from './DropDownList';
import { white } from 'material-ui/styles/colors';


type Props = {

    acc: string;
    size: "small" | "medium" | "large" | undefined


}



export default function IconButtons() {
    return (
      <Stack direction="row" spacing={1}>
        <IconButton style={{paddingTop: 0, paddingBottom: 0}}>
          <SearchIcon />
        </IconButton>
        <IconButton style={{paddingTop: 0, paddingBottom: 0}}>
          <TuneIcon/>
        </IconButton>
        <IconButton style={{paddingTop: 0, paddingBottom: 0}}>
          <NotificationsNoneIcon />
        </IconButton>
        <BottomAppBar/>
        <IconButton style={{paddingTop: 0, paddingBottom: 0}}>
          <LogoutIcon/>
        </IconButton>
      </Stack>
    );
} 