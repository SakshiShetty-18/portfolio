import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Section from '../components/Section';
import Reveal from '../components/Reveal';
import { skills } from '../data';

export default function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="Tools I work with">
      <Grid container spacing={2}>
        {skills.map((group, i) => (
          <Grid key={group.category} size={{ xs: 12, sm: 6, md: i < 3 ? 4 : 6 }}>
            <Reveal delay={0.06 * i} style={{ height: '100%' }}>
              <Paper variant="outlined" sx={{ p: 3.5, height: '100%', borderRadius: 2 }}>
                <Typography variant="overline" color="text.secondary">
                  {group.category}
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 2 }}>
                  {group.items.map((item) => (
                    <Box
                      key={item}
                      sx={{
                        px: 1.75,
                        py: 0.75,
                        fontSize: 14,
                        borderRadius: 999,
                        border: 1,
                        borderColor: 'divider',
                        transition: 'border-color .2s, color .2s, transform .2s',
                        '&:hover': { borderColor: 'primary.main', color: 'primary.main', transform: 'translateY(-2px)' },
                      }}
                    >
                      {item}
                    </Box>
                  ))}
                </Box>
              </Paper>
            </Reveal>
          </Grid>
        ))}
      </Grid>
    </Section>
  );
}
