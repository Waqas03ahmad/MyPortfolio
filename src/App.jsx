import Header from "./Index";
import {
  useColorScheme as useMaterialColorScheme,
  Experimental_CssVarsProvider as MaterialCssVarsProvider,
  experimental_extendTheme as extendMaterialTheme,
  THEME_ID,
  ThemeProvider,
  createTheme,
} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import DarkMode from "@mui/icons-material/DarkMode";
import LightMode from "@mui/icons-material/LightMode";
import {
  CssVarsProvider as JoyCssVarsProvider,
  useColorScheme as useJoyColorScheme,
} from "@mui/joy/styles";
import { IconButton } from "@mui/joy";

export const ModeToggle = () => {
  const { mode, setMode } = useMaterialColorScheme();
  const { setMode: setJoyMode } = useJoyColorScheme();
  return (
    <IconButton
      onClick={() => {
        setMode(mode === "dark" ? "light" : "dark");
        setJoyMode(mode === "dark" ? "light" : "dark");
      }}
    >
      {mode === "dark" ? <DarkMode /> : <LightMode />}
    </IconButton>
  );
};

const theme = createTheme({
});

const materialTheme = extendMaterialTheme();

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <MaterialCssVarsProvider theme={{ [THEME_ID]: materialTheme }}>
          <JoyCssVarsProvider>
            <CssBaseline enableColorScheme />
            <Header />
          </JoyCssVarsProvider>
        </MaterialCssVarsProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
