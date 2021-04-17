import {
	coverBg,
	flexAlignment,
	flexSettings
} from 'assets/styles/utils/mixins';
import { rgba } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
	${flexSettings('column')};

	padding: 14px 16px;
	border-bottom: 1px solid ${({ theme }) => theme.colors.outline};
`;

export const Retweeted = styled.div`
	${flexSettings()};
	${flexAlignment('center')};

	margin-bottom: 10px;

	font-size: 13px;
	color: ${({ theme }) => theme.colors.gray};

	> svg  {
		fill: ${({ theme }) => theme.colors.gray};
		margin-left: 35px;
		margin-right: 9px;
	}
`;

export const Body = styled.div`
	${flexSettings()};
	margin-top: 3px;

	position: relative;
`;

export const Avatar = styled.div`
	width: 49px;
	height: 49px;

	border-radius: 50%;
	flex-shrink: 0;

	background-image: url('https://github.com/tutods.png');
	${coverBg()};

	background-color: ${({ theme }) => theme.colors.gray};

	position: absolute;
	top: 0px;
	left: 0px;
`;

export const Content = styled.div`
	${flexSettings('column')};

	width: 100%;
	margin-top: 5px;
	padding-left: 59px;
`;

export const Header = styled.div`
	${flexSettings()};
	${flexAlignment('center')};

	font-size: 15px;
	white-space: nowrap;

	> strong {
		margin-right: 5px;
	}

	> span,
	time {
		color: ${({ theme }) => theme.colors.gray};
	}

	> strong,
	span {
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
	}
`;

export const Dot = styled.div`
	background-color: ${({ theme }) => theme.colors.gray};
	width: 4px;
	height: 4px;
	border-radius: 50%;
	margin: 0 10px;
`;

export const Description = styled.p`
	font-size: 14px;
	margin-top: 4px;
`;

export const ImageContent = styled.div`
	width: 100%;
	height: min(285px, max(175px, 41vw));

	margin-top: 12px;
	border-radius: 15px;

	background-image: url('https://z-m-scontent.flis5-1.fna.fbcdn.net/v/t1.6435-9/156565219_860093557870453_3100206341166131638_n.png?_nc_cat=105&ccb=1-3&_nc_sid=e3f864&_nc_eui2=AeGQv_AI_Mw7JB0HXlJ95Ah6Vq9wWUNh47RWr3BZQ2HjtLKJ6efZ1yFQWe41dgZlYHIoUn8IR04nG9gN8f-qi7HK&_nc_ohc=h1pg5B1gPYMAX9Hnycn&_nc_ad=z-m&_nc_cid=1272&_nc_ht=z-m-scontent.flis5-1.fna&oh=699a3e21c68548b32fbb712990b91b6f&oe=60A073E5');
	${coverBg()};
	background-color: ${({ theme }) => theme.colors.gray};
	box-shadow: 0 0 20px
		${({ theme }) => rgba(theme.colors.twitterLightHover, 0.15)};

	cursor: pointer;

	&:hover {
		opacity: 0.7;
	}
`;

export const Icons = styled.div`
	${flexSettings()};
	${flexAlignment('center', 'space-between')};

	flex-wrap: wrap;

	margin: 11px auto 0;
	width: 100%;

	@media (min-width: 330px) {
		width: 63%;
	}

	> div {
		cursor: pointer;

		&:hover {
			opacity: 0.75;
		}
	}
`;

export const Status = styled.div`
	${flexSettings()};
	${flexAlignment('center')};

	font-size: 14px;

	svg {
		width: 19px;
		height: 19px;
		margin-right: 5px;
	}

	&:nth-child(1) {
		&,
		svg,
		> svg path {
			stroke: ${({ theme }) => theme.colors.gray};
			color: ${({ theme }) => theme.colors.gray};
		}
	}

	&:nth-child(2) {
		&,
		svg {
			stroke: ${({ theme }) => theme.colors.retweet};
			fill: ${({ theme }) => theme.colors.retweet};
			color: ${({ theme }) => theme.colors.retweet};
		}
	}
	&:nth-child(3) {
		&,
		svg {
			stroke: ${({ theme }) => theme.colors.like};
			fill: ${({ theme }) => theme.colors.like};
			color: ${({ theme }) => theme.colors.like};
		}
	}
`;
