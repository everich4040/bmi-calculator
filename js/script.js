//Simple selector function 
function $(selector) {
    return document.querySelector(selector);
}

function $All(selectors) {
    return document.querySelectorAll(selectors);
}


//getting value of input:range and displaying dem

let rangeInput = $("input");
let height = $(".height .height-v");
rangeInput.value = 0;

rangeInput.oninput = function() {
    height.innerHTML = parseFloat(this.value * 2);

}
console.log(height.innerHTML)

function power(base, exponent = 1) {
    var result = 1;
    for (let i = 0; i < exponent; i++) {
        result *= base;

    }
    return result;
}

var mathSigns = Array.from($All('.sign'));
mathSigns.forEach(mathSign => {
    mathSign.onclick = function() {
        var weightAge = this.parentElement.parentElement.firstElementChild.nextElementSibling;
        var weightAgeValue = parseInt(weightAge.textContent);
        if (this.textContent === "-") {
            if (weightAgeValue === 0) {
                weightAgeValue = 0;
            } else {
                weightAgeValue--;
            }
        } else if (this.textContent === "+") weightAgeValue++;
        weightAge.innerHTML = weightAgeValue;
    };
});
let answer = $('.answer');
let weightValue = $('.weightvalue');
answer.addEventListener('click', function() {
    const heightValue = +height.textContent;
    let bmi = +weightValue.textContent / (power(heightValue, 2) / 100);
    result = $(".bmi");
    result.innerHTML = `Your BMI ${bmi.toFixed(2)}`;
    $(".p-bmi").style.boxShadow = "0 0 15px #111328";

});



//change bg of the gender
const genders = $All(".gen");
var isColoured = false;
genders.forEach(gender => {
    gender.onclick = () => {
        if (gender.id == "male") {
            gender.style.backgroundColor = "red";
            gender.nextElementSibling.style.backgroundColor = "#1D2033";
            resetValues()
        } else if (gender.id == "female") {
            gender.style.backgroundColor = "red";
            gender.previousElementSibling.style.backgroundColor = "#1D2033";
            resetValues();
        }
    }
});

function resetValues() {
    $(".height-v").textContent = 0;
    $(".weightvalue").textContent = 0;
    $(".agevalue").textContent = 0;
    rangeInput.value = 0;
}