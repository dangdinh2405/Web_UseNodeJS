import * as React from 'react';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

import HomeIcon from "@mui/icons-material/Home";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ClassOutlinedIcon from '@mui/icons-material/ClassOutlined';
import SupervisorAccountOutlinedIcon from '@mui/icons-material/SupervisorAccountOutlined';
import AssignmentIcon from '@mui/icons-material/Assignment';
const SideBar = () => {
    const location = useLocation();
    return (
        <List sx={{ display: 'flex' }}>
            <ListItem component={Link} to="/" sx={{ flexGrow: 1 }}>
                <ListItemIcon>
                    <HomeIcon color={location.pathname === ("/" || "/Admin/dashboard") ? 'primary' : 'inherit'} />
                </ListItemIcon>
                <ListItemText primary="Home" />
            </ListItem>
            <ListItem component={Link} to="/Admin/topics" sx={{ flexGrow: 1 }}>
                <ListItemIcon>
                    <ClassOutlinedIcon color={location.pathname.startsWith('/Admin/topics') ? 'primary' : 'inherit'} />
                </ListItemIcon>
                <ListItemText primary="Topic" />
            </ListItem>
            <ListItem component={Link} to="/Admin/sections" sx={{ flexGrow: 1 }}>
                <ListItemIcon>
                    <AssignmentIcon color={location.pathname.startsWith("/Admin/sections") ? 'primary' : 'inherit'} />
                </ListItemIcon>
                <ListItemText primary="Sections" />
            </ListItem>
            <ListItem component={Link} to="/Admin/teachers" sx={{ flexGrow: 1 }}>
                <ListItemIcon>
                    <SupervisorAccountOutlinedIcon color={location.pathname.startsWith("/Admin/teachers") ? 'primary' : 'inherit'} />
                </ListItemIcon>
                <ListItemText primary="Teachers" />
            </ListItem>
            <ListItem component={Link} to="/Admin/students" sx={{ flexGrow: 1 }}>
                <ListItemIcon>
                    <PersonOutlineIcon color={location.pathname.startsWith("/Admin/students") ? 'primary' : 'inherit'} />
                </ListItemIcon>
                <ListItemText primary="Students" />
            </ListItem>
        </List>
    );
};

export default SideBar;