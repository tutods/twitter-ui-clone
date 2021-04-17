import { flexSettings } from 'assets/styles/utils/mixins';
import styled from 'styled-components';

export const Container = styled.div`
	${flexSettings('column')};
`;

export const Tab = styled.div`
	margin-top: 10px;
	padding: 11px 0 15px;
	text-align: center;

	font-weight: bold;
	font-size: 15px;

	outline: 0;
	cursor: pointer;

	color: ${({ theme }) => theme.colors.twitter};
	border-bottom: 2px solid ${({ theme }) => theme.colors.twitter};

	&:hover {
		background-color: ${({ theme }) => theme.colors.twitterDarkHover};
	}
`;

export const Tweets = styled.div`
	${flexSettings('column')};
	flex-shrink: 0;

	
`;
