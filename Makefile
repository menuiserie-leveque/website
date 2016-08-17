all: build

# Install dependencies
install:
	composer install
	npm install

# Build the project
build:
	node_modules/.bin/webpack
	bin/console phpillip:build menuiserie-leveque.fr
