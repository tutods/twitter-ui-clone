import 'styled-components';

declare module 'styled-components' {
	export interface DefaultTheme {
		title: string;

		colors: {
			primary: string;
			secondary: string;

			search: string;
			outline: string;
			white: string;
			gray: string;

			twitter: string;
			twitterDarkHover: string;
			twitterLightHover: string;

			retweet: string;
			like: string;
		};
	}
}
