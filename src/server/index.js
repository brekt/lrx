const express = require('express');
const app = express();
const fs = require('fs');
const port = process.env.PORT || 3333;
const lyricsFolder = process.env.lyrics || `${__dirname}/../../lyrics/`; 

app.get('/', (req, res) => {
	fs.readdir(lyricsFolder, (err, fileNames) => {
		if (err) {
			throw err;
		}
		console.log(fileNames);
		res.send(fileNames);
	});
});

app.listen(port, () => {
	console.info(`Listening on port ${port}...`);
});
