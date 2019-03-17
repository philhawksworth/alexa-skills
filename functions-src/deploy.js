var request = require('request');


function buildResponse(request){

  // var intentName = request.intent.name;
  // var respondWith = "Ummm. I'm sorry, I don't quite understand."

  // if(intentName == "deploy") {
  //   request({
  //     method: 'POST',
  //     url: 'https://api.netlify.com/build_hooks/5b75f84e82d3f10467d27f41'
  //   });
  //   respondWith = "Ok, deploying hawks worx dot com, on Netlify";
  // }

  var respondWith = "Ok, deploying hawks worx dot com, on Netlify";
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



// --------------- Main handler -----------------------

// Route the incoming request based on type (LaunchRequest, IntentRequest,
// etc.) The JSON body of the request is provided in the event parameter.
exports.handler = (event, context, callback) => {


  console.log('event :', event);



  try {
      // console.log(`event.session.application.applicationId=${event.session.application.applicationId}`);

      // /**
      //  * Uncomment this if statement and populate with your skill's application ID to
      //  * prevent someone else from configuring a skill that sends requests to this function.
      //  */

      // if (event.session.application.applicationId !== 'amzn1.ask.skill.855cedcf-b7ed-47ce-8d09-1aec83572449') {
      //      callback('Invalid Application ID');
      // }


      // if (event.request.type === 'LaunchRequest') {
      //     console.log(event.request.type);
      //     callback(null, buildResponse(event.request));

      // } else if (event.request.type === 'IntentRequest') {
      //     console.log(event.request.type);
      //     callback(null, buildResponse(event.request));

      // } else if (event.request.type === 'SessionEndedRequest') {
      //     console.log(event.request.type);
      //     onSessionEnded(event.request, event.session);
      //     callback();

      // }

      callback(null, buildResponse(event.request));


  } catch (err) {
      callback(err);
  }
};

