developer interface for telegram-platform web

###### includes:
* connecting to socket
* socket url can be changed from default
* initializing session (connection_id)
* closing socket
* setting filters for channel fetching
* fetching telegram channel list with previously set filters

###### to be implemented in the next version:
* ???

###### installation & running
prefer yarn to npm due to problems some had while installing node_modules with npm
to install yarn globally (not locally in project folder) run `sudo npm i -g yarn`

1. install npm (usually bundled with nodejs): `apt-get install nodejs` or something along these lines
2. run `yarn install` or `npm install` in package folder to download required node_modules
3. to run in developer mode locally:`yarn start` or `npm run start`, then head to http://localhost:1234
4. to bundle all css and js files for production run `yarn build` `npm run build`, bundled files will be available at ./dist
5. deployment (not implemented yet, but expected soon): `yarn deploy:prod` or `npm run deploy:prod`
