export type SiteNavLink = {
  label: string;
  href: string;
  matchStartsWith?: boolean;
  hasChevron?: boolean;
};

export type FooterGroup = {
  title: string;
  links: Array<{
    label: string;
    href: string;
  }>;
};

export type CatalogCategory = "beds" | "sofas";

export type CatalogProduct = {
  name: string;
  slug: string;
  category: CatalogCategory;
  categoryLabel: string;
  image: string;
  price: string;
  oldPrice?: string;
  accent?: string;
  description: string;
};

export type WorkflowStep = {
  title: string;
  description: string;
  image?: string;
};

export type ProjectCardData = {
  image: string;
  avatar: string;
  designer: string;
  type: "visualization" | "realized";
  tag?: string;
  href: string;
};

export type PartnerTier = {
  name: string;
  description: string;
  features: string[];
  highlighted?: boolean;
};

export type ContactInfoItem = {
  label: string;
  value: string;
};

export type PaymentSection = {
  id: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

export type ProductAccordionItem = {
  id: string;
  title: string;
  kind: "specs" | "drawing" | "materials" | "warranty" | "shipping";
};

export type ProductDetail = {
  name: string;
  slug: string;
  category: CatalogCategory;
  categoryLabel: string;
  collectionLabel: string;
  price: string;
  oldPrice?: string;
  summary: string;
  gallery: string[];
  fabricSwatch: string;
  fabricName: string;
  sizes: string[];
  activeSize: string;
  storyTitle: string;
  storyParagraphs: string[];
  storyImage: string;
  specs: Array<{ label: string; value: string }>;
  materials: string[];
  warranty: string[];
  shipping: string[];
  accordions: ProductAccordionItem[];
  relatedSlugs: string[];
};

export const siteNavLinks: SiteNavLink[] = [
  { label: "Каталог", href: "/catalog", matchStartsWith: true, hasChevron: true },
  { label: "Дизайнерам", href: "/designers", matchStartsWith: true },
  {
    label: "Покупцям",
    href: "/delivery-and-payment-info",
    matchStartsWith: true,
    hasChevron: true
  },
  { label: "Про Vossa", href: "/about" },
  { label: "Проєкти дизайнерів", href: "/projects", matchStartsWith: true },
  { label: "Контакти", href: "/contact" },
];

export const footerGroups: FooterGroup[] = [
  {
    title: "Каталог",
    links: [
      { label: "Ліжка", href: "/catalog?category=beds" },
      { label: "Дивани", href: "/catalog?category=sofas" },
    ],
  },
  {
    title: "Навігація",
    links: [
      { label: "Дизайнерам", href: "/designers" },
      { label: "Про Vossa", href: "/about" },
      { label: "Проєкти дизайнерів", href: "/projects" },
      { label: "Контакти", href: "/contact" },
    ],
  },
  {
    title: "Покупцям",
    links: [
      { label: "Доставка та оплата", href: "/delivery-and-payment-info" },
      { label: "Гарантія", href: "/delivery-and-payment-info#warranty" },
      { label: "Політика конфіденційності", href: "/contact" },
    ],
  },
];

export const socialLinks = [
  { label: "Instagram", href: "#" },
  { label: "Facebook", href: "#" },
  { label: "Youtube", href: "#" },
  { label: "Tiktok", href: "#" },
];

export const catalogProducts: CatalogProduct[] = [
  {
    name: "Vena, прямий",
    slug: "vena-pryamyi",
    category: "sofas",
    categoryLabel: "Дивани",
    image: "/vossa-pages/bceb815ee77140b61e2b38c1b55e8d505210b3fe.jpg",
    price: "₴39,500",
    oldPrice: "₴42,500",
    description:
      "Стриманий прямий диван для просторів, де важливі чиста геометрія та м’який, спокійний силует.",
  },
  {
    name: "Vena",
    slug: "vena",
    category: "beds",
    categoryLabel: "Ліжка",
    image: "/vossa-pages/572674724066c96ce42629fa37199a7a8f62a4ea.jpg",
    price: "₴11,999",
    oldPrice: "₴13,999",
    description:
      "Ліжко зі зібраним профілем і преміальною фактурою, яке працює як спокійний акцент у спальні.",
  },
  {
    name: "Sona",
    slug: "sona",
    category: "beds",
    categoryLabel: "Ліжка",
    image: "/vossa-pages/9076f3702aae03bb0aacc0505989adeaabb9c2f9.jpg",
    price: "₴67,500",
    oldPrice: "₴13,999",
    description:
      "М’яке ліжко з широкими площинами та м’якою посадкою спинки для теплих нейтральних інтер’єрів.",
  },
  {
    name: "Rello, U 01",
    slug: "rello-u-01",
    category: "sofas",
    categoryLabel: "Дивани",
    image: "/vossa-pages/9aeb6497b67393d8b2c53bb1b919b9635cdefa27.jpg",
    price: "₴75,500",
    oldPrice: "₴75,999",
    accent: "AR",
    description:
      "Модульний диван з впевненими пропорціями та комфортною глибокою посадкою для щоденного життя.",
  },
  {
    name: "Line",
    slug: "line",
    category: "beds",
    categoryLabel: "Ліжка",
    image: "/vossa-pages/0bb843be6b240ec0a421c4af623f369feae07c60.jpg",
    price: "₴85,500",
    oldPrice: "₴13,999",
    description:
      "Ліжко з делікатним архітектурним силуетом і тактильною тканиною, яке тримає спальню в балансі.",
  },
  {
    name: "Rello, L 05",
    slug: "rello-l-05",
    category: "sofas",
    categoryLabel: "Дивани",
    image: "/vossa-pages/ab4e72cf6039fd22168a2b7aa37f9e4d8456c386.jpg",
    price: "₴71,500",
    oldPrice: "₴13,999",
    description:
      "Кутова конфігурація з м’яким ритмом модулів, яку легко інтегрувати в вітальні з відкритим плануванням.",
  },
  {
    name: "Kivo",
    slug: "kivo",
    category: "beds",
    categoryLabel: "Ліжка",
    image: "/vossa-pages/8fb1863c9e8f8d3ef4f4ae1c038b7d3b9ae3472b.jpg",
    price: "₴98,500",
    oldPrice: "₴101,500",
    description:
      "Виразне м’яке ліжко для просторів, де потрібна щільна фактура, акуратна геометрія та преміальне враження.",
  },
  {
    name: "Orvo, L 01",
    slug: "orvo-l-01",
    category: "sofas",
    categoryLabel: "Дивани",
    image: "/vossa-pages/bceb815ee77140b61e2b38c1b55e8d505210b3fe.jpg",
    price: "₴37,500",
    oldPrice: "₴13,999",
    description:
      "Лаконічний диван для камерних просторів, де важливо зберегти візуальну легкість і відчуття порядку.",
  },
];

export const catalogFeaturedCards = [
  {
    title: "Vena, прямий",
    price: "від ₴39,500",
    image: "/vossa-pages/8a9fe79fb6b9caed7e62c98f9442ec93235c008c.jpg",
    href: "/catalog/sofas/vena-pryamyi",
  },
  {
    title: "Vena",
    price: "від ₴11,999",
    image: "/vossa-pages/6eaf9b83a04fa78554916cd5323f53815d9e5cfd.jpg",
    href: "/catalog/beds/vena",
  },
];

export const upholsterySection = {
  title: "Тканини, що тримають рівень",
  eyebrowLeft: "quality",
  eyebrowRight: "in details",
  image: "/vossa-pages/123b7b62495dd8d3c4f2672f3a92dbafec97ac16.jpg",
  label: "Велюр",
  lead:
    "Оббивка визначає не лише вигляд, а й відчуття меблів у щоденному використанні. У VOSSA — різні типи тканин і широка палітра відтінків, щоб модель точно “сіла” у ваш простір.",
  body:
    "Ми працюємо лише з якісними матеріалами — приємними на дотик, зносостійкими та візуально преміальними. М’яка фактура з делікатним переливом додає інтер’єру глибини та відчуття преміум.",
  action: "Запросити зразки для проєкту",
};

export const selectionSection = {
  title: "Підбір, який економить час і знімає сумніви",
  description:
    "Ми врахуємо планування, сценарій використання та бажану естетику, щоб ви обрали впевнено.",
  namePlaceholder: "Ім’я",
  phonePlaceholder: "Номер телефону",
  action: "Підібрати модель",
  designerLink: "Я дизайнер / архітектор",
};

export const workflowSteps: WorkflowStep[] = [
  {
    title: "Запит у боті",
    description:
      "Залишаєте запит: що потрібно, габарити, місто, терміни та побажання по тканині. За наявності додаєте план або референси — це пришвидшує підбір.",
  },
  {
    title: "Підбір моделі",
    description:
      "Пропонуємо 2–3 варіанти під ваш проєкт і планування. За потреби підбираємо альтернативні модулі та розміщення, щоб рішення виглядало впевнено в інтер’єрі.",
    image: "/vossa-pages/afed20af6acb7c14d6200db27f2a4d9670047f14.jpg",
  },
  {
    title: "Тканини та відтінки",
    description:
      "Підбираємо фактуру й колір під стиль і освітлення простору. Даємо практичні рекомендації по догляду та зносостійкості залежно від колекції.",
  },
  {
    title: "Технічний пакет",
    description:
      "Надаємо креслення з габаритами та 3D-модель для інтеграції в проєкт. Це допомагає швидко узгодити рішення з клієнтом і підрядниками.",
    image: "/vossa-pages/a571485d7a9611a3f8d7e08e459d517a783bb597.jpg",
  },
  {
    title: "Подальший супровід",
    description:
      "Фіксуємо комплектацію, тканину та терміни й запускаємо виробництво. Супроводжуємо замовлення до доставки, щоб результат був передбачуваним і якісним.",
    image: "/vossa-pages/f2982746a4a6be7d4e1e368875df42638797602d.jpg",
  },
];

export const designerBenefits = [
  {
    number: "01",
    title: "Комісійна винагорода",
    note: "залежить від рівня партнерства",
  },
  {
    number: "02",
    title: "Оплата та документи",
    note: "зручний формат для ФОП/компаній",
  },
  {
    number: "03",
    title: "Терміни виробництва",
    note: "узгоджуємо до підтвердження замовлення",
  },
  {
    number: "04",
    title: "Підбір матеріалів",
    note: "тканини, відтінки, опції виконання",
  },
  {
    number: "05",
    title: "Технічний пакет",
    note: "3D-модель, креслення, параметри",
  },
  {
    number: "06",
    title: "Підтримка",
    note: "персональний менеджер / канал комунікації",
  },
];

export const partnerTiers: PartnerTier[] = [
  {
    name: "Start",
    description: "Для першого знайомства та 1–2 проєктів на старті.",
    features: [
      "Базова комісія",
      "Доступ до техпакету: креслення / 3D",
      "Підбір тканин і конфігурацій",
    ],
  },
  {
    name: "Pro",
    description: "Для дизайнерів із регулярними замовленнями.",
    features: [
      "Підвищена комісія",
      "Пріоритетна обробка запитів",
      "Розширений техпакет і матеріали для презентації клієнту",
    ],
    highlighted: true,
  },
  {
    name: "Studio / Partner",
    description: "Для студій та архітекторів із потоком проєктів.",
    features: [
      "Максимальна комісія та індивідуальні умови",
      "Пріоритет у виробництві та логістиці",
      "Публікація ваших проєктів у «Проєкти дизайнерів»",
    ],
  },
];

export const sharedProjects: ProjectCardData[] = [
  {
    image: "/vossa-pages/61391d8d374335b9ff7f46c9697e5ef877c07d74.jpg",
    avatar: "/vossa-pages/d168fcb8197caf8c1676162d229bb0815130e809.jpg",
    designer: "Anna Design",
    type: "realized",
    tag: "orlo l01",
    href: "/catalog/sofas/orvo-l-01",
  },
  {
    image: "/vossa-pages/ac315fe226123fb2784ce81ae2100237090f4ff9.jpg",
    avatar: "/vossa-pages/c5b84c5926d81f5cc6ffb7af73fdf1c5c3105ae3.jpg",
    designer: "Anna Design",
    type: "visualization",
    href: "/catalog/sofas/rello-l-05",
  },
  {
    image: "/vossa-pages/f6a6b27015fc273eb749639319151a236dca3609.jpg",
    avatar: "/vossa-pages/85ea3340358f901c32b40ae26d07c542702db7b0.jpg",
    designer: "Anna Design",
    type: "realized",
    href: "/catalog/sofas/rello-u-01",
  },
  {
    image: "/vossa-pages/8b5c62b4ace537ce5a3ef3251691e5cddfc14169.jpg",
    avatar: "/vossa-pages/7ad1c589d74ac9d7e02d63e661923380ada9879a.jpg",
    designer: "Anna Design",
    type: "visualization",
    href: "/catalog/beds/sona",
  },
];

export const projectsPageCards: ProjectCardData[] = [
  sharedProjects[0],
  sharedProjects[1],
  sharedProjects[2],
  sharedProjects[0],
  sharedProjects[1],
  sharedProjects[2],
  sharedProjects[0],
  sharedProjects[1],
  sharedProjects[2],
];

export const commercialProposalSection = {
  titleLines: ["Отримати", "Комерційну", "пропозицію"],
  description:
    "Надішлемо прайс, умови співпраці та комплектацію під ваш запит. За потреби — підберемо моделі, тканини й підготуємо специфікації для проєкту.",
  action: "Отримати пропозицію",
};

export const partnerCtaSection = {
  titleLines: ["Бажаєте стати", "нашим", "партнером?"],
  description:
    "Партнерська програма VOSSA для дизайнерів та архітекторів: зручні умови, підтримка проєктів і матеріали, з якими легко працювати — щоб ви впевнено рекомендували нас клієнтам.",
  action: "Подати заявку на партнерство",
  primaryPill: "/vossa-pages/a6cdcb0da3f1496f7f9ee7155caff690d2bfda37.jpg",
  secondaryPill: "/vossa-pages/3101c5956ab001a114db0fd4022cd9761f9ba884.jpg",
};

export const contactInfo: ContactInfoItem[] = [
  { label: "Телефон", value: "+38 (099) 122 34 12" },
  { label: "Email", value: "info@vossa.com" },
  { label: "Адреса", value: "Київ, вул. Симиренка 22г, 03182" },
  { label: "Графік", value: "Пн–Пт: 10:00–19:00\nСб: 11:00–18:00\nНд: вихідний" },
];

export const paymentSections: PaymentSection[] = [
  {
    id: "shipping-how",
    title: "Як ми доставляємо",
    paragraphs: [
      "Напишіть нам — допоможемо підібрати модель, тканину та конфігурацію. Для дизайнерів підготуємо комерційну пропозицію й технічні матеріали.",
    ],
  },
  {
    id: "shipping-ukraine",
    title: "Доставка по Україні",
    paragraphs: [
      "Доставляємо у всі регіони України. Формат доставки підбираємо під ваше замовлення та умови міста.",
      "Терміни доставки уточнюємо після підтвердження замовлення та адреси.",
    ],
    bullets: [
      "адресна доставка до під’їзду або дверей",
      "доставка перевізником",
      "самовивіз, якщо доступно",
    ],
  },
  {
    id: "shipping-international",
    title: "Міжнародна доставка",
    paragraphs: [
      "За запитом організовуємо міжнародну доставку. Вартість, терміни, пакування та документи узгоджуються індивідуально залежно від країни та логістичного маршруту.",
    ],
  },
  {
    id: "delivery-carry",
    title: "Підйом і занесення",
    paragraphs: [
      "За потреби можемо організувати підйом на поверх і занесення у приміщення. Вартість залежить від габаритів виробу та умов доступу.",
    ],
    bullets: [
      "габарити та вага виробу",
      "наявність ліфта",
      "поверх і відстань до входу",
    ],
  },
  {
    id: "delivery-assembly",
    title: "Збірка та встановлення",
    paragraphs: [
      "Залежно від міста та конфігурації доступна послуга збірки або встановлення. Якщо збірка не потрібна — ми надамо рекомендації щодо розміщення модулів та догляду.",
    ],
  },
  {
    id: "delivery-packaging",
    title: "Пакування та перевірка при отриманні",
    paragraphs: [
      "Ми пакуємо замовлення так, щоб меблі безпечно витримали транспортування. Рекомендуємо одразу оглянути пакування та перевірити комплектацію.",
    ],
    bullets: [
      "оглянути пакування на наявність пошкоджень",
      "перевірити комплектацію",
      "у разі питань — одразу повідомити менеджера",
    ],
  },
  {
    id: "payment-methods",
    title: "Способи оплати",
    paragraphs: [
      "Можливі варіанти оплати залежать від формату замовлення та узгоджуються до підтвердження.",
    ],
    bullets: [
      "оплата за рахунком для фізичних осіб, ФОП або компаній",
      "онлайн-оплата на сайті, якщо підключено",
      "інший формат — за погодженням",
    ],
  },
  {
    id: "prepayment",
    title: "Передоплата та умови виробництва",
    paragraphs: [
      "Більшість моделей VOSSA виготовляються під замовлення, тому зазвичай передбачена передоплата. Її розмір та графік оплати фіксуються в рахунку або договорі.",
    ],
  },
  {
    id: "order-confirmation",
    title: "Підтвердження замовлення",
    paragraphs: [
      "Замовлення вважається підтвердженим після погодження моделі, конфігурації, тканини, вартості, термінів та здійснення оплати згідно з умовами.",
    ],
  },
  {
    id: "notes",
    title: "Важливі примітки",
    paragraphs: [
      "Усі індивідуальні параметри, включно з тканиною, відтінком та адресою доставки, ми дублюємо в підтвердженні замовлення, щоб уникнути неточностей на фінальному етапі.",
    ],
  },
  {
    id: "warranty",
    title: "Потрібна консультація?",
    paragraphs: [
      "Якщо ви не впевнені у виборі або хочете прорахунок доставки — напишіть нам. Ми запропонуємо оптимальну конфігурацію, тканину та узгодимо терміни.",
    ],
  },
];

const productDetailOverrides: Record<string, ProductDetail> = {
  "rello-u-01": {
    name: "Rello, U 01",
    slug: "rello-u-01",
    category: "sofas",
    categoryLabel: "Дивани",
    collectionLabel: "Модульний диван",
    price: "₴67,500",
    oldPrice: "₴87,500",
    summary:
      "Модульний диван із впевненими пропорціями та м’якою посадкою — для сучасних просторів і щоденного комфорту.",
    gallery: [
      "/vossa-pages/f42b65c03dc6124a4bf88e2d0e22ec229633b6c5.jpg",
      "/vossa-pages/f9c239f4a0401a4dd10def95376720f1882773d4.jpg",
    ],
    fabricSwatch: "/vossa-pages/63634cdbab8dcf04a3dcaf4bf2aeb9e02fd30947.jpg",
    fabricName: "Velvet Touch, 01",
    sizes: ["320×220", "360×181", "380×260", "Власний розмір"],
    activeSize: "320×220",
    storyTitle: "RELLО, U 01 — модульний центр вашої вітальні",
    storyParagraphs: [
      "RELLО, U 01 — модульний диван зі стриманим силуетом і впевненими пропорціями, створений як головний елемент простору. Його форма виглядає лаконічно, але тримає композицію інтер’єру, а глибока посадка й м’які подушки додають відчуття комфорту на кожен день.",
      "Модульність дає свободу планування: диван легко підлаштувати під кімнату, зону відпочинку або змінити конфігурацію, коли змінюються потреби. Низькі опори додають візуальної легкості — модель ніби пливе над підлогою, зберігаючи масивність і стабільність у сприйнятті.",
      "Це рішення для інтер’єрів, де важливі тактильність матеріалів, акуратність деталей і чиста геометрія. RELLО, U 01 однаково органічно працює і в сучасному мінімалізмі, і в теплих нейтральних просторах — як впевнений, преміальний акцент без зайвого шуму.",
    ],
    storyImage: "/vossa-pages/f7fcec8acbcc2fa2b99dd0a0bae62f79bd45b870.jpg",
    specs: [
      { label: "Тип", value: "Модульний диван" },
      { label: "Конфігурація", value: "U-форма / секційний" },
      { label: "Посадка", value: "Глибока / комфортна" },
      { label: "Модульність", value: "Так, компонується з секцій" },
      { label: "Габарити (Ш×Г×В)", value: "320 × 220 × 74 см" },
      { label: "Висота сидіння", value: "43 см" },
      { label: "Глибина сидіння", value: "68 см" },
      { label: "Наповнення", value: "Піна високої щільності + синтепух" },
      { label: "Каркас", value: "Фанера та масив дерева" },
      { label: "Опори", value: "Металеві, низькі" },
      { label: "Знімні чохли", value: "Ні" },
      { label: "Гарантія", value: "2 роки" },
      { label: "Виробництво", value: "Україна" },
      { label: "Термін виготовлення", value: "5–7 тижнів" },
    ],
    materials: [
      "Тканина Velvet Touch, 01 з виразною тактильною фактурою.",
      "Каркас із фанери та масиву дерева для стабільності щоденного використання.",
      "Наповнення, яке тримає форму та зберігає комфортну посадку протягом років.",
    ],
    warranty: [
      "Гарантія на каркас і виробничі дефекти — 2 роки.",
      "Для дизайнерських проєктів надаємо окремий пакет матеріалів та рекомендації по догляду.",
    ],
    shipping: [
      "Можемо організувати адресну доставку, занесення й складання залежно від міста та логістики.",
      "Точні терміни та вартість узгоджуємо після затвердження конфігурації.",
    ],
    accordions: [
      { id: "specs", title: "Характеристики", kind: "specs" },
      { id: "drawing", title: "Креслення + 3D", kind: "drawing" },
      { id: "materials", title: "Матеріали", kind: "materials" },
      { id: "warranty", title: "Гарантія", kind: "warranty" },
      { id: "shipping", title: "Доставка та оплата", kind: "shipping" },
    ],
    relatedSlugs: ["rello-l-05", "line", "kivo"],
  },
};

export const getProductHref = (product: Pick<CatalogProduct, "category" | "slug">) =>
  `/catalog/${product.category}/${product.slug}`;

export const getCategoryHref = (category: CatalogCategory) =>
  `/catalog?category=${category}`;

export const getCatalogProductBySlug = (slug: string) =>
  catalogProducts.find((product) => product.slug === slug);

export function getProductDetail(slug: string): ProductDetail | null {
  if (productDetailOverrides[slug]) {
    return productDetailOverrides[slug];
  }

  const product = getCatalogProductBySlug(slug);

  if (!product) {
    return null;
  }

  return {
    name: product.name,
    slug: product.slug,
    category: product.category,
    categoryLabel: product.categoryLabel,
    collectionLabel:
      product.category === "beds" ? "М’яке ліжко" : "Модульний диван",
    price: product.price,
    oldPrice: product.oldPrice,
    summary: product.description,
    gallery: [product.image, product.image],
    fabricSwatch: "/vossa-pages/63634cdbab8dcf04a3dcaf4bf2aeb9e02fd30947.jpg",
    fabricName: "Velvet Touch, 01",
    sizes:
      product.category === "beds"
        ? ["160×200", "180×200", "200×200", "Індивідуально"]
        : ["280×180", "320×220", "360×240", "Індивідуально"],
    activeSize: product.category === "beds" ? "180×200" : "320×220",
    storyTitle: `${product.name} — стриманий акцент для сучасного інтер’єру`,
    storyParagraphs: [
      "Модель побудована на чистих пропорціях, тактильних матеріалах і деталях, які працюють не лише на вигляд, а й на щоденний комфорт.",
      "Ми продумуємо посадку, підтримку, наповнення та характер силуету так, щоб предмет виглядав зібрано в реальному просторі — при денному світлі, у житті та в проєктах дизайнерів.",
    ],
    storyImage:
      product.category === "beds"
        ? "/vossa-pages/02067ffba790c81590430ce05b9cdf85d58919b1.jpg"
        : "/vossa-pages/f7fcec8acbcc2fa2b99dd0a0bae62f79bd45b870.jpg",
    specs: [
      {
        label: "Категорія",
        value: product.category === "beds" ? "М’яке ліжко" : "Модульний диван",
      },
      {
        label: "Рекомендований простір",
        value:
          product.category === "beds"
            ? "Спальня / гостьова кімната"
            : "Вітальня / lounge-зона",
      },
      { label: "Тканина", value: "Velvet Touch, 01" },
      { label: "Каркас", value: "Фанера та масив дерева" },
      { label: "Опори", value: "Металеві, низькі" },
      { label: "Виробництво", value: "Україна" },
      { label: "Термін виготовлення", value: "5–7 тижнів" },
    ],
    materials: [
      "Добірна оббивка з приємною на дотик фактурою.",
      "Стійке наповнення для щоденного використання.",
      "Чітка геометрія та акуратні стики без зайвого декору.",
    ],
    warranty: [
      "Гарантія на виробничі дефекти та каркас — 2 роки.",
      "Умови догляду надамо разом із підтвердженням замовлення.",
    ],
    shipping: [
      "Доставку, занесення й складання організовуємо індивідуально під місто та конфігурацію.",
    ],
    accordions: [
      { id: "specs", title: "Характеристики", kind: "specs" },
      { id: "drawing", title: "Креслення + 3D", kind: "drawing" },
      { id: "materials", title: "Матеріали", kind: "materials" },
      { id: "warranty", title: "Гарантія", kind: "warranty" },
      { id: "shipping", title: "Доставка та оплата", kind: "shipping" },
    ],
    relatedSlugs: catalogProducts
      .filter((item) => item.slug !== slug)
      .slice(0, 3)
      .map((item) => item.slug),
  };
}
