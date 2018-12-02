'use strict';

const request = require('request-promise');
const alexa = require('ask-sdk-core');

const randomFactHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request 
      && handlerInput.requestEnvelope.request.intent.name === 'RandomFactIntent';
  },

  handle(handlerInput) {
    return request('http://randomuselessfact.appspot.com/random.json?language=en', {
      json: true
    })
    .then((response) => {
      return handlerInput.responseBuilder
        .speak(response.text)
        .withSimpleCard('Random fact', response.text)
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

module.exports.randomFact = alexa.SkillBuilders.custom()
  .addRequestHandlers(randomFactHandler)
  .addErrorHandlers(errorHandler)
  .lambda();