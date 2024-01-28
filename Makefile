install: #install dependences
		npm ci
brain-games: #start brain-games
		node bin/brain-games.js
brain-calc: #start brain-calc
		node bin/brain-calc
brain-even: #start brain-even
		node bin/brain-even
brain-gcd: #start brain-gcd
		node bin/brain-gcd
brain-prime: #start brain-prime
		node bin/brain-prime
brain-progression: #start brain-progression
		node bin/brain-progression
publish: #publish
		npm publish --dry-run
lint: #linter check
		npx eslint .