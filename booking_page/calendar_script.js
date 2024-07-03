//Create list of months
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "Desember"];

//Get current month
let currentMonthIndex = new Date().getMonth();

//Update month text in calendar
function updateMonthText(){
    document.getElementById('month').textContent = months[currentMonthIndex];
}

//Update month text when page loads
updateMonthText();

//Method to go to previos month
function prevMonth() {
    if (currentMonthIndex === 0) {
        currentMonthIndex = 11; //Goes to december if current month is january
    } else {
        currentMonthIndex--; //Goes to previous month
    }
    updateMonthText();
}
function nextMonth() {
    if (currentMonthIndex === 11) {
        currentMonthIndex = 0; // Goes to january if current month is december
    } else {
        currentMonthIndex++; // Goes to next month
    }
    updateMonthText();
}