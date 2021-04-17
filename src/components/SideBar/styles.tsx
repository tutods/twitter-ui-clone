import { flexSettings } from 'assets/styles/utils/mixins';
import styled from 'styled-components';

export const Container = styled.div`
	display: none;

	transition: all 0.25s ease-in-out;

	@media (min-width: 1000px) {
		${flexSettings('column')};

		width: min(399px, 100%);
	}
`;

export const SearchWrapper = styled.div`
	padding: 10px 24px;
	width: min(399px, 100%);
	max-height: 57px;

	position: fixed;
	top: 0;
	z-index: 2;

	background-color: ${({ theme }) => theme.colors.primary};

	> svg {
		width: 27px;
		height: 27px;

		stroke: ${({ theme }) => theme.colors.gray};
	}
`;

export const SearchInput = styled.input`
	width: 100%;
	height: 39px;

	padding: 0 10px 0 52px;
	border-radius: 19.5px;
	background-color: ${({ theme }) => theme.colors.search};

	font-size: 14px;

	&::placeholder {
		color: ${({ theme }) => theme.colors.gray};
	}

	~ svg {
		position: relative;
		top: -33px;
		left: 14px;

		z-index: 1;
		transition: 180ms ease-in-out;
	}

	outline: 0;

	&:focus {
		border: 1px solid ${({ theme }) => theme.colors.twitter};

		~ svg {
			stroke: ${({ theme }) => theme.colors.twitter};
		}
	}
`;

export const Body = styled.div`
	${flexSettings('column')};

	padding: 57px 24px 200px;
	margin-top: 5px;
`;
