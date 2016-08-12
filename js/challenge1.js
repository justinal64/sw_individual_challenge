var rangeField = document.getElementById("rangeField");
var numberField = document.getElementById("numberField");

rangeField.addEventListener("change", rangeChanged);
numberField.addEventListener("change", numberChanged);

function rangeChanged() {
    numberField.value = rangeField.value;
}

function numberChanged() {
    rangeField.value = numberField.value;
}






