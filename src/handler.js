'use strict';

const request = require('request-promise');
const alexa = require('ask-sdk-core');

const randomFactHandler = {
  canHandle(handlerInput) {
    console.log(handlerInput);

    return handlerInput.request.intent.name === 'RandomFact';
  },

  handle(handlerInput) {
    return request('http://randomuselessfact.appspot.com/random.json?language=en', {
      json: true
    })
    .then((response) => {
      return handlerInput.responseBuilder
        .speak(response.text)
        .getResponse();
    })
    .catch((err) => {
      console.log(err);

      return handlerInput.responseBuilder
        .speak('Uh-oh! An error occurred')
        .getResponse();
    });
  }
};

const errorHandler = {
  canHandle() {
    return true;
  },

  handle(handlerInput, error) {
    console.log(`Error handled: ${error.message}`);

    return handlerInput.responseBuilder
      .speak('Sorry, I can\'t understand the command. Please say again.')
      .reprompt('Sorry, I can\'t understand the command. Please say again.')
      .getResponse();
  }
};

const skillBuilder = alexa.SkillBuilders.custom();

module.exports.randomFact = skillBuilder
  .addRequestHandlers(randomFactHandler)
  .addErrorHandlers(errorHandler)
  .lambda();