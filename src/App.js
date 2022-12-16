import { Container } from '@mui/material';
import DrawerAppBar from './components/DrawerAppBar';
import AppRoutes from './routes';

const App = ({setLightTheme}) => (
  <>
    <DrawerAppBar setLightTheme={setLightTheme} />
    <Container maxWidth="lg" sx={{ pt: 3, pb: 3 }}>
      <AppRoutes />
    </Container>
  </>
)

export default App;
