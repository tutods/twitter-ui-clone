import App from 'App';
import { ReactComponent as Icons } from 'assets/media/sprite.svg';
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
	<React.StrictMode>
		<Icons />
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);
