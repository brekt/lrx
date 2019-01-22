import React from 'react';
import { render } from 'react-dom';
import App from './components/app';
import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import { rootEpic } from './epics';

const epicMiddleware = createEpicMiddleware();
const store = createStore(rootReducer, applyMiddleware(epicMiddleware));

epicMiddleware.run(rootEpic);

render(
	<Provider store={store}>
		<h1>Songs</h1>
		<App
			lyricsEndpoint='http://localhost:3333'
		>
		</App>
	</Provider>,
	document.getElementById('root')
);
