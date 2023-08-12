function validarFormulario() {
    var campoA = parseFloat(document.getElementById("campoA").value);
    var campoB = parseFloat(document.getElementById("campoB").value);

    if (isNaN(campoA) || isNaN(campoB)) {
        alert("Por favor, insira valores numéricos válidos em ambos os campos.");
        return false;
    }

    if (campoB > campoA) {
        alert("Formulário válido! B é maior que A.");
    } else {
        alert("Formulário inválido! B não é maior que A.");
    }
}
