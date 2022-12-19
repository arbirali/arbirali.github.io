import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledDegreeFrame = styled(Box)(({ theme }) => ({
  boxShadow: theme.shadows[5],
  backgroundColor: '#fff',
  flexGrow: 1,

  '&:hover': {
    opacity: '.8',
    boxShadow: theme.shadows[9],
  }
}));

export default StyledDegreeFrame;
