var request = require('request');


function buildResponse(request){

  var intentName = request.intent.name;
  var respondWith = "Ummm. I'm sorry, I don't quite understand."

  if(intentName == "deploy") {
    request({
      method: 'POST',
      url: 'https://api.netlify.com/build_hooks/5b75f84e82d3f10467d27f41'
    });
    respondWith = "Ok, deploying hawks worx dot com, on Netlify";
  }

  var response = {
    "version": "0.1",
    "response": {
      "outputSpeech": {
        "type": "SSML",
        "ssml": "<speak>" + respondWith + "</speak>"
      },
      "shouldEndSession": true
    }
  };
  return response;
}


export function handler(event, context, callback) {
  if (event.request.type === 'LaunchRequest') {
    console.log(event.request.type);
    callback(null, buildResponse(event.request));
  } else if (event.request.type === 'IntentRequest') {
      console.log(event.request.type);
      callback(null, buildResponse(event.request));
  } else if (event.request.type === 'SessionEndedRequest') {
      console.log(event.request.type);
      onSessionEnded(event.request, event.session);
      callback();
  }
}
