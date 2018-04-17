'use strict';

process.env.DEBUG = 'actions-on-google:*';
const { DialogflowApp } = require('actions-on-google');
const functions = require('firebase-functions');
const data = require('./data');
const quizData = require('./quiz-data');
const images = require('./images');
const sprintf = require('sprintf-js').sprintf;

//Dialogflow variable
const intent = {
  welcome: 'welcome',
  fact: 'fact',
  quiz: 'quiz',
  factYes: 'factYes',
  factNo: 'factNo',
  about: 'about',
}

const argument = {
  Yes: 'Yes',
  No: 'No',
  Fact: 'Fact',
  Quiz: 'Quiz',
}

const context = {
  fact: 'fact',
  welcome: 'welcome',
}

//Copy facts data from original
const importFact = data.fact;
const conefact = data.fact.slice();
let factData = conefact.slice();

//Copy quiz data from original
let coneQuiz = {};
for (let i in quizData.data) {
  coneQuiz[i] = quizData.data[i];
}
let question = coneQuiz;

//Functions
const delFact = array => {
  factData.splice(factData.indexOf(array), 1);
}

const randomValue = array => {
  return array[Math.floor(Math.random() * array.length)];
}

const remainFact = app => {
  if ((Boolean(factData.length === 0) === (true))) {
    factData = data.fact.slice();
    app.tell('I think I run out of fact. Please talk to me again or keep coming back later.');
  }
}

const remainQuiz = app => {
  if ((Boolean(Object.keys(question).length === 0)) === (true)) {
    coneQuiz = {};
    for (let x in quizData.data) {
      coneQuiz[x] = quizData.data[x];
    }
    question = coneQuiz;
    app.tell('You already got it all');
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
    app.ask(app.buildRichResponse().addSimpleResponse(random + '. do you want more fact?').addSuggestions(['Yes', 'No']));
  }
  app.ask(app.buildRichResponse().addSimpleResponse(random + '. do you want more fact?').addSuggestions(['Yes', 'No']).addBasicCard(app.buildBasicCard(random).setTitle(images.imagesTitle[importFact.findIndex(findFact)]).setImage(images.images[importFact.findIndex(findFact)], images.imagesTitle[importFact.findIndex(findFact)])));
  factData.splice(factData.indexOf(random), 1);
}

const factYes = app => {
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
    app.ask(app.buildRichResponse().addSimpleResponse(random + '. do you want more fact?').addSuggestions(['Yes', 'No']));
  }
  app.ask(app.buildRichResponse().addSimpleResponse(random + '. do you want more fact?').addSuggestions(['Yes', 'No']).addBasicCard(app.buildBasicCard(random).setTitle(images.imagesTitle[importFact.findIndex(findFact)]).setImage(images.images[importFact.findIndex(findFact)], images.imagesTitle[importFact.findIndex(findFact)])));
  factData.splice(factData.indexOf(random), 1);
}

const factNo = app => {
  app.tell('I hope to see you next time. Have a nice day!');
}

const quiz = app => {
  //app.tell('I\'m sorry, my quick quiz is not available yet, meanwhile, I can tell you only fact.');
  remainQuiz(app);
  let randomQuiz = randomValue(Object.getOwnPropertyNames(question));
  app.ask((Object.getOwnPropertyDescriptor(question, randomQuiz).value));
  delete question[randomQuiz];
}

const about = app => {
  app.ask('Lao Youth Facts will tell you the random facts about SEAYP, ASEAN, Lao PDR facts. Therefore, It\'s might help you to prepare for SSEAYP exam. Do you want to hear facts?');
}

//Intent map
const actionMap = new Map();
actionMap.set(intent.welcome, welcome);
actionMap.set(intent.fact, fact);
actionMap.set(intent.quiz, quiz);
actionMap.set(intent.factYes, factYes);
actionMap.set(intent.factNo, factNo);
actionMap.set(intent.about, about);


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