
start:
	yarn && yarn start

build:
	yarn run build

upgrade-dependencies:
	yarn upgrade

install-heroku:
	brew tap heroku/brew && brew install heroku

init-heroku-portfolio:
	heroku git:remote -a maxgunter-portfolio-website

add-domain:
	heroku domains:add www.maxgunter.com

# AUTOMATIC DEPLOYS SETUP
push-heroku:
	git push heroku master