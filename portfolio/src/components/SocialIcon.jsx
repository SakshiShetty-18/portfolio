import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import LinkIcon from '@mui/icons-material/Link';

const map = { github: GitHubIcon, linkedin: LinkedInIcon, x: XIcon };

export default function SocialIcon({ name, ...props }) {
  const Icon = map[name] || LinkIcon;
  return <Icon {...props} />;
}
