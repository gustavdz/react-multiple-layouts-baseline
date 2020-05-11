import React from 'react';
// import Routers from "./router";
import AppRouter from "./router/Router";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blue from "@material-ui/core/colors/blue";
import amber from "@material-ui/core/colors/amber";
import green from "@material-ui/core/colors/green";

const theme = createMuiTheme({
    palette: {
        primary: blue,
        secondary: amber,
        success: green
    }
});
function App() {
    return (
        <MuiThemeProvider theme={theme}>
        <div>
            <AppRouter />
        </div>
        </MuiThemeProvider>
    );
}

export default App;
