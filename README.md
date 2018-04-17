# angular-crud

## Requirements

### Install and Run MongoDB with Homebrew

- Open the Terminal app and type brew update.
- After updating Homebrew brew install mongodb
- After downloading Mongo, create the “db” directory. This is where the Mongo data files will live. You can create the directory in the default location by running `mkdir -p /data/db`
- Make sure that the /data/db directory has the right permissions by running

```
sudo chown -R `id -un` /data/db
```

- To have launched start mongodb now and restart at login:

```
brew services start mongodb
```

- Run the Mongo daemon, in one of your terminal windows run mongod. This should start the Mongo server.
- Run the Mongo shell, with the Mongo daemon running in one terminal, type mongo in another terminal window. This will run the Mongo shell which is an application to access data in MongoDB.
- To exit the Mongo shell run quit()
- To stop the Mongo daemon hit ctrl-c

### Install Express, Mongoose and Body-parser

```
npm install express --save
npm install mongoose -- save
npm install body-parser --save
```

## Run

Execute each one of the following commands in different command prompts:

```
ng serve --open --port 4202
node server.js
```