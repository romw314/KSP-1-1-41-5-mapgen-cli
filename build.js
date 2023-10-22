const { minify } = require('terser');
const fs = require('fs');

(async () => {
	const { code } = await minify(fs.readFileSync('index.js', 'utf8'), {
		mangle: {
			toplevel: true,
		}
	});
	fs.writeFileSync('cli.js', `#!/usr/bin/env node\n${code}`);
})();
