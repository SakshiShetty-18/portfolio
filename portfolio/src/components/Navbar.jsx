import { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import DarkModeOutlined from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlined from '@mui/icons-material/LightModeOutlined';
import { alpha, useTheme } from '@mui/material/styles';
import { navLinks, profile } from '../data';
import { scrollToId } from './scroll';

export default function Navbar({ mode, onToggle }) {
  const theme = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Highlight the link of the section currently in view.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' }
    );
    navLinks.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const go = (id) => {
    setOpen(false);
    // wait for the drawer to close so scrolling isn't interrupted
    setTimeout(() => scrollToId(id), open ? 250 : 0);
  };

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        color="transparent"
        sx={{
          backdropFilter: scrolled ? 'blur(14px)' : 'none',
          backgroundColor: scrolled ? alpha(theme.palette.background.default, 0.72) : 'transparent',
          borderBottom: 1,
          borderColor: scrolled ? 'divider' : 'transparent',
          transition: 'background-color .3s, border-color .3s',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ minHeight: 64, justifyContent: 'space-between' }}>
            <Typography
              component="a"
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                go('home');
              }}
              variant="h6"
              sx={{ color: 'text.primary', textDecoration: 'none', letterSpacing: '-0.02em' }}
            >
              {profile.name}
              <Box component="span" sx={{ color: 'primary.main' }}>
                .
              </Box>
            </Typography>

            <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 0.5 }}>
              {navLinks.map((l) => (
                <Button
                  key={l.id}
                  onClick={() => go(l.id)}
                  sx={{
                    color: active === l.id ? 'text.primary' : 'text.secondary',
                    px: 1.75,
                    '&:hover': { color: 'text.primary', bgcolor: 'transparent' },
                  }}
                >
                  {l.label}
                </Button>
              ))}
              <IconButton onClick={onToggle} aria-label="Toggle light and dark theme" sx={{ ml: 1 }}>
                {mode === 'dark' ? <LightModeOutlined /> : <DarkModeOutlined />}
              </IconButton>
            </Box>

            <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center' }}>
              <IconButton onClick={onToggle} aria-label="Toggle light and dark theme">
                {mode === 'dark' ? <LightModeOutlined /> : <DarkModeOutlined />}
              </IconButton>
              <IconButton onClick={() => setOpen(true)} aria-label="Open navigation menu">
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{ sx: { width: 260, bgcolor: 'background.default', p: 1 } }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <IconButton onClick={() => setOpen(false)} aria-label="Close navigation menu">
            <CloseIcon />
          </IconButton>
        </Box>
        <List>
          {navLinks.map((l) => (
            <ListItemButton key={l.id} onClick={() => go(l.id)} sx={{ borderRadius: 2 }}>
              <ListItemText
                primary={l.label}
                primaryTypographyProps={{ variant: 'h6', color: active === l.id ? 'primary' : 'text.primary' }}
              />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
    </>
  );
}
