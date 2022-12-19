import {
  Typography,
  Grid,
  Box,
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
} from '@mui/material';
import ReactNanoDegree from 'assets/images/ReactNanoDegree.svg';
import UdemyCertificate from 'assets/images/JavaScript.jpg';

const Acheivements = () => (
  <Box sx={{ mb: 3 }}>
    <Typography component="h2" variant="h4" gutterBottom>Education &amp; Training</Typography>
    <Grid container spacing={2}>
      <Grid item xs={6} sx={{ display: 'flex' }}>
        <Card>
          <CardMedia
            component="img"
            height="140"
            image={ReactNanoDegree}
            alt="JavaScript Understanding the Weird Parts"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              React Nano Degree (Udacity)
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              target="_blank"
              variant="contained"
              href="https://graduation.udacity.com/nd019"
            >View Certificate</Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={6} sx={{ display: 'flex' }}>
        <Card>
          <CardMedia
            component="img"
            height="140"
            image={UdemyCertificate}
            alt="JavaScript Understanding the Weird Parts"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              JavaScript: Understanding the Weird Parts (Udemy)
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              target="_blank"
              variant="contained"
              href="https://www.udemy.com/certificate/UC-I5GD2A1V/"
            >View Certificate</Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  </Box>
);

export default Acheivements;
