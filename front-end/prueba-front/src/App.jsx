import { useState } from 'react'
import './App.css'
import '@fontsource/roboto'
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
import { AppRouter } from './router/AppRouter';

const drawerWidth = 240;

function App() {
  return (
    <BrowserRouter> 
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
