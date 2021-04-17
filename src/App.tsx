import GlobalStyle from 'assets/styles/global';
import { defaultTheme } from 'assets/styles/themes/defaultTheme';
import Layout from 'components/Layout';
import React from 'react';
import { ThemeProvider } from 'styled-components';

const App = () => {
	return (
		<ThemeProvider theme={defaultTheme}>
			<GlobalStyle />

			<Layout />
		</ThemeProvider>
	);
};

export default App;
