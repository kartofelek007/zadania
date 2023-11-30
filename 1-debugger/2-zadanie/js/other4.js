const input1 = document.querySelector('#nr1');
const input2 = document.querySelector('#nr2');
const form = document.querySelector("form");
const btn = form.querySelector(".form-submit");
const inputs = [input1, input2];

function toggleSubmit() {
    btn.disabled = [...inputs].some(input => input.value === "")
}

toggleSubmit();

inputs.forEach(el => {
    el.addEventListener("input", function() {
        this.value = this.value.replace(/[^0-9]*/g, '');
        toggleSubmit();
    });
});

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const val1 = input1.value;
    const val2 = input2.value;

    alert(`Wynik dodawania liczb ${val1} i ${val2} to: ${val1 + val2}`);
});