'use strict';

const request = require('request-promise');

module.exports.randomFact = async (event, context) => {
  let response;

  try {
    response = await request('http://randomuselessfact.appspot.com/random.json?language=en', {
      json: true
    });
  } catch (e) {
    response = {
      text: 'Uh-oh! An error occurred'
    };
  }

  return {
    version: '1.0',
    response: {
      outputSpeech: {
        type: 'PlainText',
        text: response.text,
      },
      shouldEndSession: true,
    },
  };
};