const products = [
  {
    id: "realme-note-60x-64",
    imageGroup: "realme-note-60x",
    brand: "realme",
    name: "realme Note 60X",
    memory: "64/3 ГБ",
    price: 7990,
    oldPrice: 8990,
    badge: "Хит продаж",
    segment: "до 10 000 ₽",
    color: ["Черный", "Зеленый"],
    c1: "#68d391",
    c2: "#2b6cb0",
    description: "Доступный смартфон для звонков, мессенджеров, соцсетей и повседневных задач.",
    benefits: ["выгодная цена", "простое управление", "хорошая автономность"],
    specs: {
      Экран: "6.74 дюйма",
      Память: "64 ГБ",
      ОЗУ: "3 ГБ",
      Камера: "камера для фото и видео",
      Батарея: "5000 мАч",
      Гарантия: "12 месяцев"
    }
  },
  {
    id: "redmi-a5-64",
    imageGroup: "redmi-a5",
    brand: "Redmi",
    name: "Redmi A5",
    memory: "64/3 ГБ",
    price: 8990,
    oldPrice: 9990,
    badge: "Лучший до 10 000 ₽",
    segment: "до 10 000 ₽",
    color: ["Синий", "Черный", "Зеленый"],
    c1: "#63b3ed",
    c2: "#48bb78",
    description: "Доступный Redmi с большим экраном для учебы, общения и повседневных дел.",
    benefits: ["узнаваемый бренд", "емкий аккумулятор", "крупный экран"],
    specs: {
      Экран: "6.88 дюйма",
      Память: "64 ГБ",
      ОЗУ: "3 ГБ",
      Камера: "двойная камера",
      Батарея: "5200 мАч",
      Гарантия: "12 месяцев"
    }
  },
  {
    id: "redmi-a5-128",
    imageGroup: "redmi-a5",
    brand: "Redmi",
    name: "Redmi A5",
    memory: "128/4 ГБ",
    price: 10990,
    oldPrice: 11990,
    badge: "Больше памяти",
    segment: "до 15 000 ₽",
    color: ["Черный", "Синий"],
    c1: "#4299e1",
    c2: "#805ad5",
    description: "Redmi A5 с увеличенной памятью: больше места для приложений, фото и видео.",
    benefits: ["128 ГБ", "выгодная конфигурация", "хорош для семьи"],
    specs: {
      Экран: "6.88 дюйма",
      Память: "128 ГБ",
      ОЗУ: "4 ГБ",
      Камера: "двойная камера",
      Батарея: "5200 мАч",
      Гарантия: "12 месяцев"
    }
  },
  {
    id: "samsung-a56",
    imageGroup: "samsung-a56",
    brand: "Samsung",
    name: "Samsung Galaxy A56",
    memory: "256/8 ГБ",
    price: 39990,
    oldPrice: 44990,
    badge: "Оптимальный выбор",
    segment: "20-40 000 ₽",
    color: ["Графит", "Серый", "Оливковый"],
    c1: "#90cdf4",
    c2: "#1a365d",
    description: "Средний класс Samsung с качественным экраном, NFC и большим объемом памяти.",
    benefits: ["AMOLED", "NFC", "долгая поддержка"],
    specs: {
      Экран: "AMOLED 6.7 дюйма",
      Память: "256 ГБ",
      ОЗУ: "8 ГБ",
      Камера: "50 Мп + дополнительные модули",
      Батарея: "5000 мАч",
      Гарантия: "12 месяцев"
    }
  },
  {
    id: "redmi-15",
    imageGroup: "redmi-15",
    brand: "Redmi",
    name: "Redmi 15",
    memory: "256/8 ГБ",
    price: 18990,
    oldPrice: 21990,
    badge: "256 ГБ",
    segment: "до 20 000 ₽",
    color: ["Черный", "Голубой"],
    c1: "#38b2ac",
    c2: "#2c5282",
    description: "Redmi с большим объемом памяти, крупным экраном и запасом заряда на весь день.",
    benefits: ["много памяти", "доступная цена", "для работы и учебы"],
    specs: {
      Экран: "6.9 дюйма",
      Память: "256 ГБ",
      ОЗУ: "8 ГБ",
      Камера: "50 Мп",
      Батарея: "7000 мАч",
      Гарантия: "12 месяцев"
    }
  },
  {
    id: "redmi-15c",
    imageGroup: "redmi-15c",
    brand: "Redmi",
    name: "Redmi 15C",
    memory: "256/8 ГБ",
    price: 16990,
    oldPrice: 18990,
    badge: "Выгодно",
    segment: "до 20 000 ₽",
    color: ["Черный", "Мятный"],
    c1: "#4fd1c5",
    c2: "#2f855a",
    description: "Практичный смартфон с крупным экраном, большой памятью и сильной батареей.",
    benefits: ["автономность", "256 ГБ", "цена"],
    specs: {
      Экран: "6.9 дюйма",
      Память: "256 ГБ",
      ОЗУ: "8 ГБ",
      Камера: "50 Мп",
      Батарея: "6000 мАч",
      Гарантия: "12 месяцев"
    }
  },
  {
    id: "samsung-a17",
    imageGroup: "samsung-a17",
    brand: "Samsung",
    name: "Samsung Galaxy A17",
    memory: "256/8 ГБ",
    price: 24990,
    oldPrice: 27990,
    badge: "Samsung",
    segment: "20-40 000 ₽",
    color: ["Черный", "Серебристый"],
    c1: "#cbd5e0",
    c2: "#2d3748",
    description: "Доступный Samsung с большим хранилищем, NFC и удобной оболочкой.",
    benefits: ["бренд", "NFC", "сервисная поддержка"],
    specs: {
      Экран: "Super AMOLED 6.7 дюйма",
      Память: "256 ГБ",
      ОЗУ: "8 ГБ",
      Камера: "50 Мп",
      Батарея: "5000 мАч",
      Гарантия: "12 месяцев"
    }
  },
  {
    id: "realme-note-60x-128",
    imageGroup: "realme-note-60x",
    brand: "realme",
    name: "realme Note 60X",
    memory: "128/4 ГБ",
    price: 9990,
    oldPrice: 11490,
    badge: "Хит продаж",
    segment: "до 15 000 ₽",
    color: ["Черный", "Зеленый"],
    c1: "#9ae6b4",
    c2: "#2c7a7b",
    description: "realme с большим запасом памяти для приложений, фото, видео и мессенджеров.",
    benefits: ["128 ГБ", "хорошая цена", "аккуратный корпус"],
    specs: {
      Экран: "6.74 дюйма",
      Память: "128 ГБ",
      ОЗУ: "4 ГБ",
      Камера: "камера для фото и видео",
      Батарея: "5000 мАч",
      Гарантия: "12 месяцев"
    }
  },
  {
    id: "redmi-a3-pro",
    imageGroup: "redmi-a3-pro",
    brand: "Redmi",
    name: "Redmi A3 Pro",
    memory: "128/4 ГБ",
    price: 11990,
    oldPrice: 13490,
    badge: "Практичный",
    segment: "до 15 000 ₽",
    color: ["Черный", "Синий"],
    c1: "#76e4f7",
    c2: "#553c9a",
    description: "Redmi с крупным экраном и комфортным объемом памяти на каждый день.",
    benefits: ["128 ГБ", "крупный экран", "на каждый день"],
    specs: {
      Экран: "6.71 дюйма",
      Память: "128 ГБ",
      ОЗУ: "4 ГБ",
      Камера: "13 Мп",
      Батарея: "5000 мАч",
      Гарантия: "12 месяцев"
    }
  },
  {
    id: "realme-c75",
    imageGroup: "realme-c75",
    brand: "realme",
    name: "realme C75",
    memory: "256/8 ГБ",
    price: 21990,
    oldPrice: 24990,
    badge: "Много памяти",
    segment: "20-40 000 ₽",
    color: ["Золотой", "Черный"],
    c1: "#f6ad55",
    c2: "#2d3748",
    description: "realme с 256 ГБ памяти и хорошей скоростью для повседневных задач.",
    benefits: ["8 ГБ ОЗУ", "256 ГБ", "быстрый интерфейс"],
    specs: {
      Экран: "6.72 дюйма",
      Память: "256 ГБ",
      ОЗУ: "8 ГБ",
      Камера: "50 Мп",
      Батарея: "6000 мАч",
      Гарантия: "12 месяцев"
    }
  }
];

const app = document.querySelector("#app");
const cartCount = document.querySelector("#cartCount");
const cartCountMobile = document.querySelector("#cartCountMobile");
const searchInput = document.querySelector("#searchInput");

let cart = JSON.parse(localStorage.getItem("gadgethub-cart") || "{}");
let activeGallery = 0;
let checkoutState = {
  step: "contact",
  account: "guest",
  delivery: "pvz",
  payment: "sbp",
  promoApplied: false,
  submitted: false,
  orderId: ""
};

const checkoutSteps = [
  { id: "contact", label: "Контакты" },
  { id: "delivery", label: "Доставка" },
  { id: "payment", label: "Оплата" },
  { id: "confirm", label: "Проверка" }
];

const deliveryMethods = [
  { id: "pvz", title: "Пункт выдачи", meta: "1-3 дня", price: 0, note: "Подберем ближайший ПВЗ после подтверждения города." },
  { id: "courier", title: "Курьер", meta: "завтра или позже", price: 490, note: "Курьер заранее позвонит и согласует удобный интервал." },
  { id: "pickup", title: "Самовывоз", meta: "сегодня", price: 0, note: "Резерв держится до конца следующего рабочего дня." }
];

const paymentMethods = [
  { id: "sbp", title: "СБП", meta: "быстро и без карты", note: "Пришлем ссылку на оплату после проверки наличия." },
  { id: "card", title: "Картой онлайн", meta: "Visa, Mastercard, Мир", note: "Оплата проходит на защищенной платежной странице." },
  { id: "cod", title: "При получении", meta: "карта или наличные", note: "Доступно для курьера, ПВЗ и самовывоза." },
  { id: "installment", title: "Рассрочка", meta: "от 3 до 12 месяцев", note: "Менеджер пришлет варианты рассрочки перед оплатой." }
];

const productImages = {
  "redmi-a5": [
    "assets/products/redmi-a5-1.webp",
    "assets/products/redmi-a5-2.webp",
    "assets/products/redmi-a5-3.webp"
  ],
  "redmi-15": [
    "assets/products/redmi-15-1.webp",
    "assets/products/redmi-15-2.webp",
    "assets/products/redmi-15-3.webp"
  ],
  "redmi-15c": [
    "assets/products/redmi-15c-1.webp",
    "assets/products/redmi-15c-2.webp",
    "assets/products/redmi-15c-3.webp"
  ],
  "redmi-a3-pro": [
    "assets/products/redmi-a3-pro-1.webp",
    "assets/products/redmi-a3-pro-2.webp",
    "assets/products/redmi-a3-pro-3.webp"
  ],
  "samsung-a56": [
    "assets/products/samsung-a56-1.webp",
    "assets/products/samsung-a56-2.webp",
    "assets/products/samsung-a56-3.webp"
  ],
  "samsung-a17": [
    "assets/products/samsung-a17-1.webp",
    "assets/products/samsung-a17-2.webp"
  ],
  "realme-note-60x": [
    "assets/products/realme-note-60x-1.webp",
    "assets/products/realme-note-60x-2.webp"
  ],
  "realme-c75": [
    "assets/products/realme-c75-1.webp",
    "assets/products/realme-c75-2.webp",
    "assets/products/realme-c75-3.webp",
    "assets/products/realme-c75-4.webp"
  ]
};

function money(value) {
  return new Intl.NumberFormat("ru-RU").format(value) + " ₽";
}

function saveCart() {
  localStorage.setItem("gadgethub-cart", JSON.stringify(cart));
  updateCartCount();
}

function updateCartCount() {
  const count = Object.values(cart).reduce((sum, qty) => sum + qty, 0);
  cartCount.textContent = count;
  cartCountMobile.textContent = count;
}

function addToCart(id) {
  cart[id] = (cart[id] || 0) + 1;
  saveCart();
  render();
}

function changeQty(id, delta) {
  cart[id] = Math.max(0, (cart[id] || 0) + delta);
  if (!cart[id]) delete cart[id];
  saveCart();
  render();
}

function setCheckout(key, value) {
  checkoutState[key] = value;
  checkoutState.submitted = false;
  render();
}

function goCheckoutStep(step) {
  checkoutState.step = step;
  checkoutState.submitted = false;
  render();
}

function applyPromo() {
  checkoutState.promoApplied = true;
  render();
}

function submitOrder() {
  checkoutState.submitted = true;
  checkoutState.orderId = checkoutState.orderId || `GH-${String(Date.now()).slice(-6)}`;
  render();
}

function productImage(product, size = "", imageIndex = 0) {
  const images = productImages[product.imageGroup] || [];
  const src = images[imageIndex] || images[0] || "";
  return `
    <div class="product-photo ${size}">
      <img src="${src}" alt="${product.name} ${product.memory}" />
    </div>
  `;
}

function productCard(product) {
  return `
    <article class="product-card">
      <a class="product-media" href="#/product/${product.id}" aria-label="${product.name}">
        ${productImage(product, "small")}
      </a>
      <div class="badge-row">
        <span class="badge">${product.badge}</span>
        <span class="badge sale">-${money(product.oldPrice - product.price)}</span>
      </div>
      <h3><a href="#/product/${product.id}">${product.name} ${product.memory}</a></h3>
      <div class="spec-line">
        <span>${product.specs.Экран}</span>
        <span>${product.specs.Память}</span>
        <span>${product.specs.ОЗУ}</span>
      </div>
      <p class="muted">${product.description}</p>
      <div class="price-row">
        <div class="price">
          <strong>${money(product.price)}</strong>
          <small>или от ${money(Math.ceil(product.price / 12))}/мес.</small>
        </div>
        <button class="btn primary" onclick="addToCart('${product.id}')">Купить</button>
      </div>
    </article>
  `;
}

function homePage() {
  const top = products.slice(0, 6);
  return `
    <section class="page">
      <div class="hero">
        <div class="hero-copy">
          <p class="eyebrow">Смартфоны в наличии с доставкой по России</p>
          <h1>Телефоны, которые удобно выбрать и приятно получить</h1>
          <p class="lead">Собрали популярные модели Redmi, realme и Samsung: реальные фото, понятные характеристики, честные цены и оформление заказа за несколько минут.</p>
          <div class="hero-actions">
            <a class="btn primary" href="#/catalog">Смотреть каталог</a>
            <a class="btn secondary" href="#/help">Доставка и гарантия</a>
          </div>
          <div class="stats">
            <div class="stat"><strong>10</strong><span>популярных моделей</span></div>
            <div class="stat"><strong>12</strong><span>месяцев гарантии</span></div>
            <div class="stat"><strong>24/7</strong><span>заказ онлайн</span></div>
          </div>
        </div>
        <div class="hero-showcase" aria-label="Витрина смартфонов">
          <img class="hero-campaign-image" src="assets/hero-family-phone.png" alt="Семья выбирает смартфон в гостиной" />
          <div class="hero-campaign-overlay">
            <span>Подборка недели</span>
            <strong>Новый смартфон без долгих сравнений</strong>
            <small>Поможем выбрать модель под бюджет и доставим заказ по России</small>
            <a class="btn primary" href="#/catalog">Выбрать телефон</a>
          </div>
        </div>
      </div>

      <div class="section-head">
        <div>
          <h2>Хиты продаж</h2>
          <p class="muted">Модели с удачным сочетанием цены, памяти, автономности и надежности.</p>
        </div>
        <a class="btn secondary" href="#/catalog">Все модели</a>
      </div>
      <div class="product-grid">${top.map(productCard).join("")}</div>

      <div class="section-head">
        <div>
          <h2>Почему покупают здесь</h2>
          <p class="muted">Покупка без лишних сложностей: проверяем товар, доставляем по России и остаемся на связи после заказа.</p>
        </div>
      </div>
      <div class="benefits">
        <div class="benefit"><strong>Проверка перед отправкой</strong><p class="muted">Проверяем внешний вид, комплектацию и серийный номер.</p></div>
        <div class="benefit"><strong>Доставка по РФ</strong><p class="muted">Курьер, ПВЗ, транспортные службы и самовывоз.</p></div>
        <div class="benefit"><strong>Оплата как удобно</strong><p class="muted">Карта, СБП, наличные при получении, рассрочка.</p></div>
        <div class="benefit"><strong>Гарантия 12 месяцев</strong><p class="muted">Помогаем с обменом, возвратом и гарантийным обращением.</p></div>
      </div>
    </section>
  `;
}

function catalogPage() {
  const route = new URLSearchParams(location.hash.split("?")[1] || "");
  const brand = route.get("brand") || "all";
  const budget = route.get("budget") || "all";
  const query = (searchInput.value || "").trim().toLowerCase();
  const list = products.filter((product) => {
    const matchesBrand = brand === "all" || product.brand.toLowerCase() === brand;
    const matchesBudget = budget === "all" || product.segment === budget;
    const matchesQuery = !query || `${product.name} ${product.brand} ${product.memory}`.toLowerCase().includes(query);
    return matchesBrand && matchesBudget && matchesQuery;
  });

  return `
    <section class="page">
      <div class="section-head">
        <div>
          <h1>Каталог смартфонов</h1>
          <p class="lead">Выбирайте смартфон по бренду, бюджету, памяти и нужным характеристикам.</p>
        </div>
      </div>
      <div class="catalog-layout">
        <aside class="filter-panel">
          <h3>Фильтры</h3>
          <div class="field">
            <span>Бренд</span>
            <div class="chips">
              ${["all", "redmi", "realme", "samsung"].map((item) => `<a class="chip ${brand === item ? "active" : ""}" href="#/catalog?brand=${item}&budget=${budget}">${item === "all" ? "Все" : item}</a>`).join("")}
            </div>
          </div>
          <div class="field">
            <span>Бюджет</span>
            <div class="chips">
              ${["all", "до 10 000 ₽", "до 15 000 ₽", "до 20 000 ₽", "20-40 000 ₽"].map((item) => `<a class="chip ${budget === item ? "active" : ""}" href="#/catalog?brand=${brand}&budget=${encodeURIComponent(item)}">${item === "all" ? "Все" : item}</a>`).join("")}
            </div>
          </div>
          <div class="field">
            <label for="sortSelect">Сортировка</label>
            <select id="sortSelect">
              <option>Сначала популярные</option>
              <option>Сначала дешевле</option>
              <option>Сначала дороже</option>
              <option>Сначала со скидкой</option>
            </select>
          </div>
          <a class="btn secondary" href="#/catalog">Сбросить</a>
        </aside>
        <div>
          <div class="section-head" style="margin-top:0">
            <p class="muted">Найдено: ${list.length}</p>
            <p class="muted">Цена фиксируется при подтверждении заказа</p>
          </div>
          <div class="product-grid">${list.map(productCard).join("") || `<div class="empty"><p>Ничего не найдено</p></div>`}</div>
        </div>
      </div>
    </section>
  `;
}

function productPage(id) {
  const product = products.find((item) => item.id === id) || products[0];
  const gallery = [
    { label: "Фронт", scale: "" },
    { label: "Корпус", scale: "" },
    { label: "Цвет", scale: "" },
    { label: "Экран", scale: "" },
    { label: "Комплект", scale: "" }
  ];

  return `
    <section class="page">
      <div class="detail-grid">
        <div>
          <div class="gallery-main">${productImage(product, "large", activeGallery % (productImages[product.imageGroup] || []).length)}</div>
          <div class="gallery-thumbs">
            ${gallery.map((item, index) => `<button class="${activeGallery === index ? "active" : ""}" onclick="activeGallery=${index}; render()">${productImage(product, "thumb", index % (productImages[product.imageGroup] || []).length)}<span class="muted">${item.label}</span></button>`).join("")}
          </div>
        </div>
        <article class="product-detail">
          <p class="eyebrow">${product.badge}</p>
          <h1>${product.name} ${product.memory}</h1>
          <p class="lead">${product.description}</p>
          <div class="detail-price">${money(product.price)}</div>
          <p class="muted"><s>${money(product.oldPrice)}</s> · рассрочка от ${money(Math.ceil(product.price / 12))}/мес. · в наличии</p>
          <h3>Цвет</h3>
          <div class="option-row">${product.color.map((color, index) => `<button class="${index === 0 ? "active" : ""}">${color}</button>`).join("")}</div>
          <h3>Память</h3>
          <div class="option-row"><button class="active">${product.memory}</button></div>
          <div class="product-actions">
            <button class="btn primary" onclick="addToCart('${product.id}')">Добавить в корзину</button>
            <a class="btn secondary" href="#/cart">Перейти к оформлению</a>
          </div>
          <div class="section-head"><h2>Характеристики</h2></div>
          <div class="spec-table">
            ${Object.entries(product.specs).map(([key, value]) => `<div><span>${key}</span><strong>${value}</strong></div>`).join("")}
          </div>
        </article>
      </div>
    </section>
  `;
}

function cartPage() {
  const entries = Object.entries(cart).map(([id, qty]) => ({ product: products.find((item) => item.id === id), qty })).filter((item) => item.product);
  const subtotal = entries.reduce((sum, item) => sum + item.product.price * item.qty, 0);
  const selectedDelivery = deliveryMethods.find((item) => item.id === checkoutState.delivery) || deliveryMethods[0];
  const delivery = subtotal > 30000 || subtotal === 0 ? 0 : selectedDelivery.price;
  const discount = checkoutState.promoApplied && subtotal ? Math.min(1000, Math.round(subtotal * 0.04)) : 0;
  const total = Math.max(0, subtotal + delivery - discount);
  const activeStepIndex = checkoutSteps.findIndex((item) => item.id === checkoutState.step);
  const nextStep = checkoutSteps[Math.min(activeStepIndex + 1, checkoutSteps.length - 1)]?.id || "confirm";
  const selectedPayment = paymentMethods.find((item) => item.id === checkoutState.payment) || paymentMethods[0];

  if (checkoutState.submitted && entries.length) {
    return `
      <section class="page">
        <div class="checkout-success">
          <p class="eyebrow">Заказ принят</p>
          <h1>Мы зарезервировали смартфон</h1>
          <p class="lead">Номер заказа ${checkoutState.orderId}. Менеджер позвонит, подтвердит наличие, способ доставки и финальную сумму ${money(total)}.</p>
          <div class="order-next">
            <div><strong>Дальше</strong><span>Подтверждение по телефону в течение 15 минут.</span></div>
            <div><strong>Доставка</strong><span>${selectedDelivery.title}: ${selectedDelivery.meta}.</span></div>
            <div><strong>Оплата</strong><span>${selectedPayment.title}. ${selectedPayment.note}</span></div>
          </div>
          <div class="hero-actions">
            <a class="btn primary" href="#/catalog">Вернуться в каталог</a>
            <a class="btn secondary" href="#/help">Условия доставки</a>
          </div>
        </div>
      </section>
    `;
  }

  return `
    <section class="page">
      <h1>Корзина и оформление заказа</h1>
      <div class="cart-layout">
        <div class="cart-panel">
          ${entries.length ? entries.map(({ product, qty }) => `
            <div class="cart-item">
              ${productImage(product, "cart")}
              <div>
                <h3>${product.name} ${product.memory}</h3>
                <p class="muted">${product.badge} · ${money(product.price)}</p>
                <div class="qty">
                  <button onclick="changeQty('${product.id}', -1)">−</button>
                  <span>${qty}</span>
                  <button onclick="changeQty('${product.id}', 1)">+</button>
                </div>
              </div>
              <div><strong>${money(product.price * qty)}</strong></div>
            </div>
          `).join("") : `<div class="empty"><div><h2>Корзина пуста</h2><a class="btn primary" href="#/catalog">Перейти в каталог</a></div></div>`}
        </div>
        <aside class="checkout-panel">
          <div class="checkout-steps" aria-label="Шаги оформления заказа">
            ${checkoutSteps.map((step, index) => `
              <button class="step-pill ${checkoutState.step === step.id ? "active" : ""}" onclick="goCheckoutStep('${step.id}')">
                <span>${index + 1}</span>${step.label}
              </button>
            `).join("")}
          </div>

          <div class="checkout-step">
            ${checkoutState.step === "contact" ? `
              <h2>Контакты</h2>
              <p class="muted">Можно оформить заказ без регистрации. Аккаунт нужен только чтобы сохранить адрес и историю покупок.</p>
              <div class="choice-grid compact">
                <button class="choice-card ${checkoutState.account === "guest" ? "active" : ""}" onclick="setCheckout('account','guest')">
                  <strong>Быстрый заказ</strong><span>Без пароля, только звонок менеджера.</span>
                </button>
                <button class="choice-card ${checkoutState.account === "register" ? "active" : ""}" onclick="setCheckout('account','register')">
                  <strong>Создать аккаунт</strong><span>Сохраним адрес и заказы.</span>
                </button>
              </div>
              <div class="field"><label for="checkoutName">Имя</label><input id="checkoutName" name="name" autocomplete="name" placeholder="Иван…" /></div>
              <div class="field"><label for="checkoutPhone">Телефон</label><input id="checkoutPhone" name="phone" type="tel" inputmode="tel" autocomplete="tel" placeholder="+7 900 000-00-00…" /></div>
              <div class="field"><label for="checkoutEmail">Email для чека</label><input id="checkoutEmail" name="email" type="email" inputmode="email" autocomplete="email" spellcheck="false" placeholder="name@example.ru…" /></div>
              ${checkoutState.account === "register" ? `
                <div class="field"><label for="checkoutPassword">Пароль</label><input id="checkoutPassword" name="new-password" type="password" autocomplete="new-password" placeholder="Не короче 8 символов…" /></div>
              ` : ""}
              <button class="btn primary checkout-next" onclick="goCheckoutStep('${nextStep}')" ${entries.length ? "" : "disabled"}>Продолжить к доставке</button>
            ` : ""}

            ${checkoutState.step === "delivery" ? `
              <h2>Доставка</h2>
              <p class="muted">Сначала выберите сценарий доставки, затем укажите город и адрес. Менеджер уточнит доступные интервалы.</p>
              <div class="choice-grid">
                ${deliveryMethods.map((method) => `
                  <button class="choice-card ${checkoutState.delivery === method.id ? "active" : ""}" onclick="setCheckout('delivery','${method.id}')">
                    <strong>${method.title}</strong>
                    <span>${method.meta} · ${method.price ? money(method.price) : "бесплатно"}</span>
                    <small>${method.note}</small>
                  </button>
                `).join("")}
              </div>
              <div class="field"><label for="checkoutCity">Город</label><input id="checkoutCity" name="city" autocomplete="address-level2" placeholder="Москва…" /></div>
              ${checkoutState.delivery === "pickup" ? `
                <div class="field"><label for="checkoutStore">Магазин</label><select id="checkoutStore"><option>Москва, ул. Примерная, 1</option><option>Санкт-Петербург, Невский пр., 10</option></select></div>
              ` : `
                <div class="field"><label for="checkoutAddress">Адрес ${checkoutState.delivery === "pvz" ? "или район для ПВЗ" : "доставки"}</label><input id="checkoutAddress" name="street-address" autocomplete="street-address" placeholder="Улица, дом, квартира…" /></div>
              `}
              <div class="field"><label for="checkoutComment">Комментарий</label><textarea id="checkoutComment" name="comment" placeholder="Домофон, удобное время, ориентир…"></textarea></div>
              <button class="btn primary checkout-next" onclick="goCheckoutStep('${nextStep}')">Продолжить к оплате</button>
            ` : ""}

            ${checkoutState.step === "payment" ? `
              <h2>Оплата</h2>
              <p class="muted">Сумма фиксируется после подтверждения наличия. До звонка менеджера деньги не списываются.</p>
              <div class="choice-grid">
                ${paymentMethods.map((method) => `
                  <button class="choice-card ${checkoutState.payment === method.id ? "active" : ""}" onclick="setCheckout('payment','${method.id}')">
                    <strong>${method.title}</strong>
                    <span>${method.meta}</span>
                    <small>${method.note}</small>
                  </button>
                `).join("")}
              </div>
              <div class="promo-row">
                <label for="promoCode">Промокод</label>
                <div><input id="promoCode" spellcheck="false" placeholder="GADGET…" /><button class="btn secondary" onclick="applyPromo()">${checkoutState.promoApplied ? "Применен" : "Применить"}</button></div>
              </div>
              <button class="btn primary checkout-next" onclick="goCheckoutStep('${nextStep}')">Проверить заказ</button>
            ` : ""}

            ${checkoutState.step === "confirm" ? `
              <h2>Проверка заказа</h2>
              <div class="confirm-list">
                <div><span>Покупатель</span><strong>${checkoutState.account === "register" ? "Новый аккаунт" : "Гостевой заказ"}</strong></div>
                <div><span>Доставка</span><strong>${selectedDelivery.title}</strong></div>
                <div><span>Оплата</span><strong>${selectedPayment.title}</strong></div>
                <div><span>Связь</span><strong>Звонок менеджера перед оплатой</strong></div>
              </div>
              <label class="check-row">
                <input type="checkbox" checked />
                <span>Я согласен с офертой и политикой обработки персональных данных.</span>
              </label>
              <button class="btn green checkout-next" onclick="submitOrder()" ${entries.length ? "" : "disabled"}>Подтвердить заказ</button>
            ` : ""}
          </div>

          <div class="order-summary">
            <h2>Итого</h2>
            <div class="summary-row"><span>Товары</span><strong>${money(subtotal)}</strong></div>
            <div class="summary-row"><span>Доставка</span><strong>${delivery ? money(delivery) : "бесплатно"}</strong></div>
            ${discount ? `<div class="summary-row"><span>Промокод</span><strong>−${money(discount)}</strong></div>` : ""}
            <div class="summary-row total"><span>К оплате</span><strong>${money(total)}</strong></div>
            <p class="muted">Финальную сумму подтвердим перед оплатой. Чек отправим на email или передадим при получении.</p>
          </div>
        </aside>
      </div>
    </section>
  `;
}

function helpPage() {
  return `
    <section class="page">
      <h1>Помощь покупателю</h1>
      <p class="lead">Здесь собраны условия доставки, оплаты, гарантии и возврата. Если останутся вопросы, напишите или позвоните нам.</p>
      <div class="help-grid">
        <div class="help-block"><h2>Доставка и оплата</h2><ul><li>Курьерская доставка по крупным городам РФ.</li><li>Пункты выдачи и транспортные компании.</li><li>Оплата картой, СБП, наличными при получении.</li><li>Бесплатная доставка от 30 000 ₽.</li></ul></div>
        <div class="help-block"><h2>Гарантия</h2><ul><li>Гарантия магазина 12 месяцев.</li><li>Проверка серийного номера при выдаче.</li><li>Сервисное обращение через форму поддержки.</li><li>Документы и чек после покупки.</li></ul></div>
        <div class="help-block"><h2>Возврат</h2><ul><li>Возврат товара надлежащего качества по правилам дистанционной торговли.</li><li>Проверка комплектации и товарного вида.</li><li>Возврат денег тем же способом оплаты.</li></ul></div>
        <div class="help-block"><h2>Контакты</h2><ul><li>8 800 555-01-23</li><li>sales@gadgethub.ru</li><li>Пн-Вс, 09:00-21:00 МСК</li><li>Москва, ул. Примерная, 1</li></ul></div>
      </div>
    </section>
  `;
}

function legalPage(type) {
  const map = {
    privacy: {
      title: "Политика конфиденциальности",
      items: ["Цели обработки: оформление заказа, доставка, поддержка и аналитика.", "Данные: имя, телефон, email, адрес доставки и состав заказа.", "Передача данных допускается платежным и логистическим партнерам только для исполнения заказа.", "Покупатель может запросить уточнение или удаление персональных данных."]
    },
    terms: {
      title: "Пользовательское соглашение",
      items: ["Пользователь обязуется указывать достоверные данные при заказе.", "Информация на сайте не является публичной офертой до подтверждения заказа.", "Магазин вправе уточнять наличие, цену и условия доставки до оплаты.", "Споры решаются по законодательству РФ."]
    },
    offer: {
      title: "Публичная оферта",
      items: ["Договор считается заключенным после подтверждения заказа магазином.", "Цена товара фиксируется на момент подтверждения заказа.", "Фискальный чек направляется электронно или передается при получении.", "Условия возврата регулируются Законом РФ о защите прав потребителей."]
    },
    warranty: {
      title: "Возврат и гарантия",
      items: ["Гарантийный срок: 12 месяцев, если иное не указано в карточке товара.", "Для обращения нужны чек, комплект поставки и описание проблемы.", "Возврат технически сложного товара проводится по правилам законодательства РФ.", "Сроки диагностики и возврата денег фиксируются при обращении."]
    },
    contacts: {
      title: "Контакты",
      items: ["ООО «ГаджетХаб», ИНН 0000000000, ОГРН 0000000000000.", "Телефон: 8 800 555-01-23.", "Email: sales@gadgethub.ru.", "Адрес: Москва, ул. Примерная, 1.", "Режим работы: ежедневно, 09:00-21:00 МСК."]
    }
  };
  const page = map[type] || map.privacy;
  return `
    <section class="page">
      <nav class="legal-nav">
        <a href="#/privacy">Конфиденциальность</a>
        <a href="#/terms">Соглашение</a>
        <a href="#/offer">Оферта</a>
        <a href="#/warranty">Возврат и гарантия</a>
        <a href="#/contacts">Контакты</a>
      </nav>
      <article class="legal-card">
        <h1>${page.title}</h1>
        <p class="lead">Документ описывает правила покупки, оплаты, доставки, возврата и обработки данных при использовании сайта GadgetHub.</p>
        <ul>${page.items.map((item) => `<li>${item}</li>`).join("")}</ul>
      </article>
    </section>
  `;
}

function render() {
  const hash = location.hash || "#/";
  const [route] = hash.replace("#", "").split("?");
  const parts = route.split("/").filter(Boolean);
  activeGallery = parts[0] === "product" ? activeGallery : 0;

  if (!parts.length) app.innerHTML = homePage();
  else if (parts[0] === "catalog") app.innerHTML = catalogPage();
  else if (parts[0] === "product") app.innerHTML = productPage(parts[1]);
  else if (parts[0] === "cart") app.innerHTML = cartPage();
  else if (parts[0] === "help") app.innerHTML = helpPage();
  else app.innerHTML = legalPage(parts[0]);

  updateCartCount();
  window.scrollTo(0, 0);
}

searchInput.addEventListener("input", () => {
  if (!location.hash.startsWith("#/catalog")) location.hash = "#/catalog";
  render();
});

window.addEventListener("hashchange", render);
render();
