import * as React from "react";

import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";

import DeleteIcon from '@mui/icons-material/Delete';
import Avatar from "@mui/material/Avatar";
import { ListItemIcon } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { makeStyles } from '@mui/styles';



const useStyles = makeStyles({

  textColor: {
    color: 'white'
  }
})

const messages = [
  {
    id: 2,
    primary: "John Doe",
    secondary: `Admin`,
    person: ".../public/favicon.ico"
  }
];

export default function BottomAppBar() {

  const classes = useStyles();
  return (
    <React.Fragment>
      {/* <CssBaseline /> */}

      <List style={{ paddingTop: 0, paddingBottom: 0 }}>
        {messages.map(({ id, primary, secondary, person }) => (
          <React.Fragment key={id}>
            <ListItem button style={{ marginTop: 0, paddingTop: 0, paddingBottom: 0 }}>
              <ListItemAvatar>
                <Avatar alt="Profile Picture" src="/avatar.jpg" />
              </ListItemAvatar>
              <ListItemText primary={primary} secondary={secondary} secondaryTypographyProps={{ color: 'white' }} />
              <ListItemIcon style={{ marginLeft: "15px" }} className={classes.textColor}>
                <ExpandMoreIcon />
              </ListItemIcon>
            </ListItem>
          </React.Fragment>
        ))}
      </List>
    </React.Fragment>
  );
}
