let passengerCount = 0;
let saveElement = document.getElementById("save-el");
let countElement = document.getElementById("count-el");

function incrementPassengerCount() {
    passengerCount += 1;
    countElement.textContent = passengerCount;
}

function savePassengerCount() {
    let countStr = passengerCount + " - ";
    saveElement.textContent = countStr;
    countElement.textContent = 0;
    passengerCount = 0;
}

console.log("Let's track the number of passengers on the subway!");
