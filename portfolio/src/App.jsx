import { useMemo, useState, useEffect } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import { getTheme } from './theme';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Contact from './sections/Contact';
import { experience, education } from './data';

const getInitialMode = () => {
  try {
    const saved = localStorage.getItem('theme-mode');
    if (saved === 'light' || saved === 'dark') return saved;
  } catch {
    /* storage unavailable */
  }
  return window.matchMedia?.('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
};

export default function App() {
  const [mode, setMode] = useState(getInitialMode);
  const theme = useMemo(() => getTheme(mode), [mode]);

  useEffect(() => {
    try {
      localStorage.setItem('theme-mode', mode);
    } catch {
      /* ignore */
    }
  }, [mode]);

  const toggle = () => setMode((m) => (m === 'dark' ? 'light' : 'dark'));
  const showExperience = experience.length > 0 || education.length > 0;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar mode={mode} onToggle={toggle} />
      <Box component="main">
        <Hero mode={mode} />
        <About />
        <Projects />
        <Skills />
        {showExperience && <Experience />}
        <Contact />
      </Box>
      <Footer />
    </ThemeProvider>
  );
}
