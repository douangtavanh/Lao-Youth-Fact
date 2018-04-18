'use strict';

const {
  dialogflow,
  Suggestions,
  BasicCard,
  Image,
} = require('actions-on-google');
const functions = require('firebase-functions');

const app = dialogflow({debug: true});


const data = require('./data');
const quizData = require('./quiz-data');
const images = require('./images');
const sprintf = require('sprintf-js').sprintf;

//Check screen availavble
app.middleware((conv) => {
  conv.hasScreen =
    conv.surface.capabilities.has('actions.capability.SCREEN_OUTPUT');
  conv.hasAudioPlayback =
    conv.surface.capabilities.has('actions.capability.AUDIO_OUTPUT');
});
    

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
const randomValue = array => {
  return array[Math.floor(Math.random() * array.length)];
}

const delFact = array => {
  factData.splice(factData.indexOf(array), 1);
}

//Main intent processing
app.intent('welcome', conv => {
  conv.ask(randomValue(data.welcome.intent));
  conv.ask(new Suggestions(['Fact', 'Quick quiz']));
});

app.intent('fact', conv => {
  if ((Boolean(factData.length === 0) === (true))) {
    factData = data.fact.slice();
    conv.close('I think I run out of fact. Please talk to me again or keep coming back later.');
  } else {
    let random = randomValue(factData);
  if (!conv.hasScreen) {
    conv.ask(random + '. do you want more fact?');
  } else {
    let findFact = element => {
      return element === random;
    }
    if ((images.images[importFact.findIndex(findFact)]) === null) {
      conv.ask(random);
      conv.ask('Do you want more facts?');
      conv.ask(new Suggestions(['Yes', 'No']));
    } else {
      conv.ask(random);
      conv.ask(new BasicCard({
        text: random,
        title: images.imagesTitle[importFact.findIndex(findFact)],
        image: new Image({
          url: images.images[importFact.findIndex(findFact)],
          alt: images.imagesTitle[importFact.findIndex(findFact)],
        })
      }));
    conv.ask('Do you want more facts?');
    conv.ask(new Suggestions(['Yes', 'No']));
    }
  }
  factData.splice(factData.indexOf(random), 1);
  }
});

app.intent('factYes', conv => {
  if ((Boolean(factData.length === 0) === (true))) {
    factData = data.fact.slice();
    conv.close('I think I run out of fact. Please talk to me again or keep coming back later.');
  } else {
    let random = randomValue(factData);
  if (!conv.hasScreen) {
    conv.ask(random + '. do you want more fact?');
  } else {
    let findFact = element => {
      return element === random;
    }
    if ((images.images[importFact.findIndex(findFact)]) === null) {
      conv.ask(random);
      conv.ask('Do you want more facts?');
      conv.ask(new Suggestions(['Yes', 'No']));
    } else {
      conv.ask(random);
      conv.ask(new BasicCard({
        text: random,
        title: images.imagesTitle[importFact.findIndex(findFact)],
        image: new Image({
          url: images.images[importFact.findIndex(findFact)],
          alt: images.imagesTitle[importFact.findIndex(findFact)],
        })
      }));
    conv.ask('Do you want more facts?');
    conv.ask(new Suggestions(['Yes', 'No']));
    }
  }
  factData.splice(factData.indexOf(random), 1);
  }
});

app.intent('factNo', conv => {
  conv.close('I hope to see you next time. Have a nice day!');
});

app.intent('quiz', conv => {
  if ((Boolean(Object.keys(question).length === 0)) === (true)) {
    coneQuiz = {};
    for (let x in quizData.data) {
      coneQuiz[x] = quizData.data[x];
    }
    question = coneQuiz;
    conv.close('I run out of questions. Please come back later.');
  } else {
    let randomQuiz = randomValue(Object.getOwnPropertyNames(question));
    conv.ask((Object.getOwnPropertyDescriptor(question, randomQuiz).value));
    conv.data.question = randomQuiz;
    delete question[randomQuiz];
  }
});

app.intent('quizYes', conv => {
  if ((Boolean(Object.keys(question).length === 0)) === (true)) {
    coneQuiz = {};
    for (let x in quizData.data) {
      coneQuiz[x] = quizData.data[x];
    }
    question = coneQuiz;
    conv.close('I run out of questions. Please come back later.');
  } else {
    conv.data.guess = 0;
    let randomQuiz = randomValue(Object.getOwnPropertyNames(question));
    conv.ask((Object.getOwnPropertyDescriptor(question, randomQuiz).value));
    conv.data.question = randomQuiz;
    delete question[randomQuiz];
  }
});

app.intent('q1', conv => {
  let input = conv.parameters['prime_minister'];
  let answer = Object.getOwnPropertyDescriptor(quizData.answer, conv.data.question).value;
  if ((input.toLocaleLowerCase() === answer.toLocaleLowerCase())) {
    conv.ask('Your answer is correct!');
    conv.ask('Do you want more quiz?');
  } else {
    conv.ask('You\'re so close. Please try again.');
  }
});

app.intent('q2', conv => {
  let input = conv.parameters['number'];
  let answer = Object.getOwnPropertyDescriptor(quizData.answer, conv.data.question).value;
  if (input.toString() === answer) {
    conv.ask('Your answer is correct!');
    conv.ask('Do you want more quiz?');
  } else {
    conv.ask('You\'re so close. Please try again.');
  }
})

app.intent('about', conv => {
  conv.ask('Lao Youth Facts will tell you the random facts about SEAYP, ASEAN, Lao PDR facts. Therefore, It\'s might help you to prepare for SSEAYP exam. Do you want to hear facts?');
});

//Dialogflow output
exports.laoYouth = functions.https.onRequest(app);