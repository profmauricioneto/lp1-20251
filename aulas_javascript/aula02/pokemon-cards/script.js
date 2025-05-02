'use strict';

let buttons = document.getElementsByClassName('btn-like');

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => {
            buttons[i].classList.toggle('liked');
    })
}

'use strict';

// Função para adicionar uma nova carta
function addNewCard(event) {
    event.preventDefault(); 

    const cardName = document.getElementById('card-name').value;
    const cardPrice = document.getElementById('card-price').value;
    const cardDescription = document.getElementById('card-description').value;
    const cardImage = document.getElementById('card-image').files[0];

    const card = document.createElement('div');
    card.classList.add('card');

    const imageUrl = cardImage ? URL.createObjectURL(cardImage) : './assets/default.jpg';

    card.innerHTML = `
        <img src="${imageUrl}" alt="${cardName}" />
        <h4 class="title">${cardName}</h4>
        <p class="price">R$: ${parseFloat(cardPrice).toFixed(2)}</p>
        <p class="description">${cardDescription}</p>
        <div>
            <button class="btn-buy">Comprar</button>
            <button class="btn-like">Curtir</button>
        </div>
    `;

    const main = document.querySelector('main');
    main.appendChild(card);

    const likeButton = card.querySelector('.btn-like');
    likeButton.addEventListener('click', () => {
        likeButton.classList.toggle('liked');
    });

    document.getElementById('new-card-form').reset();
}

const form = document.getElementById('new-card-form');
form.addEventListener('submit', addNewCard);