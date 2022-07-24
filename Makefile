setup:
	yarn install
	yarn global add pm2

run-local:
	yarn build
	yarn main

watch-local:
	yarn build
	yarn watch

unit-test:
	yarn unit-test

integration-test:
	yarn integration-test

test: unit-test integration-test

lint:
	yarn lint

lint-fix:
	yarn lint-fix
