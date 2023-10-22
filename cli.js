const prompts = require('prompts');
const mapgen = require('ksp-mapgen');

prompts([
	{
		name: 'width',
		type: 'number',
		message: 'Enter the height of the map',
		initial: 10
	},
	{
		name: 'height',
		type: 'number',
		message: 'Enter the height of the map',
		initial: 10
	}
]).then(({ width, height }) => console.log(mapgen(width, height)));
