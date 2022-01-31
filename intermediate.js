// let Martin = 76
// let Thomas = 85
// let Klaus = 65
// let Maria = 93
// let David = 81
// let sum = Martin + Thomas + Klaus + Maria + David;
// console.log(sum)

// let students = { Martin: 76, Thomas: 85, Klaus: 65, Maria: 93, David: 81 } doesn not WORK !!
let students = [76, 85, 65, 93, 81];
var sum = 0;
for (let i = 0; i < students.length; i++) {
    sum += students[i]; // toto ze kazde z arraza vyberie lebo to zvysuje 
}
console.log(sum)
var average = sum / students.length;
console.log(`The average of class is ${average}`)

switch (true) {

    case (average <= 50):
        console.log("Very bad average");
        break;
    case (average <= 60):
        console.log("Still disaster");
        break;
    case (average <= 70):
        console.log("You can make it better");
        break;
    case (average <= 80):
        console.log("Close to perfection");
        break;
    case (average <= 90):
        console.log("Close to perfection");
        break;
    case (average <= 100):
        console.log("Class of genuises");
        break;
    default:
        console.log("something went wrong")

}