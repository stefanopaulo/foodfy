const cards = document.querySelectorAll('.recipe');
// const divAction = document.querySelectorAll('.action');
// const btnAction = document.querySelectorAll('.btn-action');

for (let card of cards) {
    card.addEventListener('click', function() {
        const id = card.getAttribute('id');

        window.location.href = `/recipes/${id}`;
    });
}

// for (let btn of btnAction) {
//     btn.addEventListener('click', function() {
//         for (let div of divAction) {
//             if (div.classList.contains('active')) {
//                 btn.innerText = 'mostrar';
//                 div.classList.remove('active');
//             } else {
//                 btn.innerText = 'esconder';
//                 div.classList.add('active');
//             }
//         }
//     });
// }
