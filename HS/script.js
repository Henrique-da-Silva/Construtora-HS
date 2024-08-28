
// Formulário 

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita o envio do formulário padrão

        // Captura os valores dos campos
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const message = document.getElementById('message').value.trim();

        // Validação simples
        if (name === '' || email === '' || phone === '' || message === '') {
            formMessage.innerHTML = '<div class="alert alert-danger">Todos os campos são obrigatórios!</div>';
            return;
        }

        if (!validateEmail(email)) {
            formMessage.innerHTML = '<div class="alert alert-danger">Por favor, insira um email válido!</div>';
            return;
        }

        // Simulação de envio de dados
        formMessage.innerHTML = '<div class="alert alert-success">Mensagem enviada com sucesso!</div>';

        // Limpa os campos após o envio
        form.reset();
    });

    // Função de validação de email simples
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});


// Cookies

document.addEventListener('DOMContentLoaded', function () {
    // Verifica se o usuário já tomou uma decisão sobre os cookies
    const cookiesAccepted = localStorage.getItem('cookiesAccepted');

    if (!cookiesAccepted) {
        // Se não aceitou nem recusou, mostra o banner
        document.getElementById('cookieBanner').style.display = 'block';
    }

    // Captura o clique no botão "Aceitar"
    document.getElementById('acceptCookies').addEventListener('click', function () {
        // Esconde o banner de cookies e salva a escolha do usuário
        document.getElementById('cookieBanner').style.display = 'none';
        localStorage.setItem('cookiesAccepted', 'true');
        // Aqui você pode ativar os cookies não essenciais, se houver
    });

    // Captura o clique no botão "Recusar"
    document.getElementById('declineCookies').addEventListener('click', function () {
        // Esconde o banner de cookies e salva a escolha do usuário
        document.getElementById('cookieBanner').style.display = 'none';
        localStorage.setItem('cookiesAccepted', 'false');
        // Aqui você pode desativar ou impedir a ativação de cookies não essenciais
    });
});

// Botão Whatsapp

document.addEventListener('DOMContentLoaded', function() {
    const whatsappButton = document.getElementById('whatsappButton');

    whatsappButton.addEventListener('click', function() {
        const phoneNumber = '+351123456789'; // Substitua pelo número de WhatsApp
        const message = 'Olá, gostaria de mais informações !!!'; // Mensagem padrão
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        
        window.open(whatsappUrl, '_blank'); // Abre o WhatsApp em uma nova aba
    });
});

