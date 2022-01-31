//array of students
const students = {Martin: 76, Thomas: 85, Klaus: 65, Maria: 93, David: 81};

//function to calculate the grading
function getGrade (points) {
    let Grade = 'A'
    switch(true) {
        case (points < 60) :
            Grade = 'F';
            break;
        case (points < 70) :
            Grade = 'D';
            break;
        case (points < 80) :
            Grade = 'C';
            break;
        case (points < 90) :
            Grade = 'B';
    }
    return Grade;
}
let averagesum = 0;
let index = 0;

//output all students
for (student in students) {
    console.log(`${student} have an average grade of ${students[student]} points, this means it is an: ${getGrade(students[student])}` );
    // for output class average
    averagesum += students[student];
    index++;
}
//calculate average of the class and output
averagesum/= index;
console.log(`\nThe average points of the class are ${averagesum}, this is ${getGrade(averagesum)} `)