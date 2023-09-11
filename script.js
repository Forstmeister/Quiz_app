let questions =[
    {
    "question" : "Wer hat HTML erfunden ?",
    "answer_1" : "Robbie Williams",
    "answer_2": "Lady Gaga",
    "answer_3" : "Tim Berners-Lee",
    "answer_4" : "Justin Biber",
    "right_answer": 3
},

{
    "question": "Was ist der beste Tag der Woche?",
    "answer_1": "Montag",
    "answer_2": "Dienstag",
    "answer_3": "Mittwoch",
    "answer_4": "Freitag",
    "right_answer": 3
},

{
    "question": "Welches Tier kann nicht springen?",
    "answer_1": "Känguru",
    "answer_2": "Eichhörnchen",
    "answer_3": "Elefant",
    "answer_4": "Frosch",
    "right_answer": 3
},

{
    "question": "Was kommt nie allein?",
    "answer_1": "Glück",
    "answer_2": "Pech",
    "answer_3": "Schokolade",
    "answer_4": "Regen",
    "right_answer": 2
},

{
    "question": "Welche Frucht fliegt?",
    "answer_1": "Apfel",
    "answer_2": "Birne",
    "answer_3": "Banane",
    "answer_4": "Kiwi",
    "right_answer": 1
},

{
    "question": "Was macht man mit einem kaputten Uhrwerk?",
    "answer_1": "Wegwerfen",
    "answer_2": "Zurückspulen",
    "answer_3": "Ölen",
    "answer_4": "Verfluchen",
    "right_answer": 4
},

{
    "question": "Was ist schwerer als eine Tonne, aber leichter als eine Feder?",
    "answer_1": "Ein Elefant",
    "answer_2": "Ein Kilo Federn",
    "answer_3": "Ein Pfund Steine",
    "answer_4": "Nichts",
    "right_answer": 4
},

{
    "question": "Was hat immer ein Ende, aber keinen Anfang?",
    "answer_1": "Eine Schleife",
    "answer_2": "Ein Buch",
    "answer_3": "Eine Straße",
    "answer_4": "Ein Kreis",
    "right_answer": 1
},

{
    "question": "Welcher Tag kommt direkt vor dem Donnerstag?",
    "answer_1": "Mittwoch",
    "answer_2": "Dienstag",
    "answer_3": "Freitag",
    "answer_4": "Samstag",
    "right_answer": 2
}

];

let currentQuestion = 0;

function init(){
    let totalLength = document.getElementById("lengthTotal");
    totalLength.innerHTML +=`${questions.length}`;
    
    showPosition();
    showQuestion ();
}

function showQuestion (){
if(currentQuestion >= questions.length){
document.getElementById("questionBody").style.display="none";
document.getElementById("endScreen").style.display='';
}else{
   
}

let question = questions[currentQuestion];

    document.getElementById("questionText").innerHTML = question['question'];  
    document.getElementById("answer_1").innerHTML = question['answer_1'];  
    document.getElementById("answer_2").innerHTML = question['answer_2'];  
    document.getElementById("answer_3").innerHTML = question['answer_3'];  
    document.getElementById("answer_4").innerHTML = question['answer_4'];  
}
//slice(-1) gibt die letzte Position eines strings zurück
//parentNode ist das übergeordnete Element z.b. div conatiner mit der klasse "card" 
function answer(selection){
    
    let question = questions[currentQuestion];
    let selectionNumber = selection.slice(-1);
    let numberAsNumber = parseInt(selectionNumber);
    let idOfRightAnswer = `answer_${question['right_answer']}`;

        if(numberAsNumber == question['right_answer']){
            document.getElementById(selection).parentNode.classList.add("bg-success")
            }else {
                document.getElementById(selection).parentNode.classList.add("bg-danger");
                document.getElementById(idOfRightAnswer).parentNode.classList.add("bg-success")
 }
 document.getElementById("nextButton").disabled = false;

   
}

function nextQuestion(){
    currentQuestion ++;
    document.getElementById("nextButton").disabled = true;
    resetAnswerButtons();
    showPosition();
    showQuestion ();

    
}

function resetAnswerButtons(){
    document.getElementById("answer_1").parentNode.classList.remove("bg-success");
    document.getElementById("answer_1").parentNode.classList.remove("bg-danger");
    document.getElementById("answer_2").parentNode.classList.remove("bg-success");
    document.getElementById("answer_2").parentNode.classList.remove("bg-danger");
    document.getElementById("answer_3").parentNode.classList.remove("bg-success");
    document.getElementById("answer_3").parentNode.classList.remove("bg-danger");
    document.getElementById("answer_4").parentNode.classList.remove("bg-success");
    document.getElementById("answer_4").parentNode.classList.remove("bg-danger");
    
}

function showPosition(){
    document.getElementById("actualLength").innerHTML="";
  let position = currentQuestion +1;
  document.getElementById("actualLength").innerHTML +=`${position}`;
}