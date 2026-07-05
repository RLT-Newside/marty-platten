import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Logo from '../assets/Logo.jpg';
import './Navbar.css'

function ResponsiveAppBar() {
  return (
    <AppBar position="sticky" elevation={0} sx={{ backgroundColor: '#ffffff', borderBottom: '1px solid #e0e4e8' }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ minHeight: { xs: 64, md: 72 } }}>
          <Box component="a" href="#" className='navbar-logo-container'>
            <img src={Logo} alt="Marty Plattenbeläge Logo" className='navbar-logo' />
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                color: '#1a2332',
                fontSize: { xs: '1rem', md: '1.15rem' },
                letterSpacing: '-0.01em',
              }}
            >
              Marty Plattenbeläge
            </Typography>
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Box component="nav" sx={{ display: 'flex', gap: 3 }}>
            <Typography
              component="a"
              href="#galerie"
              className="navbar-link"
            >
              Galerie
            </Typography>
            <Typography
              component="a"
              href="#leistungen"
              className="navbar-link"
            >
              Leistungen
            </Typography>
            <Typography
              component="a"
              href="#kontakt"
              className="navbar-link"
            >
              Kontakt
            </Typography>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
