'use strict';

process.env.DEBUG = 'actions-on-google:*';
const { DialogflowApp } = require('actions-on-google');
const functions = require('firebase-functions');
const data = require('./data');
const images = require('./images');
const sprintf = require('sprintf-js').sprintf;

//Dialogflow variable
const intent = {
  welcome: 'welcome',
  fact: 'fact',
  quiz: 'quiz',
}

const argument = {
  Yes: 'Yes',
  No: 'No',
}

const context = {
  fact: 'fact',
}
const importFact = data.fact;
const conefact = data.fact.slice();
let factData = conefact.slice();

//Check screen available



//Functions
const delFact = array => {
  factData.splice(factData.indexOf(array), 1);
}

const randomValue = array => {
  return array[Math.floor(Math.random() * array.length)];
}

const remainFact = (app) => {
  if ((Boolean(factData.length === 0) === (true))) {
    factData = data.fact.slice();
    app.ask('You already got it all.');
  }
}

//Main intent processing
const welcome = app => {
  app.ask(app.buildRichResponse().addSimpleResponse(randomValue(data.welcome.intent)).addSuggestions(['Fact', 'Quick Quiz']));
}
const fact = app => {
  const hasScreen = app.hasSurfaceCapability(app.SurfaceCapabilities.SCREEN_OUTPUT);
  remainFact(app);
  let random = randomValue(factData);
  if (!hasScreen) {
    app.ask(random + '. do you want more fact?');
  }
  //Check array index
  function findFact(element) {
    return element === random;
  }
  if ((images.images[importFact.findIndex(findFact)]) === null) {
    app.ask(app.buildRichResponse().addSimpleResponse(random + '. do you want more fact?').addSuggestions(['Fact']));
  }
  app.ask(app.buildRichResponse().addSimpleResponse(random + '. do you want more fact?').addSuggestions(['Fact']).addBasicCard(app.buildBasicCard(random).setTitle(images.imagesTitle[importFact.findIndex(findFact)]).setImage(images.images[importFact.findIndex(findFact)], images.imagesTitle[importFact.findIndex(findFact)])));
  factData.splice(factData.indexOf(random), 1);
}

const quiz = app => {
  app.ask(randomValue(data.quiz));
}

//Intent map
const actionMap = new Map();
actionMap.set(intent.welcome, welcome);
actionMap.set(intent.fact, fact);
actionMap.set(intent.question, quiz);

//Dialogflow output
const laoYouth = functions.https.onRequest((request, response) => {
  const app = new DialogflowApp({ request, response });
  console.log(`Request headers: ${JSON.stringify(request.headers)}`);
  console.log(`Request body: ${JSON.stringify(request.body)}`);
  app.handleRequest(actionMap);
});

module.exports = {
  laoYouth
};