import { CssBaseline, ThemeProvider } from '@mui/material';
import './App.css';
import { darkTheme } from './Theme/DarkTheme';
import Homepage from './Coustmer/Pages/HomePage/Homepage';
import { Routers } from './Routers/Routers';

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
      <Routers/>
    </ThemeProvider>
  );
}

export default App;
