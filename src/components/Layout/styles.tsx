import { flexAlignment, flexSettings } from 'assets/styles/utils/mixins';
import styled from 'styled-components';

export const Container = styled.div`
	background-color: ${({ theme }) => theme.colors.primary};
`;

export const Wrapper = styled.div`
	max-width: 1400px;
	height: 100%;
	margin: 0 auto;

	${flexSettings()};
	${flexAlignment('flex-start', 'center')};
`;
