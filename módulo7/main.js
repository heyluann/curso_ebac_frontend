var submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", function(event) {
event.preventDefault();
var A = parseFloat(document.getElementById("A").value);
var B = parseFloat(document.getElementById("B").value);

if (B > A) {
    alert("B é maior que A. Tudo certo!");
} else {
    alert("A é maior ou igual a B. Não está correto!");
}
});