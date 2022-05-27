// variables
let mainContainer = document.getElementById('pc__container');
let modalContainer = document.querySelector('.modal-content');
// arrays
let buyPc = [];
// functions
loadEventListenrs();

function loadEventListenrs() {
    mainContainer.addEventListener('click', addProduct);
    modalContainer.addEventListener('click', deleteProduct);
}

function addProduct(e) {
    e.preventDefault();
    if (e.target.classList.contains('btn-add-cart')) {
        const selectedProduct = e.target.parentElement;
        readContent(selectedProduct);
    }
}

function readContent(product) {
    const productInfo = {
        image: product.querySelector('div img').src,
        title: product.querySelector('.cart-title').textContent,
        price: product.querySelector('.cart-price').textContent,
        id: product.querySelector('a').getAttribute('data-id'),
        ammount: 1
    }
    // spread operator
    buyPc = [...buyPc, productInfo];
    loadHtml();
}

function loadHtml() {
    clearHtml();
    buyPc.forEach(product => {
        const {
            image,
            title,
            price,
            id,
            ammount
        } = product;
        const row = document.createElement('div');
        // checar esto!!!!
        row.classList.add('card');
        row.innerHTML = `
        <img src="${image} "width="2rem" class="card-img-top" alt="image of a pc">
                        <h5 class="card-title cart-title">${title}</h5>
                        <p class="card-text cart-price">${price}</p>
                        <p> cantidad: ${ammount} </p>
                        <p class="delete-product" data-id="${id}">ELIMINAR</p>
        `
        modalContainer.appendChild(row);
    });
}

function clearHtml() {
    modalContainer.innerHTML = '';
}