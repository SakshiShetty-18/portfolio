import { lazy, Suspense } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';
import LaunchIcon from '@mui/icons-material/Launch';
import CodeIcon from '@mui/icons-material/Code';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import { useTheme } from '@mui/material/styles';

const ProjectPreview3D = lazy(() => import('../three/ProjectPreview3D'));

export default function ProjectCard({ project }) {
  const theme = useTheme();
  const dark = theme.palette.mode === 'dark';
  const { title, description, tech, image, demo, code, featured3D } = project;

  return (
    <Paper
      variant="outlined"
      sx={{
        height: '100%',
        borderRadius: 3,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform .3s ease, border-color .3s ease, box-shadow .3s ease',
        '&:hover': {
          transform: 'translateY(-4px)',
          borderColor: 'primary.main',
          boxShadow: dark ? '0 18px 40px rgba(0,0,0,.35)' : '0 18px 40px rgba(16,17,20,.08)',
        },
        '@media (prefers-reduced-motion: reduce)': { '&:hover': { transform: 'none' } },
      }}
    >
      <Box
        sx={{
          aspectRatio: '16 / 10',
          bgcolor: dark ? '#1a1d24' : '#ece8e1',
          display: 'grid',
          placeItems: 'center',
          color: 'text.secondary',
          position: 'relative',
        }}
      >
        {featured3D ? (
          <Suspense fallback={null}>
            <Box sx={{ position: 'absolute', inset: 0 }}>
              <ProjectPreview3D dark={dark} />
            </Box>
          </Suspense>
        ) : image ? (
          <Box
            component="img"
            src={image}
            alt={`${title} preview`}
            loading="lazy"
            sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        ) : (
          <ImageOutlinedIcon sx={{ fontSize: 48, opacity: 0.4 }} />
        )}
      </Box>

      <Box sx={{ p: 3, display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <Typography variant="h5" sx={{ fontSize: '1.3rem' }}>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1, lineHeight: 1.7, flexGrow: 1 }}>
          {description}
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75, mt: 2 }}>
          {tech.map((t) => (
            <Chip key={t} label={t} size="small" variant="outlined" sx={{ borderColor: 'divider' }} />
          ))}
        </Box>
        <Box sx={{ display: 'flex', gap: 1, mt: 2.5 }}>
          <Button size="small" variant="contained" startIcon={<LaunchIcon />} href={demo} target="_blank" rel="noopener noreferrer">
            Live demo
          </Button>
          <Button size="small" variant="outlined" color="inherit" startIcon={<CodeIcon />} href={code} target="_blank" rel="noopener noreferrer">
            Source
          </Button>
        </Box>
      </Box>
    </Paper>
  );
}
