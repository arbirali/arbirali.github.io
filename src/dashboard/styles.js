import { Card, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledCard = styled(Card)`
  position: relative;

  ${(props) => props.theme.breakpoints.up('sm')} {
    margin-right: 16px;
    max-width: 300px
  }

  .MuiCardActions-root {
    position: absolute;
    left: 0;
    bottom: 0;
  }

  .MuiCardContent-root {
    padding-bottom: 50px;
  }
`;

export const StyledToolsCard = styled(Card)`
  position: relative;

  ${(props) => props.theme.breakpoints.up('sm')} {
    margin-right: 16px;
    max-width: 300px
  }
`;

export const StyledToolsMediaFrame = styled(Box)`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-height: 100%;
    filter: drop-shadow(0 0 2px #fff);
  }
`;

export default StyledCard;
