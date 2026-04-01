import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Logo from '../assets/Logo.jpg';
import { useTheme } from '../ThemeContext.tsx';
import './Navbar.css'

function ResponsiveAppBar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <AppBar position="sticky" elevation={0} sx={{ backgroundColor: 'var(--color-navbar-bg)', borderBottom: '1px solid var(--color-border-light)', transition: 'background-color 0.2s ease' }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ minHeight: { xs: 64, md: 72 } }}>
          <Box component="a" href="#" className='navbar-logo-container'>
            <img src={Logo} alt="Marty Plattenbeläge Logo" className='navbar-logo' />
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                color: 'var(--color-text)',
                fontSize: { xs: '1rem', md: '1.15rem' },
                letterSpacing: '-0.01em',
              }}
            >
              Marty Plattenbeläge
            </Typography>
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Box component="nav" sx={{ display: 'flex', gap: 3, alignItems: 'center' }}>
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
            <IconButton
              onClick={toggleTheme}
              size="small"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              sx={{ color: 'var(--color-text-secondary)' }}
            >
              {theme === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
