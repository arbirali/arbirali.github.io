import {
  Typography,
  Grid,
  Box,
  Button,
  CardMedia,
  CardContent,
  CardActions,
} from '@mui/material';
import { StyledCard } from 'dashboard/styles';
import acheivements from 'data/acheivements';

const Acheivements = () => (
  <Box sx={{ mb: 3 }}>
    <Typography component="h2" variant="h4" gutterBottom>Education &amp; Training</Typography>
    <Grid sx={{ display: 'flex', flexWrap: 'wrap' }}>
      {
        acheivements.map( (acheivement) => (
          <StyledCard key={acheivement?.id}>
            <CardMedia
              component="img"
              height="140"
              image={acheivement?.imageUrl}
              alt={acheivement?.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5">{acheivement?.title}</Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                target="_blank"
                variant="contained"
                href={acheivement?.certificate}
              >View Certificate</Button>
            </CardActions>
          </StyledCard>
        ))
      }
    </Grid>
  </Box>
);

export default Acheivements;
