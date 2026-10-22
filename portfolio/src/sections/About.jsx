import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import DownloadIcon from '@mui/icons-material/Download';
import Section from '../components/Section';
import Reveal from '../components/Reveal';
import { profile, highlights, stats } from '../data';

export default function About() {
  return (
    <Section id="about" eyebrow="About" title="A little about me">
      <Grid container spacing={{ xs: 6, md: 10 }}>
        <Grid size={{ xs: 12, md: 4 }}>
          <Reveal>
            {/* Replace with <img src="/profile.jpg" /> when you have a photo */}
            <Box
              sx={{
                aspectRatio: '4 / 5',
                borderRadius: 3,
                border: 1,
                borderColor: 'divider',
                bgcolor: 'background.paper',
                display: 'grid',
                placeItems: 'center',
                color: 'text.secondary',
                maxWidth: 360,
              }}
              role="img"
              aria-label="Profile photo placeholder"
            >
              <PersonOutlineIcon sx={{ fontSize: 72, opacity: 0.5 }} />
            </Box>
          </Reveal>
        </Grid>

        <Grid size={{ xs: 12, md: 8 }}>
          <Reveal delay={0.05}>
            <Typography sx={{ fontSize: { xs: '1.1rem', md: '1.3rem' }, lineHeight: 1.7 }}>{profile.about}</Typography>
            <Button
              variant="outlined"
              color="inherit"
              startIcon={<DownloadIcon />}
              href={profile.resumePath}
              download
              sx={{ mt: 4 }}
            >
              Download Resume
            </Button>
          </Reveal>

          <Grid container spacing={2} sx={{ mt: 6 }}>
            {highlights.map((h, i) => (
              <Grid key={h.title} size={{ xs: 12, sm: 4 }}>
                <Reveal delay={0.08 * i}>
                  <Paper variant="outlined" sx={{ p: 3, height: '100%', borderRadius: 2 }}>
                    <Typography variant="h6" sx={{ mb: 1, fontSize: '1.02rem' }}>
                      {h.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.65 }}>
                      {h.text}
                    </Typography>
                  </Paper>
                </Reveal>
              </Grid>
            ))}
          </Grid>

          <Grid container spacing={2} sx={{ mt: 5 }}>
            {stats.map((s) => (
              <Grid key={s.label} size={{ xs: 4 }}>
                <Reveal>
                  <Typography variant="h3" sx={{ fontSize: { xs: '1.8rem', md: '2.6rem' } }}>
                    {s.value}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {s.label}
                  </Typography>
                </Reveal>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Section>
  );
}
