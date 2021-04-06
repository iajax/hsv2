# HS2V

# Tech we have used

- [Express](https://github.com/expressjs/express)
- [MongoDB](https://docs.mongodb.com/guides/)

# System Requirements
- [git](https://git-scm.com/) >= v2.13
- [Node.js](https://nodejs.org/en/) >= 12.x
- [MongoDB](https://www.mongodb.com/) >= 4.x
- [yarn](https://classic.yarnpkg.com/en/) >= v1.15

All of these must be available in your PATH. To verify things are set up properly, you can run this:
```shell
git --version
node --version
mongod --version
yarn --version
```

If you have trouble with any of these, learn more about the PATH environment variable and how to fix it here for [windows](https://www.howtogeek.com/118594/how-to-edit-your-system-path-for-easy-command-line-access/) or [mac/linux](https://stackoverflow.com/questions/24306398/how-to-add-mongo-commands-to-path-on-mac-osx/24322978#24322978).

#### For development
- [Docker](https://www.docker.com/)
    - [Docker Compose](https://docs.docker.com/compose/)

# Getting Started & Installation

For getting started you have to follow the below procedure.

```shell
git clone https://github.com/iajax/hsv2.git
cd hsv2
```

### Set environment variables
1. Copy the contents of `.env.example` into a new file called `.env.dev`
2. Put your environment variables in the `.env.dev` file.

### Installation
```shell
yarn install
```

This may take a few minutes.

### Start

To get the api up and running (and really see if it worked), run:

```shell
yarn dev
```

Then open http://localhost:3000 to view it in the browser.

If you are still unable to fix issues and you know how to use Docker 🐳 you can
setup the project with the following command:

```shell
docker-compose up
```

### If you want to test your production build in local environment, run the below commands.

```shell
# build for production
yarn build

# start in production mode
yarn start
```

### Other available scripts

Import data into MongoDB
```shell
yarn seed
```

Format code with Prettier
```shell
yarn format
```

Find problems with ESLint
```shell
yarn lint
```

Exec test with Jest
```shell
yarn test
```

Exec test with Newman
```shell
npm install -g newman

newman run newman/Hsv2_Group.postman_collection.json -e newman/environment.json
```

### References

- [Mongoose](https://mongoosejs.com/)
- [JWT](https://www.npmjs.com/package/jsonwebtoken)
- [CircleCI](https://circleci.com/)
- [Newman CLI](https://www.npmjs.com/package/newman)