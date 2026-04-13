
/*
  Sharp Star — Flashcard Data
  All emoji — no copyright issues, no broken images, instant loading.
*/

// Supported languages for TTS
export const LANGUAGES = [
  { code: "en-US", label: "English" },
  { code: "hi-IN", label: "Hindi" },
  { code: "es-ES", label: "Spanish" },
  { code: "zh-CN", label: "Chinese" },
  { code: "fr-FR", label: "French" },
  { code: "ru-RU", label: "Russian" },
];

const CATEGORIES = [
  {
    id: "animals",
    label: "Animals",
    emoji: "🐾",
    color: "from-amber-400 to-orange-500",
    cards: [
      { name: "Dog", image: null, display: "🐕",
        translations: {
          "en-US": "Dog", "es-ES": "Perro", "fr-FR": "Chien", "hi-IN": "कुत्ता", "zh-CN": "狗", "ru-RU": "Собака"
        }
      },
      { name: "Cat", image: null, display: "🐈",
        translations: {
          "en-US": "Cat", "es-ES": "Gato", "fr-FR": "Chat", "hi-IN": "बिल्ली", "zh-CN": "猫", "ru-RU": "Кошка"
        }
      },
      { name: "Elephant", image: null, display: "🐘",
        translations: {
          "en-US": "Elephant", "es-ES": "Elefante", "fr-FR": "Éléphant", "hi-IN": "हाथी", "zh-CN": "大象", "ru-RU": "Слон"
        }
      },
      { name: "Lion", image: null, display: "🦁",
        translations: {
          "en-US": "Lion", "es-ES": "León", "fr-FR": "Lion", "hi-IN": "सिंह", "zh-CN": "狮子", "ru-RU": "Лев"
        }
      },
      { name: "Horse", image: null, display: "🐎",
        translations: {
          "en-US": "Horse", "es-ES": "Caballo", "fr-FR": "Cheval", "hi-IN": "घोड़ा", "zh-CN": "马", "ru-RU": "Лошадь"
        }
      },
      { name: "Cow", image: null, display: "🐄",
        translations: {
          "en-US": "Cow", "es-ES": "Vaca", "fr-FR": "Vache", "hi-IN": "गाय", "zh-CN": "奶牛", "ru-RU": "Корова"
        }
      },
      { name: "Monkey", image: null, display: "🐒",
        translations: {
          "en-US": "Monkey", "es-ES": "Mono", "fr-FR": "Singe", "hi-IN": "बंदर", "zh-CN": "猴子", "ru-RU": "Обезьяна"
        }
      },
      { name: "Zebra", image: null, display: "🦓",
        translations: {
          "en-US": "Zebra", "es-ES": "Cebra", "fr-FR": "Zèbre", "hi-IN": "ज़ेब्रा", "zh-CN": "斑马", "ru-RU": "Зебра"
        }
      },
      { name: "Tiger", image: null, display: "🐅",
        translations: {
          "en-US": "Tiger", "es-ES": "Tigre", "fr-FR": "Tigre", "hi-IN": "बाघ", "zh-CN": "老虎", "ru-RU": "Тигр"
        }
      },
      { name: "Rabbit", image: null, display: "🐇",
        translations: {
          "en-US": "Rabbit", "es-ES": "Conejo", "fr-FR": "Lapin", "hi-IN": "खरगोश", "zh-CN": "兔子", "ru-RU": "Кролик"
        }
      },
      { name: "Giraffe", image: null, display: "🦒",
        translations: {
          "en-US": "Giraffe", "es-ES": "Jirafa", "fr-FR": "Girafe", "hi-IN": "जिराफ़", "zh-CN": "长颈鹿", "ru-RU": "Жираф"
        }
      },
      { name: "Bear", image: null, display: "🐻",
        translations: {
          "en-US": "Bear", "es-ES": "Oso", "fr-FR": "Ours", "hi-IN": "भालू", "zh-CN": "熊", "ru-RU": "Медведь"
        }
      },
      { name: "Deer", image: null, display: "🦌",
        translations: {
          "en-US": "Deer", "es-ES": "Ciervo", "fr-FR": "Cerf", "hi-IN": "हिरन", "ml-IN": "മാൻ", "zh-CN": "鹿", "ru-RU": "Олень"
        }
      },
      { name: "Pig", image: null, display: "🐷",
        translations: {
          "en-US": "Pig", "es-ES": "Cerdo", "fr-FR": "Cochon", "hi-IN": "सुअर", "ml-IN": "പന്നി", "zh-CN": "猪", "ru-RU": "Свинья"
        }
      },
      { name: "Sheep", image: null, display: "🐑",
        translations: {
          "en-US": "Sheep", "es-ES": "Oveja", "fr-FR": "Mouton", "hi-IN": "भेड़", "ml-IN": "ആട്", "zh-CN": "羊", "ru-RU": "Овца"
        }
      },
      { name: "Frog", image: null, display: "🐸",
        translations: {
          "en-US": "Frog", "es-ES": "Rana", "fr-FR": "Grenouille", "hi-IN": "मेंढक", "ml-IN": "തവള", "zh-CN": "青蛙", "ru-RU": "Лягушка"
        }
      },
      { name: "Turtle", image: null, display: "🐢",
        translations: {
          "en-US": "Turtle", "es-ES": "Tortuga", "fr-FR": "Tortue", "hi-IN": "कछुआ", "ml-IN": "ആമ", "zh-CN": "乌龟", "ru-RU": "Черепаха"
        }
      },
      { name: "Dolphin", image: null, display: "🐬",
        translations: {
          "en-US": "Dolphin", "es-ES": "Delfín", "fr-FR": "Dauphin", "hi-IN": "डॉल्फिन", "ml-IN": "ഡോൾഫിൻ", "zh-CN": "海豚", "ru-RU": "Дельфин"
        }
      },
      { name: "Whale", image: null, display: "🐋",
        translations: {
          "en-US": "Whale", "es-ES": "Ballena", "fr-FR": "Baleine", "hi-IN": "व्हेल", "ml-IN": "തിമിംഗലം", "zh-CN": "鲸鱼", "ru-RU": "Кит"
        }
      },
      { name: "Panda", image: null, display: "🐼",
        translations: {
          "en-US": "Panda", "es-ES": "Panda", "fr-FR": "Panda", "hi-IN": "पांडा", "ml-IN": "പാണ്ട", "zh-CN": "熊猫", "ru-RU": "Панда"
        }
      },
    ],
  },
  {
    id: "colors",
    label: "Colors",
    emoji: "🎨",
    color: "from-pink-400 to-purple-500",
    cards: [
      { name: "Red", image: null, hex: "#EF4444",
        translations: { "en-US": "Red", "ml-IN": "ചുവപ്പ്", "hi-IN": "लाल", "es-ES": "Rojo", "fr-FR": "Rouge", "zh-CN": "红色", "ru-RU": "Красный" }
      },
      { name: "Blue", image: null, hex: "#3B82F6",
        translations: { "en-US": "Blue", "ml-IN": "നീല", "hi-IN": "नीला", "es-ES": "Azul", "fr-FR": "Bleu", "zh-CN": "蓝色", "ru-RU": "Синий" }
      },
      { name: "Green", image: null, hex: "#22C55E",
        translations: { "en-US": "Green", "ml-IN": "പച്ച", "hi-IN": "हरा", "es-ES": "Verde", "fr-FR": "Vert", "zh-CN": "绿色", "ru-RU": "Зелёный" }
      },
      { name: "Yellow", image: null, hex: "#EAB308",
        translations: { "en-US": "Yellow", "ml-IN": "മഞ്ഞ", "hi-IN": "पीला", "es-ES": "Amarillo", "fr-FR": "Jaune", "zh-CN": "黄色", "ru-RU": "Жёлтый" }
      },
      { name: "Orange", image: null, hex: "#F97316",
        translations: { "en-US": "Orange", "ml-IN": "ഓറഞ്ച്", "hi-IN": "संतरा", "es-ES": "Naranja", "fr-FR": "Orange", "zh-CN": "橙色", "ru-RU": "Оранжевый" }
      },
      { name: "Purple", image: null, hex: "#A855F7",
        translations: { "en-US": "Purple", "ml-IN": "നല്ല", "hi-IN": "बैंगनी", "es-ES": "Morado", "fr-FR": "Violet", "zh-CN": "紫色", "ru-RU": "Фиолетовый" }
      },
      { name: "Pink", image: null, hex: "#EC4899",
        translations: { "en-US": "Pink", "ml-IN": "പിങ്ക്", "hi-IN": "गुलाबी", "es-ES": "Rosa", "fr-FR": "Rose", "zh-CN": "粉色", "ru-RU": "Розовый" }
      },
      { name: "Black", image: null, hex: "#1E293B",
        translations: { "en-US": "Black", "ml-IN": "കറുപ്പ്", "hi-IN": "काला", "es-ES": "Negro", "fr-FR": "Noir", "zh-CN": "黑色", "ru-RU": "Чёрный" }
      },
      { name: "White", image: null, hex: "#F8FAFC",
        translations: { "en-US": "White", "ml-IN": "വെള്ളി", "hi-IN": "सफेद", "es-ES": "Blanco", "fr-FR": "Blanc", "zh-CN": "白色", "ru-RU": "Белый" }
      },
      { name: "Brown", image: null, hex: "#92400E",
        translations: { "en-US": "Brown", "ml-IN": "ബ്രൗൺ", "hi-IN": "भूरा", "es-ES": "Marrón", "fr-FR": "Marron", "zh-CN": "棕色", "ru-RU": "Коричневый" }
      },
      { name: "Gray", image: null, hex: "#6B7280",
        translations: { "en-US": "Gray", "ml-IN": "ചാര", "hi-IN": "धूसर", "es-ES": "Gris", "fr-FR": "Gris", "zh-CN": "灰色", "ru-RU": "Серый" }
      },
      { name: "Cyan", image: null, hex: "#06B6D4",
        translations: { "en-US": "Cyan", "ml-IN": "സയാൻ", "hi-IN": "सियान", "es-ES": "Cian", "fr-FR": "Cyan", "zh-CN": "青色", "ru-RU": "Голубой" }
      },
      { name: "Lime", image: null, hex: "#84CC16",
        translations: { "en-US": "Lime", "ml-IN": "ചെറുനാരങ്ങ", "hi-IN": "नींबू", "es-ES": "Lima", "fr-FR": "Citron vert", "zh-CN": "酸橙", "ru-RU": "Лайм" }
      },
      { name: "Teal", image: null, hex: "#14B8A6",
        translations: { "en-US": "Teal", "ml-IN": "തവിട്ടുനീല", "hi-IN": "टील", "es-ES": "Verde azulado", "fr-FR": "Sarcelle", "zh-CN": "蓝绿色", "ru-RU": "Бирюзовый" }
      },
      { name: "Indigo", image: null, hex: "#6366F1",
        translations: { "en-US": "Indigo", "ml-IN": "ഇൻഡിഗോ", "hi-IN": "इंडिगो", "es-ES": "Índigo", "fr-FR": "Indigo", "zh-CN": "靛蓝色", "ru-RU": "Индиго" }
      },
      { name: "Maroon", image: null, hex: "#7F1D1D",
        translations: { "en-US": "Maroon", "ml-IN": "മറൂൺ", "hi-IN": "गहरा लाल", "es-ES": "Granate", "fr-FR": "Bordeaux", "zh-CN": "栗色", "ru-RU": "Бордовый" }
      },
      { name: "Navy", image: null, hex: "#1E3A5F",
        translations: { "en-US": "Navy", "ml-IN": "നേവി നീല", "hi-IN": "नेवी", "es-ES": "Azul marino", "fr-FR": "Bleu marine", "zh-CN": "藏青色", "ru-RU": "Тёмно-синий" }
      },
      { name: "Gold", image: null, hex: "#D4A017",
        translations: { "en-US": "Gold", "ml-IN": "സ്വർണം", "hi-IN": "सोना", "es-ES": "Oro", "fr-FR": "Or", "zh-CN": "金色", "ru-RU": "Золотой" }
      },
      { name: "Silver", image: null, hex: "#C0C0C0",
        translations: { "en-US": "Silver", "ml-IN": "വെള്ളി", "hi-IN": "चांदी", "es-ES": "Plata", "fr-FR": "Argent", "zh-CN": "银色", "ru-RU": "Серебряный" }
      },
      { name: "Violet", image: null, hex: "#8B5CF6",
        translations: { "en-US": "Violet", "ml-IN": "വയലറ്റ്", "hi-IN": "बैंगनी", "es-ES": "Violeta", "fr-FR": "Violette", "zh-CN": "紫罗兰色", "ru-RU": "Фиалковый" }
      },
    ],
  },
  {
    id: "shapes",
    label: "Shapes",
    emoji: "🔷",
    color: "from-cyan-400 to-blue-500",
    cards: [
      { name: "Circle", image: null, shape: "circle",
        translations: { "en-US": "Circle", "ml-IN": "വൃത്തം", "hi-IN": "वृत्त", "es-ES": "Círculo", "fr-FR": "Cercle", "zh-CN": "圆形", "ru-RU": "Круг" }
      },
      { name: "Square", image: null, shape: "square",
        translations: { "en-US": "Square", "ml-IN": "ചതുരം", "hi-IN": "वर्ग", "es-ES": "Cuadrado", "fr-FR": "Carré", "zh-CN": "正方形", "ru-RU": "Квадрат" }
      },
      { name: "Triangle", image: null, shape: "triangle",
        translations: { "en-US": "Triangle", "ml-IN": "ത്രികോണം", "hi-IN": "त्रिभुज", "es-ES": "Triángulo", "fr-FR": "Triangle", "zh-CN": "三角形", "ru-RU": "Треугольник" }
      },
      { name: "Star", image: null, shape: "star",
        translations: { "en-US": "Star", "ml-IN": "നക്ഷത്രം", "hi-IN": "तारा", "es-ES": "Estrella", "fr-FR": "Étoile", "zh-CN": "星形", "ru-RU": "Звезда" }
      },
      { name: "Heart", image: null, shape: "heart",
        translations: { "en-US": "Heart", "ml-IN": "ഹൃദയം", "hi-IN": "दिल", "es-ES": "Corazón", "fr-FR": "Cœur", "zh-CN": "心形", "ru-RU": "Сердце" }
      },
      { name: "Diamond", image: null, shape: "diamond",
        translations: { "en-US": "Diamond", "ml-IN": "വജ്രം", "hi-IN": "हीरा", "es-ES": "Diamante", "fr-FR": "Losange", "zh-CN": "菱形", "ru-RU": "Ромб" }
      },
      { name: "Oval", image: null, display: "⬮", bigLetter: true,
        translations: { "en-US": "Oval", "ml-IN": "അണ്ഡാകാരം", "hi-IN": "अंडाकार", "es-ES": "Óvalo", "fr-FR": "Ovale", "zh-CN": "椭圆形", "ru-RU": "Овал" }
      },
      { name: "Rectangle", image: null, display: "▬", bigLetter: true,
        translations: { "en-US": "Rectangle", "ml-IN": "ദീർഘചതുരം", "hi-IN": "आयत", "es-ES": "Rectángulo", "fr-FR": "Rectangle", "zh-CN": "长方形", "ru-RU": "Прямоугольник" }
      },
      { name: "Pentagon", image: null, display: "⬠", bigLetter: true,
        translations: { "en-US": "Pentagon", "ml-IN": "പഞ്ചഭുജം", "hi-IN": "पंचभुज", "es-ES": "Pentágono", "fr-FR": "Pentagone", "zh-CN": "五边形", "ru-RU": "Пятиугольник" }
      },
      { name: "Hexagon", image: null, display: "⬡", bigLetter: true,
        translations: { "en-US": "Hexagon", "ml-IN": "ഷഡ്ഭുജം", "hi-IN": "षट्भुज", "es-ES": "Hexágono", "fr-FR": "Hexagone", "zh-CN": "六边形", "ru-RU": "Шестиугольник" }
      },
      { name: "Arrow", image: null, display: "➤", bigLetter: true,
        translations: { "en-US": "Arrow", "ml-IN": "അമ്പ്", "hi-IN": "तीर", "es-ES": "Flecha", "fr-FR": "Flèche", "zh-CN": "箭头", "ru-RU": "Стрела" }
      },
      { name: "Cross", image: null, display: "✚", bigLetter: true,
        translations: { "en-US": "Cross", "ml-IN": "ക്രോസ്", "hi-IN": "क्रॉस", "es-ES": "Cruz", "fr-FR": "Croix", "zh-CN": "十字形", "ru-RU": "Крест" }
      },
      { name: "Crescent", image: null, display: "🌙",
        translations: { "en-US": "Crescent", "ml-IN": "അർദ്ധചന്ദ്രം", "hi-IN": "अर्धचंद्र", "es-ES": "Creciente", "fr-FR": "Croissant", "zh-CN": "新月形", "ru-RU": "Полумесяц" }
      },
      { name: "Cube", image: null, display: "🧊",
        translations: { "en-US": "Cube", "ml-IN": "ഘനം", "hi-IN": "घन", "es-ES": "Cubo", "fr-FR": "Cube", "zh-CN": "立方体", "ru-RU": "Куб" }
      },
      { name: "Cone", image: null, display: "📐",
        translations: { "en-US": "Cone", "ml-IN": "ശങ്കു", "hi-IN": "शंकु", "es-ES": "Cono", "fr-FR": "Cône", "zh-CN": "圆锥体", "ru-RU": "Конус" }
      },
      { name: "Sphere", image: null, display: "🔮",
        translations: { "en-US": "Sphere", "ml-IN": "ഗോളകം", "hi-IN": "गोला", "es-ES": "Esfera", "fr-FR": "Sphère", "zh-CN": "球体", "ru-RU": "Сфера" }
      },
      { name: "Cylinder", image: null, display: "🥫",
        translations: { "en-US": "Cylinder", "ml-IN": "സിലിണ്ടർ", "hi-IN": "बेलन", "es-ES": "Cilindro", "fr-FR": "Cylindre", "zh-CN": "圆柱体", "ru-RU": "Цилиндр" }
      },
      { name: "Ring", image: null, display: "💍",
        translations: { "en-US": "Ring", "ml-IN": "മുടിയാണി", "hi-IN": "अंगूठी", "es-ES": "Anillo", "fr-FR": "Anneau", "zh-CN": "环形", "ru-RU": "Кольцо" }
      },
      { name: "Spiral", image: null, display: "🌀",
        translations: { "en-US": "Spiral", "ml-IN": "സപ്തവാതം", "hi-IN": "सर्पिल", "es-ES": "Espiral", "fr-FR": "Spirale", "zh-CN": "螺旋形", "ru-RU": "Спираль" }
      },
      { name: "Cloud", image: null, display: "☁️",
        translations: { "en-US": "Cloud", "ml-IN": "മേഘം", "hi-IN": "बादल", "es-ES": "Nube", "fr-FR": "Nuage", "zh-CN": "云", "ru-RU": "Облако" }
      },
    ],
  },
  {
    id: "family",
    label: "Family",
    emoji: "👨‍👩‍👧‍👦",
    color: "from-rose-400 to-orange-400",
    cards: [
      { name: "Mommy", image: null, display: "👩",
        translations: { "en-US": "Mommy", "ml-IN": "അമ്മ", "hi-IN": "माँ", "es-ES": "Mamá", "fr-FR": "Maman", "zh-CN": "妈妈", "ru-RU": "Мама" }
      },
      { name: "Daddy", image: null, display: "👨",
        translations: { "en-US": "Daddy", "ml-IN": "അച്ഛൻ", "hi-IN": "पापा", "es-ES": "Papá", "fr-FR": "Papa", "zh-CN": "爸爸", "ru-RU": "Папа" }
      },
      { name: "Baby", image: null, display: "👶",
        translations: { "en-US": "Baby", "ml-IN": "കുഞ്ഞ്", "hi-IN": "बच्चा", "es-ES": "Bebé", "fr-FR": "Bébé", "zh-CN": "婴儿", "ru-RU": "Малыш" }
      },
      { name: "Sister", image: null, display: "👧",
        translations: { "en-US": "Sister", "ml-IN": "ചെറിയ സഹോദരി", "hi-IN": "बहन", "es-ES": "Hermana", "fr-FR": "Sœur", "zh-CN": "姐妹", "ru-RU": "Сестра" }
      },
      { name: "Brother", image: null, display: "👦",
        translations: { "en-US": "Brother", "ml-IN": "ചെറിയ സഹോദരൻ", "hi-IN": "भाई", "es-ES": "Hermano", "fr-FR": "Frère", "zh-CN": "兄弟", "ru-RU": "Брат" }
      },
      { name: "Grandma", image: null, display: "👵",
        translations: { "en-US": "Grandma", "ml-IN": "വളിയമ്മ", "hi-IN": "दादी/नानी", "es-ES": "Abuela", "fr-FR": "Grand-mère", "zh-CN": "奶奶", "ru-RU": "Бабушка" }
      },
      { name: "Grandpa", image: null, display: "👴",
        translations: { "en-US": "Grandpa", "ml-IN": "വളിയച്ഛൻ", "hi-IN": "दादा/नाना", "es-ES": "Abuelo", "fr-FR": "Grand-père", "zh-CN": "爷爷", "ru-RU": "Дедушка" }
      },
      { name: "Aunt", image: null, display: "👩‍🦰",
        translations: { "en-US": "Aunt", "ml-IN": "അമ്മായി", "hi-IN": "चाची/मौसी", "es-ES": "Tía", "fr-FR": "Tante", "zh-CN": "阿姨", "ru-RU": "Тётя" }
      },
      { name: "Uncle", image: null, display: "👨‍🦱",
        translations: { "en-US": "Uncle", "ml-IN": "മാമൻ", "hi-IN": "चाचा/मामा", "es-ES": "Tío", "fr-FR": "Oncle", "zh-CN": "叔叔", "ru-RU": "Дядя" }
      },
      { name: "Cousin", image: null, display: "🧒",
        translations: { "en-US": "Cousin", "ml-IN": "ചേട്ടൻ/ചെച്ചി", "hi-IN": "चचेरा/ममेरा भाई/बहन", "es-ES": "Primo/Prima", "fr-FR": "Cousin/Cousine", "zh-CN": "堂兄弟姐妹", "ru-RU": "Кузен/Кузина" }
      },
      { name: "Family", image: null, display: "👨‍👩‍👧‍👦",
        translations: { "en-US": "Family", "ml-IN": "കുടുംബം", "hi-IN": "परिवार", "es-ES": "Familia", "fr-FR": "Famille", "zh-CN": "家庭", "ru-RU": "Семья" }
      },
      { name: "Mom and Baby", image: null, display: "🤱",
        translations: { "en-US": "Mom and Baby", "ml-IN": "അമ്മയും കുഞ്ഞും", "hi-IN": "माँ और बच्चा", "es-ES": "Mamá y bebé", "fr-FR": "Maman et bébé", "zh-CN": "妈妈和宝宝", "ru-RU": "Мама и малыш" }
      },
      { name: "Twins", image: null, display: "👯",
        translations: { "en-US": "Twins", "ml-IN": "ഇരട്ടകൾ", "hi-IN": "जुड़वाँ", "es-ES": "Gemelos", "fr-FR": "Jumeaux", "zh-CN": "双胞胎", "ru-RU": "Близнецы" }
      },
      { name: "Boy", image: null, display: "👦🏽",
        translations: { "en-US": "Boy", "ml-IN": "കുട്ടി", "hi-IN": "लड़का", "es-ES": "Niño", "fr-FR": "Garçon", "zh-CN": "男孩", "ru-RU": "Мальчик" }
      },
      { name: "Girl", image: null, display: "👧🏽",
        translations: { "en-US": "Girl", "ml-IN": "പെൺകുട്ടി", "hi-IN": "लड़की", "es-ES": "Niña", "fr-FR": "Fille", "zh-CN": "女孩", "ru-RU": "Девочка" }
      },
      { name: "Man", image: null, display: "👨🏽",
        translations: { "en-US": "Man", "ml-IN": "പുരുഷൻ", "hi-IN": "आदमी", "es-ES": "Hombre", "fr-FR": "Homme", "zh-CN": "男人", "ru-RU": "Мужчина" }
      },
      { name: "Woman", image: null, display: "👩🏽",
        translations: { "en-US": "Woman", "ml-IN": "സ്ത്രീ", "hi-IN": "औरत", "es-ES": "Mujer", "fr-FR": "Femme", "zh-CN": "女人", "ru-RU": "Женщина" }
      },
      { name: "Old Man", image: null, display: "👴🏽",
        translations: { "en-US": "Old Man", "ml-IN": "വൃദ്ധൻ", "hi-IN": "बूढ़ा आदमी", "es-ES": "Anciano", "fr-FR": "Vieil homme", "zh-CN": "老人", "ru-RU": "Старик" }
      },
      { name: "Old Woman", image: null, display: "👵🏽",
        translations: { "en-US": "Old Woman", "ml-IN": "വൃദ്ധ സ്ത്രീ", "hi-IN": "बूढ़ी औरत", "es-ES": "Anciana", "fr-FR": "Vieille femme", "zh-CN": "老妇人", "ru-RU": "Старуха" }
      },
      { name: "People", image: null, display: "👫",
        translations: { "en-US": "People", "ml-IN": "ജനങ്ങൾ", "hi-IN": "लोग", "es-ES": "Gente", "fr-FR": "Gens", "zh-CN": "人们", "ru-RU": "Люди" }
      },
    ],
  },
  {
    id: "fruits",
    label: "Fruits",
    emoji: "🍎",
    color: "from-green-400 to-emerald-500",
    cards: [
      { name: "Apple", image: null, display: "🍎",
        translations: { "en-US": "Apple", "ml-IN": "ആപ്പിൾ", "hi-IN": "सेब", "es-ES": "Manzana", "fr-FR": "Pomme", "zh-CN": "苹果", "ru-RU": "Яблоко" }
      },
      { name: "Banana", image: null, display: "🍌",
        translations: { "en-US": "Banana", "ml-IN": "വാഴപ്പഴം", "hi-IN": "केला", "es-ES": "Plátano", "fr-FR": "Banane", "zh-CN": "香蕉", "ru-RU": "Банан" }
      },
      { name: "Orange", image: null, display: "🍊",
        translations: { "en-US": "Orange", "ml-IN": "ഓറഞ്ച്", "hi-IN": "संतरा", "es-ES": "Naranja", "fr-FR": "Orange", "zh-CN": "橙子", "ru-RU": "Апельсин" }
      },
      { name: "Grapes", image: null, display: "🍇",
        translations: { "en-US": "Grapes", "ml-IN": "മുന്തിരി", "hi-IN": "अंगूर", "es-ES": "Uvas", "fr-FR": "Raisin", "zh-CN": "葡萄", "ru-RU": "Виноград" }
      },
      { name: "Strawberry", image: null, display: "🍓",
        translations: { "en-US": "Strawberry", "ml-IN": "സ്ട്രോബെറി", "hi-IN": "स्ट्रॉबेरी", "es-ES": "Fresa", "fr-FR": "Fraise", "zh-CN": "草莓", "ru-RU": "Клубника" }
      },
      { name: "Watermelon", image: null, display: "🍉",
        translations: { "en-US": "Watermelon", "ml-IN": "തണ്ണിമത്തൻ", "hi-IN": "तरबूज", "es-ES": "Sandía", "fr-FR": "Pastèque", "zh-CN": "西瓜", "ru-RU": "Арбуз" }
      },
      { name: "Mango", image: null, display: "🥭",
        translations: { "en-US": "Mango", "ml-IN": "മാങ്ങ", "hi-IN": "आम", "es-ES": "Mango", "fr-FR": "Mangue", "zh-CN": "芒果", "ru-RU": "Манго" }
      },
      { name: "Pineapple", image: null, display: "🍍",
        translations: { "en-US": "Pineapple", "ml-IN": "അന്നാനസ്", "hi-IN": "अनानास", "es-ES": "Piña", "fr-FR": "Ananas", "zh-CN": "菠萝", "ru-RU": "Ананас" }
      },
      { name: "Cherry", image: null, display: "🍒",
        translations: { "en-US": "Cherry", "ml-IN": "ചെറി", "hi-IN": "चेरी", "es-ES": "Cereza", "fr-FR": "Cerise", "zh-CN": "樱桃", "ru-RU": "Вишня" }
      },
      { name: "Lemon", image: null, display: "🍋",
        translations: { "en-US": "Lemon", "ml-IN": "നാരങ്ങ", "hi-IN": "नींबू", "es-ES": "Limón", "fr-FR": "Citron", "zh-CN": "柠檬", "ru-RU": "Лимон" }
      },
      { name: "Peach", image: null, display: "🍑",
        translations: { "en-US": "Peach", "ml-IN": "പീച്ച്", "hi-IN": "आड़ू", "es-ES": "Melocotón", "fr-FR": "Pêche", "zh-CN": "桃子", "ru-RU": "Персик" }
      },
      { name: "Pear", image: null, display: "🍐",
        translations: { "en-US": "Pear", "ml-IN": "സബര്ജില്ലി", "hi-IN": "नाशपाती", "es-ES": "Pera", "fr-FR": "Poire", "zh-CN": "梨", "ru-RU": "Груша" }
      },
      { name: "Coconut", image: null, display: "🥥",
        translations: { "en-US": "Coconut", "ml-IN": "തേങ്ങ", "hi-IN": "नारियल", "es-ES": "Coco", "fr-FR": "Noix de coco", "zh-CN": "椰子", "ru-RU": "Кокос" }
      },
      { name: "Kiwi", image: null, display: "🥝",
        translations: { "en-US": "Kiwi", "ml-IN": "കിവി", "hi-IN": "कीवी", "es-ES": "Kiwi", "fr-FR": "Kiwi", "zh-CN": "猕猴桃", "ru-RU": "Киви" }
      },
      { name: "Blueberry", image: null, display: "🫐",
        translations: { "en-US": "Blueberry", "ml-IN": "നീലച്ചെറി", "hi-IN": "नीलबदरी", "es-ES": "Arándano", "fr-FR": "Myrtille", "zh-CN": "蓝莓", "ru-RU": "Черника" }
      },
      { name: "Melon", image: null, display: "🍈",
        translations: { "en-US": "Melon", "ml-IN": "മതങ്ങ", "hi-IN": "खरबूजा", "es-ES": "Melón", "fr-FR": "Melon", "zh-CN": "甜瓜", "ru-RU": "Дыня" }
      },
      { name: "Plum", image: null, display: "🫐",
        translations: { "en-US": "Plum", "ml-IN": "പ്ലം", "hi-IN": "आलूबुखारा", "es-ES": "Ciruela", "fr-FR": "Prune", "zh-CN": "李子", "ru-RU": "Слива" }
      },
      { name: "Avocado", image: null, display: "🥑",
        translations: { "en-US": "Avocado", "ml-IN": "അവോകാഡോ", "hi-IN": "एवोकाडो", "es-ES": "Aguacate", "fr-FR": "Avocat", "zh-CN": "鳄梨", "ru-RU": "Авокадо" }
      },
      { name: "Tomato", image: null, display: "🍅",
        translations: { "en-US": "Tomato", "ml-IN": "തക്കാളി", "hi-IN": "टमाटर", "es-ES": "Tomate", "fr-FR": "Tomate", "zh-CN": "西红柿", "ru-RU": "Помидор" }
      },
      { name: "Olive", image: null, display: "🫒",
        translations: { "en-US": "Olive", "ml-IN": "ഓലീവ്", "hi-IN": "जैतून", "es-ES": "Aceituna", "fr-FR": "Olive", "zh-CN": "橄榄", "ru-RU": "Оливка" }
      },
    ],
  },
  {
    id: "baby-animals",
    label: "Baby Animals",
    emoji: "🐣",
    color: "from-yellow-300 to-amber-400",
    cards: [
      { name: "Puppy", image: null, display: "🐶",
        translations: { "en-US": "Puppy", "ml-IN": "പപ്പി", "hi-IN": "पिल्ला", "es-ES": "Cachorro", "fr-FR": "Chiot", "zh-CN": "小狗", "ru-RU": "Щенок" }
      },
      { name: "Kitten", image: null, display: "🐱",
        translations: { "en-US": "Kitten", "ml-IN": "കിറ്റൻ", "hi-IN": "बिल्ली का बच्चा", "es-ES": "Gatito", "fr-FR": "Chaton", "zh-CN": "小猫", "ru-RU": "Котёнок" }
      },
      { name: "Chick", image: null, display: "🐤",
        translations: { "en-US": "Chick", "ml-IN": "കുഞ്ഞ് കോഴി", "hi-IN": "चूजा", "es-ES": "Pollito", "fr-FR": "Poussin", "zh-CN": "小鸡", "ru-RU": "Цыплёнок" }
      },
      { name: "Duckling", image: null, display: "🦆",
        translations: { "en-US": "Duckling", "ml-IN": "കുഞ്ഞ് താറാവ്", "hi-IN": "बतख का बच्चा", "es-ES": "Patito", "fr-FR": "Caneton", "zh-CN": "小鸭子", "ru-RU": "Утенок" }
      },
      { name: "Lamb", image: null, display: "🐑",
        translations: { "en-US": "Lamb", "ml-IN": "കുഞ്ഞ് ആട്", "hi-IN": "मेमना", "es-ES": "Cordero", "fr-FR": "Agneau", "zh-CN": "小羊", "ru-RU": "Ягнёнок" }
      },
      { name: "Calf", image: null, display: "🐄",
        translations: { "en-US": "Calf", "ml-IN": "കാളക്കുട്ടി", "hi-IN": "बछड़ा", "es-ES": "Ternero", "fr-FR": "Veau", "zh-CN": "小牛", "ru-RU": "Теленок" }
      },
      { name: "Foal", image: null, display: "🐴",
        translations: { "en-US": "Foal", "ml-IN": "കുതിരക്കുട്ടി", "hi-IN": "घोड़े का बच्चा", "es-ES": "Potro", "fr-FR": "Poulain", "zh-CN": "小马驹", "ru-RU": "Жеребёнок" }
      },
      { name: "Piglet", image: null, display: "🐷",
        translations: { "en-US": "Piglet", "ml-IN": "പന്നിക്കുട്ടി", "hi-IN": "सूअर का बच्चा", "es-ES": "Cochinillo", "fr-FR": "Porcelet", "zh-CN": "小猪", "ru-RU": "Поросёнок" }
      },
      { name: "Cub", image: null, display: "🐻",
        translations: { "en-US": "Cub", "ml-IN": "കുട്ടി കരടി", "hi-IN": "शावक", "es-ES": "Cachorro", "fr-FR": "Ourson", "zh-CN": "幼崽", "ru-RU": "Детёныш" }
      },
      { name: "Joey", image: null, display: "🦘",
        translations: { "en-US": "Joey", "ml-IN": "കംഗാരുക്കുട്ടി", "hi-IN": "कंगारू का बच्चा", "es-ES": "Cangurito", "fr-FR": "Bébé kangourou", "zh-CN": "小袋鼠", "ru-RU": "Детёныш кенгуру" }
      },
      { name: "Fawn", image: null, display: "🦌",
        translations: { "en-US": "Fawn", "ml-IN": "കുറിഞ്ഞ്", "hi-IN": "हरिण का बच्चा", "es-ES": "Cervatillo", "fr-FR": "Faon", "zh-CN": "小鹿", "ru-RU": "Оленёнок" }
      },
      { name: "Tadpole", image: null, display: "🐸",
        translations: { "en-US": "Tadpole", "ml-IN": "തവളക്കുഞ്ഞ്", "hi-IN": "मेंढक का बच्चा", "es-ES": "Renacuajo", "fr-FR": "Têtard", "zh-CN": "蝌蚪", "ru-RU": "Головастик" }
      },
      { name: "Bunny", image: null, display: "🐰",
        translations: { "en-US": "Bunny", "ml-IN": "ബണ്ണി", "hi-IN": "खरगोश का बच्चा", "es-ES": "Conejito", "fr-FR": "Lapereau", "zh-CN": "小兔子", "ru-RU": "Крольчонок" }
      },
      { name: "Baby Owl", image: null, display: "🦉",
        translations: { "en-US": "Baby Owl", "ml-IN": "കുഞ്ഞ് ആന്ത്", "hi-IN": "उल्लू का बच्चा", "es-ES": "Búho bebé", "fr-FR": "Bébé hibou", "zh-CN": "小猫头鹰", "ru-RU": "Птенец совы" }
      },
      { name: "Baby Penguin", image: null, display: "🐧",
        translations: { "en-US": "Baby Penguin", "ml-IN": "കുഞ്ഞ് പെൻഗ്വിൻ", "hi-IN": "पेंगुइन का बच्चा", "es-ES": "Pingüinito", "fr-FR": "Bébé manchot", "zh-CN": "小企鹅", "ru-RU": "Птенец пингвина" }
      },
      { name: "Baby Monkey", image: null, display: "🐒",
        translations: { "en-US": "Baby Monkey", "ml-IN": "കുഞ്ഞ് കുരങ്ങ്", "hi-IN": "बंदर का बच्चा", "es-ES": "Monito", "fr-FR": "Bébé singe", "zh-CN": "小猴子", "ru-RU": "Детёныш обезьяны" }
      },
      { name: "Baby Elephant", image: null, display: "🐘",
        translations: { "en-US": "Baby Elephant", "ml-IN": "ആനക്കുട്ടി", "hi-IN": "हाथी का बच्चा", "es-ES": "Elefantito", "fr-FR": "Bébé éléphant", "zh-CN": "小象", "ru-RU": "Слонёнок" }
      },
      { name: "Baby Giraffe", image: null, display: "🦒",
        translations: { "en-US": "Baby Giraffe", "ml-IN": "ജിറാഫ് കുഞ്ഞ്", "hi-IN": "जिराफ़ का बच्चा", "es-ES": "Jirafita", "fr-FR": "Bébé girafe", "zh-CN": "小长颈鹿", "ru-RU": "Детёныш жирафа" }
      },
      { name: "Baby Panda", image: null, display: "🐼",
        translations: { "en-US": "Baby Panda", "ml-IN": "കുഞ്ഞ് പാണ്ട", "hi-IN": "पांडा का बच्चा", "es-ES": "Panda bebé", "fr-FR": "Bébé panda", "zh-CN": "小熊猫", "ru-RU": "Пандёнок" }
      },
      { name: "Baby Turtle", image: null, display: "🐢",
        translations: { "en-US": "Baby Turtle", "ml-IN": "കുഞ്ഞ് ആമ", "hi-IN": "कछुए का बच्चा", "es-ES": "Tortuguita", "fr-FR": "Bébé tortue", "zh-CN": "小乌龟", "ru-RU": "Черепашонок" }
      },
    ],
  },
  {
    id: "birds",
    label: "Birds",
    emoji: "🦅",
    color: "from-sky-400 to-indigo-500",
    cards: [
      { name: "Eagle", image: null, display: "🦅",
        translations: { "en-US": "Eagle", "ml-IN": "പരുന്ത്", "hi-IN": "गरुड़", "es-ES": "Águila", "fr-FR": "Aigle", "zh-CN": "鹰", "ru-RU": "Орел" }
      },
      { name: "Parrot", image: null, display: "🦜",
        translations: { "en-US": "Parrot", "ml-IN": "തത്ത", "hi-IN": "तोता", "es-ES": "Loro", "fr-FR": "Perroquet", "zh-CN": "鹦鹉", "ru-RU": "Попугай" }
      },
      { name: "Owl", image: null, display: "🦉",
        translations: { "en-US": "Owl", "ml-IN": "ആന്ത്", "hi-IN": "उल्लू", "es-ES": "Búho", "fr-FR": "Hibou", "zh-CN": "猫头鹰", "ru-RU": "Сова" }
      },
      { name: "Penguin", image: null, display: "🐧",
        translations: { "en-US": "Penguin", "ml-IN": "പെൻഗ്വിൻ", "hi-IN": "पेंगुइन", "es-ES": "Pingüino", "fr-FR": "Manchot", "zh-CN": "企鹅", "ru-RU": "Пингвин" }
      },
      { name: "Flamingo", image: null, display: "🦩",
        translations: { "en-US": "Flamingo", "ml-IN": "ഫ്ലമിംഗോ", "hi-IN": "फ्लेमिंगो", "es-ES": "Flamenco", "fr-FR": "Flamant", "zh-CN": "火烈鸟", "ru-RU": "Фламинго" }
      },
      { name: "Peacock", image: null, display: "🦚",
        translations: { "en-US": "Peacock", "ml-IN": "മയിൽ", "hi-IN": "मोर", "es-ES": "Pavo real", "fr-FR": "Paon", "zh-CN": "孔雀", "ru-RU": "Павлин" }
      },
      { name: "Duck", image: null, display: "🦆",
        translations: { "en-US": "Duck", "ml-IN": "താറാവ്", "hi-IN": "बतख", "es-ES": "Pato", "fr-FR": "Canard", "zh-CN": "鸭子", "ru-RU": "Утка" }
      },
      { name: "Swan", image: null, display: "🦢",
        translations: { "en-US": "Swan", "ml-IN": "ഹംസ", "hi-IN": "हंस", "es-ES": "Cisne", "fr-FR": "Cygne", "zh-CN": "天鹅", "ru-RU": "Лебедь" }
      },
      { name: "Chicken", image: null, display: "🐔",
        translations: { "en-US": "Chicken", "ml-IN": "കോഴി", "hi-IN": "मुर्गी", "es-ES": "Gallina", "fr-FR": "Poule", "zh-CN": "母鸡", "ru-RU": "Курица" }
      },
      { name: "Rooster", image: null, display: "🐓",
        translations: { "en-US": "Rooster", "ml-IN": "കഴി", "hi-IN": "मुर्गा", "es-ES": "Gallo", "fr-FR": "Coq", "zh-CN": "公鸡", "ru-RU": "Петух" }
      },
      { name: "Turkey", image: null, display: "🦃",
        translations: { "en-US": "Turkey", "ml-IN": "ടർക്കി", "hi-IN": "टर्की", "es-ES": "Pavo", "fr-FR": "Dinde", "zh-CN": "火鸡", "ru-RU": "Индейка" }
      },
      { name: "Dove", image: null, display: "🕊️",
        translations: { "en-US": "Dove", "ml-IN": "പ്രാവ്", "hi-IN": "कबूतर", "es-ES": "Paloma", "fr-FR": "Colombe", "zh-CN": "鸽子", "ru-RU": "Голубь" }
      },
      { name: "Robin", image: null, display: "🐦",
        translations: { "en-US": "Robin", "ml-IN": "റോബിൻ പക്ഷി", "hi-IN": "रॉबिन", "es-ES": "Petirrojo", "fr-FR": "Rouge-gorge", "zh-CN": "知更鸟", "ru-RU": "Малиновка" }
      },
      { name: "Crow", image: null, display: "🐦‍⬛",
        translations: { "en-US": "Crow", "ml-IN": "കാക്ക", "hi-IN": "कौआ", "es-ES": "Cuervo", "fr-FR": "Corbeau", "zh-CN": "乌鸦", "ru-RU": "Ворона" }
      },
      { name: "Hummingbird", image: null, display: "🐦",
        translations: { "en-US": "Hummingbird", "ml-IN": "ഹമ്മിംഗ് ബേർഡ്", "hi-IN": "हमिंगबर्ड", "es-ES": "Colibrí", "fr-FR": "Colibri", "zh-CN": "蜂鸟", "ru-RU": "Колибри" }
      },
      { name: "Sparrow", image: null, display: "🐦",
        translations: { "en-US": "Sparrow", "ml-IN": "ചിറക്", "hi-IN": "गौरैया", "es-ES": "Gorrión", "fr-FR": "Moineau", "zh-CN": "麻雀", "ru-RU": "Воробей" }
      },
      { name: "Pigeon", image: null, display: "🕊️",
        translations: { "en-US": "Pigeon", "ml-IN": "പ്രാവ്", "hi-IN": "कबूतर", "es-ES": "Paloma", "fr-FR": "Pigeon", "zh-CN": "鸽子", "ru-RU": "Голубь" }
      },
      { name: "Pelican", image: null, display: "🦅",
        translations: { "en-US": "Pelican", "ml-IN": "പെലിക്കാൻ", "hi-IN": "पेलिकन", "es-ES": "Pelícano", "fr-FR": "Pélican", "zh-CN": "鹈鹕", "ru-RU": "Пеликан" }
      },
      { name: "Stork", image: null, display: "🦩",
        translations: { "en-US": "Stork", "ml-IN": "നാര", "hi-IN": "सारस", "es-ES": "Cigüeña", "fr-FR": "Cigogne", "zh-CN": "鹳", "ru-RU": "Аист" }
      },
      { name: "Woodpecker", image: null, display: "🪶",
        translations: { "en-US": "Woodpecker", "ml-IN": "മരമൊട്ടിക്കുരുവി", "hi-IN": "कठफोड़वा", "es-ES": "Pájaro carpintero", "fr-FR": "Pic", "zh-CN": "啄木鸟", "ru-RU": "Дятел" }
      },
    ],
  },
  {
    id: "playground",
    label: "Playground",
    emoji: "🛝",
    color: "from-lime-400 to-green-500",
    cards: [
      { name: "Slide", image: null, display: "🛝",
        translations: { "en-US": "Slide", "ml-IN": "സ്ലൈഡ്", "hi-IN": "फिसलपट्टी", "es-ES": "Tobogán", "fr-FR": "Toboggan", "zh-CN": "滑梯", "ru-RU": "Горка" }
      },
      { name: "Swing", image: null, display: "🎠",
        translations: { "en-US": "Swing", "ml-IN": "ഓലക്കൊലു", "hi-IN": "झूला", "es-ES": "Columpio", "fr-FR": "Balançoire", "zh-CN": "秋千", "ru-RU": "Качели" }
      },
      { name: "Ball", image: null, display: "⚽",
        translations: { "en-US": "Ball", "ml-IN": "ബോൾ", "hi-IN": "गेंद", "es-ES": "Pelota", "fr-FR": "Balle", "zh-CN": "球", "ru-RU": "Мяч" }
      },
      { name: "Bicycle", image: null, display: "🚲",
        translations: { "en-US": "Bicycle", "ml-IN": "സൈക്കിൾ", "hi-IN": "साइकिल", "es-ES": "Bicicleta", "fr-FR": "Vélo", "zh-CN": "自行车", "ru-RU": "Велосипед" }
      },
      { name: "Kite", image: null, display: "🪁",
        translations: { "en-US": "Kite", "ml-IN": "പതാക", "hi-IN": "पतंग", "es-ES": "Cometa", "fr-FR": "Cerf-volant", "zh-CN": "风筝", "ru-RU": "Воздушный змей" }
      },
      { name: "Jump Rope", image: null, display: "🤸",
        translations: { "en-US": "Jump Rope", "ml-IN": "കയറാട്ടം", "hi-IN": "कूदने की रस्सी", "es-ES": "Cuerda de saltar", "fr-FR": "Corde à sauter", "zh-CN": "跳绳", "ru-RU": "Скакалка" }
      },
      { name: "Sandbox", image: null, display: "🏖️",
        translations: { "en-US": "Sandbox", "ml-IN": "മണൽപൊതി", "hi-IN": "बालू का डिब्बा", "es-ES": "Arenero", "fr-FR": "Bac à sable", "zh-CN": "沙箱", "ru-RU": "Песочница" }
      },
      { name: "See Saw", image: null, display: "⚖️",
        translations: { "en-US": "See Saw", "ml-IN": "തുലാവാരം", "hi-IN": "सी-सॉ", "es-ES": "Subibaja", "fr-FR": "Bascule", "zh-CN": "跷跷板", "ru-RU": "Качели-балансир" }
      },
      { name: "Frisbee", image: null, display: "🥏",
        translations: { "en-US": "Frisbee", "ml-IN": "ഫ്രിസ്ബി", "hi-IN": "फ्रिसबी", "es-ES": "Frisbee", "fr-FR": "Frisbee", "zh-CN": "飞盘", "ru-RU": "Фрисби" }
      },
      { name: "Balloon", image: null, display: "🎈",
        translations: { "en-US": "Balloon", "ml-IN": "ബലൂൺ", "hi-IN": "गुब्बारा", "es-ES": "Globo", "fr-FR": "Ballon", "zh-CN": "气球", "ru-RU": "Воздушный шар" }
      },
      { name: "Scooter", image: null, display: "🛴",
        translations: { "en-US": "Scooter", "ml-IN": "സ്കൂട്ടർ", "hi-IN": "स्कूटर", "es-ES": "Patinete", "fr-FR": "Trottinette", "zh-CN": "滑板车", "ru-RU": "Самокат" }
      },
      { name: "Skateboard", image: null, display: "🛹",
        translations: { "en-US": "Skateboard", "ml-IN": "സ്കേറ്റ് ബോർഡ്", "hi-IN": "स्केटबोर्ड", "es-ES": "Monopatín", "fr-FR": "Skateboard", "zh-CN": "滑板", "ru-RU": "Скейтборд" }
      },
      { name: "Trampoline", image: null, display: "🤸‍♂️",
        translations: { "en-US": "Trampoline", "ml-IN": "ട്രാമ്പോളിൻ", "hi-IN": "ट्राम्पोलिन", "es-ES": "Trampolín", "fr-FR": "Trampoline", "zh-CN": "蹦床", "ru-RU": "Батут" }
      },
      { name: "Bubbles", image: null, display: "🫧",
        translations: { "en-US": "Bubbles", "ml-IN": "ബബിൾസ്", "hi-IN": "बुलबुले", "es-ES": "Burbujas", "fr-FR": "Bulles", "zh-CN": "泡泡", "ru-RU": "Пузыри" }
      },
      { name: "Hula Hoop", image: null, display: "⭕",
        translations: { "en-US": "Hula Hoop", "ml-IN": "ഹുല ഹൂപ്", "hi-IN": "हुला हूप", "es-ES": "Aro", "fr-FR": "Hula hoop", "zh-CN": "呼啦圈", "ru-RU": "Хула-хуп" }
      },
      { name: "Wagon", image: null, display: "🛻",
        translations: { "en-US": "Wagon", "ml-IN": "വാഗൺ", "hi-IN": "गाड़ी", "es-ES": "Carrito", "fr-FR": "Chariot", "zh-CN": "小推车", "ru-RU": "Вагон" }
      },
      { name: "Teddy Bear", image: null, display: "🧸",
        translations: { "en-US": "Teddy Bear", "ml-IN": "ടെഡി ബെയർ", "hi-IN": "टेडी बियर", "es-ES": "Osito de peluche", "fr-FR": "Ours en peluche", "zh-CN": "泰迪熊", "ru-RU": "Плюшевый мишка" }
      },
      { name: "Blocks", image: null, display: "🧱",
        translations: { "en-US": "Blocks", "ml-IN": "ബ്ലോക്കുകൾ", "hi-IN": "ब्लॉक्स", "es-ES": "Bloques", "fr-FR": "Blocs", "zh-CN": "积木", "ru-RU": "Кубики" }
      },
      { name: "Yo-Yo", image: null, display: "🪀",
        translations: { "en-US": "Yo-Yo", "ml-IN": "യോയോ", "hi-IN": "यो-यो", "es-ES": "Yo-yo", "fr-FR": "Yo-yo", "zh-CN": "悠悠球", "ru-RU": "Йо-йо" }
      },
      { name: "Drum", image: null, display: "🥁",
        translations: { "en-US": "Drum", "ml-IN": "ചെണ്ട", "hi-IN": "ढोल", "es-ES": "Tambor", "fr-FR": "Tambour", "zh-CN": "鼓", "ru-RU": "Барабан" }
      },
    ],
  },
  {
    id: "planets",
    label: "Planets",
    emoji: "🪐",
    color: "from-indigo-400 to-purple-600",
    cards: [
      { name: "Sun", image: null, display: "☀️",
        translations: { "en-US": "Sun", "ml-IN": "സൂര്യൻ", "hi-IN": "सूरज", "es-ES": "Sol", "fr-FR": "Soleil", "zh-CN": "太阳", "ru-RU": "Солнце" }
      },
      { name: "Mercury", image: null, display: "🪨",
        translations: { "en-US": "Mercury", "ml-IN": "ബുധൻ", "hi-IN": "बुध", "es-ES": "Mercurio", "fr-FR": "Mercure", "zh-CN": "水星", "ru-RU": "Меркурий" }
      },
      { name: "Venus", image: null, display: "🌕",
        translations: { "en-US": "Venus", "ml-IN": "ശുക്രൻ", "hi-IN": "शुक्र", "es-ES": "Venus", "fr-FR": "Vénus", "zh-CN": "金星", "ru-RU": "Венера" }
      },
      { name: "Earth", image: null, display: "🌍",
        translations: { "en-US": "Earth", "ml-IN": "ഭൂമി", "hi-IN": "पृथ्वी", "es-ES": "Tierra", "fr-FR": "Terre", "zh-CN": "地球", "ru-RU": "Земля" }
      },
      { name: "Mars", image: null, display: "🔴",
        translations: { "en-US": "Mars", "ml-IN": "ചൊവ്വ", "hi-IN": "मंगल", "es-ES": "Marte", "fr-FR": "Mars", "zh-CN": "火星", "ru-RU": "Марс" }
      },
      { name: "Jupiter", image: null, display: "🟤",
        translations: { "en-US": "Jupiter", "ml-IN": "ഗുരു", "hi-IN": "बृहस्पति", "es-ES": "Júpiter", "fr-FR": "Jupiter", "zh-CN": "木星", "ru-RU": "Юпитер" }
      },
      { name: "Saturn", image: null, display: "🪐",
        translations: { "en-US": "Saturn", "ml-IN": "ശനി", "hi-IN": "शनि", "es-ES": "Saturno", "fr-FR": "Saturne", "zh-CN": "土星", "ru-RU": "Сатурн" }
      },
      { name: "Uranus", image: null, display: "🔵",
        translations: { "en-US": "Uranus", "ml-IN": "യുറാനസ്", "hi-IN": "अरुण", "es-ES": "Urano", "fr-FR": "Uranus", "zh-CN": "天王星", "ru-RU": "Уран" }
      },
      { name: "Neptune", image: null, display: "🔷",
        translations: { "en-US": "Neptune", "ml-IN": "നെപ്റ്റ്യൂൺ", "hi-IN": "वरुण", "es-ES": "Neptuno", "fr-FR": "Neptune", "zh-CN": "海王星", "ru-RU": "Нептун" }
      },
      { name: "Moon", image: null, display: "🌙",
        translations: { "en-US": "Moon", "ml-IN": "ചന്ദ്രൻ", "hi-IN": "चाँद", "es-ES": "Luna", "fr-FR": "Lune", "zh-CN": "月亮", "ru-RU": "Луна" }
      },
      { name: "Pluto", image: null, display: "⚪",
        translations: { "en-US": "Pluto", "ml-IN": "പ്ലൂട്ടോ", "hi-IN": "प्लूटो", "es-ES": "Plutón", "fr-FR": "Pluton", "zh-CN": "冥王星", "ru-RU": "Плутон" }
      },
      { name: "Comet", image: null, display: "☄️",
        translations: { "en-US": "Comet", "ml-IN": "ധൂമकेतു", "hi-IN": "धूमकेतु", "es-ES": "Cometa", "fr-FR": "Comète", "zh-CN": "彗星", "ru-RU": "Комета" }
      },
      { name: "Star", image: null, display: "⭐",
        translations: { "en-US": "Star", "ml-IN": "നക്ഷത്രം", "hi-IN": "तारा", "es-ES": "Estrella", "fr-FR": "Étoile", "zh-CN": "星星", "ru-RU": "Звезда" }
      },
      { name: "Milky Way", image: null, display: "🌌",
        translations: { "en-US": "Milky Way", "ml-IN": "ആകാശഗംഗ", "hi-IN": "आकाशगंगा", "es-ES": "Vía Láctea", "fr-FR": "Voie lactée", "zh-CN": "银河系", "ru-RU": "Млечный Путь" }
      },
      { name: "Rocket", image: null, display: "🚀",
        translations: { "en-US": "Rocket", "ml-IN": "റോക്കറ്റ്", "hi-IN": "रॉकेट", "es-ES": "Cohete", "fr-FR": "Fusée", "zh-CN": "火箭", "ru-RU": "Ракета" }
      },
      { name: "Astronaut", image: null, display: "🧑‍🚀",
        translations: { "en-US": "Astronaut", "ml-IN": "അന്താരാഷ്ട്രയാത്രികൻ", "hi-IN": "अंतरिक्ष यात्री", "es-ES": "Astronauta", "fr-FR": "Astronaute", "zh-CN": "宇航员", "ru-RU": "Космонавт" }
      },
      { name: "Satellite", image: null, display: "🛰️",
        translations: { "en-US": "Satellite", "ml-IN": "ഉപഗ്രഹം", "hi-IN": "उपग्रह", "es-ES": "Satélite", "fr-FR": "Satellite", "zh-CN": "卫星", "ru-RU": "Спутник" }
      },
      { name: "Telescope", image: null, display: "🔭",
        translations: { "en-US": "Telescope", "ml-IN": "ദൂരദർശിനി", "hi-IN": "दूरबीन", "es-ES": "Telescopio", "fr-FR": "Télescope", "zh-CN": "望远镜", "ru-RU": "Телескоп" }
      },
      { name: "Alien", image: null, display: "👽",
        translations: { "en-US": "Alien", "ml-IN": "വിദേശഗ്രഹവാസി", "hi-IN": "एलियन", "es-ES": "Extraterrestre", "fr-FR": "Extraterrestre", "zh-CN": "外星人", "ru-RU": "Инопланетянин" }
      },
      { name: "Galaxy", image: null, display: "🌌",
        translations: { "en-US": "Galaxy", "ml-IN": "ഗാലക്സി", "hi-IN": "आकाशमंडल", "es-ES": "Galaxia", "fr-FR": "Galaxie", "zh-CN": "星系", "ru-RU": "Галактика" }
      },
    ],
  },
  {
    id: "food",
    label: "Food",
    emoji: "🍕",
    color: "from-yellow-400 to-red-500",
    cards: [
      { name: "Pizza", image: null, display: "🍕",
        translations: { "en-US": "Pizza", "ml-IN": "പിസ്സ", "hi-IN": "पिज़्ज़ा", "es-ES": "Pizza", "fr-FR": "Pizza", "zh-CN": "比萨", "ru-RU": "Пицца" }
      },
      { name: "Bread", image: null, display: "🍞",
        translations: { "en-US": "Bread", "ml-IN": "റൊട്ടി", "hi-IN": "रोटी", "es-ES": "Pan", "fr-FR": "Pain", "zh-CN": "面包", "ru-RU": "Хлеб" }
      },
      { name: "Rice", image: null, display: "🍚",
        translations: { "en-US": "Rice", "ml-IN": "അരി", "hi-IN": "चावल", "es-ES": "Arroz", "fr-FR": "Riz", "zh-CN": "米饭", "ru-RU": "Рис" }
      },
      { name: "Egg", image: null, display: "🥚",
        translations: { "en-US": "Egg", "ml-IN": "മുട്ട", "hi-IN": "अंडा", "es-ES": "Huevo", "fr-FR": "Œuf", "zh-CN": "鸡蛋", "ru-RU": "Яйцо" }
      },
      { name: "Milk", image: null, display: "🥛",
        translations: { "en-US": "Milk", "ml-IN": "പാൽ", "hi-IN": "दूध", "es-ES": "Leche", "fr-FR": "Lait", "zh-CN": "牛奶", "ru-RU": "Молоко" }
      },
      { name: "Cheese", image: null, display: "🧀",
        translations: { "en-US": "Cheese", "ml-IN": "പാലുപന്നി", "hi-IN": "पनीर", "es-ES": "Queso", "fr-FR": "Fromage", "zh-CN": "奶酪", "ru-RU": "Сыр" }
      },
      { name: "Ice Cream", image: null, display: "🍦",
        translations: { "en-US": "Ice Cream", "ml-IN": "ഐസ്‌ക്രീം", "hi-IN": "आइसक्रीम", "es-ES": "Helado", "fr-FR": "Glace", "zh-CN": "冰淇淋", "ru-RU": "Мороженое" }
      },
      { name: "Cake", image: null, display: "🎂",
        translations: { "en-US": "Cake", "ml-IN": "കേക്ക്", "hi-IN": "केक", "es-ES": "Pastel", "fr-FR": "Gâteau", "zh-CN": "蛋糕", "ru-RU": "Торт" }
      },
      { name: "Cookie", image: null, display: "🍪",
        translations: { "en-US": "Cookie", "ml-IN": "കുക്കി", "hi-IN": "कुकी", "es-ES": "Galleta", "fr-FR": "Biscuit", "zh-CN": "饼干", "ru-RU": "Печенье" }
      },
      { name: "Carrot", image: null, display: "🥕",
        translations: { "en-US": "Carrot", "ml-IN": "കാരറ്റ്", "hi-IN": "गाजर", "es-ES": "Zanahoria", "fr-FR": "Carotte", "zh-CN": "胡萝卜", "ru-RU": "Морковь" }
      },
      { name: "Corn", image: null, display: "🌽",
        translations: { "en-US": "Corn", "ml-IN": "ചോളം", "hi-IN": "मक्का", "es-ES": "Maíz", "fr-FR": "Maïs", "zh-CN": "玉米", "ru-RU": "Кукуруза" }
      },
      { name: "Potato", image: null, display: "🥔",
        translations: { "en-US": "Potato", "ml-IN": "ഉരുളക്കിഴങ്ങ്", "hi-IN": "आलू", "es-ES": "Patata", "fr-FR": "Pomme de terre", "zh-CN": "土豆", "ru-RU": "Картофель" }
      },
      { name: "Broccoli", image: null, display: "🥦",
        translations: { "en-US": "Broccoli", "ml-IN": "ബ്രോക്കോളി", "hi-IN": "ब्रोकोली", "es-ES": "Brócoli", "fr-FR": "Brocoli", "zh-CN": "西兰花", "ru-RU": "Брокколи" }
      },
      { name: "Pasta", image: null, display: "🍝",
        translations: { "en-US": "Pasta", "ml-IN": "പാസ്ത", "hi-IN": "पास्ता", "es-ES": "Pasta", "fr-FR": "Pâtes", "zh-CN": "意大利面", "ru-RU": "Паста" }
      },
      { name: "Sandwich", image: null, display: "🥪",
        translations: { "en-US": "Sandwich", "ml-IN": "സാൻഡ്വിച്ച്", "hi-IN": "सैंडविच", "es-ES": "Sándwich", "fr-FR": "Sandwich", "zh-CN": "三明治", "ru-RU": "Сэндвич" }
      },
      { name: "Pancake", image: null, display: "🥞",
        translations: { "en-US": "Pancake", "ml-IN": "പാൻകേക്ക്", "hi-IN": "पैनकेक", "es-ES": "Panqueque", "fr-FR": "Crêpe", "zh-CN": "煎饼", "ru-RU": "Блинчик" }
      },
      { name: "Donut", image: null, display: "🍩",
        translations: { "en-US": "Donut", "ml-IN": "ഡോണട്ട്", "hi-IN": "डोनट", "es-ES": "Dona", "fr-FR": "Donut", "zh-CN": "甜甜圈", "ru-RU": "Пончик" }
      },
      { name: "Popcorn", image: null, display: "🍿",
        translations: { "en-US": "Popcorn", "ml-IN": "പോപ്പ്കോൺ", "hi-IN": "पॉपकॉर्न", "es-ES": "Palomitas", "fr-FR": "Pop-corn", "zh-CN": "爆米花", "ru-RU": "Попкорн" }
      },
      { name: "Taco", image: null, display: "🌮",
        translations: { "en-US": "Taco", "ml-IN": "ടാക്കോ", "hi-IN": "टैको", "es-ES": "Taco", "fr-FR": "Taco", "zh-CN": "玉米卷", "ru-RU": "Тако" }
      },
      { name: "Candy", image: null, display: "🍬",
        translations: { "en-US": "Candy", "ml-IN": "മിഠായി", "hi-IN": "मिठाई", "es-ES": "Caramelo", "fr-FR": "Bonbon", "zh-CN": "糖果", "ru-RU": "Конфета" }
      },
    ],
  },
  {
    id: "countries",
    label: "Countries",
    emoji: "🌍",
    color: "from-teal-400 to-cyan-500",
    cards: [
      { name: "India", image: null, display: "🇮🇳",
        translations: { "en-US": "India", "ml-IN": "ഇന്ത്യ", "hi-IN": "भारत", "es-ES": "India", "fr-FR": "Inde", "zh-CN": "印度", "ru-RU": "Индия" }
      },
      { name: "United States", image: null, display: "🇺🇸",
        translations: { "en-US": "United States", "ml-IN": "യുണൈറ്റഡ് സ്റ്റേറ്റ്സ്", "hi-IN": "संयुक्त राज्य", "es-ES": "Estados Unidos", "fr-FR": "États-Unis", "zh-CN": "美国", "ru-RU": "США" }
      },
      { name: "United Kingdom", image: null, display: "🇬🇧",
        translations: { "en-US": "United Kingdom", "ml-IN": "യുണൈറ്റഡ് കിംഗ്ഡം", "hi-IN": "यूनाइटेड किंगडम", "es-ES": "Reino Unido", "fr-FR": "Royaume-Uni", "zh-CN": "英国", "ru-RU": "Великобритания" }
      },
      { name: "Canada", image: null, display: "🇨🇦",
        translations: { "en-US": "Canada", "ml-IN": "കാനഡ", "hi-IN": "कनाडा", "es-ES": "Canadá", "fr-FR": "Canada", "zh-CN": "加拿大", "ru-RU": "Канада" }
      },
      { name: "Australia", image: null, display: "🇦🇺",
        translations: { "en-US": "Australia", "ml-IN": "ഓസ്ട്രേലിയ", "hi-IN": "ऑस्ट्रेलिया", "es-ES": "Australia", "fr-FR": "Australie", "zh-CN": "澳大利亚", "ru-RU": "Австралия" }
      },
      { name: "Japan", image: null, display: "🇯🇵",
        translations: { "en-US": "Japan", "ml-IN": "ജപ്പാൻ", "hi-IN": "जापान", "es-ES": "Japón", "fr-FR": "Japon", "zh-CN": "日本", "ru-RU": "Япония" }
      },
      { name: "China", image: null, display: "🇨🇳",
        translations: { "en-US": "China", "ml-IN": "ചൈന", "hi-IN": "चीन", "es-ES": "China", "fr-FR": "Chine", "zh-CN": "中国", "ru-RU": "Китай" }
      },
      { name: "France", image: null, display: "🇫🇷",
        translations: { "en-US": "France", "ml-IN": "ഫ്രാൻസ്", "hi-IN": "फ्रांस", "es-ES": "Francia", "fr-FR": "France", "zh-CN": "法国", "ru-RU": "Франция" }
      },
      { name: "Germany", image: null, display: "🇩🇪",
        translations: { "en-US": "Germany", "ml-IN": "ജർമ്മനി", "hi-IN": "जर्मनी", "es-ES": "Alemania", "fr-FR": "Allemagne", "zh-CN": "德国", "ru-RU": "Германия" }
      },
      { name: "Brazil", image: null, display: "🇧🇷",
        translations: { "en-US": "Brazil", "ml-IN": "ബ്രസീൽ", "hi-IN": "ब्राज़ील", "es-ES": "Brasil", "fr-FR": "Brésil", "zh-CN": "巴西", "ru-RU": "Бразилия" }
      },
      { name: "Italy", image: null, display: "🇮🇹",
        translations: { "en-US": "Italy", "ml-IN": "ഇറ്റലി", "hi-IN": "इटली", "es-ES": "Italia", "fr-FR": "Italie", "zh-CN": "意大利", "ru-RU": "Италия" }
      },
      { name: "Mexico", image: null, display: "🇲🇽",
        translations: { "en-US": "Mexico", "ml-IN": "മെക്സിക്കോ", "hi-IN": "मेक्सिको", "es-ES": "México", "fr-FR": "Mexique", "zh-CN": "墨西哥", "ru-RU": "Мексика" }
      },
      { name: "Spain", image: null, display: "🇪🇸",
        translations: { "en-US": "Spain", "ml-IN": "സ്പെയിൻ", "hi-IN": "स्पेन", "es-ES": "España", "fr-FR": "Espagne", "zh-CN": "西班牙", "ru-RU": "Испания" }
      },
      { name: "Russia", image: null, display: "🇷🇺",
        translations: { "en-US": "Russia", "ml-IN": "റഷ്യ", "hi-IN": "रूस", "es-ES": "Rusia", "fr-FR": "Russie", "zh-CN": "俄罗斯", "ru-RU": "Россия" }
      },
      { name: "South Korea", image: null, display: "🇰🇷",
        translations: { "en-US": "South Korea", "ml-IN": "ദക്ഷിണ കൊറിയ", "hi-IN": "दक्षिण कोरिया", "es-ES": "Corea del Sur", "fr-FR": "Corée du Sud", "zh-CN": "韩国", "ru-RU": "Южная Корея" }
      },
      { name: "South Africa", image: null, display: "🇿🇦",
        translations: { "en-US": "South Africa", "ml-IN": "ദക്ഷിണാഫ്രിക്ക", "hi-IN": "दक्षिण अफ्रीका", "es-ES": "Sudáfrica", "fr-FR": "Afrique du Sud", "zh-CN": "南非", "ru-RU": "Южная Африка" }
      },
      { name: "Egypt", image: null, display: "🇪🇬",
        translations: { "en-US": "Egypt", "ml-IN": "ഈജിപ്ത്", "hi-IN": "मिस्र", "es-ES": "Egipto", "fr-FR": "Égypte", "zh-CN": "埃及", "ru-RU": "Египет" }
      },
      { name: "Kenya", image: null, display: "🇰🇪",
        translations: { "en-US": "Kenya", "ml-IN": "കെനിയ", "hi-IN": "केन्या", "es-ES": "Kenia", "fr-FR": "Kenya", "zh-CN": "肯尼亚", "ru-RU": "Кения" }
      },
      { name: "Turkey", image: null, display: "🇹🇷",
        translations: { "en-US": "Turkey", "ml-IN": "ടർക്കി", "hi-IN": "तुर्की", "es-ES": "Turquía", "fr-FR": "Turquie", "zh-CN": "土耳其", "ru-RU": "Турция" }
      },
      { name: "Singapore", image: null, display: "🇸🇬",
        translations: { "en-US": "Singapore", "ml-IN": "സിംഗപ്പൂർ", "hi-IN": "सिंगापुर", "es-ES": "Singapur", "fr-FR": "Singapour", "zh-CN": "新加坡", "ru-RU": "Сингапур" }
      },
    ],
  },
  {
    id: "cartoons",
    label: "Cartoons",
    emoji: "🎬",
    color: "from-fuchsia-400 to-pink-500",
    cards: [
      { name: "Mickey Mouse", image: null, display: "🐭",
        translations: { "en-US": "Mickey Mouse", "ml-IN": "മിക്കി മൗസ്", "hi-IN": "मिक्की माउस", "es-ES": "Mickey Mouse", "fr-FR": "Mickey Mouse", "zh-CN": "米老鼠", "ru-RU": "Микки Маус" }
      },
      { name: "Donald Duck", image: null, display: "🦆",
        translations: { "en-US": "Donald Duck", "ml-IN": "ഡൊണാൾഡ് ഡക്ക്", "hi-IN": "डोनाल्ड डक", "es-ES": "Donald Duck", "fr-FR": "Donald Duck", "zh-CN": "唐老鸭", "ru-RU": "Дональд Дак" }
      },
      { name: "SpongeBob", image: null, display: "🧽",
        translations: { "en-US": "SpongeBob", "ml-IN": "സ്പോഞ്ച് ബോബ്", "hi-IN": "स्पंजबॉब", "es-ES": "Bob Esponja", "fr-FR": "Bob l'éponge", "zh-CN": "海绵宝宝", "ru-RU": "Губка Боб" }
      },
      { name: "Superman", image: null, display: "🦸",
        translations: { "en-US": "Superman", "ml-IN": "സൂപ്പർമാൻ", "hi-IN": "सुपरमैन", "es-ES": "Superman", "fr-FR": "Superman", "zh-CN": "超人", "ru-RU": "Супермен" }
      },
      { name: "Spider-Man", image: null, display: "🕷️",
        translations: { "en-US": "Spider-Man", "ml-IN": "സ്പൈഡർ-മാൻ", "hi-IN": "स्पाइडर-मैन", "es-ES": "Spider-Man", "fr-FR": "Spider-Man", "zh-CN": "蜘蛛侠", "ru-RU": "Человек-паук" }
      },
      { name: "Batman", image: null, display: "🦇",
        translations: { "en-US": "Batman", "ml-IN": "ബാറ്റ്മാൻ", "hi-IN": "बैटमैन", "es-ES": "Batman", "fr-FR": "Batman", "zh-CN": "蝙蝠侠", "ru-RU": "Бэтмен" }
      },
      { name: "Elsa", image: null, display: "❄️",
        translations: { "en-US": "Elsa", "ml-IN": "എൽസ", "hi-IN": "एल्सा", "es-ES": "Elsa", "fr-FR": "Elsa", "zh-CN": "艾莎", "ru-RU": "Эльза" }
      },
      { name: "Pikachu", image: null, display: "⚡",
        translations: { "en-US": "Pikachu", "ml-IN": "പിക്കാചു", "hi-IN": "पिकाचू", "es-ES": "Pikachu", "fr-FR": "Pikachu", "zh-CN": "皮卡丘", "ru-RU": "Пикачу" }
      },
      { name: "Nemo", image: null, display: "🐠",
        translations: { "en-US": "Nemo", "ml-IN": "നീമോ", "hi-IN": "नीमो", "es-ES": "Nemo", "fr-FR": "Nemo", "zh-CN": "尼莫", "ru-RU": "Немо" }
      },
      { name: "Simba", image: null, display: "🦁",
        translations: { "en-US": "Simba", "ml-IN": "സിംബ", "hi-IN": "सिम्बा", "es-ES": "Simba", "fr-FR": "Simba", "zh-CN": "辛巴", "ru-RU": "Симба" }
      },
      { name: "Buzz Lightyear", image: null, display: "🚀",
        translations: { "en-US": "Buzz Lightyear", "ml-IN": "ബസ് ലൈറ്റ് ഇയർ", "hi-IN": "बज़ लाइटईयर", "es-ES": "Buzz Lightyear", "fr-FR": "Buzz l'Éclair", "zh-CN": "巴斯光年", "ru-RU": "Базз Лайтер" }
      },
      { name: "Woody", image: null, display: "🤠",
        translations: { "en-US": "Woody", "ml-IN": "വൂഡി", "hi-IN": "वुडी", "es-ES": "Woody", "fr-FR": "Woody", "zh-CN": "胡迪", "ru-RU": "Вуди" }
      },
      { name: "Shrek", image: null, display: "🟢",
        translations: { "en-US": "Shrek", "ml-IN": "ശ്രെക്", "hi-IN": "श्रे्क", "es-ES": "Shrek", "fr-FR": "Shrek", "zh-CN": "史莱克", "ru-RU": "Шрек" }
      },
      { name: "Dora", image: null, display: "🎒",
        translations: { "en-US": "Dora", "ml-IN": "ഡോറ", "hi-IN": "डोरा", "es-ES": "Dora", "fr-FR": "Dora", "zh-CN": "朵拉", "ru-RU": "Дора" }
      },
      { name: "Peppa Pig", image: null, display: "🐷",
        translations: { "en-US": "Peppa Pig", "ml-IN": "പെപ്പ പിഗ്", "hi-IN": "पेप्पा पिग", "es-ES": "Peppa Pig", "fr-FR": "Peppa Pig", "zh-CN": "小猪佩奇", "ru-RU": "Свинка Пеппа" }
      },
      { name: "Tom and Jerry", image: null, display: "🐱",
        translations: { "en-US": "Tom and Jerry", "ml-IN": "ടോം ആൻഡ് ജെറി", "hi-IN": "टॉम एंड जेरी", "es-ES": "Tom y Jerry", "fr-FR": "Tom et Jerry", "zh-CN": "汤姆和杰瑞", "ru-RU": "Том и Джерри" }
      },
      { name: "Winnie the Pooh", image: null, display: "🐻",
        translations: { "en-US": "Winnie the Pooh", "ml-IN": "വിന്നി ദ പൂ", "hi-IN": "विन्नी द पूह", "es-ES": "Winnie the Pooh", "fr-FR": "Winnie l'ourson", "zh-CN": "小熊维尼", "ru-RU": "Винни-Пух" }
      },
      { name: "Olaf", image: null, display: "⛄",
        translations: { "en-US": "Olaf", "ml-IN": "ഒലാഫ്", "hi-IN": "ओलाफ", "es-ES": "Olaf", "fr-FR": "Olaf", "zh-CN": "雪宝", "ru-RU": "Олаф" }
      },
      { name: "Lightning McQueen", image: null, display: "🏎️",
        translations: { "en-US": "Lightning McQueen", "ml-IN": "ലൈറ്റ്നിംഗ് മക്വീൻ", "hi-IN": "लाइटनिंग मैक्वीन", "es-ES": "Rayo McQueen", "fr-FR": "Flash McQueen", "zh-CN": "闪电麦昆", "ru-RU": "Молния Маккуин" }
      },
      { name: "Mario", image: null, display: "🍄",
        translations: { "en-US": "Mario", "ml-IN": "മാരിയോ", "hi-IN": "मारियो", "es-ES": "Mario", "fr-FR": "Mario", "zh-CN": "马里奥", "ru-RU": "Марио" }
      },
    ],
  },
  {
    id: "words",
    label: "Small Words",
    emoji: "📝",
    color: "from-sky-400 to-blue-500",
    cards: [
      { name: "Cat", image: null, display: "🐱",
        translations: { "en-US": "Cat", "ml-IN": "പൂച്ച", "hi-IN": "बिल्ली", "es-ES": "Gato", "fr-FR": "Chat", "zh-CN": "猫", "ru-RU": "Кошка" }
      },
      { name: "Dog", image: null, display: "🐶",
        translations: { "en-US": "Dog", "ml-IN": "നായ", "hi-IN": "कुत्ता", "es-ES": "Perro", "fr-FR": "Chien", "zh-CN": "狗", "ru-RU": "Собака" }
      },
      { name: "Sun", image: null, display: "☀️",
        translations: { "en-US": "Sun", "ml-IN": "സൂര്യൻ", "hi-IN": "सूरज", "es-ES": "Sol", "fr-FR": "Soleil", "zh-CN": "太阳", "ru-RU": "Солнце" }
      },
      { name: "Moon", image: null, display: "🌙",
        translations: { "en-US": "Moon", "ml-IN": "ചന്ദ്രൻ", "hi-IN": "चाँद", "es-ES": "Luna", "fr-FR": "Lune", "zh-CN": "月亮", "ru-RU": "Луна" }
      },
      { name: "Star", image: null, display: "⭐",
        translations: { "en-US": "Star", "ml-IN": "നക്ഷത്രം", "hi-IN": "तारा", "es-ES": "Estrella", "fr-FR": "Étoile", "zh-CN": "星星", "ru-RU": "Звезда" }
      },
      { name: "Car", image: null, display: "🚗",
        translations: { "en-US": "Car", "ml-IN": "കാർ", "hi-IN": "कार", "es-ES": "Coche", "fr-FR": "Voiture", "zh-CN": "汽车", "ru-RU": "Машина" }
      },
      { name: "Bus", image: null, display: "🚌",
        translations: { "en-US": "Bus", "ml-IN": "ബസ്", "hi-IN": "बस", "es-ES": "Autobús", "fr-FR": "Bus", "zh-CN": "公共汽车", "ru-RU": "Автобус" }
      },
      { name: "Hat", image: null, display: "🎩",
        translations: { "en-US": "Hat", "ml-IN": "തൊപ്പി", "hi-IN": "टोपी", "es-ES": "Sombrero", "fr-FR": "Chapeau", "zh-CN": "帽子", "ru-RU": "Шляпа" }
      },
      { name: "Cup", image: null, display: "🥤",
        translations: { "en-US": "Cup", "ml-IN": "കപ്പ്", "hi-IN": "कप", "es-ES": "Taza", "fr-FR": "Tasse", "zh-CN": "杯子", "ru-RU": "Чашка" }
      },
      { name: "Pen", image: null, display: "🖊️",
        translations: { "en-US": "Pen", "ml-IN": "പെൻ", "hi-IN": "कलम", "es-ES": "Bolígrafo", "fr-FR": "Stylo", "zh-CN": "钢笔", "ru-RU": "Ручка" }
      },
      { name: "Bed", image: null, display: "🛏️",
        translations: { "en-US": "Bed", "ml-IN": "കിടക്ക", "hi-IN": "बिस्तर", "es-ES": "Cama", "fr-FR": "Lit", "zh-CN": "床", "ru-RU": "Кровать" }
      },
      { name: "Egg", image: null, display: "🥚",
        translations: { "en-US": "Egg", "ml-IN": "മുട്ട", "hi-IN": "अंडा", "es-ES": "Huevo", "fr-FR": "Œuf", "zh-CN": "鸡蛋", "ru-RU": "Яйцо" }
      },
      { name: "Box", image: null, display: "📦",
        translations: { "en-US": "Box", "ml-IN": "ബോക്സ്", "hi-IN": "डिब्बा", "es-ES": "Caja", "fr-FR": "Boîte", "zh-CN": "盒子", "ru-RU": "Коробка" }
      },
      { name: "Key", image: null, display: "🔑",
        translations: { "en-US": "Key", "ml-IN": "കീ", "hi-IN": "चाबी", "es-ES": "Llave", "fr-FR": "Clé", "zh-CN": "钥匙", "ru-RU": "Ключ" }
      },
      { name: "Ball", image: null, display: "⚽",
        translations: { "en-US": "Ball", "ml-IN": "ബോൾ", "hi-IN": "गेंद", "es-ES": "Pelota", "fr-FR": "Balle", "zh-CN": "球", "ru-RU": "Мяч" }
      },
      { name: "Tree", image: null, display: "🌳",
        translations: { "en-US": "Tree", "ml-IN": "മരം", "hi-IN": "पेड़", "es-ES": "Árbol", "fr-FR": "Arbre", "zh-CN": "树", "ru-RU": "Дерево" }
      },
      { name: "Book", image: null, display: "📖",
        translations: { "en-US": "Book", "ml-IN": "പുസ്തകം", "hi-IN": "किताब", "es-ES": "Libro", "fr-FR": "Livre", "zh-CN": "书", "ru-RU": "Книга" }
      },
      { name: "Fish", image: null, display: "🐟",
        translations: { "en-US": "Fish", "ml-IN": "മത്സ്യം", "hi-IN": "मछली", "es-ES": "Pez", "fr-FR": "Poisson", "zh-CN": "鱼", "ru-RU": "Рыба" }
      },
      { name: "Cake", image: null, display: "🎂",
        translations: { "en-US": "Cake", "ml-IN": "കേക്ക്", "hi-IN": "केक", "es-ES": "Pastel", "fr-FR": "Gâteau", "zh-CN": "蛋糕", "ru-RU": "Торт" }
      },
      { name: "Rain", image: null, display: "🌧️",
        translations: { "en-US": "Rain", "ml-IN": "മഴ", "hi-IN": "बारिश", "es-ES": "Lluvia", "fr-FR": "Pluie", "zh-CN": "雨", "ru-RU": "Дождь" }
      },
    ],
  },
  {
    id: "alphabets",
    label: "Alphabets",
    emoji: "🔤",
    color: "from-rose-400 to-pink-500",
    cards: "ABCDEFGHIJKLMNOPQRST".split("").map((l) => ({
      name: l,
      image: null,
      display: l,
      bigLetter: true,
    })),
  },
  {
    id: "numbers",
    label: "Numbers",
    emoji: "🔢",
    color: "from-violet-400 to-indigo-500",
    cards: Array.from({ length: 20 }, (_, i) => ({
      name: String(i + 1),
      image: null,
      display: String(i + 1),
      bigLetter: true,
    })),
  },
];

export default CATEGORIES;
