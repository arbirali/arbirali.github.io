import {
  Avatar,
  Grid,
  Paper,
  Stack,
  Divider,
  IconButton,
  Typography,
} from "@mui/material";
import { deepPurple } from '@mui/material/colors';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';

import { ABOUT_ME } from 'data/aboutMe';
import { GITHUBURL, LINKEDINURL, PHONENUMBER, EMAIL } from 'utils/urls';

const Info = () => (
  <Paper sx={{ p: 2, mb: 3 }} elevation={4}>
    <Grid container spacing={2} alignItems="center">
      <Grid item xs={4}>
        <Avatar
            alt="Rahat Ali"
            src="/static/images/avatar/1.jpg"
            sx={{
              bgcolor: deepPurple[200],
              width: 300,
              height: 300,
              margin: '0 auto',
              fontSize: '5rem',
            }}
          >RA</Avatar>
      </Grid>
      <Grid item xs={8}>
        <Typography component="h1" variant="h2" gutterBottom>Rahat Ali</Typography>
        <Typography component="h2" variant="h5" gutterBottom><em>Senior Front-end Developer</em></Typography>
        <Divider sx={{ mb: 2 }} />
        <Typography sx={{ mb: 3 }}>{ABOUT_ME}</Typography>
        <Stack
          direction="row"
          divider={<Divider orientation="vertical" flexItem />}
          spacing={2}
          mb={1}
        >
          <IconButton
            size="large"
            target="_blank"
            aria-label="Github Link"
            href={LINKEDINURL}
          >
            <LinkedInIcon color="primary" />
          </IconButton>
          <IconButton
            size="large"
            target="_blank"
            aria-label="Github Link"
            href={GITHUBURL}
          >
            <GitHubIcon color="primary" />
          </IconButton>
          <IconButton
            size="large"
            aria-label="Github Link"
            href={`mailto:${EMAIL}`}
          >
            <EmailIcon color="primary" />
          </IconButton>
          <IconButton
            size="large"
            aria-label="Github Link"
            href={`tel:${PHONENUMBER}`}
          >
            <CallIcon color="primary" />
          </IconButton>
        </Stack>
        <address>Lahore, Pakistan</address>
      </Grid>
    </Grid>
  </Paper>
)

export default Info
