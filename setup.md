# Setup ADAMO v1 on Raspbian Buster

## Setup Docker for Postgres

Install Docker 
```sh
sudo apt-get update && sudo apt-get upgrade
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
sudo usermod -aG docker pi
docker version
docker info
# This leads to an Error! We need to start docker.service again to make sure the pi user is authorized. 
# this may be done as root 
systemctl start docker.service
```

Run Postgres (remember to change password here)
Also maybe you don't want to expose port to public as i do (because i want to access with pgadmin)
Alternative: like this - https://github.com/khezen/compose-postgres

```sh
docker run -d --name generic-postgres postgres:alpine -e POSTGRES_PASSWORD=postgres -p 5432:5432
docker run --name generic-postgres -e POSTGRES_PASSWORD=postgres -d -p 5432:5432 postgres 
```

## Setting up git repos

Creating a local ssh-key

```ssh
ssh-keygen 
cat ~/.ssh/id_rsa.pub
```

```sh
sudo apt install git
# git clone https://gitlab.com/ipim/adamo-express-server.git
git clone https://gitlab.com/ipim/adamo-frontend-application
git checkout modellierung 2020


npm install -g pm2
cd API 
pm2 start mqttserver.js
pm2 start express.js

sudo apt-get install nodejs npm node-semver

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
nvm install 12


```

# Setting up ADAMO Express 

Create .env file in the directory above adamo-express-server. As it also could be used for the frontend client
Sample Values which should work but are insecure 
As i remember the DB_NAME needs to be ipim! 
```
touch .env 
nano .env
# then copy paste and edit

# express 

#DB_HOST='adamo-postgres-database' if you want to start your own docker container for the database
DB_HOST='localhost' 
DB_NAME=ipim
DB_USER='postgres'
DB_PASSWORD='postgres'
DB_PORT=5432

#Client
APP_HOST='http://localhost'
APP_PORT=8085
PROJECTNAME='ipim'
NODE_ENV='development'
SERVER_HOST='http://localhost'
SERVER_PORT=3330
MQTT_HOST='mqtt://localhost'
MQTT_PORT=1883
```

Now you will get a message, database ipim does not exist
we need to create it and it is best to import a dumpfile which already has a user and a sample model
20190424_ADAMO_BACKUP_PK_PM.backup this one works for the moment


## Angular frontend

```
cd adamo-frontend-application
cd angular2
npm i 
#  i ignore error related to node-gyp

npm run build
cp dist /var/www/angular
cd /etc/nginx/sites-enabled
touch angular # configuration einfügen

```

Standarduser is 
admin@demo.com with password 12341234
application is running on port 8080

