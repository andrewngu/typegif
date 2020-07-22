install:
	yarn install

lint:
	@PATH="./node_modules/.bin:$$PATH"; \
	eslint ./web

type:
	@PATH="./node_modules/.bin:$$PATH"; \
	tsc --noEmit -p web

webpack:
	@PATH="./node_modules/.bin:$$PATH"; \
	webpack-dev-server --config ./web/webpack.config.js
