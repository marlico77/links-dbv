function mostrarDialogo() {
    Swal.fire({
        title: 'ATENÇÃO',
        text: 'Em breve disponível!',
        icon: 'error', // Pode ser 'success', 'error', 'warning', 'info', 'question'
        confirmButtonText: 'OK',
        customClass: {
            popup: 'minha-caixa-dialogo',
            title: 'meu-titulo',
            content: 'meu-conteudo',
            confirmButton: 'meu-botao'
        }
    });
}