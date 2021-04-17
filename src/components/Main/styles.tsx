import { flexAlignment, flexSettings } from 'assets/styles/utils/mixins';
import styled from 'styled-components';

export const Container = styled.div`
	${flexSettings('column')};

	width: min(601px, 100%);

	@media (min-width: 500px) {
		border-left: 1px solid ${({ theme }) => theme.colors.outline};
		border-right: 1px solid ${({ theme }) => theme.colors.outline};
	}
`;

export const Header = styled.div`
	z-index: 2;
	position: sticky;
	top: 0;

	width: 100%;

	${flexSettings()};
	${flexAlignment('center')};
	text-align: left;

	padding: 8px 0 9px 13px;
	border-bottom: 1px solid ${({ theme }) => theme.colors.outline};

	background: ${({ theme }) => theme.colors.primary};

	> button {
		padding: 8px;
		border-radius: 50%;

		cursor: pointer;

		svg {
			height: 24px;
			width: 24px;

			fill: ${({ theme }) => theme.colors.twitter};
		}

		&:hover {
			background-color: ${({ theme }) => theme.colors.twitterDarkHover};

			svg {
				fill: ${({ theme }) => theme.colors.white};
			}
		}
	}
`;

export const ProfileInfo = styled.div`
	margin-left: 17px;

	${flexSettings('column')};

	> strong {
		font-size: 19px;
	}

	> span {
		font-size: 15px;
		color: ${({ theme }) => theme.colors.gray};
	}
`;

export const BottomMenu = styled.div`
	width: 100%;

	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	z-index: 2;

	${flexSettings()};
	${flexAlignment('center', 'space-between')};

	padding: 8px min(46px, max(10vw, 10px));

	border-top: 1px solid ${({ theme }) => theme.colors.outline};
	background-color: ${({ theme }) => theme.colors.primary};

	@media (min-width: 500px) {
		display: none;
	}

	svg {
		cursor: pointer;

		width: 28px;
		height: 28px;

		fill: ${({ theme }) => theme.colors.gray};
		stroke: ${({ theme }) => theme.colors.gray};

		&:hover,
		&.active {
			fill: ${({ theme }) => theme.colors.twitter};
			stroke: ${({ theme }) => theme.colors.twitter};
		}
	}
`;
