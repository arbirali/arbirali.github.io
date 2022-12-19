import styled, { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

import { colors, fonts } from './theme';

export const Wrapper = styled.div`
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Main = styled.main`
  position: relative;
  padding: 30px 0;
  flex-grow: 1;
`;

export default createGlobalStyle`
  ${normalize}

  * {
    box-sizing: border-box;
    scrollbar-width: thin;
    scrollbar-color: rgba(99, 217, 255, 1) rgba(21, 167, 204, .38);

    &:after,
    &:before { box-sizing: inherit; }
  }

  ::-webkit-scrollbar {
    width: 5px;
    height: 5px;
    background-color: rgba(21, 167, 204, .38);
    border-radius: 5px;
    padding: 1px;
  }

  ::-webkit-scrollbar-thumb {
    width: 5px;
    height: 5px;
    background: rgba(99, 217, 255, 1);
    border-radius: 5px;
  }

  body {
    min-width: 320px;
    background: ${(props) => (props.theme ? '#f1f1f1' : colors.darkBlue)};
    color: ${(props) => (props.theme ? 'rgba(0,0,0, .7)' : colors.lightBlue)};
    font-size: ${fonts.baseFontSize};
    font-family: ${fonts.fontFamilySanSerif};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }

  img,
  svg {
    max-width: 100%;
    height: auto;
  }

  .MuiButton-root {
    text-transform: none;
  }

  a {
    color: ${colors.skyBlue};
    text-decoration: underline;

    &:hover {
      text-decoration: none;
    }
  }
`;
