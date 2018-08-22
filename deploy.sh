#!/bin/bash

rm -rf ./node_modules && echo "removed node_modules" && git fetch && git pull && yarn install && yarn build && rm -rf /var/www/* && rm -rf /var/www/* && cp ./dist/* /var/www && echo "deployed"
