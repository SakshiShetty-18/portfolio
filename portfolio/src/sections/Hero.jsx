import { lazy, Suspense } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { motion, useReducedMotion } from 'framer-motion';
import { profile } from '../data';
import { scrollToId } from '../components/scroll';

const HeroScene = lazy(() => import('../three/HeroScene'));

const container = { hidden: {}, show: { transition: { staggerChildren: 0.11, delayChildren: 0.1 } } };
const item = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero({ mode }) {
  const reduce = useReducedMotion();

  return (
    <Box
      id="home"
      component="section"
      sx={{ position: 'relative', minHeight: '100svh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}
    >
      {/* 3D layer sits behind the text on mobile and beside it on desktop */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          left: { xs: 0, md: '38%' },
          opacity: { xs: 0.4, md: 1 },
          pointerEvents: { xs: 'none', md: 'auto' },
        }}
      >
        <Suspense fallback={null}>
          <HeroScene dark={mode === 'dark'} reduceMotion={!!reduce} />
        </Suspense>
      </Box>

      <Container maxWidth="lg" sx={{ position: 'relative', pt: 12, pb: 10, pointerEvents: 'none' }}>
        <motion.div variants={container} initial={reduce ? 'show' : 'hidden'} animate="show">
          <Box sx={{ maxWidth: { xs: '100%', md: 640 } }}>
            <motion.div variants={item}>
              <Chip
                label={profile.availability}
                size="small"
                variant="outlined"
                icon={
                  <Box
                    component="span"
                    sx={{
                      width: 8,
                      height: 8,
                      ml: '8px !important',
                      borderRadius: '50%',
                      bgcolor: '#3ddc84',
                      boxShadow: '0 0 0 4px rgba(61,220,132,.18)',
                    }}
                  />
                }
                sx={{ mb: 3, borderColor: 'divider', color: 'text.secondary', fontWeight: 500 }}
              />
            </motion.div>

            <motion.div variants={item}>
              <Typography variant="h1" sx={{ fontSize: { xs: '2.6rem', sm: '3.6rem', md: '4.6rem' } }}>
                {profile.headline}
              </Typography>
            </motion.div>

            <motion.div variants={item}>
              <Typography
                color="text.secondary"
                sx={{ mt: 3, fontSize: { xs: '1.02rem', md: '1.18rem' }, lineHeight: 1.7, maxWidth: 520 }}
              >
                {profile.intro}
              </Typography>
            </motion.div>

            <motion.div variants={item}>
              <Box sx={{ mt: 5, display: 'flex', flexWrap: 'wrap', gap: 1.5, pointerEvents: 'auto' }}>
                <Button
                  variant="contained"
                  size="large"
                  endIcon={<ArrowOutwardIcon />}
                  onClick={() => scrollToId('projects')}
                >
                  Explore My Work
                </Button>
                <Button variant="outlined" color="inherit" size="large" onClick={() => scrollToId('contact')}>
                  Contact Me
                </Button>
              </Box>
            </motion.div>
          </Box>
        </motion.div>
      </Container>

      <Box
        sx={{
          position: 'absolute',
          bottom: 24,
          left: '50%',
          transform: 'translateX(-50%)',
          color: 'text.secondary',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pointerEvents: 'none',
        }}
        aria-hidden="true"
      >
        <Typography variant="overline" sx={{ fontSize: 10 }}>
          Scroll
        </Typography>
        <motion.div animate={reduce ? {} : { y: [0, 6, 0] }} transition={{ duration: 1.8, repeat: Infinity }}>
          <KeyboardArrowDownIcon fontSize="small" />
        </motion.div>
      </Box>
    </Box>
  );
}
