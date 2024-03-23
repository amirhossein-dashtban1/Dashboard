import React from "react";
import { ThemeModeContext, modeSetting } from "./context/ThemeContext";
import { ThemeProvider } from "@emotion/react";

export default function App() {
	const [toggleThemeMode, theme] = modeSetting();

	return (
		<ThemeModeContext.Provider value={toggleThemeMode}>
			<ThemeProvider theme={theme}>App</ThemeProvider>
		</ThemeModeContext.Provider>
	);
}
