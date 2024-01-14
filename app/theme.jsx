import { createTheme } from '@mui/material/styles';
import { teal } from '@mui/material/colors';

const theme = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: teal[800]
        }
    }
})
export default theme
