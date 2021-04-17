import styled, { DefaultTheme } from 'styled-components';

interface IButtonProps {
	outlined?: boolean;
	theme: DefaultTheme;
}

export default styled.button<IButtonProps>`
	background-color: ${({ theme, outlined }) =>
		outlined ? 'transparent' : theme.colors.twitter};
	color: ${({ theme, outlined }) =>
		outlined ? theme.colors.twitter : theme.colors.white};
	border: ${({ theme, outlined }) =>
		outlined ? `1px solid ${theme.colors.twitter}` : 'none'};
	outline: none;

	padding: 16px;
	border-radius: 25px;

	font-weight: bold;
	font-size: 15px;
	cursor: pointer;

	transition: all 0.65s ease-in-out;

	&:hover {
		background-color: ${({ theme, outlined }) =>
			outlined
				? theme.colors.twitterDarkHover
				: theme.colors.twitterLightHover};
		/* color: ${({ theme }) => theme.colors.white}; */
	}
`;
