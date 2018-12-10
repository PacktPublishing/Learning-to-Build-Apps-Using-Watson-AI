// Example Node js program to classify a given image using
// a custom trained VR model that was trained using Watson Studio.

'use strict';

var VisualRecognitionV3 = require('watson-developer-cloud/visual-recognition/v3');
var fs = require('fs');

// specify all the classifier ID's through which the image would have to be processed
var classifiers = ['YOUR WATSON VR CUSTOM MODEL ID'];

// specify the minimum score a class must have to be displayed in the response.
// Set to 0.0 to ignore the classification score and return all values.
var threshold = 0.0;

//Set the language of the output class names.
var language = "en";

var visualRecognition = new VisualRecognitionV3({

  // Your Watson VR instance API key
  api_key: 'YOUR WATSON VR API KEY',

  // The release date of the version of the API you want to use.
  // The current version is 2018-03-19.
  version: '2018-03-19',

  headers: {
        // Watson services log requests and their results to improve the services
        // for future users. The logged data is NOT shared or made public.
        // Set X-Watson-Learning-Opt-Out to true or 1 on each request that you
        // do not want IBM to access for general service improvements.
        'X-Watson-Learning-Opt-Out': 'true'
    }
});

var params = {
  // An image file (.jpg, .png) or .zip file with images
  // REPLACE THE FILE NAME AND PATH BELOW ACCORDINGLY
  //images_file: fs.createReadStream('../data/images.zip'),
  
  // REPLACE THE FILE NAME AND PATH BELOW ACCORDINGLY
  images_file: fs.createReadStream('../data/test/bathroom_001_5919340491_m.jpg'),
  classifier_ids: classifiers,
  accept_language: language,
  threshold: threshold
};

visualRecognition.classify(params, function(err, res) {
  if (err) {
    console.log(err);
  } else {
    console.log(JSON.stringify(res, null, 2));
  }
});