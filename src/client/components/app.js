import React, { Component }  from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			songs: []
		};
		this.fetchSongs = this.fetchSongs.bind(this);
		this.formatSongNames = this.formatSongNames.bind(this);
		this.updateSongs = this.updateSongs.bind(this);
	}
	componentDidMount() {
		this.fetchSongs();
	}
	fetchSongs() {
		fetch(`${this.props.lyricsEndpoint}`).then((response) => {
			return response.json();
		}).then((songs) => {
			this.updateSongs(this.formatSongNames(songs));
		}).catch(error => {
			console.error(error);
		});
	}
	formatSongNames(songs) {
		return songs.map(songName => {
			return songName.split('.').shift();
		});
	}
	updateSongs(songs) {
		this.setState({
			songs
		});
	}
	render() {
		const { songs } = this.state;
		return(
			<Router>
				<ul>
					{
						songs.map(song => {
							const link = `/${song}`;
							return (
								<li
									key={song}
								>
									<Link to={link}>{song}</Link>
								</li>
							);
						})
					}
				</ul>
			</Router>
		);
	}
}