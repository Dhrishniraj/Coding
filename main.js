var students = [];
function submit(){
    var name1 = document.getElementById("student1").value;
    var name2 = document.getElementById("student2").value;
    var name3 = document.getElementById("student3").value;
    var name4 = document.getElementById("student4").value;
    students.push(name1);
    students.push(name2);
    students.push(name3);
    students.push(name4);
    console.log(students);
    document.getElementById("students_names").innerHTML=students;
    document.getElementById("submit").style.display="none";
    document.getElementById("sorting").style.display="inline-block";
}
function sorting(){
    students.sort();
    console.log(students);
    document.getElementById("students_names").innerHTML=students;
}