function startRecognizing(){
    navigation.mediaDevices.getUserMedia({ audio : true});
   ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/mw11_7hLA/model.json', modelReady);   
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results){
    console.log("got result :", results);
}

