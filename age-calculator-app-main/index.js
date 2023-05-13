const dobDay = document.getElementById('day-binary');
const dobMonth = document.getElementById('month-binary');
const dobYear = document.getElementById('year-binary');

let dayf = document.getElementById('content-days');
let monthf = document.getElementById('content-months');
let yearf = document.getElementById("content-years");

let currDay, currMonth, currYear;
let btn = document.getElementById("btn");

let dayError = document.getElementById('day-error');
let dayLabel = document.getElementsByClassName('day')[0].firstElementChild;
let monthError = document.getElementById('month-error');
let monthLabel = document.getElementsByClassName('month')[0].firstElementChild;
let yearError = document.getElementById('year-error');
let yearLabel = document.getElementsByClassName('year')[0].firstElementChild;

let date = new Date();
let check = false;

let checkDay = (e) => {
    if(e.target.value > 31 || e.target.value < 0){
        check = false;
        dayError.textContent = "Must be a valid day";
        dayLabel.style.color = "hsl(0, 100%, 67%)";
        e.target.style.border = "1px solid hsl(0, 100%, 67%)";
        dayLabel.style.opacity = 0.8;
        return;
    }
    else {
        check = true;
        dayError.textContent = "";
        dayLabel.style.color = "hsl(0, 0%, 8%)";
        e.target.style.border = "1px solid hsl(0, 0%, 86%)";
        dayLabel.style.color = "hsl(0, 1%, 44%)";
    }
    if(e.target.value == 0){
        check = false;
        dayError.textContent = "This field is required";
        dayLabel.style.color = "hsl(0, 100%, 67%)";
        e.target.style.border = "1px solid hsl(0, 100%, 67%)";
        dayLabel.style.opacity = 0.8;
    }
    else{
        check = true;
        dayError.textContent = "";
        dayLabel.style.color = "hsl(0, 0%, 8%)";
        e.target.style.border = "1px solid hsl(0, 0%, 86%)";
        dayLabel.style.color = "hsl(0, 1%, 44%)";
    }
}
let checkMonth = (e) => {
    if(e.target.value > 12 || e.target.value < 0){
        check = false;
        monthError.textContent = "Must be a valid month";
        monthLabel.style.color = "hsl(0, 100%, 67%)";
        e.target.style.border = "1px solid hsl(0, 100%, 67%)";
        monthLabel.style.opacity = 0.8;
        return;
    }
    else {
        check = true;
        monthError.textContent = "";
        monthLabel.style.color = "hsl(0, 0%, 8%)";
        e.target.style.border = "1px solid hsl(0, 0%, 86%)";
        monthLabel.style.color = "hsl(0, 1%, 44%)";
    }
    if(e.target.value == 0){
        check = false;
        monthError.textContent = "This field is required";
        monthLabel.style.color = "hsl(0, 100%, 67%)";
        e.target.style.border = "1px solid hsl(0, 100%, 67%)";
        monthLabel.style.opacity = 0.8;
        return;
    }
    else {
        check = true;
        monthError.textContent = "";
        monthLabel.style.color = "hsl(0, 0%, 8%)";
        e.target.style.border = "1px solid hsl(0, 0%, 86%)";
        monthLabel.style.color = "hsl(0, 1%, 44%)";
    }
}
let checkYear = (e) => {
    if(e.target.value > date.getFullYear()){
        check = false;
        yearError.textContent = "Must be in the past";
        yearLabel.style.color = "hsl(0, 100%, 67%)";
        e.target.style.border = "1px solid hsl(0, 100%, 67%)";
        yearLabel.style.opacity = 0.8;

        return;
    }
    else {
        check = true;
        yearError.textContent = "";
        yearLabel.style.color = "hsl(0, 0%, 8%)";
        e.target.style.border = "1px solid hsl(0, 0%, 86%)";
        yearLabel.style.color = "hsl(0, 1%, 44%)";
    }
    if(e.target.value == 0){
        check = false;
        yearError.textContent = "This field is required";
        yearLabel.style.color = "hsl(0, 100%, 67%)";
        e.target.style.border = "1px solid hsl(0, 100%, 67%)";
        yearLabel.style.opacity = 0.8;
        return;
    }
    else {
        check = true;
        yearError.textContent = "";
        yearLabel.style.color = "hsl(0, 0%, 8%)";
        e.target.style.border = "1px solid hsl(0, 0%, 86%)";
        yearLabel.style.color = "hsl(0, 1%, 44%)";
    }
}

dobDay.addEventListener('input', checkDay);
dobMonth.addEventListener('input', checkMonth);
dobYear.addEventListener('input', checkYear);

// calculating output values

let getYear = (e) => {
    let EnteredValue = e.target.value;
    currYear = date.getFullYear() - EnteredValue;
    console.log(currYear);
}
let getMonth = (e) => {
    let EnteredValue = e.target.value;
    if(EnteredValue <= date.getMonth()){
        currMonth = date.getMonth() - EnteredValue;
    }
    else{
        currYear--;
        currMonth = 12 + date.getMonth() - EnteredValue;
    }
    console.log(currMonth);
}
let getDay = (e) => {
    let EnteredValue = e.target.value;
    if(EnteredValue <= date.getDay()){
        currDay = date.getDay() - EnteredValue;
    }
    else{
        currMonth--;
        currDay = date.getDay() + 31 - EnteredValue;

        if(currMonth < 0){
            currMonth = 11;
            currYear--;
        }
    }
    console.log(currDay);
}
let fillDate = () => {
    if(check && dobDay.value != '' && dobMonth.value != '' && dobYear.value != ''){
       let i = 0, j = 0, k = 0;
       let dayInterval = setInterval(() => {
        if(i == currDay){
            dayf.innerHTML = currDay;
            return;
        }
        else {
            dayf.innerHTML = i++;
        }
       }, 60)
       let yearInterval = setInterval(() => {
        if(j == currYear){
            yearf.innerHTML = currYear;
            return;
        }
        else {
            yearf.innerHTML = j++;
        }
       }, 60)
       let monthInterval = setInterval(() => {
        if(k == currMonth){
            monthf.innerHTML = currMonth;
            return;
        }
        else {
            monthf.innerHTML = k++;
        }
       }, 60)
       setTimeout(() => {
           clearInterval(dayInterval);
           clearInterval(monthInterval);
           clearInterval(yearInterval);
       },5000);
    }
}
dobDay.addEventListener("blur", getDay);
dobMonth.addEventListener("blur", getMonth);
dobYear.addEventListener("blur", getYear);
btn.addEventListener('click', fillDate);

