import styled from 'styled-components';
import { flexSettings } from '../../assets/styles/utils/mixins';

export const Container = styled.div`
	${flexSettings('column')};
	border-radius: 14px;
	
	background-color: ${({theme}) => theme.colors.secondary};
`;

export const Item = styled.div`
	padding: 10px 16px;
	
	& + div {
		border-top: 1px solid ${({theme}) => theme.colors.outline};
	}
	
	&:first-child {
		padding-top: 13px;
	}
	
	&:last-child {
		padding-bottom: 17px;
	}
`

export const Title = styled.div`
	font-weight: bold;
	font-size: 19px;
`