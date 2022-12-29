import { Typography, Grid, Paper } from '@mui/material';
import languagesTools from 'data/languages-tools'
import { StyledToolsMediaFrame } from 'dashboard/styles';

const LanguagesTools = () => (
  <>
    <Typography component="h2" variant="h4" gutterBottom>Languages and Tools</Typography>
    <Grid container spacing={2} sx={{ mb: 5 }} justifyContent="space-between">
      {
        languagesTools.map( (tool) =>
          <Grid key={tool?.id} item>
            <Paper elevation={4}>
              <StyledToolsMediaFrame sx={{ px:2, py:1}}>
                <img src={tool?.imageUrl} alt={tool?.title} width="50" />
              </StyledToolsMediaFrame>
              <Typography textAlign="center" textTransform="capitalize">{tool?.title}</Typography>
            </Paper>
          </Grid>
        )
      }
    </Grid>
  </>
);

export default LanguagesTools;
