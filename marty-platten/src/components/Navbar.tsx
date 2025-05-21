import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Logo from '../assets/Logo.jpg';
import './Navbar.css'

function ResponsiveAppBar() {
  return (
    <AppBar position="static">
      <Container maxWidth={false}>
        <Toolbar disableGutters>
          <Box component="a" className='navbar-logo-container'>
            <img src={Logo} alt="Logo" className='navbar-logo' />
            </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
