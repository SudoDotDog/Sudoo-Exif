# Paths
build := typescript/tsconfig.build.json
dev := typescript/tsconfig.dev.json

# NPX functions
tsc := node_modules/.bin/tsc
ts_node := node_modules/.bin/ts-node
mocha := node_modules/.bin/mocha

main: dev

dev:
	@echo "[INFO] Building for development"
	@NODE_ENV=development $(tsc) --p $(dev)

run-example:
	@echo "[INFO] Running Example"
	@NODE_ENV=development $(ts_node) --project $(dev) example/example.ts

build:
	@echo "[INFO] Building for production"
	@NODE_ENV=production $(tsc) --p $(build)
	
tests:
	@echo "[INFO] Testing with Mocha"
	@NODE_ENV=test $(mocha)

cov:
	@echo "[INFO] Testing with Nyc and Mocha"
	@NODE_ENV=test \
	nyc $(mocha)

install:
	@echo "[INFO] Installing dev Dependencies"
	@yarn install --production=false

install-prod:
	@echo "[INFO] Installing Dependencies"
	@yarn install --production=true

license: clean
	@echo "[INFO] Sign files"
	@NODE_ENV=development $(ts_node) script/license.ts

clean:
	@echo "[INFO] Cleaning release files"
	@NODE_ENV=development $(ts_node) script/clean-app.ts

publish: install tests license build
	@echo "[INFO] Publishing package"
	@cd app && npm publish --access=public
