import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { ReactComponent as Icons } from 'assets/media/icons/sprite.svg';

ReactDOM.render(
	<React.StrictMode>
		<Icons />
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);
