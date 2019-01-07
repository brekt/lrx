import React from 'react';
import { render } from 'react-dom';
import App from './components/app';

render(
	<div>
		<h1>Songs</h1>
		<App
			lyricsEndpoint='http://localhost:3333'
		>
		</App>
	</div>,
	document.getElementById('root')
);
