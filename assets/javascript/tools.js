function removerEspacosExtras(texto) {
    // Remove espaços no início e no final, e reduz múltiplos espaços para um único
    return texto.trim().replace(/\s+/g, ' ');
}

function processarTexto() {
    // Obtém o valor do campo de entrada de texto
    const texto = document.getElementById('entrada').value;
    // Remove espaços extras
    const textoProcessado = removerEspacosExtras(texto);
    // Exibe o texto processado no campo de saída
    document.getElementById('saida').textContent = textoProcessado;
    document.getElementById('entrada').value = '';
}

function copiarParaAreaDeTransferencia() {
    const texto = document.getElementById('saida').textContent;
    // Copia o texto para a área de transferência
    navigator.clipboard.writeText(texto)
        .then(() => {
            console.log('Texto copiado para a área de transferência!');
        })
        .catch((err) => {
            console.error('Erro ao copiar para a área de transferência:', err);
        });
}