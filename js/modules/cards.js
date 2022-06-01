function cards () {

    class MenuCard {
        constructor(src, alt, title, descr, price, parentSelector, ...classes) {
            this.src = src; /* картинка */
            this.alt = alt; /* описание картинки */
            this.title = title; /* тайтл */
            this.descr = descr; /* описание */
            this.price = price; /* цена */
            this.classes = classes;
            this.parent = document.querySelector(parentSelector);
            this.transfer = 27;
            this.changeTOUAH(); /* курс валют */
        }
        changeTOUAH() {
            this.price = this.price * this.transfer;
            /* плюсик чтобы если пользователь ввел строку, она
                       трансформировалась в число */
        }
        render() {
            const element = document.createElement("div");
            if (this.classes.length === 0) {
                this.element = 'menu__item';
                element.classList.add(this.element);
            } else {
                this.classes.forEach(className => element.classList.add(className));
            }

            element.innerHTML = `
           <img src=${this.src} alt=${this.alt}>
           <h3 class="menu__item-subtitle">${this.title}</h3>
           <div class="menu__item-descr">${this.descr}</div>
           <div class="menu__item-divider"></div>
           <div class="menu__item-price">
               <div class="menu__item-cost">Цена:</div>
               <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
           </div>
       `;
            this.parent.append(element);
        }
    }

    const getResource = async (url) => {
        const res = await fetch(url);
        if(!res.ok) {
           throw new Error(`Could not fetch ${url}, statsu ${res.status}`);
        }
        return await res.json();
    };

    getResource('http://localhost:3000/menu')
    .then(data =>{
        data.forEach(({img, altimg, title, descr, price}) => {
            new MenuCard(img, altimg, title, descr, price, ".menu .container").render();
        });
    });

/*     axios.get('http://localhost:3000/menu')
    .then(data => {
        data.data.forEach(({img, altimg, title, descr, price}) => {
            new MenuCard(img, altimg, title, descr, price, ".menu .container").render();
    }); */


/*     getResource('http://localhost:3000/menu')
    .then(data => createCard(data)); */

/*     function createCard(data){
        data.forEach(({img, altimg, title, descr, price}) => {
            const element = document.createElement('div');
            element.classList.add('menu__item');
            element.innerHTML = ` <img src=${img} alt=${altimg}>
            <h3 class="menu__item-subtitle">${title}</h3>
            <div class="menu__item-descr">${descr}</div>
            <div class="menu__item-divider"></div>
            <div class="menu__item-price">
                <div class="menu__item-cost">Цена:</div>
                <div class="menu__item-total"><span>${price}</span> грн/день</div>
            </div>
       `;
       document.querySelector('.menu .container').append(element);
        });
    } */
    /*     const div = new MenuCards();
        div.render(); первый способ, но без переменной можно */
/*     new MenuCard(
        "img/tabs/vegy.jpg",
        "vegy",
        'Меню "Фитнес"',
        'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
        30,
        ".menu .container"
    ).render();

    new MenuCard(
        "img/tabs/post.jpg",
        "post",
        'Меню "Постное"',
        'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
        14,
        ".menu .container"

    ).render();

    new MenuCard(
        "img/tabs/elite.jpg",
        "elite",
        'Меню “Премиум”',
        'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
        21,
        ".menu .container"

    ).render(); */
}

module.exports = cards;