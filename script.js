function hitung() {
    let fungsi = document.getElementById("fungsi").value;
    let a = parseFloat(document.getElementById("a").value);
    let b = parseFloat(document.getElementById("b").value);
    let n = parseInt(document.getElementById("n").value);

    let h = (b - a) / n;
    let total = 0;

    function f(x) {
        return eval(fungsi);
    }

    total = f(a) + f(b);

    for (let i = 1; i < n; i++) {
        let x = a + i * h;
        total += 2 * f(x);
    }

    let hasil = (h / 2) * total;
    document.getElementById("hasil").innerText =
        "Nilai Integral ≈ " + hasil.toFixed(6);
}
