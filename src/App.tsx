import GlobalStyle from 'assets/styles/global';
import { defaultTheme } from 'assets/styles/themes/defaultTheme';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import logo from './logo.svg';

function App() {
	return (
		<ThemeProvider theme={defaultTheme}>
			<GlobalStyle />
			<div className='App'>
				<header className='App-header'>
					<img src={logo} className='App-logo' alt='logo' />
					<p>
						Edit <code>src/App.tsx</code> and save to reload.
					</p>
					<a
						className='App-link'
						href='https://reactjs.org'
						target='_blank'
						rel='noopener noreferrer'
					>
						Learn React
					</a>
				</header>
			</div>
		</ThemeProvider>
	);
}

export default App;
