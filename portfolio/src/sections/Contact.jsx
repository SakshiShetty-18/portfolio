import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Alert from '@mui/material/Alert';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import SendIcon from '@mui/icons-material/Send';
import Section from '../components/Section';
import Reveal from '../components/Reveal';
import SocialIcon from '../components/SocialIcon';
import { profile } from '../data';

// No backend is wired up. By default the form opens the visitor's email client
// with the message pre-filled. To use a service (Formspree, EmailJS, your API),
// replace the body of `onSubmit` with a fetch/POST call.
export default function Contact() {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({ defaultValues: { name: '', email: '', message: '' } });

  const onSubmit = async (values) => {
    const subject = encodeURIComponent(`Portfolio enquiry from ${values.name}`);
    const body = encodeURIComponent(`${values.message}\n\n— ${values.name} (${values.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
    reset();
  };

  return (
    <Section id="contact" eyebrow="Contact" title="Let’s build something together.">
      <Grid container spacing={{ xs: 6, md: 10 }}>
        <Grid size={{ xs: 12, md: 5 }}>
          <Reveal>
            <Typography color="text.secondary" sx={{ fontSize: '1.1rem', lineHeight: 1.7 }}>
              Have a project in mind, a role to discuss, or just want to say hello? My inbox is always open.
            </Typography>
            <Button
              href={`mailto:${profile.email}`}
              startIcon={<MailOutlineIcon />}
              color="inherit"
              sx={{ mt: 3, px: 0, fontSize: '1.05rem', '&:hover': { bgcolor: 'transparent', color: 'primary.main' } }}
            >
              {profile.email}
            </Button>
            <Box sx={{ display: 'flex', gap: 1, mt: 2 }}>
              {profile.socials.map((s) => (
                <IconButton
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  sx={{ border: 1, borderColor: 'divider', '&:hover': { borderColor: 'primary.main', color: 'primary.main' } }}
                >
                  <SocialIcon name={s.icon} />
                </IconButton>
              ))}
            </Box>
          </Reveal>
        </Grid>

        <Grid size={{ xs: 12, md: 7 }}>
          <Reveal delay={0.08}>
            <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)} sx={{ display: 'grid', gap: 2.5 }}>
              <TextField
                label="Name"
                fullWidth
                autoComplete="name"
                error={!!errors.name}
                helperText={errors.name?.message}
                {...register('name', { required: 'Please enter your name', minLength: { value: 2, message: 'Name is too short' } })}
              />
              <TextField
                label="Email"
                type="email"
                fullWidth
                autoComplete="email"
                error={!!errors.email}
                helperText={errors.email?.message}
                {...register('email', {
                  required: 'Please enter your email',
                  pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Enter a valid email address' },
                })}
              />
              <TextField
                label="Message"
                fullWidth
                multiline
                minRows={5}
                error={!!errors.message}
                helperText={errors.message?.message}
                {...register('message', { required: 'Please write a message', minLength: { value: 10, message: 'Message must be at least 10 characters' } })}
              />
              <Box>
                <Button type="submit" variant="contained" size="large" endIcon={<SendIcon />} disabled={isSubmitting}>
                  Send message
                </Button>
              </Box>
              {sent && (
                <Alert severity="success" onClose={() => setSent(false)}>
                  Your email app should open with the message ready to send.
                </Alert>
              )}
            </Box>
          </Reveal>
        </Grid>
      </Grid>
    </Section>
  );
}
