const worksData = [
  {
    id: "work1",
    category: "Музично-театральні твори",
    title: "Балет 'Буратіно та Чарівна Скрипка' ('Пригоди Піноккіо')",
    year: "НОУ. 2007",
    description: "Опис твору...",
    imageUrl: "/images/Буратіно.jpg",
    videoUrl: "",
  },
  {
    id: "work2",
    category: "Музично-театральні твори",
    title: "Балет 'За двома зайцями'",
    year: "НОУ. 2017",
    description: "Опис твору...",
    imageUrl: "/images/Зайці.jpg",
    videoUrl: "",
  },
  {
    id: "work3",
    category: "Музично-театральні твори",
    title: "Балет 'Бармолей і айболить'",
    year: "Київська опера. 2009",
    description: "Опис твору...",
    imageUrl: "/images/Бармалей.jpg",
    videoUrl: "",
  },
  {
    id: "work4",
    category: "Музично-театральні твори",
    title: "Балет 'Катруся'",
    year: "1995",
    description: "Опис твору...",
    imageUrl: "/images/Катруся.jpg",
    videoUrl: "",
  },
  {
    id: "work5",
    category: "Музично-театральні твори",
    title: "Балет 'Перун'",
    year: "1993",
    description: "Опис твору...",
    imageUrl: "/images/Перун.jpg",
    videoUrl: "",
  },
  {
    id: "work6",
    category: "Музично-театральні твори",
    title: "Балет 'Сіндерела'",
    year: "2000",
    description: "Опис твору...",
    imageUrl: "/images/Сіндерела.jpg",
    videoUrl: "",
  },
  {
    id: "work7",
    category: "Музично-театральні твори",
    title: "Балет 'Те, що приніс вітер...'",
    year: "2005",
    description: "Опис твору...",
    imageUrl: "/images/Те_що_приніс_вітер.jpg",
    videoUrl: "",
  },
  {
    id: "work8",
    category: "Музично-театральні твори",
    title: "Балет 'Запорожець за Дунаєм'",
    year: "рік???",
    description: "Опис твору...",
    imageUrl: "/images/Запорожець.jpg",
    videoUrl: "",
  },
  {
    id: "work9",
    category: "Музично-театральні твори",
    title: "Дитяча опера 'Король Дроздобород'",
    year: "Київська опера. 2018",
    description: "Опис твору...",
    imageUrl: "/images/Король_Дроздобород.jpg",
    videoUrl: "",
  },
  {
    id: "work10",
    category: "Музично-театральні твори",
    title: "Опера 'Кіт у Чоботях'",
    year: "НОУ. 2023",
    description: "Опис твору...",
    imageUrl: "/images/Кіт_у_Чоботях.jpg",
    videoUrl: "",
  },
  {
    id: "work11",
    category: "Музично-театральні твори",
    title: "Балет 'Дюймовонька'",
    year: "Одеська Опера. 2022",
    description: "Опис твору...",
    imageUrl: "/images/Дюймовонька.jpg",
    videoUrl: "",
  },
  {
    id: "work12",
    category: "Музично-театральні твори",
    title: "Фольклорна симфонічно-хореографічна сюїта 'Пори року'",
    year: "",
    description: "Опис твору...",
    imageUrl: "/images/Пори_року.jpg",
    videoUrl: "",
  },
  {
    id: "work13",
    category: "Вокально-симфонічні твори",
    title: "Кантата-Балет 'Кобзар'",
    year: "НОУ. 2016",
    description: "Опис твору...",
    imageUrl: "/images/Кобзар.jpg",
    videoUrl: "",
  },
  {
    id: "work14",
    category: "Симфонічний оркестр",
    title: "Музика до балету 'За двома зайцями'",
    year: "рік???",
    description: "Опис твору...",
    imageUrl: "/images/Зайці_музика.jpg",
    videoUrl: "",
  },
  {
    id: "work15",
    category: "Симфонічний оркестр",
    title:
      "'Запорожець за Дунаєм' сюїта з балету за мотивами опери С.Гулака-Артемовського",
    year: "рік???",
    description: "Опис твору...",
    imageUrl: "/images/Запорожець_сцена.jpg",
    videoUrl: "",
  },
  {
    id: "work16",
    category: "Симфонічний оркестр",
    title: "Шумка - Гопак",
    year: "рік???",
    description: "Опис твору...",
    imageUrl: "/images/Шумка_Гопак.jpg",
    videoUrl: "",
  },
  {
    id: "work17",
    category: "Симфонічний оркестр",
    title: "Щедрик",
    year: "рік???",
    description: "Опис твору...",
    imageUrl: "/images/Щедрик.jpg",
    videoUrl: "",
  },
  {
    id: "work18",
    category: "Камерний оркестр",
    title: "Перехресні стежки",
    year: "рік???",
    description: "Сюїта з музики до вистави за повістю І. Франка.",
    imageUrl: "/images/Перехресні_стежки.jpg",
    videoUrl: "",
  },
  {
    id: "work19",
    category: "Камерний оркестр",
    title: "Батярська Пісня",
    year: "рік???",
    description: "Твір для камерного оркестру.",
    imageUrl: "/images/Батярська_Пісня.jpg",
    videoUrl: "",
  },
  {
    id: "work20",
    category: "Камерний оркестр",
    title: "Консоданс",
    year: "рік???",
    description: "Твір для оркестру.",
    imageUrl: "/images/Консоданс.jpg",
    videoUrl: "",
  },
  {
    id: "work21",
    category: "Камерний оркестр",
    title: "Зоряний хлопчик",
    year: "2022",
    description: "Твір для камерного оркестру.",
    imageUrl: "/images/Зоряний_хлопчик.jpg",
    videoUrl: "",
  },
  {
    id: "work22",
    category: "Камерний оркестр",
    title: "Пасторальна сюїта",
    year: "рік???",
    description: "Сюїта для дерев'яних, духових, ударних та арфи.",
    imageUrl: "/images/Пасторальна_сюїта.jpg",
    videoUrl: "",
  },

  // Твори для інструментів соло з камерним оркестром
  {
    id: "work23",
    category: "Твори для інструментів соло з камерним оркестром",
    title: "Гамлет-сюїта",
    year: "рік???",
    description: "9 театральних ескізів для скрипки і камерного оркестру.",
    imageUrl: "/images/Гамлет.jpg",
    videoUrl: "",
  },
  {
    id: "work24",
    category: "Твори для інструментів соло з камерним оркестром",
    title: "Ти гуляєш дні і ночі",
    year: "рік???",
    description:
      "Для альта з оркестром. Парафраз на тему з опери Гулака-Артемовського «Запорожець за Дунаєм».",
    imageUrl: "/images/Ти_гуляєш.jpg",
    videoUrl: "",
  },
  {
    id: "work25",
    category: "Твори для інструментів соло з камерним оркестром",
    title: "Старосвітська елегія",
    year: "рік???",
    description: "Для альта та струнних.",
    imageUrl: "/images/Старосвітська_елегія.jpg",
    videoUrl: "",
  },
  {
    id: "work26",
    category: "Твори для інструментів соло з камерним оркестром",
    title: "Каданс",
    year: "рік???",
    description: "Для фортепіано, камерного оркестру та ударних.",
    imageUrl: "/images/Каданс.jpg",
    videoUrl: "",
  },
  {
    id: "work27",
    category: "Твори для інструментів соло з камерним оркестром",
    title: "Саундтрек",
    year: "рік???",
    description: "Для скрипки, камерного оркестру та ударних.",
    imageUrl: "/images/Саундтрек.jpg",
    videoUrl: "",
  },
  {
    id: "work28",
    category: "Твори для інструментів соло з камерним оркестром",
    title: "Три Портрети з балету “За двома зайцями”",
    year: "рік???",
    description: "Для скрипки і камерного оркестру.",
    imageUrl: "/images/Три_Портрети.jpg",
    videoUrl: "",
  },
  {
    id: "work29",
    category: "Твори для інструментів соло з камерним оркестром",
    title: "Вокаліз",
    year: "рік???",
    description:
      "Пам’яті друга – диригента Сергія Мальованого для скрипки і струнних.",
    imageUrl: "/images/Вокаліз.jpg",
    videoUrl: "",
  },
  {
    id: "work30",
    category: "Твори для інструментів соло з камерним оркестром",
    title: "Вокаліз для труби і струнних",
    year: "рік???",
    description: "Версія для труби і струнних.",
    imageUrl: "/images/Вокаліз_труба.jpg",
    videoUrl: "https://www.youtube.com/watch?v=9xlquJzAcQ8",
  },
  {
    id: "work31",
    category: "Твори для інструментів соло з камерним оркестром",
    title: "Ми є",
    year: "2014",
    description:
      "Для скрипки соло і камерного оркестру. Парафраз на тему М. Вербицького - Державний гімн України.",
    imageUrl: "/images/Ми_є.jpg",
    videoUrl: "https://www.youtube.com/watch?v=GEu86XXO6Dw",
  },
  {
    id: "work32",
    category: "Твори для інструментів соло з камерним оркестром",
    title: "Батярські пісні",
    year: "рік???",
    description: "Для скрипки та струнних.",
    imageUrl: "/images/Батярські_пісні.jpg",
    videoUrl: "https://www.youtube.com/watch?v=v02sFhmBn1U",
  },
  {
    id: "work33",
    category: "Твори для інструментів соло з камерним оркестром",
    title: "Концертіно 'Учитель та Учень'",
    year: "рік???",
    description:
      "Для 2-х скрипок та оркестру / 2-х скрипок, органа та оркестру.",
    imageUrl: "/images/Концертіно.jpg",
    videoUrl: "https://www.youtube.com/watch?v=hjwo0hFn2cc",
  },
  {
    id: "work34",
    category: "Твори для інструментів соло з камерним оркестром",
    title: "Віденський салат",
    year: "рік???",
    description: "Для трьох скрипок з камерним оркестром.",
    imageUrl: "/images/Віденський_салат.jpg",
    videoUrl: "https://www.youtube.com/watch?v=DeRtC8XdHGI",
  },
  {
    id: "work35",
    category: "Твори для інструментів соло з камерним оркестром",
    title: "Любовне божевілля",
    year: "рік???",
    description: "Театральна сюїта для скрипки та струнного оркестру.",
    imageUrl: "/images/Любовне_божевілля.jpg",
    videoUrl: "",
  },
  {
    id: "work36",
    category: "Твори для інструментів соло з камерним оркестром",
    title: "Гумореска",
    year: "рік???",
    description: "Для флейти камерного оркестру.",
    imageUrl: "/images/Гумореска.jpg",
    videoUrl: "https://www.youtube.com/watch?v=ss9bgln6Px4",
  },
  {
    id: "work37",
    category: "Твори для інструментів соло з камерним оркестром",
    title: "Концертна фантазія",
    year: "рік???",
    description:
      "Парафраз-буфф на тему двох українських народних пісень «Ніч яка…» для скрипки і струнних.",
    imageUrl: "/images/Концертна_фантазія.jpg",
    videoUrl: "https://www.youtube.com/watch?v=S2oaltEW2No",
  },
  {
    id: "work38",
    category: "Твори для інструментів соло з камерним оркестром",
    title: "Сюїта 'Дюймовонька'",
    year: "рік???",
    description:
      "Присвята Богдані Півненко та її учням для скрипки і фортепіано.",
    imageUrl: "/images/Дюймовонька_сюїта.jpg",
    videoUrl: "https://www.youtube.com/watch?v=6amij0IsLsw",
  },
  {
    id: "work39",
    category: "Твори для інструментів соло з камерним оркестром",
    title: "Теплий дощ",
    year: "рік???",
    description: "Для віолончелі та фортепіано і струнних.",
    imageUrl: "/images/Теплий_дощ.jpg",
    videoUrl: "",
  },
  // Камерно-інструментальні твори
  {
    id: "work40",
    category: "Камерно-інструментальні твори",
    title: "Твір 1",
    year: "рік???",
    description: "Опис твору...",
    imageUrl: "/images/Твір1.jpg",
    videoUrl: "",
  },
  // Add more works here if necessary

  // Фортепіанні твори
  {
    id: "work41",
    category: "Фортепіанні твори",
    title: "Твір 2",
    year: "рік???",
    description: "Опис твору...",
    imageUrl: "/images/Твір2.jpg",
    videoUrl: "",
  },
  // Add more works here if necessary

  // Вокальні твори
  {
    id: "work42",
    category: "Вокальні твори",
    title: "5 частин з вистави 'Шаленство Кохання'",
    year: "рік???",
    description: "Для баритону і камерного оркестру.",
    imageUrl: "/images/Шаленство_Кохання.jpg",
    videoUrl: "https://www.youtube.com/watch?v=rZb4q1HrVgE&t=2360s",
  },
  {
    id: "work43",
    category: "Вокальні твори",
    title: "Ми – цнотливі і невинні",
    year: "рік???",
    description: "Для голосу та ансамблю (з вистави).",
    imageUrl: "/images/Ми_цнотливі_і_невинні.jpg",
    videoUrl: "https://www.youtube.com/watch?v=_wDNwv4Aw-w",
  },
  {
    id: "work44",
    category: "Вокальні твори",
    title: "Місяць золотий",
    year: "рік???",
    description: "Для голосу та ансамблю.",
    imageUrl: "/images/Місяць_золотий.jpg",
    videoUrl: "https://www.youtube.com/watch?v=c-h78JpbgTA",
  },
  {
    id: "work45",
    category: "Вокальні твори",
    title: "Принадна Катрин",
    year: "рік???",
    description: "Для голосу та ансамблю.",
    imageUrl: "/images/Принадна_Катрин.jpg",
    videoUrl: "https://www.youtube.com/watch?v=zsfg2p5nWWU",
  },
  {
    id: "work46",
    category: "Вокальні твори",
    title: "Три пісні на вірші Г. Алексеєвої",
    year: "рік???",
    description: "Для голосу та ансамблю.",
    imageUrl: "/images/Три_пісні.jpg",
    videoUrl: "https://www.youtube.com/watch?v=S0KslDvE1SY",
  },
  // Духовна музика
  {
    id: "work47",
    category: "Духовна музика",
    title: "Твір 1",
    year: "рік???",
    description: "Опис твору...",
    imageUrl: "/images/Духовна_музика1.jpg",
    videoUrl: "",
  },
  // Додайте більше творів тут, якщо потрібно

  // Естрадні пісні
  {
    id: "work48",
    category: "Естрадні пісні",
    title: "Твір 2",
    year: "рік???",
    description: "Опис твору...",
    imageUrl: "/images/Естрадні_пісні1.jpg",
    videoUrl: "",
  },
  // Додайте більше творів тут, якщо потрібно

  // Транскрипції / аранжування для камерного оркестру
  {
    id: "work49",
    category: "Транскрипції / аранжування для камерного оркестру",
    title: "Музика Луїзи",
    year: "рік???",
    description: "Перекладення для скрипки соло та струнного оркестру.",
    imageUrl: "/images/Музика_Луїзи.jpg",
    videoUrl: "",
  },
  // Музика до драматичних вистав
  {
    id: "work50",
    category: "Музика до драматичних вистав",
    title: "«Равлинка та її хатинка»",
    year: "рік???",
    description: "Опис твору...",
    imageUrl: "/images/Равлинка.jpg",
    videoUrl: "",
  },
  {
    id: "work51",
    category: "Музика до драматичних вистав",
    title: "“Шаленство Кохання”",
    year: "рік???",
    description: "Опис твору...",
    imageUrl: "/images/Шаленство.jpg",
    videoUrl: "",
  },
  {
    id: "work52",
    category: "Музика до драматичних вистав",
    title: "“Бояриня”",
    year: "рік???",
    description: "Опис твору...",
    imageUrl: "/images/Бояриня.jpg",
    videoUrl: "",
  },
  {
    id: "work53",
    category: "Музика до драматичних вистав",
    title: "«Школа скандалу» Р.Шерідана",
    year: "рік???",
    description: "Опис твору...",
    imageUrl: "/images/Школа_скандалу.jpg",
    videoUrl: "",
  },
  {
    id: "work54",
    category: "Музика до драматичних вистав",
    title: "«Пані міністерша» Б.Нушича",
    year: "рік???",
    description: "Опис твору...",
    imageUrl: "/images/Пані_міністерша.jpg",
    videoUrl: "",
  },
  {
    id: "work55",
    category: "Музика до драматичних вистав",
    title: "«З вами небезпечно мати справу» О.Арбузова",
    year: "рік???",
    description: "Опис твору...",
    imageUrl: "/images/З_вами_небезпечно.jpg",
    videoUrl: "",
  },
  {
    id: "work56",
    category: "Музика до драматичних вистав",
    title: "«Насмішкувате моє щастя» Л.Малюгіна",
    year: "рік???",
    description: "Опис твору...",
    imageUrl: "/images/Насмішкувате_щастя.jpg",
    videoUrl: "",
  },
  {
    id: "work57",
    category: "Музика до драматичних вистав",
    title: "«Наполеон та корсиканка» І.Губича",
    year: "рік???",
    description: "Опис твору...",
    imageUrl: "/images/Наполеон.jpg",
    videoUrl: "",
  },
  {
    id: "work58",
    category: "Музика до драматичних вистав",
    title: "«Дон Кіхот. 1938» М.Булгакова (за М. Сервантесом)",
    year: "рік???",
    description: "Опис твору...",
    imageUrl: "/images/Дон_Кіхот.jpg",
    videoUrl: "",
  },
  {
    id: "work59",
    category: "Музика до драматичних вистав",
    title: "«Зимовий вечір» М.Старицького",
    year: "рік???",
    description: "Опис твору...",
    imageUrl: "/images/Зимовий_вечір.jpg",
    videoUrl: "",
  },
  {
    id: "work60",
    category: "Музика до драматичних вистав",
    title: "«Патетична соната» М.Куліша",
    year: "рік???",
    description: "Опис твору...",
    imageUrl: "/images/Патетична_соната.jpg",
    videoUrl: "",
  },
  {
    id: "work61",
    category: "Музика до драматичних вистав",
    title: "«Лісова пісня» Лесі Українки",
    year: "рік???",
    description: "Опис твору...",
    imageUrl: "/images/Лісова_пісня.jpg",
    videoUrl: "",
  },
  {
    id: "work62",
    category: "Музика до драматичних вистав",
    title: "«Дон Жуан» Ж.-Б.Мольєра",
    year: "рік???",
    description: "Опис твору...",
    imageUrl: "/images/Дон_Жуан.jpg",
    videoUrl: "",
  },
  {
    id: "work63",
    category: "Музика до драматичних вистав",
    title: "«Гамлет» В.Шекспіра",
    year: "рік???",
    description: "Опис твору...",
    imageUrl: "/images/Гамлет.jpg",
    videoUrl: "",
  },
  {
    id: "work64",
    category: "Музика до драматичних вистав",
    title:
      "«Хоровод любові» А.Шніцлера – у Київському академічному Молодому театрі",
    year: "рік???",
    description: "Опис твору...",
    imageUrl: "/images/Хоровод_любові.jpg",
    videoUrl: "",
  },
  {
    id: "work65",
    category: "Музика до драматичних вистав",
    title: "«Росмерсгольм» Г. Ібсена",
    year: "рік???",
    description: "Опис твору...",
    imageUrl: "/images/Росмерсгольм.jpg",
    videoUrl: "",
  },
  // Музика для мультфільмів
  {
    id: "work66",
    category: "Музика для мультфільмів",
    title: "«Морозики-морози»",
    year: "1986",
    description: "Опис твору...",
    imageUrl: "/images/Морозики-морози.jpg",
    videoUrl: "",
  },
  {
    id: "work67",
    category: "Музика для мультфільмів",
    title: "«Їжачок і дівчинка»",
    year: "1988",
    description: "Опис твору...",
    imageUrl: "/images/Їжачок_і_дівчинка.jpg",
    videoUrl: "",
  },
  {
    id: "work68",
    category: "Музика для мультфільмів",
    title: "«Історія про дівчинку, яка наступила на хліб»",
    year: "1986",
    description: "Опис твору...",
    imageUrl: "/images/Історія_про_дівчинку.jpg",
    videoUrl: "",
  },
  {
    id: "work69",
    category: "Музика для мультфільмів",
    title: "«Дострибни до хмаринки»",
    year: "1988",
    description: "Опис твору...",
    imageUrl: "/images/Дострибни_до_хмаринки.jpg",
    videoUrl: "",
  },
  {
    id: "work70",
    category: "Музика для мультфільмів",
    title: "«Івасик-Телесик»",
    year: "1989",
    description: "Опис твору...",
    imageUrl: "/images/Івасик-Телесик.jpg",
    videoUrl: "",
  },
  {
    id: "work71",
    category: "Музика для мультфільмів",
    title: "«Горщик-сміхотун»",
    year: "1990",
    description: "Опис твору...",
    imageUrl: "/images/Горщик-сміхотун.jpg",
    videoUrl: "",
  },
  {
    id: "work72",
    category: "Музика для мультфільмів",
    title: "«Котик та півник»",
    year: "1991",
    description: "Опис твору...",
    imageUrl: "/images/Котик_та_півник.jpg",
    videoUrl: "",
  },
  {
    id: "work73",
    category: "Музика для мультфільмів",
    title: "«Кривенька качечка»",
    year: "1992",
    description: "Опис твору...",
    imageUrl: "/images/Кривенька_качечка.jpg",
    videoUrl: "",
  },
  {
    id: "work74",
    category: "Музика для мультфільмів",
    title: "«Полювання»",
    year: "1992",
    description: "Опис твору...",
    imageUrl: "/images/Полювання.jpg",
    videoUrl: "",
  },
  {
    id: "work75",
    category: "Музика для мультфільмів",
    title: "«Кіт Базиліо і мишеня Пік»",
    year: "рік???",
    description: "Опис твору...",
    imageUrl: "/images/Кіт_Базиліо.jpg",
    videoUrl: "",
  },

  // Музика для кіно
  {
    id: "work76",
    category: "Музика для кіно",
    title: "«Цвітіння кульбаби» (Київській кіностудії ім. О. П. Довженка)",
    year: "1992",
    description: "Опис твору...",
    imageUrl: "/images/Цвітіння_кульбаби.jpg",
    videoUrl: "",
  },
  {
    id: "work77",
    category: "Музика для кіно",
    title: "«Останній осінній листок» (к/м)",
    year: "2005",
    description: "Опис твору...",
    imageUrl: "/images/Останній_осінній_листок.jpg",
    videoUrl: "",
  },
  {
    id: "work78",
    category: "Музика для кіно",
    title: "«Роман вихідного дня»",
    year: "2008",
    description: "Опис твору...",
    imageUrl: "/images/Роман_вихідного_дня.jpg",
    videoUrl: "",
  },
  // Інше
  {
    id: "work79",
    category: "Інше",
    title:
      "«Закоханий бандурист» для бандури та оркестру народних інструментів",
    year: "рік???",
    description: "Опис твору...",
    imageUrl: "/images/Закоханий_бандурист.jpg",
    videoUrl: "",
  },
  {
    id: "work80",
    category: "Інше",
    title: "Кантата для дитячого хору «Сонце-Ярило»",
    year: "рік???",
    description: "Опис твору...",
    imageUrl: "/images/Сонце-Ярило.jpg",
    videoUrl: "",
  },

  // Додатково
  {
    id: "work81",
    category: "Додатково",
    title: "«Дорога» (мі-мінор) для оркестру народних інструментів",
    conductor: "Диригент В. Гуцал",
    year: "рік???",
    description: "Опис твору...",
    imageUrl: "/images/Дорога.jpg",
    videoUrl: "",
  },
  {
    id: "work82",
    category: "Додатково",
    title: "«Елегія» (мі-мінор) для оркестру народних інструментів",
    conductor: "Диригент В. Гуцал",
    soloist: "Соліст Юрій Яценко (кобза)",
    year: "рік???",
    description: "Опис твору...",
    imageUrl: "/images/Елегія.jpg",
    videoUrl: "",
  },
  {
    id: "work83",
    category: "Додатково",
    title: "«Веснянка» для оркестру народних інструментів",
    conductor: "Диригент В. Варакута",
    year: "рік???",
    description: "Опис твору...",
    imageUrl: "/images/Веснянка.jpg",
    videoUrl: "",
  },
  {
    id: "work84",
    category: "Додатково",
    title: "Інструментальна п’єса п/к Ю. Шевченка (+ соло саксофон)",
    year: "рік???",
    description: "Опис твору...",
    imageUrl: "/images/Інструментальна_п’єса.jpg",
    videoUrl: "",
  },
  {
    id: "work85",
    category: "Додатково",
    title: "«Ми є» для скрипки і струнних",
    ensemble: "Ансамбль “Артехатта”",
    soloist: "Соло – Мирослава Которович",
    year: "рік???",
    description: "Опис твору...",
    imageUrl: "/images/Ми_є.jpg",
    videoUrl: "",
  },
  {
    id: "work86",
    category: "Додатково",
    title: "«Парафраз на укр. тему» для оркестру народних інструментів",
    conductor: "Диригент В. Гуцал",
    year: "рік???",
    description: "Опис твору...",
    imageUrl: "/images/Парафраз_на_укр_тему.jpg",
    videoUrl: "",
  },
  {
    id: "work87",
    category: "Додатково",
    title: "П’єса для баяна і оркестру народних інструментів",
    conductor: "Диригент В. Гуцал",
    year: "рік???",
    description: "Опис твору...",
    imageUrl: "/images/П’єса_для_баяна.jpg",
    videoUrl: "",
  },
  {
    id: "work88",
    category: "Додатково",
    title: "«Танок» для баяна і оркестру народних інструментів",
    conductor: "АОН і ПМ, Диригент – Пономарчук",
    year: "рік???",
    description: "Опис твору...",
    imageUrl: "/images/Танок.jpg",
    videoUrl: "",
  },
  // Також
  {
    id: "work89",
    category: "Радіовистави",
    title: "Музика до РадіоВистави 'Джордано Бруно'",
    year: "1987",
    description: "Ансамбль п/к Ю. Шевченка",
    imageUrl: "/images/Джордано_Бруно.jpg",
    videoUrl: "",
  },
  {
    id: "work90",
    category: "Радіовистави",
    title: "Музика до РадіоВистави 'Оборона Буші'",
    year: "1991",
    description: "Ансамбль п/к Ю. Шевченка",
    imageUrl: "/images/Оборона_Буші.jpg",
    videoUrl: "",
  },
  {
    id: "work91",
    category: "Спектаклі",
    title: "Музика до спектаклю 'Пастка'",
    year: "1988",
    description: "Ансамбль п/к Ю. Шевченка",
    imageUrl: "/images/Пастка.jpg",
    videoUrl: "",
  },
  {
    id: "work92",
    category: "Радіовистави",
    title: "Музика до РадіоВистави 'По дорозі у казку'",
    year: "1989",
    description: "Ансамбль п/к Ю. Шевченка",
    imageUrl: "/images/По_дорозі_у_казку.jpg",
    videoUrl: "",
  },
  {
    id: "work93",
    category: "Радіовистави",
    title: "Музика до РадіоВистави 'Соло на флейті'",
    year: "1987",
    description: "Ансамбль п/к Ю. Шевченка",
    imageUrl: "/images/Соло_на_флейті.jpg",
    videoUrl: "",
  },
  {
    id: "work94",
    category: "Радіовистави",
    title: "Музика до РадіоВистави 'Сніг у Флоренції'",
    year: "1987",
    description: "Ансамбль п/к Ю. Шевченка",
    imageUrl: "/images/Сніг_у_Флоренції.jpg",
    videoUrl: "",
  },
  {
    id: "work95",
    category: "Радіовистави",
    title: "Музика до РадіоВистави 'Стіна'",
    year: "1989",
    description: "Ансамбль п/к Ю. Шевченка (синтезатори)",
    imageUrl: "/images/Стіна.jpg",
    videoUrl: "",
  },
];

export default worksData;
