import styled from 'styled-components';
import { flexAlignment, flexSettings } from '../../assets/styles/utils/mixins';

export const Container = styled.div`
	${flexSettings()};
	${flexAlignment('center')};

	> div {
		${flexSettings('column')};

		font-size: 14px;

		> span {
			color: ${({ theme }) => theme.colors.gray};

			margin-bottom: 3px;
		}
	}
`;

export const IconContainer = styled.div`
	width: 50px;
	height: 50px;

	${flexSettings()};
	${flexAlignment('center')};

	padding: 10px;
	margin-right: 20px;
	border-radius: 50%;

	background-color: ${({ theme }) => theme.colors.outline};

	cursor: pointer;

	> svg {
		width: 30px;
		height: 30px;

		transition: all 0.35s ease-in-out;

		fill: ${({ theme }) => theme.colors.twitter};
		stroke: ${({ theme }) => theme.colors.twitter};
	}

	transition: all 0.35s ease-in-out;

	&:hover {
		background-color: ${({ theme }) => theme.colors.twitterDarkHover};

		> svg {
			fill: ${({ theme }) => theme.colors.white};
			stroke: ${({ theme }) => theme.colors.white};
		}
	}
`;
