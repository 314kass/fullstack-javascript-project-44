install: #install dependences
		npm ci
brain-games: #start brain-games
		node bin/games/brain-games.js
brain-calc: #start brain-calc
		node bin/games/brain-calc.js
brain-even: #start brain-even
		node bin/games/brain-even.js
brain-gcd: #start brain-gcd
		node bin/games/brain-gcd.js
brain-prime: #start brain-prime
		node bin/games/brain-prime.js
brain-progression: #start brain-progression
		node bin/games/brain-progression.js
publish: #publish
		npm publish --dry-run
lint: #linter check
		npx eslint .