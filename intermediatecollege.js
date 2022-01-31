var arr = [
    ["Martin", 76],
    ["Thomas", 85],
    ["Klaus", 65],
    ["Maria", 93],
    ["David", 81]
]
var sum = 0;
for (var i = 0; i < arr.length; i++) {
    if (arr[i][1] < 60) { // tato [1] je tam pretoze vzdy z arraya vezme 1 vsimni ze to je multiaraz cize v arrayi je 0  a 1 
        console.log(`${arr[i][0]} get's an F`);
    } else if (arr[i][1] < 70) {
        console.log(`${arr[i][0]} get's an D`);
    } else if (arr[i][1] < 80) {
        console.log(`${arr[i][0]} get's an C`);
    } else if (arr[i][1] < 90) {
        console.log(`${arr[i][0]} get's an B`)
    } else {
        console.log(`${arr[i][0]} get's an A`)
    }
    sum += arr[i][1];
    var average = sum / arr.length;
    console.log("The average Grade is " + average);
}