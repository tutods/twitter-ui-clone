import Feed from 'components/Feed';
import Icon from 'components/icons/Icon';
import React from 'react';
import {
	Avatar,
	Banner,
	Container,
	EditButton,
	FollowInfo,
	ProfileData
} from './styles';

const ProfilePage: React.FC = () => {
	return (
		<Container>
			<Banner>
				<Avatar />
			</Banner>

			<ProfileData>
				<EditButton outlined>
					Editar Perfil
				</EditButton>

				<h1>Daniel Sousa</h1>
				<h2>@tutods2014</h2>

				<p>Front-end Developer!</p>

				<ul>
					<li>
						<Icon name='map-pin' />
						Porto, Portugal
					</li>
					<li>
						<Icon name='cake' />
						Nascido(a) em 12 de dezembro de 1995
					</li>
				</ul>

				<FollowInfo>
					<span>
						seguindo <strong>10</strong>
					</span>

					<span>
						<strong>10 </strong> seguidores
					</span>
				</FollowInfo>
			</ProfileData>

			<Feed />
		</Container>
	);
};

export default ProfilePage;
