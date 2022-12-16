import { useState, StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter } from 'react-router-dom';
import { darkTheme, lightTheme } from './assets/styles/theme';
import App from './App';
import GlobalCSS from './assets/styles/global';
import reportWebVitals from './reportWebVitals';

const Main = () => {
  const [isLightTheme, setLightTheme] = useState(false);

  return (
    <StrictMode>
      <ThemeProvider theme={isLightTheme ? lightTheme : darkTheme}>
        <GlobalCSS theme={isLightTheme} />
        <BrowserRouter>
          <App setLightTheme={setLightTheme} />
        </BrowserRouter>
      </ThemeProvider>
    </StrictMode>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
