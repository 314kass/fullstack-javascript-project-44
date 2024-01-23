install: #install dependences
		npm ci
brain-games: #start brain-games
		node bin/brain-games.js
brain-calc: #start brain-calc
		node src/games/brain-calc.js
brain-even: #start brain-even
		node src/games/brain-even.js
brain-gcd: #start brain-gcd
		node src/games/brain-gcd.js
brain-prime: #start brain-prime
		node src/games/brain-prime.js
brain-progression: #start brain-progression
		node src/games/brain-progression.js
publish: #publish
		npm publish --dry-run
lint: #linter check
		npx eslint .