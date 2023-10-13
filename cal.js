// This function clear all the values
function clearScreen() {
    document.getElementById("result").value = "";
}
 
// This function display values
function display(value) {
    document.getElementById("result").value += value;
}
 

function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
}
function deleteNum() {
    var currentValue = document.getElementById("result").value;
    if (currentValue.length > 0) {
        // Remove the last character using substring
        currentValue = currentValue.substring(0, currentValue.length - 1);
        document.getElementById("result").value = currentValue;
    }
}