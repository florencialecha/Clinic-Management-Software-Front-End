import { CssBaseline, ThemeProvider } from "@mui/material"
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { ContextGlobal } from "../Components/utils/global.context";
import { Theme } from "./Theme"

export const ThemeSwitcher = ({ children }) => {

    const { theme } = useContext(ContextGlobal);

    const [appTheme, setAppTheme] = useState(Theme(theme));

    useEffect(() => {
        setAppTheme(Theme(theme));
    }, [theme]);

    return <ThemeProvider theme={appTheme}>
        <CssBaseline />
        {children}
    </ThemeProvider>
}