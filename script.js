const container = document.querySelector(".cards");

let array = [
    {
        name: 'orange',
        price: 20,
        img: 'https://clipart-best.com/img/orange/orange-clip-art-50.png',
        desc: "asd asd alqwlem asdl as,dlasdqwe"
    },
    {
        name: 'apple',
        price: 10,
        img: 'https://p7.hiclipart.com/preview/723/999/582/ipod-touch-apple-icon-image-format-icon-red-apple-png-image.jpg',
        desc: "asd asd alqwlem asdl as,dlasdqwe"
    },
    {
        name: 'apple',
        price: 10,
        img: 'https://p7.hiclipart.com/preview/723/999/582/ipod-touch-apple-icon-image-format-icon-red-apple-png-image.jpg',
        desc: "asd asd alqwlem asdl as,dlasdqwe"
    },
    {
        name: 'orange',
        price: 20,
        img: 'https://clipart-best.com/img/orange/orange-clip-art-50.png',
        desc: "asd asd alqwlem asdl as,dlasdqwe"
    },
    {
        name: 'pants',
        price: 50,
        img: 'https://cdn.laredoute.com/products/641by641/6/1/0/61008dcff2debdfa58d64552bdbdd5dc.jpg',
        desc: "asd asd alqwlem asdl as,dlasdqwe"
    }
]

function createCard(prop) {
    return `
        <div class="card">
        <div class="header">${prop.name}</div>
        <div class="body">
            <img src="${prop.img}" alt="">
        </div>
        <div class="price">
            Цена <span>${prop.price}</span> белорусских гривен
        </div>
        <div class="desc" style="font-size: 0.1em; opacity: 0">${prop.desc}</div>
        <div class="footer">
            <button class="btns">Купить</button>
        </div>
    </div>
    `
}

// container.insertAdjacentHTML('afterbegin', array.map(function (card){ 
//     return createCard(card);
// }));

array.forEach(function(card){
    container.insertAdjacentHTML("afterbegin", createCard(card))
});

const button = document.querySelectorAll('.btns');
const modal = document.querySelector('.modal')
const close = document.querySelector('.close').addEventListener('click', () => {
    modal.classList.remove('open')
})

function changeModalContent(name, price, desc) {
    let template = `
        <div>
        Вы действительно хотите купить ${name} за <span>${price}</span> копеек?
        <div>ОПИСАНИЕ</div>
        <p>${desc}</p>
        </div>
    `
    modal.querySelector('.cont').innerHTML = ''
    modal.querySelector('.cont').insertAdjacentHTML('afterbegin', template)
}

button.forEach(function (button){
    button.addEventListener('click', function (){
        let name = button.parentNode.parentNode.querySelector('.header').textContent
        let price = button.parentNode.parentNode.querySelector('.price span').textContent
        let desc = button.parentNode.parentNode.querySelector('.desc').textContent
        changeModalContent(name, price, desc)
        modal.classList.add('open')
    })
})

