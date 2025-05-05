const form = document.querySelector('#new-card-form');
form.addEventListener('submit', addCard);

function addCard(event) {
    event.preventDefault();
    console.log('executou!');
    
    const cardName = document.getElementById('card-name').value;
    const cardPrice = document.getElementById('card-price').value;
    const cardDescription = document.getElementById('card-description').value;
    const cardFile = document.querySelector('[type=file]').files[0];

    console.log(cardName);
    console.log(cardPrice);
    console.log(cardDescription);
    console.log(cardFile);
    
    const cardImage = cardFile ? URL.createObjectURL(cardFile) : './assets/default.png';

    const main = document.querySelector('main');
    let newCard = document.createElement('div');
    newCard.classList = 'card';
    newCard.innerHTML =  `
            <img src="${cardImage}" alt="carta"/>
            <h4 class="title">Carta ${cardName}</h4>
            <p class="price">R$: ${cardPrice}</p>
            <p class="description">${cardDescription}</p>

            <div>
                <button class="btn-buy">Comprar</button>
                <button class="btn-like">Curtir</button>
            </div>`;

    main.appendChild(newCard);

    form.reset();

}