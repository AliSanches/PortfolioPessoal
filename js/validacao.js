function validar_form() {
    // Obter valores dos campos de nome, email e mensagem
    var nome = form_envio.nome.value.trim(); // Utilizamos trim() para remover espaços em branco extras
    var email = form_envio.email.value.trim();
    var mensagem = form_envio.mensagem.value.trim();

    if (nome === "") { // Verifica se o campo nome está vazio
        alert("O campo Nome é obrigatório!");
        form_envio.nome.focus();
        return false;
    }

    if (email === "") { // Verifica se o campo email está vazio
        alert("O campo E-mail é obrigatório");
        form_envio.email.focus();
        return false;
    }
    
    if (mensagem === "") { // Verifica se o campo mensagem está vazio
        alert("O campo Mensagem é obrigatório");
        form_envio.mensagem.focus();
        return false;
    }

    if (email.indexOf("@") === -1 || email.indexOf(".") === -1) { // Verifica se o email é válido
        alert("Por favor, indique um e-mail válido.");
        form_envio.email.focus();
        return false;
    }

    // Se você deseja redirecionar para um link de e-mail, você pode fazer isso da seguinte maneira:
    window.location.href = "mailto:" + 'alissonsanches19@hotmail.com';

    // Retorna false para evitar que o formulário seja enviado normalmente
    return false;
}