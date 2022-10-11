import React, { useState } from 'react'
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import DirectionsBusFilledIcon from '@mui/icons-material/DirectionsBusFilled';
import Person4Icon from '@mui/icons-material/Person4';
import { Link } from 'react-router-dom';
import { Avatar } from '@mui/material';

const drawerWidth = 240;

export const LayoutDrawer = (props) => {

    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const container = window !== undefined ? () => window().document.body : undefined;

    const drawer = (
        <div>
          <Toolbar>
          <Box display='flex' alignItems="center" justifyContent="center" textAlign="center">
            <Avatar alt="Mvatar png" src="#" />
            <Typography sx={{ ml: 2 }}><b>Jeff Mendez</b></Typography>
          </Box>
          </Toolbar>
          <Divider />
          <List>
            <ListItem key={'vehiculos'} disablePadding>
                <ListItemButton component={Link} to="/vehiculos">
                    <ListItemIcon>
                    <DirectionsBusFilledIcon />
                    </ListItemIcon>
                    <ListItemText primary={'Vehiculos'} />
                </ListItemButton>
            </ListItem>
            <ListItem key={'conductores'} disablePadding>
                <ListItemButton component={Link} to="/conductores">
                    <ListItemIcon>
                    <Person4Icon />
                    </ListItemIcon>
                    <ListItemText primary={'Conductores'} />
                </ListItemButton>  
            </ListItem> 
          </List>
          <Divider />
        </div>
    );

    return (
        <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar
            position="fixed"
            sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
            }}
        >
            <Toolbar>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: 'none' } }}
            >
                <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
                Mi camioncito
            </Typography>
            </Toolbar>
        </AppBar>

        <Box
            component="nav"
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
            aria-label="mailbox folders"
        >
            <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
                keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
                display: { xs: 'block', sm: 'none' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
            >
            {drawer}
            </Drawer>
            <Drawer
            variant="permanent"
            sx={{
                display: { xs: 'none', sm: 'block' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
            open
            >
            {drawer}
            </Drawer>
        </Box>




        <Box
            component="main"
            sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
        >
            <Toolbar />
            { props.children }
        </Box>
        </Box>
    )
}

