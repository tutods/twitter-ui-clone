import Icon from 'components/icons/Icon';
import RocketSeatIcon from 'components/icons/RocketSeatIcon';
import React from 'react';
import {
	Avatar,
	Body,
	Container,
	Content,
	Description,
	Dot,
	Header,
	Icons,
	ImageContent,
	Retweeted,
	Status
} from './styles';

const Tweet: React.FC = () => {
	return (
		<Container>
			<Retweeted>
				<RocketSeatIcon />

				Voce retweetou
			</Retweeted>

			<Body>
				<Avatar />

				<Content>
					<Header>
						<strong>Daniel Sousa</strong>
						<span>@tutods2014</span>
						<Dot />
						<time>17 de abril</time>
					</Header>
					<Description>Never stop learning!</Description>

					<ImageContent />

					<Icons>
						<Status>
							<Icon name='comment' />
							1
						</Status>
						<Status>
							<Icon name='reply' />
							3
						</Status>
						<Status>
							<Icon name='heart' />
							6
						</Status>
					</Icons>
				</Content>
			</Body>
		</Container>
	);
};

export default Tweet;
