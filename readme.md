main application, still under reconstruction

###### installation & running
prefer yarn to npm due to problems some had while installing node_modules with npm

to install yarn globally run `sudo npm i -g yarn`

1. install npm (usually bundled with nodejs): `apt-get install nodejs` or something along these lines
2. run `yarn install` or `npm install` in package folder to download required node_modules
3. to run in developer mode locally:`yarn start` or `npm run start`, then head to http://localhost:9001
4. to bundle all css and js files for production run `yarn build` `npm run build`, bundled files will be available at ./dist
5. deployment: execute `./deploy.sh`, this will update repo on host machine and place built with `npm run build` bundle into /var/www
