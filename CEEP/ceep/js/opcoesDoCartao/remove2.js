const btnCT = document.querySelector(".opcoesDoCartao-remove");

btnCT.addEventListener('click', function () {
    btnCT.parentNode.parentNode.remove();
});