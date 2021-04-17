import Icon from 'components/icons/Icon';
import React from 'react';
import { Body, Container, SearchInput, SearchWrapper } from './styles';

const SideBar: React.FC = () => {
	return (
		<Container>
			<SearchWrapper>
				<SearchInput placeholder='Pesquisar...' />
				<Icon name='search' />
			</SearchWrapper>

			<Body>
				<p>{'magnam eaque velit'.repeat(50)}</p>
			</Body>
		</Container>
	);
};

export default SideBar;
