import React from "react";
import { ThemeModeContext, modeSetting } from "./context/ThemeContext";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import Index from "./components/Index";
import Topbar from "./topbar";

export default function App() {
	const [toggleThemeMode, theme] = modeSetting();

	return (
		<ThemeModeContext.Provider value={toggleThemeMode}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Index></Index>
			</ThemeProvider>
		</ThemeModeContext.Provider>
	);
}
