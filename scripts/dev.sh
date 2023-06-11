#!/usr/bin/env bash

cp apps/cms/.env.example apps/cms/.env
cp apps/client/.env.example apps/client/.env
cp apps/api/.env.example apps/api/.env

concurrently --names "cms,api,client" --kill-others "yarn run cms:dev" "yarn run api:dev" "yarn run client:dev"
