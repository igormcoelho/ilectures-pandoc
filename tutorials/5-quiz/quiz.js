// example:
/*
```javascript {cmd=true}
document.getElementById('quiz-btn-r-ds-q1').onclick = function(){ quiz_refresh('quiz-div-ds-q1', [2]) };
document.getElementById('quiz-btn-h-ds-q1').onclick = function(){ quiz_hint('quiz-div-ds-q1') };
document.getElementById('quiz-btn-s-ds-q1').onclick = function(){ quiz_solution('quiz-div-ds-q1') };
```
*/
// or simply: setup_quiz(quiz_ds('q1'));

// this setup expects three buttons (suffix 'topic-qx'):
// - 'quiz-btn-r-topic-ds-q1
function setup_quiz_suffix(quiz_suffix, solutions)
{
  document.getElementById('quiz-btn-r-'+quiz_suffix).onclick = function(){ quiz_refresh('quiz-div-'+quiz_suffix, solutions) };
  document.getElementById('quiz-btn-h-'+quiz_suffix).onclick = function(){ quiz_hint('quiz-div-'+quiz_suffix) };
  document.getElementById('quiz-btn-s-'+quiz_suffix).onclick = function(){ quiz_solution('quiz-div-'+quiz_suffix) };
}

//return {name: 'ds', question: qlist.questions[i]};
function setup_quiz(struct_question)
{
  var quiz_suffix = struct_question.name + '-' + struct_question.question.id;
  setup_quiz_suffix(quiz_suffix,  struct_question.question.solutions);
}

// setup and refresh
function quiz_refresh(divid, solutions = [], doShuffle = true) {
  const mydiv = document.getElementById(divid);
  var list = mydiv.children;
  var list2 = list[0].getElementsByTagName('li');
  for (var i = 0; i < list2.length; i++) {
      // refresh part
      list2[i].style.color = "black";
      list2[i].children[0].disabled = false;
      list2[i].children[0].checked = false;
      list2[i].style.textDecoration = "";
      // setup part
      var isSetup = list2[i].getAttribute("li-quiz-setup")=="true";
      if(!isSetup) {
        list2[i].id = divid+"-li-"+i;
        list2[i].setAttribute("li-quiz-solution", "false");
      }
  }
  // mark solutions
  for(var i=0; i<solutions.length; i++) {
    var isSetup2 = list2[solutions[i]].getAttribute("li-quiz-setup")=="true";
    if(!isSetup2)
      list2[solutions[i]].setAttribute("li-quiz-solution", "true");
  }
  // finish setup
  for (var i = 0; i < list2.length; i++)
    list2[i].setAttribute("li-quiz-setup", "true");
  // shuffle
  if(doShuffle)
    for (var i = list2.length; i >= 0; i--) {
        list[0].appendChild(list2[Math.random() * i | 0]);
    }
}


// 'adviceList' directly indicates wrong elements to cut.
// if 'doRandom' is activated, choice will be random ('adviceList' is ignored).
//     As all elements may be false, or all may be true, number of cut
//     elements is also random (it may be 0 up to size-2)
//     Size - 2 means at least some doubts exist for "single solutions" that
//        may be most of the cases (both may still be true, or none).
function quiz_hint(divid, adviceList = [], doRandom = true) {
  const mydiv = document.getElementById(divid);
  var list = mydiv.children;
  var list2 = list[0].getElementsByTagName('li');
  var countCuts = 0;
  for (var i = 0; i < list2.length; i++) {
      if(countCuts == list2.length-2)
        break;
      var r = (Math.random() * list2.length | 0);
      var attr_isSol = list2[r].getAttribute("li-quiz-solution");
      var isSol = attr_isSol=="true";
      if(!isSol) {
        countCuts=countCuts+1;
        //list2[r].children[0].disabled = true; // no need to disable
        list2[r].style.textDecoration = "line-through";
      }
  }
}




function quiz_solution(divid) {
  const mydiv = document.getElementById(divid);
  var list = mydiv.children;
  var list2 = list[0].getElementsByTagName('li');
  for (var i = 0; i < list2.length; i++) {
    var isSol = list2[i].getAttribute("li-quiz-solution") == "true";
    if((list2[i].children[0].checked && isSol) || (!list2[i].children[0].checked && !isSol))
      list2[i].style.color = "green";
    else
      list2[i].style.color = "red";
  }
}
