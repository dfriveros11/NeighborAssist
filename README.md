# NeighborAssist
## Description

We know that the recent Covid-19 pandemic poses a lot of challenges to our society and our way of life. In an effort to reduce the vulnerable population's exposure we decided to develop this web page to unite as a community and help eachother. Through our web page you can offer your help to someone or request someone's help all within a short distance from you.
Connect with people who want to help or need help in just three steps: register, confirm and wait.
1. Register the assistance you need and the location where you are.
2. Wait for confirmation from the helper.
3. Review the status until its complete.
Your health comes first. 
Stay safe, stay home.

## Authors 

- [Diego Riveros](https://dfriveros11.github.io/DiegoRiverosWebPage/)  :man:
- [Laura Pardo](https://laupardo.github.io/index.html)   :girl:

## Check the page  :sunglasses:
[Link]()

## Prerequisites
In order to deploy the page locally, you should have the following technologies install if you don't have installed just click on the name and you will be redirected to the dowloand page:
- [Nodejs](https://nodejs.org/es/download/)
- [Mongodb](https://www.mongodb.com/download-center/community) or [Docker](https://docs.docker.com/install/linux/docker-ce/ubuntu/)


## Deployment
Enter in the root folder of the proyect and run the following commands: 

```
 # Install dependencies for server
 yarn install
 
 # Add mongodb to yarn
 yarn add mongodb
```
Almost there!!!.

### Windows
Go to where you intsalled mongo (eg.)
```
C:\Program Files\MongoDB\Server\3.2\bin>
```
Enter command
```
mongod
```
Then, open a new cmd and set your environment variables to be the admin and password

```
SET MONGO_USER=admin
SET MONGO_PWD=secret
```
Go to where you intsalled mongo (eg.)
```
C:\Program Files\MongoDB\Server\3.2\bin>
```
Enter command
```
mongo
```
Then open a new cmd and go to you folder where the app is and
```
yarn start
```

## GIF
![]()

## Used technologies

- HTML
- CSS
- Bootsrap 
- Javascript
- MongoDB
- Express
- React

# MIT License 
This project is licensed by the MIT [License](https://github.com/dfriveros11/NeighborAssist/blob/master/LICENSE).
