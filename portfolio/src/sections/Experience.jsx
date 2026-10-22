import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import Section from '../components/Section';
import Reveal from '../components/Reveal';
import { experience, education, certifications } from '../data';

function Timeline({ heading, entries }) {
  if (!entries.length) return null;
  return (
    <Box>
      <Typography variant="overline" color="text.secondary">
        {heading}
      </Typography>
      <Box sx={{ mt: 2, borderLeft: 1, borderColor: 'divider', pl: 3 }}>
        {entries.map((e, i) => (
          <Reveal key={`${e.role}-${i}`} delay={0.06 * i}>
            <Box sx={{ position: 'relative', pb: 4 }}>
              <Box
                sx={{
                  position: 'absolute',
                  left: -29,
                  top: 8,
                  width: 9,
                  height: 9,
                  borderRadius: '50%',
                  bgcolor: 'primary.main',
                }}
              />
              <Typography variant="body2" color="text.secondary">
                {e.dates}
              </Typography>
              <Typography variant="h6" sx={{ mt: 0.5 }}>
                {e.role}
              </Typography>
              <Typography variant="body2" color="primary" sx={{ fontWeight: 600 }}>
                {e.org}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 1, lineHeight: 1.7 }}>
                {e.text}
              </Typography>
            </Box>
          </Reveal>
        ))}
      </Box>
    </Box>
  );
}

export default function Experience() {
  return (
    <Section id="experience" eyebrow="Background" title="Experience & education">
      <Grid container spacing={{ xs: 5, md: 10 }}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Timeline heading="Experience" entries={experience} />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Timeline heading="Education" entries={education} />
          {certifications.length > 0 && (
            <Box sx={{ mt: 2 }}>
              <Typography variant="overline" color="text.secondary">
                Certifications
              </Typography>
              <Box component="ul" sx={{ m: 0, mt: 1.5, pl: 2.5, color: 'text.secondary', lineHeight: 2 }}>
                {certifications.map((c) => (
                  <li key={c}>
                    <Typography variant="body2" component="span">
                      {c}
                    </Typography>
                  </li>
                ))}
              </Box>
            </Box>
          )}
        </Grid>
      </Grid>
    </Section>
  );
}
