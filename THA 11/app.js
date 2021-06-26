const quiz = [
   {
    question:" Q1: Who is the prime minister of india?",
    a:"Narendra Modi",
    b:"Sonia Gandhi",
    c:"Rahul Gandhi",
    d:"Amit Shah",
    ans:"ans1",
},

{
    question:" Q2: Who has won WTC 2021?",
    a:"India",
    b:"New Zealand",
    c:"Australia",
    d:"Sri Lanka",
    ans:"ans2"

},
{
    question:" Q3: What is the full form of js?",
    a:"Java Script",
    b:"Java Bash",
    c:"Java Super",
    d:"None of above",
    ans:"ans1"
},
{
    question:" Q4: What is the full form of DRS?",
    a:"Dhoni Review system",
    b:"Decision Review system",
    c:"Dominating Review system",
    d:"Nono of above",
    ans:"ans2"
},
{
    question:" Q5: Who is the president of India?",
    a:"Joe Biden",
    b:"Donald trump",
    c:"Ram Nath Kovind",
    d:"Amit Shah",
    ans:"ans3"
}
];
 const container2=document.querySelector('.container2');
 const opt1=document.querySelector('#opt1');
 const opt2=document.querySelector('#opt2');
 const opt3=document.querySelector('#opt3');
 const opt4=document.querySelector('#opt4');
 const opt5=document.querySelector('#opt5');
 const answers=document.querySelectorAll('.answer')
  const btn=document.getElementById("btn")
const show=document.querySelector('#lower')
let count=0;
let score=0;
const displayQuestion = () =>{
    //  console.log(quiz[0].question)
    const h =quiz[count];
     container2.innerText=h.question;
     opt1.innerText= h.a;
     opt2.innerText= h.b;
     opt3.innerText= h.c;
     opt4.innerText= h.d;

}
 displayQuestion();

 const getCheckedAnswer = () => {
          answers.forEach((curAnsElem) =>{
              if(curAnsElem.checked)
              {
                  answer = curAnsElem.id;

              }
            });
            return answer;
 };

 btn.addEventListener('click' , () => {
     const correct=getCheckedAnswer();
    //  console.log(correct);

     if(correct==quiz[count].ans){
         score++;
     }
     count++ ;
     if(count<quiz.length)
    {
        displayQuestion();
    }
    else{

        show.innerHTML=`<h2>Your score ${score}/${quiz.length}</h3>`
    }
 });
