import Icon from 'components/icons/Icon';
import ProfilePage from 'components/ProfilePage';
import React from 'react';
import { BottomMenu, Container, Header, ProfileInfo } from './styles';

const Main: React.FC = () => {
	return (
		<Container>
			<Header>
				<button>
					<Icon name='arrow-left' />
				</button>

				<ProfileInfo>
					<strong>Daniel Sousa</strong>
					<span>100 Tweets</span>
				</ProfileInfo>
			</Header>

			<ProfilePage />

			<BottomMenu>
				<Icon name='home' />

				<Icon name='search-alt' />

				<Icon name='notification-alt' />

				<Icon name='mail' />
			</BottomMenu>
		</Container>
	);
};

export default Main;
