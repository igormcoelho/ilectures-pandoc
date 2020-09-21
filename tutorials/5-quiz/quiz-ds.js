
function quiz_ds(question_id)
{
  var qlist =  [
      {
        id : 'q1',
        solutions : [0] // counts from zero! 0,1,2,3...
      },
      {
        id : 'q2',
        solutions : [3] // counts from zero! 0,1,2,3...
      }
  ];
  for(var i=0; i<qlist.length;i++)
    if(qlist[i].id==question_id)
      return {name: 'ds', question: qlist[i]};
  return {};
};
