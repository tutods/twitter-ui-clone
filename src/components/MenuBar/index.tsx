import Button from 'components/Button';
import Icon from 'components/icons/Icon';
import React from 'react';
import {
	Avatar,
	BottomSide,
	Container,
	Exit,
	Logo,
	MenuButton,
	ProfileData,
	TopSide
} from './styles';

const MenuBar: React.FC = () => {
	return (
		<Container>
			<TopSide>
				<Logo />

				<MenuButton>
					<Icon name='home' />
					<span>Página Inicial</span>
				</MenuButton>

				<MenuButton>
					<Icon name='notification' />
					<span>Notificações</span>
				</MenuButton>

				<MenuButton>
					<Icon name='message' />
					<span>Mensagens</span>
				</MenuButton>

				<MenuButton>
					<Icon name='heart' />
					<span>Favoritos</span>
				</MenuButton>

				<MenuButton className='active'>
					<Icon name='profile' />
					<span>Perfil</span>
				</MenuButton>

				<Button>
					<span>Tweetar</span>
				</Button>
			</TopSide>

			<BottomSide>
				<Avatar />

				<ProfileData>
					<strong>Daniel Sousa</strong>
					<span>@tutods2014</span>
				</ProfileData>

				<Exit>
					<Icon name='exit' />
				</Exit>
			</BottomSide>
		</Container>
	);
};

export default MenuBar;
