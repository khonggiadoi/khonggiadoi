var order = [];
var images = [
	"a_1_exo_ooo",
	"a_2_exo_xoo",
	"a_3_exo_oxo",
	"a_4_exo_oox",
	"a_5_exo_xxo",
	"a_6_exo_xox",
	"a_7_exo_oxx",
	"a_8_exo_xxx",
	"b_1_blood_ooo",
	"b_2_blood_xoo",
	"b_3_blood_oxo",
	"b_4_blood_oox",
	"b_5_blood_xxo",
	"b_6_blood_xox",
	"b_7_blood_oxx",
	"b_8_blood_xxx"];
var question_surprise = [
	"How surprised are you to encounter an actual exoskeleton made of carbon fiber by Ekso Bionics in a hospital?",
	"How surprised are you to encounter an actual exoskeleton made of cotton twine by Ekso Bionics in a hospital?",
	"How surprised are you to encounter an actual exoskeleton made of carbon fiber by Prada in a hospital?",
	"How surprised are you to encounter an actual exoskeleton made of carbon fiber by Ekso Bionics in a kindergarten?",
	"How surprised are you to encounter an actual exoskeleton made of cotton twine by Prada in a hospital?",
	"How surprised are you to encounter an actual exoskeleton made of cotton twine by Ekso Bionics in a kindergarten?",
	"How surprised are you to encounter an actual exoskeleton made of carbon fiber by Prada in a kindergarten?",
	"How surprised are you to encounter an actual exoskeleton made of cotton twine by Prada in a kindergarten?",
	"How surprised are you to encounter an actual blood pressure monitor with a pressure cuff by OMRON in a doctor's office?",
	"How surprised are you to encounter an actual blood pressure monitor with a steering wheel by OMRON in a doctor's office?",
	"How surprised are you to encounter an actual blood pressure monitor with a pressure cuff by LEGO in a doctor's office?",
	"How surprised are you to encounter an actual blood pressure monitor with a pressure cuff by OMRON in a swimming pool?",
	"How surprised are you to encounter an actual blood pressure monitor with a steering wheel by LEGO in a doctor's office?",
	"How surprised are you to encounter an actual blood pressure monitor with a steering wheel by OMRON in a swimming pool?",
	"How surprised are you to encounter an actual blood pressure monitor with a pressure cuff by LEGO in a swimming pool?",
	"How surprised are you to encounter an actual blood pressure monitor with a steering wheel by LEGO in a swimming pool?"];
var question_imagine = [
	"How easily can you imagine an actual exoskeleton made of carbon fiber by Ekso Bionics in a hospital?",
	"How easily can you imagine an actual exoskeleton made of cotton twine by Ekso Bionics in a hospital?",
	"How easily can you imagine an actual exoskeleton made of carbon fiber by Prada in a hospital?",
	"How easily can you imagine an actual exoskeleton made of carbon fiber by Ekso Bionics in a kindergarten?",
	"How easily can you imagine an actual exoskeleton made of cotton twine by Prada in a hospital?",
	"How easily can you imagine an actual exoskeleton made of cotton twine by Ekso Bionics in a kindergarten?",
	"How easily can you imagine an actual exoskeleton made of carbon fiber by Prada in a kindergarten?",
	"How easily can you imagine an actual exoskeleton made of cotton twine by Prada in a kindergarten?",
	"How easily can you imagine an actual blood pressure monitor with a pressure cuff by OMRON in a doctor's office?",
	"How easily can you imagine an actual blood pressure monitor with a steering wheel by OMRON in a doctor's office?",
	"How easily can you imagine an actual blood pressure monitor with a pressure cuff by LEGO in a doctor's office?",
	"How easily can you imagine an actual blood pressure monitor with a pressure cuff by OMRON in a swimming pool?",
	"How easily can you imagine an actual blood pressure monitor with a steering wheel by LEGO in a doctor's office?",
	"How easily can you imagine an actual blood pressure monitor with a steering wheel by OMRON in a swimming pool?",
	"How easily can you imagine an actual blood pressure monitor with a pressure cuff by LEGO in a swimming pool?",
	"How easily can you imagine an actual blood pressure monitor with a steering wheel by LEGO in a swimming pool?"];
var question_example = [
	"How good an example of an exoskeleton do you consider an actual exoskeleton made of carbon fiber by Ekso Bionics in a hospital?",
	"How good an example of an exoskeleton do you consider an actual exoskeleton made of cotton twine by Ekso Bionics in a hospital?",
	"How good an example of an exoskeleton do you consider an actual exoskeleton made of carbon fiber by Prada on in a hospital?",
	"How good an example of an exoskeleton do you consider an actual exoskeleton made of carbon fiber by Ekso Bionics in a kindergarten?",
	"How good an example of an exoskeleton do you consider an actual exoskeleton made of cotton twine by Prada in a hospital?",
	"How good an example of an exoskeleton do you consider an actual exoskeleton made of cotton twine by Ekso Bionics in a kindergarten?",
	"How good an example of an exoskeleton do you consider an actual exoskeleton made of carbon fiber by Prada in a kindergarten?",
	"How good an example of an exoskeleton do you consider an actual exoskeleton made of cotton twine by Prada in a kindergarten?",
	"How good an example of a blood pressure monitor do you consider an actual blood pressure monitor with a pressure cuff by OMRON in a doctor's office?",
	"How good an example of a blood pressure monitor do you consider an actual blood pressure monitor with a steering wheel by OMRON in a doctor's office?",
	"How good an example of a blood pressure monitor do you consider an actual blood pressure monitor with a pressure cuff by LEGO in a doctor's office?",
	"How good an example of a blood pressure monitor do you consider an actual blood pressure monitor with a pressure cuff by OMRON in a swimming pool?",
	"How good an example of a blood pressure monitor do you consider an actual blood pressure monitor with a steering wheel by LEGO in a doctor's office?",
	"How good an example of a blood pressure monitor do you consider an actual blood pressure monitor with a steering wheel by OMRON in a swimming pool?",
	"How good an example of a blood pressure monitor do you consider an actual blood pressure monitor with a pressure cuff by LEGO in a swimming pool?",
	"How good an example of a blood pressure monitor do you consider an actual blood pressure monitor with a steering wheel by LEGO in a swimming pool?"];
var question_ideal = [
	"How similar is an actual exoskeleton made of carbon fiber by Ekso Bionics in a hospital to an ideal exoskeleton?",
	"How similar is an actual exoskeleton made of cotton twine by Ekso Bionics in a hospital to an ideal exoskeleton?",
	"How similar is an actual exoskeleton made of carbon fiber by Prada in a hospital to an ideal exoskeleton?",
	"How similar is an actual exoskeleton made of carbon fiber by Ekso Bionics in a kindergarten to an ideal exoskeleton?",
	"How similar is an actual exoskeleton made of cotton twine by Prada in a hospital to an ideal exoskeleton?",
	"How similar is an actual exoskeleton made of cotton twine by Ekso Bionics in a kindergarten to an ideal exoskeleton?",
	"How similar is an actual exoskeleton made of carbon fiber by Prada in a kindergarten to an ideal exoskeleton?",
	"How similar is an actual exoskeleton made of cotton twine by Prada in a kindergarten to an ideal exoskeleton?",
	"How similar is an actual blood pressure monitor with a pressure cuff by OMRON in a doctor's office to an ideal blood pressure monitor?",
	"How similar is an actual blood pressure monitor with a steering wheel by OMRON in a doctor's office to an ideal blood pressure monitor?",
	"How similar is an actual blood pressure monitor with a pressure cuff by LEGO in a doctor's office to an ideal blood pressure monitor?",
	"How similar is an actual blood pressure monitor with a pressure cuff by OMRON in a swimming pool to an ideal blood pressure monitor?",
	"How similar is an actual blood pressure monitor with a steering wheel by LEGO in a doctor's office to an ideal blood pressure monitor?",
	"How similar is an actual blood pressure monitor with a steering wheel by OMRON in a swimming pool to an ideal blood pressure monitor?",
	"How similar is an actual blood pressure monitor with a pressure cuff by LEGO in a swimming pool to an ideal blood pressure monitor?",
	"How similar is an actual blood pressure monitor with a steering wheel by LEGO in a swimming pool to an ideal blood pressure monitor?"];
var question_easy_use = [
	"It would be easy to use an exoskeleton made of carbon fiber by Ekso Bionics in a hospital.",
	"It would be easy to use an exoskeleton made of cotton twine by Ekso Bionics in a hospital.",
	"It would be easy to use an exoskeleton made of carbon fiber by Prada in a hospital.",
	"It would be easy to use an exoskeleton made of carbon fiber by Ekso Bionics in a kindergarten.",
	"It would be easy to use an exoskeleton made of cotton twine by Prada in a hospital.",
	"It would be easy to use an exoskeleton made of cotton twine by Ekso Bionics in a kindergarten.",
	"It would be easy to use an exoskeleton made of carbon fiber by Prada in a kindergarten.",
	"It would be easy to use an exoskeleton made of cotton twine by Prada in a kindergarten.",
	"It would be easy to use a blood pressure monitor with a pressure cuff by OMRON in a doctor's office.",
	"It would be easy to use a blood pressure monitor with a steering wheel by OMRON in a doctor's office.",
	"It would be easy to use a blood pressure monitor with a pressure cuff by LEGO in a doctor's office.",
	"It would be easy to use a blood pressure monitor with a pressure cuff by OMRON in a swimming pool.",
	"It would be easy to use a blood pressure monitor with a steering wheel by LEGO in a doctor's office.",
	"It would be easy to use a blood pressure monitor with a steering wheel by OMRON in a swimming pool.",
	"It would be easy to use a blood pressure monitor with a pressure cuff by LEGO in a swimming pool.",
	"It would be easy to use a blood pressure monitor with a steering wheel by LEGO in a swimming pool."];
var question_easy_learn_use = [
    "It would be easy to learn to use an exoskeleton made of carbon fiber by Ekso Bionics in a hospital.",
	"It would be easy to learn to use an exoskeleton made of cotton twine by Ekso Bionics in a hospital.",
	"It would be easy to learn to use an exoskeleton made of carbon fiber by Prada in a hospital.",
	"It would be easy to learn to use an exoskeleton made of carbon fiber by Ekso Bionics in a kindergarten.",
	"It would be easy to learn to use an exoskeleton made of cotton twine by Prada in a hospital.",
	"It would be easy to learn to use an exoskeleton made of cotton twine by Ekso Bionics in a kindergarten.",
	"It would be easy to learn to use an exoskeleton made of carbon fiber by Prada in a kindergarten.",
	"It would be easy to learn to use an exoskeleton made of cotton twine by Prada in a kindergarten.",
	"It would be easy to learn to use a blood pressure monitor with a pressure cuff by OMRON in a doctor's office.",
	"It would be easy to learn to use a blood pressure monitor with a steering wheel by OMRON in a doctor's office.",
	"It would be easy to learn to use a blood pressure monitor with a pressure cuff by LEGO in a doctor's office.",
	"It would be easy to learn to use a blood pressure monitor with a pressure cuff by OMRON in a swimming pool.",
	"It would be easy to learn to use a blood pressure monitor with a steering wheel by LEGO in a doctor's office.",
	"It would be easy to learn to use a blood pressure monitor with a steering wheel by OMRON in a swimming pool.",
	"It would be easy to learn to use a blood pressure monitor with a pressure cuff by LEGO in a swimming pool.",
	"It would be easy to learn to use a blood pressure monitor with a steering wheel by LEGO in a swimming pool."];
var question_knowledge_use = [
    "I would have the knowledge necessary to use an exoskeleton made of carbon fiber by Ekso Bionics in a hospital.",
	"I would have the knowledge necessary to use an exoskeleton made of cotton twine by Ekso Bionics in a hospital.",
	"I would have the knowledge necessary to use an exoskeleton made of carbon fiber by Prada in a hospital.",
	"I would have the knowledge necessary to use an exoskeleton made of carbon fiber by Ekso Bionics in a kindergarten.",
	"I would have the knowledge necessary to use an exoskeleton made of cotton twine by Prada in a hospital.",
	"I would have the knowledge necessary to use an exoskeleton made of cotton twine by Ekso Bionics in a kindergarten.",
	"I would have the knowledge necessary to use an exoskeleton made of carbon fiber by Prada in a kindergarten.",
	"I would have the knowledge necessary to use an exoskeleton made of cotton twine by Prada in a kindergarten.",
	"I would have the knowledge necessary to use a blood pressure monitor with a pressure cuff by OMRON in a doctor's office.",
	"I would have the knowledge necessary to use a blood pressure monitor with a steering wheel by OMRON in a doctor's office.",
	"I would have the knowledge necessary to use a blood pressure monitor with a pressure cuff by LEGO in a doctor's office.",
	"I would have the knowledge necessary to use a blood pressure monitor with a pressure cuff by OMRON in a swimming pool.",
	"I would have the knowledge necessary to use a blood pressure monitor with a steering wheel by LEGO in a doctor's office.",
	"I would have the knowledge necessary to use a blood pressure monitor with a steering wheel by OMRON in a swimming pool.",
	"I would have the knowledge necessary to use a blood pressure monitor with a pressure cuff by LEGO in a swimming pool.",
	"I would have the knowledge necessary to use a blood pressure monitor with a steering wheel by LEGO in a swimming pool."];
var question_effective = [
    "An exoskeleton made of carbon fiber by Ekso Bionics in a hospital would be effective.",
	"An exoskeleton made of cotton twine by Ekso Bionics in a hospital would be effective.",
	"An exoskeleton made of carbon fiber by Prada in a hospital would be effective.",
	"An exoskeleton made of carbon fiber by Ekso Bionics in a kindergarten would be effective.",
	"An exoskeleton made of cotton twine by Prada in a hospital would be effective.",
	"An exoskeleton made of cotton twine by Ekso Bionics in a kindergarten would be effective.",
	"An exoskeleton made of carbon fiber by Prada in a kindergarten would be effective.",
	"An exoskeleton made of cotton twine by Prada in a kindergarten would be effective.",
	"A blood pressure monitor with a pressure cuff by OMRON in a doctor's office would be effective.",
	"A blood pressure monitor with a steering wheel by OMRON in a doctor's office would be effective.",
	"A blood pressure monitor with a pressure cuff by LEGO in a doctor's office would be effective.",
	"A blood pressure monitor with a pressure cuff by OMRON in a swimming pool would be effective.",
	"A blood pressure monitor with a steering wheel by LEGO in a doctor's office would be effective.",
	"A blood pressure monitor with a steering wheel by OMRON in a swimming pool would be effective.",
	"A blood pressure monitor with a pressure cuff by LEGO in a swimming pool would be effective.",
	"A blood pressure monitor with a steering wheel by LEGO in a swimming pool would be effective."];
var question_fulfil_purpose = [
    "An exoskeleton made of carbon fiber by Ekso Bionics in a hospital would fulfil its purpose.",
	"An exoskeleton made of cotton twine by Ekso Bionics in a hospital would fulfil its purpose.",
	"An exoskeleton made of carbon fiber by Prada in a hospital would fulfil its purpose.",
	"An exoskeleton made of carbon fiber by Ekso Bionics in a kindergarten would fulfil its purpose.",
	"An exoskeleton made of cotton twine by Prada in a hospital would fulfil its purpose.",
	"An exoskeleton made of cotton twine by Ekso Bionics in a kindergarten would fulfil its purpose.",
	"An exoskeleton made of carbon fiber by Prada in a kindergarten would fulfil its purpose.",
	"An exoskeleton made of cotton twine by Prada in a kindergarten would fulfil its purpose.",
	"A blood pressure monitor with a pressure cuff by OMRON in a doctor's office would fulfil its purpose.",
	"A blood pressure monitor with a steering wheel by OMRON in a doctor's office would fulfil its purpose.",
	"A blood pressure monitor with a pressure cuff by LEGO in a doctor's office would fulfil its purpose.",
	"A blood pressure monitor with a pressure cuff by OMRON in a swimming pool would fulfil its purpose.",
	"A blood pressure monitor with a steering wheel by LEGO in a doctor's office would fulfil its purpose.",
	"A blood pressure monitor with a steering wheel by OMRON in a swimming pool would fulfil its purpose.",
	"A blood pressure monitor with a pressure cuff by LEGO in a swimming pool would fulfil its purpose.",
	"A blood pressure monitor with a steering wheel by LEGO in a swimming pool would fulfil its purpose."];
var question_natural = [
    "Using an exoskeleton made of carbon fiber by Ekso Bionics in a hospital would be natural.",
	"Using an exoskeleton made of cotton twine by Ekso Bionics in a hospital would be natural.",
	"Using an exoskeleton made of carbon fiber by Prada in a hospital would be natural.",
	"Using an exoskeleton made of carbon fiber by Ekso Bionics in a kindergarten would be natural.",
	"Using an exoskeleton made of cotton twine by Prada in a hospital would be natural.",
	"Using an exoskeleton made of cotton twine by Ekso Bionics in a kindergarten would be natural.",
	"Using an exoskeleton made of carbon fiber by Prada in a kindergarten would be natural.",
	"Using an exoskeleton made of cotton twine by Prada in a kindergarten would be natural.",
	"Using a blood pressure monitor with a pressure cuff by OMRON in a doctor's office would be natural.",
	"Using a blood pressure monitor with a steering wheel by OMRON in a doctor's office would be natural.",
	"Using a blood pressure monitor with a pressure cuff by LEGO in a doctor's office would be natural.",
	"Using a blood pressure monitor with a pressure cuff by OMRON in a swimming pool would be natural.",
	"Using a blood pressure monitor with a steering wheel by LEGO in a doctor's office would be natural.",
	"Using a blood pressure monitor with a steering wheel by OMRON in a swimming pool would be natural.",
	"Using a blood pressure monitor with a pressure cuff by LEGO in a swimming pool would be natural.",
	"Using a blood pressure monitor with a steering wheel by LEGO in a swimming pool would be natural."];
var question_enjoyable = [
    "Using an exoskeleton made of carbon fiber by Ekso Bionics in a hospital would be enjoyable.",
	"Using an exoskeleton made of cotton twine by Ekso Bionics in a hospital would be enjoyable.",
	"Using an exoskeleton made of carbon fiber by Prada in a hospital would be enjoyable.",
	"Using an exoskeleton made of carbon fiber by Ekso Bionics in a kindergarten would be enjoyable.",
	"Using an exoskeleton made of cotton twine by Prada in a hospital would be enjoyable.",
	"Using an exoskeleton made of cotton twine by Ekso Bionics in a kindergarten would be enjoyable.",
	"Using an exoskeleton made of carbon fiber by Prada in a kindergarten would be enjoyable.",
	"Using an exoskeleton made of cotton twine by Prada in a kindergarten would be enjoyable.",
	"Using a blood pressure monitor with a pressure cuff by OMRON in a doctor's office would be enjoyable.",
	"Using a blood pressure monitor with a steering wheel by OMRON in a doctor's office would be enjoyable.",
	"Using a blood pressure monitor with a pressure cuff by LEGO in a doctor's office would be enjoyable.",
	"Using a blood pressure monitor with a pressure cuff by OMRON in a swimming pool would be enjoyable.",
	"Using a blood pressure monitor with a steering wheel by LEGO in a doctor's office would be enjoyable.",
	"Using a blood pressure monitor with a steering wheel by OMRON in a swimming pool would be enjoyable.",
	"Using a blood pressure monitor with a pressure cuff by LEGO in a swimming pool would be enjoyable.",
	"Using a blood pressure monitor with a steering wheel by LEGO in a swimming pool would be enjoyable."];
var question_future = [
    "I would use an exoskeleton made of carbon fiber by Ekso Bionics in a hospital in the future.",
	"I would use an exoskeleton made of cotton twine by Ekso Bionics in a hospital in the future.",
	"I would use an exoskeleton made of carbon fiber by Prada in a hospital in the future.",
	"I would use an exoskeleton made of carbon fiber by Ekso Bionics in a kindergarten in the future.",
	"I would use an exoskeleton made of cotton twine by Prada in a hospital in the future.",
	"I would use an exoskeleton made of cotton twine by Ekso Bionics in a kindergarten in the future.",
	"I would use an exoskeleton made of carbon fiber by Prada in a kindergarten in the future.",
	"I would use an exoskeleton made of cotton twine by Prada in a kindergarten in the future.",
	"I would use a blood pressure monitor with a pressure cuff by OMRON in a doctor's office in the future.",
	"I would use a blood pressure monitor with a steering wheel by OMRON in a doctor's office in the future.",
	"I would use a blood pressure monitor with a pressure cuff by LEGO in a doctor's office in the future.",
	"I would use a blood pressure monitor with a pressure cuff by OMRON in a swimming pool in the future.",
	"I would use a blood pressure monitor with a steering wheel by LEGO in a doctor's office in the future.",
	"I would use a blood pressure monitor with a steering wheel by OMRON in a swimming pool in the future.",
	"I would use a blood pressure monitor with a pressure cuff by LEGO in a swimming pool in the future.",
	"I would use a blood pressure monitor with a steering wheel by LEGO in a swimming pool in the future."];
var question_often = [
    "I would use an exoskeleton made of carbon fiber by Ekso Bionics in a hospital often.",
	"I would use an exoskeleton made of cotton twine by Ekso Bionics in a hospital often.",
	"I would use an exoskeleton made of carbon fiber by Prada in a hospital often.",
	"I would use an exoskeleton made of carbon fiber by Ekso Bionics in a kindergarten often.",
	"I would use an exoskeleton made of cotton twine by Prada in a hospital often.",
	"I would use an exoskeleton made of cotton twine by Ekso Bionics in a kindergarten often.",
	"I would use an exoskeleton made of carbon fiber by Prada in a kindergarten often.",
	"I would use an exoskeleton made of cotton twine by Prada in a kindergarten often.",
	"I would use a blood pressure monitor with a pressure cuff by OMRON in a doctor's office often.",
	"I would use a blood pressure monitor with a steering wheel by OMRON in a doctor's office often.",
	"I would use a blood pressure monitor with a pressure cuff by LEGO in a doctor's office often.",
	"I would use a blood pressure monitor with a pressure cuff by OMRON in a swimming pool often.",
	"I would use a blood pressure monitor with a steering wheel by LEGO in a doctor's office often.",
	"I would use a blood pressure monitor with a steering wheel by OMRON in a swimming pool often.",
	"I would use a blood pressure monitor with a pressure cuff by LEGO in a swimming pool often.",
	"I would use a blood pressure monitor with a steering wheel by LEGO in a swimming pool often."];

var index = 0;

function createOrder() {
    for (var i = 0; i < images.length; i++){
        order.push(i);
    }
}

(function () {
    var config = {
        apiKey: "AIzaSyAuFLvwco07AXEofNYS07eNtERBtmaieoA",
    authDomain: "khonggiadoi-ebf20.firebaseapp.com",
    databaseURL: "https://khonggiadoi-ebf20.firebaseio.com",
    projectId: "khonggiadoi-ebf20",
    storageBucket: "khonggiadoi-ebf20.appspot.com",
    messagingSenderId: "941610202562",
    appId: "1:941610202562:web:59c66fb283c90bd166525b",
measurementId: "G-JDVZ393Z5L"
    };
    
    firebase.initializeApp(config);
    
    createOrder();
    order = shuffle(order);
    updateQuestion();
}());

var key = firebase.database().ref().push().key;

function submit() {
    var age = $("#age").val();
    var gender = $("#gender").val();
    var ethnicity = $("#ethnicity").val();
    var nationality = $("#nationality").val();
    var education = $("#education").val();
    var occupation = $("#occupation").val();

    firebase.database().ref(key).push({
        "age": age,
        "gender": gender,
        "ethnicity": ethnicity,
        "nationality": nationality,
        "education": education,
        "occupation": occupation
    });
};

$(window).load(function () {
    $("#demographics_form").submit(submit);

});

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

var answered = 0;
var currentButtons = [];
var currentAnswers = [];
var answers = [];

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function updateQuestion(){
    //console.log("Showing question " + order[index] + "(" + index + "): " + questions[order[index]]);
    scrollToTop();
    if (currentButtons != null){
        for(var i = 0; i < currentButtons.length; i++){
            currentButtons[i].disabled = false;
        }
    }
    
    currentButtons = [];
    currentAnswers = [];
    answered = 0;
//    document.getElementById("answer_button").style.visibility = "hidden";
    document.getElementById("answer_button").disabled = true;
    
    var img = "url(set_01_images/" + images[order[index]] + ".png";
    document.getElementById("question_image").style.background = img;
    document.getElementById("question_image").style.backgroundRepeat = "no-repeat";
    document.getElementById("question_image").style.backgroundSize = "contain";
    document.getElementById("question1").innerHTML = question_surprise[order[index]];
    document.getElementById("question2").innerHTML = question_imagine[order[index]];
    document.getElementById("question3").innerHTML = question_example[order[index]];
    document.getElementById("question4").innerHTML = question_ideal[order[index]];
    document.getElementById("question5").innerHTML = question_easy_use[order[index]];
    document.getElementById("question6").innerHTML = question_easy_learn_use[order[index]];
    document.getElementById("question7").innerHTML = question_knowledge_use[order[index]];
    document.getElementById("question8").innerHTML = question_effective[order[index]];
    document.getElementById("question9").innerHTML = question_fulfil_purpose[order[index]];
    document.getElementById("question10").innerHTML = question_natural[order[index]];
    document.getElementById("question11").innerHTML = question_enjoyable[order[index]];
    document.getElementById("question12").innerHTML = question_future[order[index]];
    document.getElementById("question13").innerHTML = question_often[order[index]];


}

function answer(button, num, score) {
    //console.log(order[index]+" : "+ answers);
    if(currentButtons[num] != null){
        currentButtons[num].disabled = false;
    } else {
        answered++;
    }
    currentButtons[num] = button;
    currentAnswers[num] = score;
    button.disabled = true;
    console.log("true")
    
    if(answered == 13){
//        document.getElementById("answer_button").style.visibility = "visible";
        document.getElementById("answer_button").disabled = false;
    }
}

function startQuestions(){
    firebase.database().ref(key).update({
        "status": 'started'
    })
    updateDisplay('start');
}

function submitAnswers(){
    answers[order[index]] = currentAnswers;
    index++;
    if(index < images.length) {
        updateQuestion();
    } else {
        firebase.database().ref(key).update({
            results: answers
        });
        updateDisplay("mid");
    }
}

function submit() {
    var age = $("#age").val();
    var gender = $('input[name=gender]:checked').val()
    var ethnicity = $("#ethnicity").val();
    var nationality = $("#nationality").val();
    var education = $("#education").val();
    var occupation = $("#occupation").val();

    firebase.database().ref(key).update({
        "age": age,
        "gender": gender,
        "ethnicity": ethnicity,
        "nationality": nationality,
        "education": education,
        "occupation": occupation,
        "status": null
    });
};



$('#demographics_form').submit(function(e) {
    e.preventDefault();
    submit();
    updateDisplay("debrief");
});

var displayed = "instructions";
function updateDisplay(newDisp){
    document.getElementById(displayed).style.display = "none";
    displayed = newDisp;
    document.getElementById(displayed).style.display = "block";   
}

//function testDatabase(){
//    firebase.database().ref("questions").set(questions); 
//    for(j = 0; j < 70; j++){
//        console.log(questions.length);
//        var key = firebase.database().ref().push().key; 
//        firebase.database().ref(key+"/questions").update({
//            [questions[0]]: questions
//        });
//    }
//}