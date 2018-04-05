'use strict';

process.env.DEBUG = 'actions-on-google:*';
const App = require('actions-on-google').DialogflowApp;
const functions = require('firebase-functions');

const data = require('./data');
const sprintf = require('sprintf-js').sprintf;

const intent = {
  welcome: 'welcome',
  fact: 'fact',
  quiz: 'quiz',
}

const argument = {
  Yes: 'Yes',
  No: 'No',
}

const randomValue = array => {
  return array[Math.floor(Math.random() * array.length)];
}

const deleteFact = array => {
  factData.splice(factData.indexOf(array), 1);
  return factData;
}

const remainFact = (app, array) => {
  if (Boolean(array.length === 0) === true) {
    app.ask('You already get it all.');
  }
}

//Import data from original js and copy them
const startFact = array => {
  if ((Boolean(array.length === 0) === true)) {
    let factData = data.fact.slice();
  }
}

//Main process
exports.laoYouth = functions.https.onRequest((request, response) => {
  const app = new App({request, response});
  console.log('Request headers: ' + JSON.stringify(request.headers));
  console.log('Request body: ' + JSON.stringify(request.body));

  const welcome = app => {
    app.ask(app.buildRichResponse().addSimpleResponse(randomValue(data.welcome.intent)).addSuggestions(['Fact', 'Quick Quiz']));
  }

  const fact = app => {
    startFact(factData);   
    let randomFact = randomValue(factData);
    remainFact(app, factData);
    app.ask(app.buildRichResponse().addSimpleResponse(randomFact + '. Do you want more Fact or quik quiz?').addSuggestions(['Fact', 'Quiz']));
    deleteFact(randomFact);
  }

  const quiz = app => {
    app.ask(randomValue(data.quiz));
  }

  let actionMap = new Map();
  actionMap.set(intent.welcome, welcome);
  actionMap.set(intent.fact, fact);
  actionMap.set(intent.question, quiz);
  app.handleRequest(actionMap);
});
