install:
	npm ci

brain-games:
	node bin/brain-games.js

brain-even:
	node bin/brain-even.js

brain-calc:
	node bin/brain-calc.js

brain-gcd:
	node bin/brain-gcd.js

brain-progression:
	node bin/brain-progression.js

brain-prime:
	node bin/brain-prime.js

publish:
	npm publish --dry-run

# Настройка команд в системе для разработки
link:
	npm link

# Удобная обертка для первого запуска
setup: install link

lint:
	npx eslint .

lint-fix:
	npx eslint . --fix
