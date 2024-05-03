function removerEspacosExtras(texto) {
    // Remove espaços no início e no final, e reduz múltiplos espaços para um único
    return texto.trim().replace(/\s+/g, ' ');
}

function processarTexto() {
    // Obtém o valor do campo de entrada de texto
    var texto = document.getElementById('entrada').value;
    // Remove espaços extras
    var textoProcessado = removerEspacosExtras(texto);
    // Exibe o texto processado no campo de saída
    document.getElementById('saida').textContent = textoProcessado;
}