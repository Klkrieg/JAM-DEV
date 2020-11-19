![JAM Badge](https://img.shields.io/badge/JAM-ATX-%23f55701)
![Run Tests Status](https://github.com/Klkrieg/JAM-DEV/workflows/Run%20Tests/badge.svg)

# JAM Website
This repo contains the Next.js app for the JAM website.

## Getting Started

### Setup the dev environment
1. Install [NVM](https://github.com/nvm-sh/nvm) then run `nvm install 12.19.0`
2. Install [Docker](https://www.docker.com/)

### Setup the project
1. Get the code - `git clone https://github.com/Klkrieg/JAM-DEV.git`
2. From the repo root, run `npm install` to install dependencies
3. Duplicate the `example.env.local` file and change the name to `.env.local` (NOTE: this file isn't checked in to Git, so its safe to add sensitive info)

### Run the app
1. Run `docker-compose up -d` to create/start the MongoDB Docker container (NOTE: no need to do this if the container is already running)
2. Run `npm run dev` to start the app in watch mode

## Required Environment Variables
```
# Platform
NODE_ENV

# Database (local)
DB_CONN_STRING
