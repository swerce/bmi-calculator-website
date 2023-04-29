function calculateBMI() {
    var height = document.getElementById("height").value;
    var weight = document.getElementById("weight").value;

    var bmi = weight / ((height / 100) * (height / 100));
    bmi = bmi.toFixed(1);

    document.getElementById("bmi").innerHTML = bmi;

    if (bmi < 18.5) {
        document.getElementById("status").innerHTML = "Underweight";
    } else if (bmi < 25) {
        document.getElementById("status").innerHTML = "Normal";
    } else if (bmi < 30) {
        document.getElementById("status").innerHTML = "Overweight";
    } else {
        document.getElementById("status").innerHTML = "Obese";
    }
}
