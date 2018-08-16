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
1. install npm (usually bundled with nodejs): `apt-get install nodejs` or something along these lines
2. run `npm install` in package folder to download required node_modules
3. to run in developer mode locally: `npm run start`, then head to http://localhost:1234
4. to bundle all css and js files for production run `npm run build`, bundled files will be available at ./dist
