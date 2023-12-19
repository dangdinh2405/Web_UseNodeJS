import * as React from 'react';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import AssignmentIcon from '@mui/icons-material/Assignment';

const StudentSideBar = () => {
    const location = useLocation();
    return (
        <>
            <List sx={{ display: 'flex' }}>
                <ListItem component={Link} to="/" sx={{ flexGrow: 1 }}>
                    <ListItemIcon>
                        <HomeIcon color={location.pathname === ("/" || "/Student/dashboard") ? 'primary' : 'inherit'} />
                    </ListItemIcon>
                    <ListItemText primary="Home" />
                </ListItem>
                <ListItem component={Link} to="/Student/sections">
                    <ListItemIcon>
                        <AssignmentIcon color={location.pathname.startsWith("/Student/sections") ? 'primary' : 'inherit'} />
                    </ListItemIcon>
                    <ListItemText primary="Sections" />
                </ListItem>
                </List>
        </>
    )
}

export default StudentSideBar