let students = ["Martin", "Vladimir", "Igor", "Zuzana"]
let MathGrades = [80, 90, 100, 120, ]
let student = prompt("Insert your name");
let sel_student = document.getElementById("student"); // namiesto toho aby si pisal vsade

if (students.includes(student) === true) {
    var search = students.indexOf(student);
    sel_student.innerHTML = (`Student ${students[search]} get ${MathGrades[search]} points.`)

} else
    document.write("Student not found")


if (MathGrades[search] <= 90) {
    sel_student.style.color = "red";
} else if (MathGrades[search] >= 110) {
    sel_student.style.color = "green";
}





//console.log(`${students[0]} has reach ${MathGrades[0]} points`);
// console.log(`${students[students.indexOf("cicina")]} has reach ${MathGrades[students.indexOf("cicina")]} points`);