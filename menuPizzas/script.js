let modalQt = 1;
const doc = (e) => document.querySelector(e);
const docAll = (e) => document.querySelectorAll(e);

pizzaJson.map((item, index) => {
    let pizzaItem = doc('.models .pizza-item').cloneNode(true);
    
    //Informações da página inicial
    pizzaItem.setAttribute('data-key', index);
    pizzaItem.querySelector('.pizza-item--img img').src = item.img;
    pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${item.price.toFixed(2)}`;
    pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name;
    pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description;



    //Informações do modal
    pizzaItem.querySelector('a').addEventListener('click', (e) => {
        e.preventDefault();
        let key = e.target.closest('.pizza-item').getAttribute('data-key');

        modalQt = 1;

        //Selecionando elementos para mostrar no modal
        doc('.pizzaBig img').src = pizzaJson[key].img;
        doc('.pizzaInfo h1').innerHTML = pizzaJson[key].name;
        doc('.pizzaInfo--desc').innerHTML = pizzaJson[key].description;
        doc('.pizzaInfo--actualPrice').innerHTML = `R$ ${pizzaJson[key].price}`;
        doc('.pizzaInfo--size.selected').classList.remove('selected');
        docAll('.pizzaInfo--size').forEach((size, sizeIndex) => {
            if (sizeIndex == 2) {
                size.classList.add('selected');
            }
            size.querySelector('span').innerHTML = pizzaJson[key].sizes[sizeIndex];
        });
        doc('.pizzaInfo--qt').innerHTML = modalQt;

        //Animação
        doc('.pizzaWindowArea').style.opacity = 0;
        doc('.pizzaWindowArea').style.display = 'flex';
        setTimeout(() => {
            doc('.pizzaWindowArea').style.opacity = 1;
        }, 200);
        //Fim animação
    });

    doc('.pizza-area').append(pizzaItem);
});

//Eventos do modal

//Fechar o modal 
function closeModal() {
    doc('.pizzaWindowArea').style.opacity = 0;
    setTimeout(() => {
        doc('.pizzaWindowArea').style.display = 'none';
    }, 500)
};
docAll('.pizzaInfo--cancelButton, .pizzaInfo--cancelMobileButton').forEach((item) => {
    item.addEventListener('click', closeModal);
});

//Aumentando e diminuindo a quantidade de pizzas
doc('.pizzaInfo--qtmenos').addEventListener('click', () => {
    if(modalQt > 1) {
        modalQt --
        doc('.pizzaInfo--qt').innerHTML = modalQt;
    }
});
doc('.pizzaInfo--qtmais').addEventListener('click', () => {
    modalQt ++
    doc('.pizzaInfo--qt').innerHTML = modalQt;
});

//Selecionando o tamanho da pizza
docAll('.pizzaInfo--size').forEach((size, sizeIndex) => {
    size.addEventListener('click', () => {
        doc('.pizzaInfo--size.selected').classList.remove('selected');
        size.classList.add('selected');
    })
});

