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

const messages = [
  {
    id: 2,
    primary: "John Doe",
    secondary: `Admin`,
    person: "/static/images/avatar/1.jpg"
  }
];

export default function BottomAppBar() {
  return (
    <React.Fragment>
      {/* <CssBaseline /> */}

      <List style={{paddingTop: 0, paddingBottom: 0}}>
        {messages.map(({ id, primary, secondary, person }) => (
          <React.Fragment key={id}>
            <ListItem button style={{marginTop: 0, paddingTop: 0, paddingBottom: 0}}>
              <ListItemAvatar>
                <Avatar alt="Profile Picture" src={person} />
              </ListItemAvatar>
              <ListItemText primary={primary} secondary={secondary} />
              <ListItemIcon style={{marginLeft: "15px"}}>
                  <ExpandMoreIcon/>
              </ListItemIcon>
            </ListItem>
          </React.Fragment>
        ))}
      </List>
    </React.Fragment>
  );
}
