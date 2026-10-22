import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Reveal from './Reveal';

export default function Section({ id, eyebrow, title, children, sx }) {
  return (
    <Box
      id={id}
      component="section"
      sx={{ py: { xs: 10, md: 16 }, scrollMarginTop: '64px', borderTop: 1, borderColor: 'divider', ...sx }}
    >
      <Container maxWidth="lg">
        {(eyebrow || title) && (
          <Reveal>
            <Box sx={{ mb: { xs: 6, md: 9 }, maxWidth: 720 }}>
              {eyebrow && (
                <Typography variant="overline" color="primary">
                  {eyebrow}
                </Typography>
              )}
              {title && (
                <Typography variant="h2" sx={{ fontSize: { xs: '2.1rem', md: '3.2rem' }, mt: 1 }}>
                  {title}
                </Typography>
              )}
            </Box>
          </Reveal>
        )}
        {children}
      </Container>
    </Box>
  );
}
