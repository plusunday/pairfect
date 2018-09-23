## Pre-req
Node v9+
npm 5.0.0+

## recommended set up

download nvm
links: 
(mac) https://github.com/creationix/nvm
(windows) https://github.com/coreybutler/nvm-windows

## install Node
preferably v10+

## Set up
1) npm install -g firebase-tools
2) clone repo
3) cd firebase-react-boilerplate && npm install
4) cd front-end && npm install

## Doc links
firebase-tools: https://github.com/firebase/firebase-tools

## Deploy App to prod command
firebase deploy
Hosting URL: https://ibrokethis-9b72f.firebaseapp.com

## Front end
Front end is using React js as the JS framework
All front end related code is under the folder "front-end"

Only dist/** is deployed to the page


1) To test frontend code locally, run command
npm run dev

2) To fix linting issues, run command
npm run lintfix

3) To push new code to prod, run command
npm run build
firebase deploy

## Backend
We will be using javascript ES6 here for the cloud functions