var students = [];
function submit(){
  var studiv = [];
  for(var j = 1; j <= 4; j++){
    var studentnew = document.getElementById("name_of_the_student_" + j).value;
    console.log(studentnew);
    students.push(studentnew);
  }
  console.log(students);
  console.log(students.length);
  for(var k = 0; k < students.length; k++){
    studiv.push("NAME - " + students[k] + "<br>");
    console.log(studiv);
  }
  document.getElementById("display_name_with_commas").innerHTML=studiv;
  var remcom = studiv.join(" ");
  document.getElementById("display_name_without_commas").innerHTML=remcom;
  document.getElementById("submit_button").style.display="none";
  document.getElementById("sort_button").style.display="inline-block";
}
function sorting(){
  students.sort();
  console.log(students);
  var sorted = [];
  console.log(students.length);
  for(var i = 0; i < students.length; i++){
    sorted.push("NAME - " + students[i] + "<br>");
    console.log(sorted);
  }
  remcom = sorted.join(" ");
  console.log(remcom);
  document.getElementById("display_name_without_commas").innerHTML=remcom;
}