import {
	coverBg,
	flexAlignment,
	flexSettings
} from 'assets/styles/utils/mixins';
import Button from 'components/Button';
import { rgba } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
	${flexSettings('column')};

	max-height: 100%;
	overflow-y: auto;

	/* scrollbar-width: none; // Firefox
	::-webkit-scrollbar {
		display: none;
	} */
`;

export const Banner = styled.div`
	flex-shrink: 0;

	position: relative;

	width: 100%;
	height: min(33vw, 199px);

	background-image: url('https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1');
	${coverBg()};
	background-blend-mode: overlay;
	background-color: ${({ theme }) => rgba(theme.colors.twitter, 0.35)};
`;

export const Avatar = styled.div`
	width: max(45px, min(135px, 22vw));
	height: max(45px, min(135px, 22vw));

	position: absolute;
	bottom: max(-60px, -10vw);
	left: 15px;

	border: 3.75px solid ${({ theme }) => theme.colors.primary};
	border-radius: 50%;

	background-image: url('https://github.com/tutods.png');
	${coverBg()};

	background-color: ${({ theme }) => theme.colors.gray};
`;

export const ProfileData = styled.div`
	padding: min(calc(10vw + 7px), 67px) 16px 0;

	${flexSettings('column')};

	position: relative;

	> h1 {
		font-weight: bold;
		font-size: 19px;
	}

	> h2 {
		font-weight: normal;
		font-size: 15px;

		color: ${({ theme }) => theme.colors.gray};
	}

	> p {
		margin-top: 11px;
		font-size: 15px;

		a {
			color: ${({ theme }) => theme.colors.twitter};
		}
	}

	> ul {
		list-style: none;
		margin-top: 10px;
		margin-bottom: 10px;

		li {
			${flexSettings()};
			${flexAlignment('center')};

			font-size: 15px;
			color: ${({ theme }) => theme.colors.gray};

			> svg {
				width: 20px;
				height: 20px;

				margin-right: 5px;
				stroke: ${({ theme }) => theme.colors.gray};
				fill: ${({ theme }) => theme.colors.gray};
			}
		}

		> li + li {
			margin-top: 5px;
		}
	}
`;

export const EditButton = styled(Button)`
	position: absolute;
	top: 2vw;
	right: 7px;

	padding: 4px 16px;

	font-size: 13px;

	@media (min-width: 320px) {
		top: 10px;
		padding: 10px 19px;
		font-size: 15px;
	}
`;

export const FollowInfo = styled.div`
	${flexSettings()};

	> span {
		font-size: 15px;
		color: ${({ theme }) => theme.colors.gray};

		& + span {
			margin-left: 20px;
		}
	}
`;
