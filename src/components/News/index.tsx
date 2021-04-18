import React from 'react';
import { Container, IconContainer } from './styles';
import Icon from '../icons/Icon';

interface INewsProps {
	subtitle: string;
	title: string;
}

const News: React.FC<INewsProps> = ({ subtitle, title }) => {
	return (
		<Container>
			<IconContainer>
				<Icon name={'news'} />
			</IconContainer>

			<div>
				<span>{subtitle}</span>
				<strong>{title}</strong>
			</div>
		</Container>
	);
};

export default News;
