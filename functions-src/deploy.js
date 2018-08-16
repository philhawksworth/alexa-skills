
function buildResponse(request){

  var intentName = request.intent.name;
  var respondWith = "Ummm. I'm sorry, I don't quite understand."

  if(intentName == "deploy") {
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
