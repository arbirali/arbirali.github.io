import './App.css';
import { Box } from '@mui/material';
import DrawerAppBar from './components/DrawerAppBar';
import AppRoutes from './routes';

const App = () => (
  <div className="App">
    <DrawerAppBar />
    <Box component="main">
      <AppRoutes />
    </Box>
  </div>
)

export default App;
