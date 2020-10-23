const cards = document.querySelectorAll('.recipe');
const btnActionIngredients = document.querySelector('.btn-action-ingredients');
const btnActionPreparetion = document.querySelector('.btn-action-preparation');
const btnActionInformation = document.querySelector('.btn-action-information');

for (let card of cards) {
    card.addEventListener('click', function() {
        const id = card.getAttribute('id');

        window.location.href = `/recipes/${id}`;
    });
}

function hideDiv(div) {
    div.classList.toggle('hide');
}

function changeButton(btn, div) {
    if (div.classList.contains('hide')) {
        btn.innerText = 'mostrar';
    } else {
        btn.innerText = 'esconder';
    }
}

btnActionIngredients.addEventListener('click', function() {
    const ingredients = document.querySelector('.ingredients');
    hideDiv(ingredients);
    changeButton(btnActionIngredients, ingredients);
});

btnActionPreparetion.addEventListener('click', function() {
    const preparation = document.querySelector('.preparation');
    hideDiv(preparation);
    changeButton(btnActionPreparetion, preparation);
});

btnActionInformation.addEventListener('click', function() {
    const information = document.querySelector('.information');
    hideDiv(information);
    changeButton(btnActionInformation, information);
});
