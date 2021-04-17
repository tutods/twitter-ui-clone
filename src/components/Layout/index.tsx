import Main from 'components/Main';
import React from 'react';
import { Container, Wrapper } from './styles';

const Layout: React.FC = () => {
	return (
		<Container>
			<Wrapper>
				{/* <MenuBar />*/}
				<Main />
				{/* <Sidebar /> */}
			</Wrapper>
		</Container>
	);
};

export default Layout;
