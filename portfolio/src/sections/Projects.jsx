import Grid from '@mui/material/Grid2';
import Section from '../components/Section';
import Reveal from '../components/Reveal';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data';

export default function Projects() {
  return (
    <Section id="projects" eyebrow="Selected work" title="Featured projects">
      <Grid container spacing={3}>
        {projects.map((p, i) => (
          <Grid key={p.title} size={{ xs: 12, md: 6 }}>
            <Reveal delay={0.06 * (i % 2)} style={{ height: '100%' }}>
              <ProjectCard project={p} />
            </Reveal>
          </Grid>
        ))}
      </Grid>
    </Section>
  );
}
