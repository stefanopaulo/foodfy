const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.recipe');

for (let card of cards) {
    card.addEventListener('click', function () {
        const imgId = card.getAttribute('id');
        const recipeText = card.querySelector('h2');
        const author = card.querySelector('p');

        modalOverlay.classList.add('active');
        modalOverlay.querySelector('img').src = `images/${imgId}.png`;
        modalOverlay.querySelector('img').alt = recipeText.textContent;
        modalOverlay.querySelector('h1').innerText = recipeText.textContent;
        modalOverlay.querySelector('p').innerText = author.textContent;
    });
}

document.querySelector('.close-modal').addEventListener('click', function () {
    modalOverlay.classList.remove('active');
    modalOverlay.querySelector('img').src = '';
    modalOverlay.querySelector('img').alt = '';
    modalOverlay.querySelector('h1').innerText = '';
    modalOverlay.querySelector('p').innerText = '';
});
