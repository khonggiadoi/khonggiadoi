var order = [];
var images = [
	"a_1_bgm_hos",
	"a_2_bgm_hom",
	"b_1_bpm_hos",
	"b_2_bpm_hom",
	"c_1_cpap_hos",
	"c_2_cpap_hom",
	"d_1_exo_hos",
	"d_2_exo_hom",
	"e_1_ent_hos",
	"e_2_ent_hom"];

var question_easy_use = [
	"It would be easy to use this blood glucose meter by Novo Nordisk at home.",
	"It would be easy to use this blood glucose meter by Unilever at home.",
	"It would be easy to use this blood pressure monitor by OMRON at home.",
	"It would be easy to use this blood pressure monitor by Lenovo at home.",
	"It would be easy to use this continuous positive airway pressure machine by ResMed at home.",
	"It would be easy to use this continuous positive airway pressure machine by LG at home.",
	"It would be easy to use this exoskeleton by Ekso Bionics at home.",
	"It would be easy to use this exoskeleton by Hyundai at home.",
	"It would be easy to use this enteral feeding device by Nutricia at home.",
	"It would be easy to use this enteral feeding device by Samsung at home."];

var question_easy_learn_use = [
    "It would be easy to learn to use this blood glucose meter by Novo Nordisk at home.",
	"It would be easy to learn to use this blood glucose meter by Unilever at home.",
	"It would be easy to learn to use this blood pressure monitor by OMRON at home.",
	"It would be easy to learn to use this blood pressure monitor by Lenovo at home.",
	"It would be easy to learn to use this continuous positive airway pressure machine by ResMed at home.",
	"It would be easy to learn to use this continuous positive airway pressure machine by LG at home.",
	"It would be easy to learn to use this exoskeleton by Ekso Bionics at home.",
	"It would be easy to learn to use this exoskeleton by Hyundai at home.",
	"It would be easy to learn to use this enteral feeding device by Nutricia at home.",
	"It would be easy to learn to use this enteral feeding device by Samsung at home."];

var question_knowledge_use = [
    "I would have the knowledge necessary to use this blood glucose meter by Novo Nordisk at home.",
	"I would have the knowledge necessary to use this blood glucose meter by Unilever at home.",
	"I would have the knowledge necessary to use this blood pressure monitor by OMRON at home.",
	"I would have the knowledge necessary to use this blood pressure monitor by Lenovo at home.",
	"I would have the knowledge necessary to use this continuous positive airway pressure machine by ResMed at home.",
	"I would have the knowledge necessary to use this continuous positive airway pressure machine by LG at home.",
	"I would have the knowledge necessary to use this exoskeleton by Ekso Bionics at home.",
	"I would have the knowledge necessary to use this exoskeleton by Hyundai at home.",
	"I would have the knowledge necessary to use this enteral feeding device by Nutricia at home.",
	"I would have the knowledge necessary to use this enteral feeding device by Samsung at home."];

var question_effective = [
    "This blood glucose meter by Novo Nordisk at home would be effective.",
	"This blood glucose meter by Unilever at home would be effective.",
	"This blood pressure monitor by OMRON at home would be effective.",
	"This blood pressure monitor by Lenovo at home would be effective.",
	"This continuous positive airway pressure machine by ResMed at home would be effective.",
	"This continuous positive airway pressure machine by LG at home would be effective.",
	"This exoskeleton by Ekso Bionics at home would be effective.",
	"This exoskeleton by Hyundai at home would be effective.",
	"This enteral feeding device by Nutricia at home would be effective.",
	"This enteral feeding device by Samsung at home would be effective."];

var question_fulfil_purpose = [
    "This blood glucose meter by Novo Nordisk at home would fulfil its purpose.",
	"This blood glucose meter by Unilever at home would fulfil its purpose.",
	"This blood pressure monitor by OMRON at home would fulfil its purpose.",
	"This blood pressure monitor by Lenovo at home would fulfil its purpose.",
	"This continuous positive airway pressure machine by ResMed at home would fulfil its purpose.",
	"This continuous positive airway pressure machine by LG at home would fulfil its purpose.",
	"This exoskeleton by Ekso Bionics at home would fulfil its purpose.",
	"This exoskeleton by Hyundai at home would fulfil its purpose.",
	"This enteral feeding device by Nutricia at home would fulfil its purpose.",
	"This enteral feeding device by Samsung at home would fulfil its purpose."];

var question_natural = [
    "Using this blood glucose meter by Novo Nordisk at home would be natural.",
	"Using this blood glucose meter by Unilever at home would be natural.",
	"Using this blood pressure monitor by OMRON at home would be natural.",
	"Using this blood pressure monitor by Lenovo at home would be natural.",
	"Using this continuous positive airway pressure machine by ResMed at home would be natural.",
	"Using this continuous positive airway pressure machine by LG at home would be natural.",
	"Using this exoskeleton by Ekso Bionics at home would be natural.",
	"Using this exoskeleton by Hyundai at home would be natural.",
	"Using this enteral feeding device by Nutricia at home would be natural.",
	"Using this enteral feeding device by Samsung at home would be natural."];

var question_enjoyable = [
    "Using this blood glucose meter by Novo Nordisk at home would be enjoyable.",
	"Using this blood glucose meter by Unilever at home would be enjoyable.",
	"Using this blood pressure monitor by OMRON at home would be enjoyable.",
	"Using this blood pressure monitor by Lenovo at home would be enjoyable.",
	"Using this continuous positive airway pressure machine by ResMed at home would be enjoyable.",
	"Using this continuous positive airway pressure machine by LG at home would be enjoyable.",
	"Using this exoskeleton by Ekso Bionics at home would be enjoyable.",
	"Using this exoskeleton by Hyundai at home would be enjoyable.",
	"Using this enteral feeding device by Nutricia at home would be enjoyable.",
	"Using this enteral feeding device by Samsung at home would be enjoyable."];

var question_future = [
    "I would use this blood glucose meter by Novo Nordisk at home in the future.",
	"I would use this blood glucose meter by Unilever at home in the future.",
	"I would use this blood pressure monitor by OMRON at home in the future.",
	"I would use this blood pressure monitor by Lenovo at home in the future.",
	"I would use this continuous positive airway pressure machine by ResMed at home in the future.",
	"I would use this continuous positive airway pressure machine by LG at home in the future.",
	"I would use this exoskeleton by Ekso Bionics at home in the future.",
	"I would use this exoskeleton by Hyundai at home in the future.",
	"I would use this enteral feeding device by Nutricia at home in the future.",
	"I would use this enteral feeding device by Samsung at home in the future."];

var question_often = [
    "I would use this blood glucose meter by Novo Nordisk at home often.",
	"I would use this blood glucose meter by Unilever at home often.",
	"I would use this blood pressure monitor by OMRON at home often.",
	"I would use this blood pressure monitor by Lenovo at home often.",
	"I would use this continuous positive airway pressure machine by ResMed at home often.",
	"I would use this continuous positive airway pressure machine by LG at home often.",
	"I would use this exoskeleton by Ekso Bionics at home often.",
	"I would use this exoskeleton by Hyundai at home often.",
	"I would use this enteral feeding device by Nutricia at home often.",
	"I would use this enteral feeding device by Samsung at home often."];

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
        console.log(currentButtons.length);
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
    document.getElementById("question5").innerHTML = question_easy_use[order[index]];
    document.getElementById("question6").innerHTML = question_easy_learn_use[order[index]];
    document.getElementById("question7").innerHTML = question_knowledge_use[order[index]];
    document.getElementById("question8").innerHTML = question_effective[order[index]];
    document.getElementById("question9").innerHTML = question_fulfil_purpose[order[index]];
    document.getElementById("question10").innerHTML = question_natural[order[index]];
    document.getElementById("question11").innerHTML = question_enjoyable[order[index]];
    document.getElementById("question12").innerHTML = question_future[order[index]];
    document.getElementById("question13").innerHTML = question_often[order[index]];
    document.getElementById("page").innerText = (index+1)+" / "+images.length;



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
    
    if(answered == 9){
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
        console.log("if");
    } else {
        firebase.database().ref(key).update({
            results: answers
        });
        updateDisplay("mid");
        console.log("else");

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

var displayed = "instructions0";
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