import { useState } from 'react';
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  Button,
  Switch,
  FormControlLabel,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

import MenuIcon from '@mui/icons-material/Menu';
import navItems from 'data/navItems';

console.log(navItems)

const drawerWidth = 240;

const DrawerAppBar = (props) => {
  const { window, setLightTheme } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleThemeToggle = (event) => {
    setLightTheme(!event.target.checked);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle}>
      <List>
        {navItems.map((item) => (
          <ListItem key={item?.id} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }} to={item?.link} component={RouterLink}>
              <ListItemText primary={item?.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <AppBar component="nav"  position="static">
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
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, textAlign: 'left' }}
          > </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item.id} sx={{ color: '#fff' }} to={item?.link} component={RouterLink}>
                {item?.title}
              </Button>
            ))}
              <FormControlLabel
                onChange={handleThemeToggle}
                label="Dark Mode"
                control={<Switch defaultChecked />}
              />
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
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
      </Box>
    </>
  );
}

export default DrawerAppBar;
