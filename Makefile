
start:
	yarn && yarn start

build:
	yarn run build

install-heroku:
	brew tap heroku/brew && brew install heroku

init-heroku-portfolio:
	heroku git:remote -a maxgunter-portfolio-website

push-heroku:
	git push heroku master