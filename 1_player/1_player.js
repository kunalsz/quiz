//--------------SETTING UP THE MAIN VARIABLES
var question_list = ['Q1.What is the capial of Sweden?','Q2.Who is the Prime Minister of India?','Q3.Who is the CEO of Microsoft','Q4.When was the Indian constitution drafted?','Q5.Why is the color of Mars(a planet near earth) red?','Q6.What is the full-form of IT?','Q7.What is timing of the fastest 100m ran by Usain Bolt?','Q8.Who is the director of Avengers:EndGame(2019)?','Q9.Which is the most listened song in Youtube history?','Q10.Who is the admin of this page?']
var choicesObj={
    a1 : ['New York','Moscow','Ottawa','Stockholm'],
    a2 : ['Donald Trump(idiot)','Rahul Gandhi(what to say about him)','Narendra Modi(traveller)','Imran Khan(dumb)'],
    a3 : ['Satya Nadella','Sundar Pichai','Tim Cook','Mark Zuckerburg'],
    a4 : ['26 Nov 1949','15 Aug 1947','26 Jan 1950 ','1 Apr 2008'],
    a5 : ['Silicon','Iron','Because it likes red(the correct one)','None of the Above'],
    a6 : ['Industrial Tractor','Incoorporate Tender','Information Technology','All of the above'],
    a7 : ['0.3','1.2','1.9','9.58'],
    a8 : ['Ryan reynolds & bros','Anthony & Joe Russo','Ferga & Margie','Karan Johar(Why not?)'],
    a9 : ['Despacito','Bala','Senorita','Dhinchak Pooja(YES SERIOUSLY)'],
    a10 : ['You Yourself','Me Myself','IDK','He Himself']

}
var ans = {
    a1:'d',
    a2:'c',
    a3:'a',
    a4:'a',
    a5:'b',
    a6:'c',
    a7:'d',
    a8:'b',
    a9:'a',
    a10:'b'
}
var aopt = document.getElementById('a_option')
var bopt = document.getElementById('b_option')
var copt = document.getElementById('c_option')
var dopt = document.getElementById('d_option')


var timer_control = (function(){
    let time = document.getElementById('timer')
    var b = 10
    setInterval(function() {
        document.getElementById("timer").innerHTML = b;
        b = b-1
        if (b <= 0) clearInterval(time.innerHTML);
      }, 1000);
})

var questions_shower = (function(tc){
    tc()
    var ques = document.getElementById('questions')
    ques.insertAdjacentText('afterbegin',question_list[0])
})(timer_control)

var option_shower = (function(){
    aopt.insertAdjacentHTML('afterbegin',choicesObj.a1[0])
    bopt.insertAdjacentHTML('afterbegin',choicesObj.a1[1])
    copt.insertAdjacentHTML('afterbegin',choicesObj.a1[2])
    dopt.insertAdjacentHTML('afterbegin',choicesObj.a1[3])
})()

var ansCheck = (function(){
    var btn = document.querySelector('.main_options')
    btn.addEventListener('click',function(){
        console.log(btn.textContent)
    })
    
})()







