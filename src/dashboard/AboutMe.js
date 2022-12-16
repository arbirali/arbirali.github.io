import { Paper, Typography } from "@mui/material";
import { ABOUTME } from 'utils/values';

const AboutMe = () => (
  <Paper sx={{ p: 2, mb: 3 }} elevation={4}>
    <Typography component="h2" variant="h4" gutterBottom>About Me</Typography>
    <Typography>{ABOUTME}</Typography>
  </Paper>
);

export default AboutMe;
