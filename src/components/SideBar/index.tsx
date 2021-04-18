import Icon from 'components/icons/Icon';
import React from 'react';
import { Body, Container, SearchInput, SearchWrapper } from './styles';
import List from '../List';
import FollowSuggestion from '../FollowSuggestion';
import News from '../News';
import StickyBox from 'react-sticky-box';

const SideBar: React.FC = () => {
	return (
		<Container>
			<SearchWrapper>
				<SearchInput placeholder='Pesquisar...' />
				<Icon name='search' />
			</SearchWrapper>

			<StickyBox>
				<Body>
					<List
						title='Talvez voce goste'
						elements={[
							<FollowSuggestion
								avatar={
									'https://randomuser.me/api/portraits/women/91.jpg'
								}
								name={'Ludie Quigley'}
								nickname={'@ludie_q'}
							/>,
							<FollowSuggestion
								avatar={'https://i.imgur.com/h2E4WGw.jpg'}
								name={'Ellsworth Wilderman'}
								nickname={'@ellsowrthw12'}
							/>,
							<FollowSuggestion
								avatar={
									'https://uifaces.co/our-content/donated/VxDQx_gA.jpg'
								}
								name={'Marcelo Nicolas'}
								nickname={'@marc_nic'}
							/>
						]}
					/>

					<List
						title={'Últimas'}
						elements={[
							<News
								title={'Next Level Week #05'}
								subtitle={'Assunto do momento...'}
							/>,
							<News
								title={'Maratona Discover'}
								subtitle={'Never Stop Learning'}
							/>,
							<News
								title={'As Possibilidades do Flutter'}
								subtitle={'Aquecendo os motores!'}
							/>
						]}
					/>
				</Body>
			</StickyBox>
		</Container>
	);
};

export default SideBar;
