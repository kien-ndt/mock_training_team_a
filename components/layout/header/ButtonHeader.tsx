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


type Props = {

    acc: string;
    size: "small" | "medium" | "large" | undefined


}


// const IconButtons: React.FC<Props> =({acc, size}) => (
//       <Stack direction="row" spacing={1}>
//         <IconButton aria-label="delete" size ={size}>
//          {<acc/>}
//         </IconButton>
        
//       </Stack>
// );
export default function IconButtons() {
    return (
      <Stack direction="row" spacing={1}>
        <IconButton >
          <SearchIcon />
        </IconButton>
        <IconButton >
          <TuneIcon/>
        </IconButton>
        <IconButton >
          <NotificationsNoneIcon />
        </IconButton>
        <IconButton >
          <LogoutIcon />
        </IconButton>
      </Stack>
    );
    } 