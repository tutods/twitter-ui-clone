import Main from 'components/Main';
import MenuBar from 'components/MenuBar';
import SideBar from 'components/SideBar';
import React from 'react';
import { Container, Wrapper } from './styles';

const Layout: React.FC = () => {
	return (
		<Container>
			<Wrapper>
				<MenuBar />
				<Main />
				<SideBar />
			</Wrapper>
		</Container>
	);
};

export default Layout;
