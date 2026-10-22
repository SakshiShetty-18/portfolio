import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { profile } from '../data';

export default function Footer() {
  return (
    <Box component="footer" sx={{ py: 5, borderTop: 1, borderColor: 'divider' }}>
      <Container
        maxWidth="lg"
        sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'space-between', gap: 1 }}
      >
        <Typography variant="body2" color="text.secondary">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Built with React, MUI &amp; Three.js
        </Typography>
      </Container>
    </Box>
  );
}
