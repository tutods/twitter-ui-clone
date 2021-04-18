import styled, { DefaultTheme } from 'styled-components';
import {
	coverBg,
	flexAlignment,
	flexSettings
} from '../../assets/styles/utils/mixins';
import Button from 'components/Button';

interface IAvatarProps {
	image: string;
	theme: DefaultTheme;
}

export const Container = styled.div`
	width: 100%;

	${flexSettings()};
	${flexAlignment('center', 'space-between')};

	> div {
		${flexSettings()};
		${flexAlignment('center')};
	}
`;

export const Avatar = styled.div<IAvatarProps>`
	width: 49px;
	height: 49px;

	margin-right: 10px;
	border-radius: 50%;

	background-image: url(${({ image }) => image});
	${coverBg()};
	background-color: ${({ theme }) => theme.colors.gray};
`;

export const ProfileData = styled.div`
	${flexSettings('column')};

	> strong {
		font-size: 14px;
	}

	> span {
		color: ${({ theme }) => theme.colors.gray};
		font-size: 14px;
	}
`;

export const FollowButton = styled(Button)`
	padding: 6px 17px;
`;
