install: #install dependences
		npm ci
brain-games: #start brain-games
		node bin/brain-games.js
publish: #publish
		npm publish --dry-run
lint: #linter check
		npx eslint .