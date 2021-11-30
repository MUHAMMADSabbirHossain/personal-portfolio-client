import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import {
  NavLink
} from "react-router-dom";
import './Menubar.css';

const drawerWidth = 65;

function Menubar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
              <div className="menuItems-top menuItems-common">
            <NavLink title="Home" style={{color: "lightgray"}} to="/"><i className="fas fa-home"></i></NavLink>
            <NavLink title="About Me" style={isActive => ({color: isActive ? "#d11818" : "lightgray"})} to="/about"><i className="far fa-user"></i></NavLink>
            <NavLink title="Portfolio" style={isActive => ({color: isActive ? "#d11818" : "lightgray"})} to="/portfolio"><i className="far fa-eye"></i></NavLink>
            <NavLink title="Project" style={isActive => ({color: isActive ? "#d11818" : "lightgray"})} to="/project"><i className="far fa-chart-bar"></i></NavLink>
            <NavLink title="Blog" style={isActive => ({color: isActive ? "#d11818" : "lightgray"})} to="/blog"><i className="fas fa-blog"></i></NavLink>
            <NavLink title="Contact" style={isActive => ({color: isActive ? "#d11818" : "lightgray"})} to="/contact"><i className="far fa-address-card"></i></NavLink>
          </div>
          );
    const drawerBottom = (
        <div className="menuItems-bottom menuItems-common">
        <a title="Facebook" href="https://www.facebook.com/simplysamiul" target="_blank"><i className="fab fa-facebook-square"></i></a>
        <a title="Linkdin" href="https://www.linkedin.com/in/simplysamiul/" target="_blank"><i className="fab fa-linkedin"></i></a>
        <a title="Github" href="https://github.com/simplysamiul" target="_blank"><i className="fab fa-github-square"></i></a>
      </div>
    );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },}}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders">
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
          {drawerBottom}
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
          {drawerBottom}
        </Drawer>
      </Box>
    </Box>
  );
}

Menubar.propTypes = {
  window: PropTypes.func,
};

export default Menubar;
