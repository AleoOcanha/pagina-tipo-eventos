document.addEventListener('DOMContentLoaded', () => {
    const cardContainer = document.querySelector('.card-container');
    const searchInput = document.querySelector('input[type="text"]');
    const searchButton = document.getElementById('botao-busca');
    let eventsData = [];

    async function carregarEventos() {
        try {
            const response = await fetch('data.json');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            eventsData = await response.json();
            exibirCards(eventsData);
        } catch (error) {
            console.error("Não foi possível carregar os dados dos eventos:", error);
            cardContainer.innerHTML = "<p>Desculpe, não foi possível carregar os eventos no momento.</p>";
        }
    }

    function exibirCards(eventos) {
        cardContainer.innerHTML = '';

        if (eventos.length === 0) {
            cardContainer.innerHTML = '<p class="sem-resultados">Nenhum evento encontrado para sua busca.</p>';
            return;
        }

        eventos.forEach(evento => {
            const card = document.createElement('article');
            card.className = 'card';

            card.innerHTML = `
                <h2>${evento.tipo}</h2>
                <p>${evento.frase1}</p>
                <p>${evento.frase2}</p>
                <a href="${evento.link}" target="_blank">Se emocione</a>
                <p>${evento.tags}</p>

            `;

            cardContainer.appendChild(card);
        });
    }

    function iniciarBusca() {
        const termoBusca = searchInput.value.toLowerCase().trim();

        if (!termoBusca) {
            exibirCards(eventsData);
            return;
        }

        const resultados = eventsData.filter(evento => {
            const tipoMatch = evento.tipo.toLowerCase().includes(termoBusca);
            const tagMatch = evento.tags.some(tag => tag.toLowerCase().includes(termoBusca));
            return tipoMatch || tagMatch;
        });

        exibirCards(resultados);
    }

    searchButton.addEventListener('click', iniciarBusca);

    searchInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            iniciarBusca();
        }
    });

    carregarEventos();
});