function order(l, k) {
    a = parseFloat(document.getElementById("Fnum").value);
    var answer = document.getElementById("Female");
    answer.value = Math.round(150.95 * a * 100) / 100;
    b = parseFloat(document.getElementById("Mnum").value);
    var answer2 = document.getElementById("Male");
    answer2.value = Math.round(180.95 * b * 100) / 100;
    l = parseFloat(document.getElementById("Female").value);
    k = parseFloat(document.getElementById("Male").value);
    var answe3 = document.getElementById("Total");
    answe3.value = l + k;
}

