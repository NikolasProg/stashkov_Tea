let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', () => {
    body.classList.add('active');
});

closeShopping.addEventListener('click', () => {
    body.classList.remove('active');
});

let products = [
    {
        id: 1,
        name: 'ЧЁРНЫЙ',
        image: '7.png',
        prices: {
            350: 80,
            400: 100,
        },
		description: 'Чёрный чай — это классика в каждой чашке! ☕🌿 Отличается насыщенным вкусом, приятным ароматом и ярким характером. Погрузитесь в традиционное чаепитие и насладитесь умиротворением каждого глотка. Откройте для себя простоту и великолепие в каждой чашке чёрного чая. 🌟🍃 #ЧаепитиеКлассики',
    },
    {
        id: 2,
        name: 'ЗЕЛЁНЫЙ',
        image: '8.png',
        prices: {
            350: 80,
            400: 100,
        },
		description: 'Зелёный чай — это свежесть и вдохновение в каждом листочке! 🍵🌱 Отметьте момент умиротворения с этим насыщенным напитком, который приносит вам не только вкус, но и благополучие. Погрузитесь в мир зелёного чая, где каждый глоток — это встреча с природой. 💚🌿 #ЧаепитиеЗелени',
    },
    {
        id: 3,
        name: 'ПУЭР',
        image: '1.png',
        prices: {
            350: 160,
            400: 180,
        },
		description: 'Пуэр – чай с характером! ☕✨ Погрузись в волшебный мир глубокого вкуса и аромата этого уникального напитка. 🍃💖 Приглашаем на чаепитие, где каждая чашка – это невероятное путешествие в мир наслаждения! 🌏🌟 #ЧайныеЧудеса',
    },
    {
        id: 4,
        name: 'ОБЛЕПИХОВЫЙ',
        image: '2.png',
        prices: {
            350: 160,
            400: 180,
        },
		description: 'Облепиховое угощение – настоящий взрыв витаминов и яркости! 🧡✨ Погрузитесь в волшебство вкуса свежих облепиховых ягод, дарящих не только удовольствие, но и пользу вашему здоровью. 🌿🍇 Откройте для себя яркий вкус и аромат облепихи в каждом глотке! 🌞🌈 #ЯгоднаяРадость',
    },
    {
        id: 5,
        name: 'ТАЁЖНЫЙ',
        image: '3.png',
        prices: {
            350: 160,
            400: 180,
        },
		description: 'Таёжное вдохновение в каждом глотке! 🌲❄️ Откройте для себя богатство вкусов таёжных ягод и трав, слившееся в уникальном напитке. Погрузитесь в атмосферу дремучего леса и насладитесь моментом встречи с природой в каждой чашке. 🍵🌲✨ #ТаёжнаяГармония',
    },
    {
        id: 6,
        name: 'МЕДОВАЯ ГАБА',
        image: '4.png',
        prices: {
            350: 160,
            400: 180,
        },
		description: 'Медовая гастрономия в каждой ложке! 🍯✨ Погрузитесь в нежный вкус меда, окутанный волшебством утонченных гастрономических нот. Позвольте себе насладиться уникальным опытом, где каждый момент – сладкое приключение. 🌼🥄 #МедовоеУдовольствие',
    },
    {
        id: 7,
        name: 'МОЛОЧНЫЙ УЛУН',
        image: '5.png',
        prices: {
            350: 160,
            400: 180,
        },
		description: 'Молочный улун - волшебный танец нежности и насыщенного вкуса! 🍵🥛 Откройте для себя уникальное сочетание молочной мягкости и неповторимых оттенков улун-чая. Погрузитесь в чувственное чаепитие, где каждый глоток — это путешествие в мир изысканного вкуса. 🌿🌟 #ЧайноеНаслаждение',
    },
    {
        id: 8,
        name: 'ЗЕЛЁНЫЙ ЖЕНЬ-ШЕНЬ',
        image: '6.png',
        prices: {
            350: 160,
            400: 180,
        },
		description: 'Зелёный Жень-Шень - природная энергия в каждом листочке! 🍵🌿 Откройте для себя удивительный вкус зелёного чая, обогащённого благотворными свойствами женьшеня. Погрузитесь в ароматное путешествие, вдохновлённое природной силой и освежением. 🌱💚 #ЗарядЭнергии',
    },
];

let listCards = {};

// Добавьте следующий код после вашего существующего кода создания продуктов
products.forEach((product) => {
    let newDiv = document.createElement('div');
    newDiv.classList.add('item');
    newDiv.setAttribute('data-key', product.id);  // Добавьте эту строку для уникального ключа
    newDiv.innerHTML = `
        <img src="image/${product.image}" data-description="${product.description}" class="picture">
        <div class="title">${product.name}</div>
        <div class="price" id="price_${product.id}">${getFormattedPrice(product.prices[350])}</div>
        <select id="user_obym_${product.id}" onchange="updatePrice(${product.id})">
            <option value="350">350 мл</option>
            <option value="400">400 мл</option>
        </select>
        <button onclick="addToCard(${product.id})">Добавить в корзину</button>`;
    list.appendChild(newDiv);
});

// Добавьте следующий код после вашего существующего кода
document.addEventListener('DOMContentLoaded', function () {
    // Получите все элементы с классом 'item'
    let items = document.querySelectorAll('.item');

    // Добавьте обработчик события для каждого элемента
    items.forEach(function (item) {
        let img = item.querySelector('img');

        // Добавьте обработчик события для клика на изображение
        img.addEventListener('click', function () {
            // Получите описание товара из атрибута 'data-description'
            let description = img.getAttribute('data-description');

            // Покажите всплывающее окно с описанием
            alert(description);
        });
    });
});

function initApp() {
    products.forEach((value, key) => {
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price" id="price_${key}">${getFormattedPrice(value.prices[350])}</div>
            <select id="user_obym_${key}" onchange="updatePrice(${key})">
                <option value="350">350 мл</option>
                <option value="400">400 мл</option>
            </select>
            <button onclick="addToCard(${key})">Добавить в корзину</button>`;
        list.appendChild(newDiv);
    });
}


// Новая функция для форматирования цены
function getFormattedPrice(price) {
    return price !== 'такого объёма нет' ? String(price).replace(/р$/, '') + 'р' : 'такого объёма нет';
}

// Анимация
function addToCartAnimation(productKey) {
    const item = document.querySelector(`.item[data-key="${productKey}"]`);
    const img = item.querySelector('img');

    // Дублируем картинку
    const clone = img.cloneNode(true);

    // Применяем стили к клону
    clone.style.opacity = '0.8';
    clone.style.position = 'absolute';
    clone.style.height = '150px';
    clone.style.width = '150px';
    clone.style.objectFit = 'cover';
    clone.style.zIndex = '100';
    clone.style.transition = 'all 1s ease-in-out';

    // Устанавливаем начальные координаты клонированной картинки
    clone.style.top = `${img.offsetTop}px`;
    clone.style.left = `${img.offsetLeft}px`;

    document.body.appendChild(clone);

    const shoppingCart = document.querySelector('.shopping');
    const cartRect = shoppingCart.getBoundingClientRect();

    // Задаем координаты, куда должен двигаться клон
    clone.style.top = `${cartRect.top + 5}px`;
    clone.style.left = `${cartRect.left + 5}px`;
    clone.style.width = '75px';
    clone.style.height = '75px';

    // Событие, которое происходит после завершения анимации
    clone.addEventListener('transitionend', () => {
        document.body.removeChild(clone);
    });
}

document.addEventListener('DOMContentLoaded', function () {
    // Получите все элементы с классом 'item'
    let items = document.querySelectorAll('.item');

    // Добавьте обработчик события для каждого элемента
    items.forEach(function (item) {
        let button = item.querySelector('button');

        // Добавьте обработчик события для клика на кнопку "Добавить в корзину"
        button.addEventListener('click', function () {
            // Получите значение data-key из атрибута 'data-key'
            let productKey = item.getAttribute('data-key');

            // Вызов функции для анимации добавления в корзину
            addToCartAnimation(productKey);
        });
    });
});

function addToCard(key) {
    const selectedVolume = document.getElementById(`user_obym_${key}`).value;
    const productKey = `${key}_${selectedVolume}`;

    if (products[key - 1].prices[selectedVolume] !== 'такого объёма нет') {
        if (!listCards[productKey]) {
            listCards[productKey] = {
                ...products[key - 1],
                quantity: 1,
                selectedVolume: selectedVolume,
                price: products[key - 1].prices[selectedVolume]
            };
        } else {
            listCards[productKey].quantity++;
            listCards[productKey].price = products[key - 1].prices[selectedVolume] * listCards[productKey].quantity;
        }

        reloadCard();

        // Добавим вызов функции для анимации
        addToCartAnimation(key, selectedVolume);

    } else {
        alert('Такого объёма нет. Выберите другой объем.');
    }

    updateShoppingText();
}


function reloadCard() {
    listCard.innerHTML = '';
    let totalPrice = 0;
    let count = 0;

    Object.keys(listCards).forEach((productKey) => {
        const value = listCards[productKey];

        if (value != null) {
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}" class="picture"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}р</div>
                <div>Объем: ${value.selectedVolume} мл</div>
                <div>
                    <button onclick="changeQuantity('${productKey}', 'decrement')">-</button>
                    <div class="count" id="count_${productKey}">${value.quantity}</div>
                    <button onclick="changeQuantity('${productKey}', 'increment')">+</button>
                </div>`;
            listCard.appendChild(newDiv);

            totalPrice += value.price;
            count += value.quantity;
        }
    });

    // Обновление текста "Корзина" с суммой товаров
    updateShoppingText();

    total.innerText = `${totalPrice.toLocaleString()}р`;
    quantity.innerText = count;
}


function changeQuantity(productKey, action) {
    const selectedVolume = listCards[productKey].selectedVolume;
    let currentQuantity = listCards[productKey].quantity;

    if (action === 'decrement') {
        if (currentQuantity > 1) {
            currentQuantity--;
        } else {
            // Если количество равно 1 и происходит уменьшение, удаляем товар из корзины
            delete listCards[productKey];
        }
    } else if (action === 'increment') {
        currentQuantity++;
    }

    if (listCards[productKey]) {
        listCards[productKey].quantity = currentQuantity;
        listCards[productKey].price = listCards[productKey].prices[selectedVolume] * currentQuantity;
    }

    reloadCard();
	
	// Обновление текста "Корзина" с суммой товаров
    updateShoppingText();
}


function updatePrice(key) {
    const selectedVolume = document.getElementById(`user_obym_${key}`).value;

    // Проверка, есть ли у выбранного объема действительная цена
    if (products[key - 1].prices[selectedVolume] !== 'такого объёма нет') {
        const priceElement = document.getElementById(`price_${key}`);
        priceElement.innerText = getFormattedPrice(products[key - 1].prices[selectedVolume]);
    } else {
        // Обработка случая, когда у выбранного объема нет цены
        const priceElement = document.getElementById(`price_${key}`);
        priceElement.innerText = 'такого объёма нет';
    }
}

// "Корзина" заменяется общей стоимостью
function updateShoppingText() {
    let totalQuantity = 0;
    let totalSum = 0;

    // Подсчет общего количества товаров и суммы в корзине
    Object.keys(listCards).forEach((productKey) => {
        const value = listCards[productKey];
        if (value != null) {
            totalQuantity += value.quantity;
            totalSum += value.price;
        }
    });

    // Обновление текста "Корзина" с суммой товаров
    const shoppingText = totalQuantity > 0 ? `${totalSum.toLocaleString()}р` : 'Корзина';
    
    // Находим элемент <p> и обновляем его содержимое
    document.querySelector('.shopping p').innerText = shoppingText;
}

// JavaScript для управления всплывающей формой

const overlay = document.getElementById('overlay');
const form = document.getElementById('form');
const totalDiv = document.querySelector('.total');

// Показать форму при клике на totalDiv
totalDiv.addEventListener('click', () => {
    overlay.style.display = 'block';
    form.style.display = 'block';
    setTimeout(() => {
        form.style.opacity = '1';
        form.style.pointerEvents = 'auto';
    }, 50);
});

// Скрыть форму при клике вне её области
overlay.addEventListener('click', () => {
    form.style.opacity = '0';
    form.style.pointerEvents = 'none';
    setTimeout(() => {
        overlay.style.display = 'none';
        form.style.display = 'none';
    }, 300);
});

document.addEventListener('DOMContentLoaded', function () {
    // Получите все элементы с классом 'item'
    let items = document.querySelectorAll('.item');

    // Добавьте обработчик события для каждого элемента
    items.forEach(function (item, index) {
        let button = item.querySelector('button');

        // Добавьте обработчик события для клика на кнопку "Добавить в корзину"
        button.addEventListener('click', function () {
            // Вызов функции для анимации добавления в корзину
            addToCartAnimation(index + 1); // Индекс + 1 соответствует ID продукта
        });
    });
});
