all: build

# Install dependencies
install:
	composer install
	npm install

# Build the project
build:
	node_modules/.bin/gulp
	bin/console phpillip:build menuiserie-leveque.fr

deploy: build
deploy:
	node_modules/.bin/gulp deploy
