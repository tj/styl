
build:
	@component install
	@component build --out . --name styl

clean:
	rm -fr styl.js components

test:
	@./node_modules/.bin/mocha \
		--require should

.PHONY: test clean build
