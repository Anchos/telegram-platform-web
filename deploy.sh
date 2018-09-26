#!/bin/bash

git fetch && git pull && yarn install && rm -rf ./dist && yarn build && rm -rf /var/www/* && cp ./dist/* /var/www && echo "deployed"
