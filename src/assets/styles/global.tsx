import { shade } from 'polished';
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
	/* Scrollbar */
	::-webkit-scrollbar {
		width: 7px;
	}

	::-webkit-scrollbar-track {
		background: ${(props) => shade(0.5, props.theme.colors.secondary)};
		border-radius: 25px;
	}

	::-webkit-scrollbar-thumb {
		border-radius: 25px;
		background: ${(props) => shade(0.5, props.theme.colors.twitter)};
	}

	::-webkit-scrollbar-thumb:hover {
		background: ${(props) => props.theme.colors.twitterDarkHover};
	}

	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;

		color: ${({ theme }) => theme.colors.white};
		outline: none;
	}

	html, body, #root {
		max-height: 100vh;
		max-width: 100vw;

		width: 100%;
		height: 100%;
	}

	*, button, input {
		border: 0;
		background: none;
		font-family: --apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	}

	html {
		background-color: ${({ theme }) => theme.colors.primary};
	}
`;
