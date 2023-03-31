const questions = [{
    
    'ques': 'which of the following is a markup language',
    'a': 'HTML',
    'b': 'CSS',
    'c': 'Javascript',
    'd' : 'PHP',
    'correct' : 'a',

    
},
{
    'ques': 'what year was javascript launched?',
    'a': '1996',
    'b': '1995',
    'c': '1994',
    'd' : 'none of the above',
    'correct' : 'b',
    

},
{
    'ques': 'what does CSS stands for?',
    'a': 'HTML',
    'b': 'Cascading Stylesheet',
    'c': 'Javascript',
    'd' : 'PHP',
    'correct' : 'b',

}
];

let index = 0;

const quesbox = document.getElementById("quesbox");
const optionsInputs = document.querySelectorAll('.options');

const loadQuestion = () =>{
    if(index == total){

        console.log("end quiz");
        
        return endQuiz();

    } 
    reset();
    const data = questions[index];
    console.log(data);

    quesbox.innerText = `${index+1}) ${data.ques}`;

    optionsInputs[0].nextElementSibling.innerText = data.a;
    optionsInputs[1].nextElementSibling.innerText = data.b;
    optionsInputs[2].nextElementSibling.innerText = data.c;
    optionsInputs[3].nextElementSibling.innerText = data.d;

}

let right = 0;
let wrong = 0;
let total = questions.length;


const submitQuiz = () =>{
    const data = questions[index];

    const ans = getAnswer();
    if(ans == data.correct){
        right++;
    }
    else{
        wrong++;
    }
    index++;
    loadQuestion();
    return;
}

const getAnswer = () =>{
    let answer;
    optionsInputs.forEach(
        (input)=>{
            if(input.checked){
                // console.log(input.value);
                answer = input.value;
            }
        
        }
    )
    return answer;
}


const reset = () =>{
    optionsInputs.forEach(
        (input)=>{
            input.checked = false;
        
        }
    )
};


const endQuiz = () =>{
    document.getElementById("box").innerHTML = `
    <h3>Thank you for taking the Quiz!</h3>
    <h2> ${right} / ${total} are correct.`
};


loadQuestion();