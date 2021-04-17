import {
	coverBg,
	flexAlignment,
	flexSettings
} from 'assets/styles/utils/mixins';
import RocketSeatIcon from 'components/icons/RocketSeatIcon';
import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
	display: none;

	transition: display 0.25s ease-in-out;

	@media (min-width: 500px) {
		${flexSettings('column')};
		justify-content: space-between;

		position: sticky;
		top: 0;
		left: 0;

		max-height: 100vh;
		height: 100vh;

		padding: 9px 19px 20px;
		overflow-y: auto;
	}
`;

export const TopSide = styled.div`
	${flexSettings('column')};
	${flexAlignment('center')};

	@media (min-width: 1280px) {
		${flexAlignment('flex-start')};
	}
`;

export const Logo = styled(RocketSeatIcon)`
	@media (max-width: 1280px) {
		align-self: center;
	}

	width: 41px;
	height: 41px;

	> path {
		fill: ${({ theme }) => theme.colors.twitter};
	}

	margin-bottom: 20px;
`;

export const MenuButton = styled.button`
	${flexSettings()};
	${flexAlignment('center')};

	width: 100%;
	flex-shrink: 0;

	> span {
		display: none;

		@media (min-width: 1280px) {
			display: inline;
			margin-left: 19px;

			font-size: 16px;
			font-weight: bold;
		}

		padding-right: 15px;
	}

	padding: 10px;
	border-radius: 25px;
	cursor: pointer;

	& + button {
		margin-top: 16px;
	}

	& + button:last-child {
		margin-top: 33px;

		height: 40px;
		width: 40px;

		transition: all 0.25s ease-in-out;

		> span {
			display: none;
		}

		@media (min-width: 1280px) {
			width: 100%;
			height: unset;

			> span {
				display: inline;
			}
		}
	}

	> svg {
		stroke: ${({ theme }) => theme.colors.white};

		flex-shrink: 0;

		width: 24px;
		height: 24px;
	}

	&:hover,
	&.active {
		background-color: ${({ theme }) => theme.colors.twitterDarkHover};

		span,
		svg {
			color: ${({ theme }) => theme.colors.twitter};
			stroke: ${({ theme }) => theme.colors.twitter};
		}
	}
`;

export const BottomSide = styled.div`
	${flexSettings()};
	${flexAlignment('center')};

	margin-top: 20px;
	padding: 10px 0 0;
	border-top: 1px solid ${({ theme }) => theme.colors.outline};
`;

export const Avatar = styled.div`
	width: 39px;
	height: 39px;

	flex-shrink: 0;

	border-radius: 50%;

	background-image: url('https://github.com/tutods.png');
	${coverBg()};
`;

export const ProfileData = styled.div`
	display: none;

	@media (min-width: 1280px) {
		${flexSettings('column')};

		margin-left: 10px;
		font-size: 14px;

		span {
			color: ${({ theme }) => theme.colors.gray};
		}
	}
`;

export const Exit = styled.div`
	display: none;

	@media (min-width: 1280px) {
		display: inline-block;

		margin-left: 30px;
		padding: 10px;
		border-radius: 50%;

		cursor: pointer;

		svg {
			flex-shrink: 0;

			width: 20px;
			height: 20px;

			stroke: ${({ theme }) => theme.colors.white};
		}

		&:hover {
			background-color: ${({ theme }) => shade(0.9, theme.colors.like)};

			svg {
				stroke: ${({ theme }) => theme.colors.like};
			}
		}
	}
`;
