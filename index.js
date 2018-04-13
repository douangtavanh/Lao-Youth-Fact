'use strict';

process.env.DEBUG = 'actions-on-google:*';
const { DialogflowApp } = require('actions-on-google');
const functions = require('firebase-functions');
const data = require('./data');
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

const conefact = data.fact.slice();
let factData = conefact.slice();

//Functions
const delFact = array => {
  factData.splice(factData.indexOf(array), 1);
}

const randomValue = array => {
  return array[Math.floor(Math.random() * array.length)];
}

const remainFact = (app, array) => {
  if (Boolean(array.length === 0) === true) {
    factData = data.fact.slice();
    app.ask('You already get it all.');
  }
}

//Main intent processing
const welcome = app => {
  app.ask(app.buildRichResponse().addSimpleResponse(randomValue(data.welcome.intent)).addSuggestions(['Fact', 'Quick Quiz']));
}
const fact = app => {
  remainFact(app, factData);
  let random = randomValue(factData);
  app.ask(app.buildRichResponse().addSimpleResponse(random + '. do you want more fact?').addSuggestions(['Fact']));
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