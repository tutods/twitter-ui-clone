import React from 'react';
import { Avatar, Container, FollowButton, ProfileData } from './styles';

interface IFollowSuggestionProps {
	avatar: string;
	name: string;
	nickname: string;
}

const FollowSuggestion: React.FC<IFollowSuggestionProps> = ({
	avatar,
	name,
	nickname
}) => {
	return (
		<Container>
			<div>
				<Avatar image={avatar} />

				<ProfileData>
					<strong>{name}</strong>
					<span>{nickname}</span>
				</ProfileData>
			</div>

			<FollowButton outlined>Seguir</FollowButton>
		</Container>
	);
};

export default FollowSuggestion;
