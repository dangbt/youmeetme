import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import { Home, Email, Face, Cancel } from '@material-ui/icons'

export const mailFolderListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <Home />
      </ListItemIcon>
      <ListItemText primary="Home" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <Email />
      </ListItemIcon>
      <ListItemText primary="Chat" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <Face />
      </ListItemIcon>
      <ListItemText primary="Profile" />
    </ListItem>
   
  </div>
);

export const otherMailFolderListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <Cancel />
      </ListItemIcon>
      <ListItemText primary="Log out" />
    </ListItem>
    
  </div>
);