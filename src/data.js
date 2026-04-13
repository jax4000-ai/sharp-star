
/*
  Sharp Star — Flashcard Data
  All emoji — no copyright issues, no broken images, instant loading.
*/

// Supported languages for TTS
export const LANGUAGES = [
  { code: "en-US", label: "English" },
  { code: "ml-IN", label: "Malayalam" },
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
          "en-US": "Dog", "es-ES": "Perro", "fr-FR": "Chien", "hi-IN": "कुत्ता", "ml-IN": "നായ", "zh-CN": "狗", "ru-RU": "Собака"
        }
      },
      { name: "Cat", image: null, display: "🐈",
        translations: {
          "en-US": "Cat", "es-ES": "Gato", "fr-FR": "Chat", "hi-IN": "बिल्ली", "ml-IN": "പൂച്ച", "zh-CN": "猫", "ru-RU": "Кошка"
        }
      },
      { name: "Elephant", image: null, display: "🐘",
        translations: {
          "en-US": "Elephant", "es-ES": "Elefante", "fr-FR": "Éléphant", "hi-IN": "हाथी", "ml-IN": "ആന", "zh-CN": "大象", "ru-RU": "Слон"
        }
      },
      { name: "Lion", image: null, display: "🦁",
        translations: {
          "en-US": "Lion", "es-ES": "León", "fr-FR": "Lion", "hi-IN": "सिंह", "ml-IN": "സിംഹം", "zh-CN": "狮子", "ru-RU": "Лев"
        }
      },
      { name: "Horse", image: null, display: "🐎",
        translations: {
          "en-US": "Horse", "es-ES": "Caballo", "fr-FR": "Cheval", "hi-IN": "घोड़ा", "ml-IN": "കുതിര", "zh-CN": "马", "ru-RU": "Лошадь"
        }
      },
      { name: "Cow", image: null, display: "🐄",
        translations: {
          "en-US": "Cow", "es-ES": "Vaca", "fr-FR": "Vache", "hi-IN": "गाय", "ml-IN": "പശു", "zh-CN": "奶牛", "ru-RU": "Корова"
        }
      },
      { name: "Monkey", image: null, display: "🐒",
        translations: {
          "en-US": "Monkey", "es-ES": "Mono", "fr-FR": "Singe", "hi-IN": "बंदर", "ml-IN": "കുരങ്ങ്", "zh-CN": "猴子", "ru-RU": "Обезьяна"
        }
      },
      { name: "Zebra", image: null, display: "🦓",
        translations: {
          "en-US": "Zebra", "es-ES": "Cebra", "fr-FR": "Zèbre", "hi-IN": "ज़ेब्रा", "ml-IN": "മാന്യ", "zh-CN": "斑马", "ru-RU": "Зебра"
        }
      },
      { name: "Tiger", image: null, display: "🐅",
        translations: {
          "en-US": "Tiger", "es-ES": "Tigre", "fr-FR": "Tigre", "hi-IN": "बाघ", "ml-IN": "കഴുത", "zh-CN": "老虎", "ru-RU": "Тигр"
        }
      },
      { name: "Rabbit", image: null, display: "🐇",
        translations: {
          "en-US": "Rabbit", "es-ES": "Conejo", "fr-FR": "Lapin", "hi-IN": "खरगोश", "ml-IN": "മൂഷികം", "zh-CN": "兔子", "ru-RU": "Кролик"
        }
      },
      { name: "Giraffe", image: null, display: "🦒",
        translations: {
          "en-US": "Giraffe", "es-ES": "Jirafa", "fr-FR": "Girafe", "hi-IN": "जिराफ़", "ml-IN": "ജിറാഫ്", "zh-CN": "长颈鹿", "ru-RU": "Жираф"
        }
      },
      { name: "Bear", image: null, display: "🐻",
        translations: {
          "en-US": "Bear", "es-ES": "Oso", "fr-FR": "Ours", "hi-IN": "भालू", "ml-IN": "കരടി", "zh-CN": "熊", "ru-RU": "Медведь"
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
      { name: "Red", image: null, hex: "#EF4444" },
      { name: "Blue", image: null, hex: "#3B82F6" },
      { name: "Green", image: null, hex: "#22C55E" },
      { name: "Yellow", image: null, hex: "#EAB308" },
      { name: "Orange", image: null, hex: "#F97316" },
      { name: "Purple", image: null, hex: "#A855F7" },
      { name: "Pink", image: null, hex: "#EC4899" },
      { name: "Black", image: null, hex: "#1E293B" },
      { name: "White", image: null, hex: "#F8FAFC" },
      { name: "Brown", image: null, hex: "#92400E" },
      { name: "Gray", image: null, hex: "#6B7280" },
      { name: "Cyan", image: null, hex: "#06B6D4" },
      { name: "Lime", image: null, hex: "#84CC16" },
      { name: "Teal", image: null, hex: "#14B8A6" },
      { name: "Indigo", image: null, hex: "#6366F1" },
      { name: "Maroon", image: null, hex: "#7F1D1D" },
      { name: "Navy", image: null, hex: "#1E3A5F" },
      { name: "Gold", image: null, hex: "#D4A017" },
      { name: "Silver", image: null, hex: "#C0C0C0" },
      { name: "Violet", image: null, hex: "#8B5CF6" },
    ],
  },
  {
    id: "shapes",
    label: "Shapes",
    emoji: "🔷",
    color: "from-cyan-400 to-blue-500",
    cards: [
      { name: "Circle", image: null, shape: "circle" },
      { name: "Square", image: null, shape: "square" },
      { name: "Triangle", image: null, shape: "triangle" },
      { name: "Star", image: null, shape: "star" },
      { name: "Heart", image: null, shape: "heart" },
      { name: "Diamond", image: null, shape: "diamond" },
      { name: "Oval", image: null, display: "⬮", bigLetter: true },
      { name: "Rectangle", image: null, display: "▬", bigLetter: true },
      { name: "Pentagon", image: null, display: "⬠", bigLetter: true },
      { name: "Hexagon", image: null, display: "⬡", bigLetter: true },
      { name: "Arrow", image: null, display: "➤", bigLetter: true },
      { name: "Cross", image: null, display: "✚", bigLetter: true },
      { name: "Crescent", image: null, display: "🌙" },
      { name: "Cube", image: null, display: "🧊" },
      { name: "Cone", image: null, display: "📐" },
      { name: "Sphere", image: null, display: "🔮" },
      { name: "Cylinder", image: null, display: "🥫" },
      { name: "Ring", image: null, display: "💍" },
      { name: "Spiral", image: null, display: "🌀" },
      { name: "Cloud", image: null, display: "☁️" },
    ],
  },
  {
    id: "family",
    label: "Family",
    emoji: "👨‍👩‍👧‍👦",
    color: "from-rose-400 to-orange-400",
    cards: [
      { name: "Mommy", image: null, display: "👩" },
      { name: "Daddy", image: null, display: "👨" },
      { name: "Baby", image: null, display: "👶" },
      { name: "Sister", image: null, display: "👧" },
      { name: "Brother", image: null, display: "👦" },
      { name: "Grandma", image: null, display: "👵" },
      { name: "Grandpa", image: null, display: "👴" },
      { name: "Aunt", image: null, display: "👩‍🦰" },
      { name: "Uncle", image: null, display: "👨‍🦱" },
      { name: "Cousin", image: null, display: "🧒" },
      { name: "Family", image: null, display: "👨‍👩‍👧‍👦" },
      { name: "Mom and Baby", image: null, display: "🤱" },
      { name: "Twins", image: null, display: "👯" },
      { name: "Boy", image: null, display: "👦🏽" },
      { name: "Girl", image: null, display: "👧🏽" },
      { name: "Man", image: null, display: "👨🏽" },
      { name: "Woman", image: null, display: "👩🏽" },
      { name: "Old Man", image: null, display: "👴🏽" },
      { name: "Old Woman", image: null, display: "👵🏽" },
      { name: "People", image: null, display: "👫" },
    ],
  },
  {
    id: "fruits",
    label: "Fruits",
    emoji: "🍎",
    color: "from-green-400 to-emerald-500",
    cards: [
      { name: "Apple", image: null, display: "🍎" },
      { name: "Banana", image: null, display: "🍌" },
      { name: "Orange", image: null, display: "🍊" },
      { name: "Grapes", image: null, display: "🍇" },
      { name: "Strawberry", image: null, display: "🍓" },
      { name: "Watermelon", image: null, display: "🍉" },
      { name: "Mango", image: null, display: "🥭" },
      { name: "Pineapple", image: null, display: "🍍" },
      { name: "Cherry", image: null, display: "🍒" },
      { name: "Lemon", image: null, display: "🍋" },
      { name: "Peach", image: null, display: "🍑" },
      { name: "Pear", image: null, display: "🍐" },
      { name: "Coconut", image: null, display: "🥥" },
      { name: "Kiwi", image: null, display: "🥝" },
      { name: "Blueberry", image: null, display: "🫐" },
      { name: "Melon", image: null, display: "🍈" },
      { name: "Plum", image: null, display: "🫐" },
      { name: "Avocado", image: null, display: "🥑" },
      { name: "Tomato", image: null, display: "🍅" },
      { name: "Olive", image: null, display: "🫒" },
    ],
  },
  {
    id: "baby-animals",
    label: "Baby Animals",
    emoji: "🐣",
    color: "from-yellow-300 to-amber-400",
    cards: [
      { name: "Puppy", image: null, display: "🐶" },
      { name: "Kitten", image: null, display: "🐱" },
      { name: "Chick", image: null, display: "🐤" },
      { name: "Duckling", image: null, display: "🦆" },
      { name: "Lamb", image: null, display: "🐑" },
      { name: "Calf", image: null, display: "🐄" },
      { name: "Foal", image: null, display: "🐴" },
      { name: "Piglet", image: null, display: "🐷" },
      { name: "Cub", image: null, display: "🐻" },
      { name: "Joey", image: null, display: "🦘" },
      { name: "Fawn", image: null, display: "🦌" },
      { name: "Tadpole", image: null, display: "🐸" },
      { name: "Bunny", image: null, display: "🐰" },
      { name: "Baby Owl", image: null, display: "🦉" },
      { name: "Baby Penguin", image: null, display: "🐧" },
      { name: "Baby Monkey", image: null, display: "🐒" },
      { name: "Baby Elephant", image: null, display: "🐘" },
      { name: "Baby Giraffe", image: null, display: "🦒" },
      { name: "Baby Panda", image: null, display: "🐼" },
      { name: "Baby Turtle", image: null, display: "🐢" },
    ],
  },
  {
    id: "birds",
    label: "Birds",
    emoji: "🦅",
    color: "from-sky-400 to-indigo-500",
    cards: [
      { name: "Eagle", image: null, display: "🦅" },
      { name: "Parrot", image: null, display: "🦜" },
      { name: "Owl", image: null, display: "🦉" },
      { name: "Penguin", image: null, display: "🐧" },
      { name: "Flamingo", image: null, display: "🦩" },
      { name: "Peacock", image: null, display: "🦚" },
      { name: "Duck", image: null, display: "🦆" },
      { name: "Swan", image: null, display: "🦢" },
      { name: "Chicken", image: null, display: "🐔" },
      { name: "Rooster", image: null, display: "🐓" },
      { name: "Turkey", image: null, display: "🦃" },
      { name: "Dove", image: null, display: "🕊️" },
      { name: "Robin", image: null, display: "🐦" },
      { name: "Crow", image: null, display: "🐦‍⬛" },
      { name: "Hummingbird", image: null, display: "🐦" },
      { name: "Sparrow", image: null, display: "🐦" },
      { name: "Pigeon", image: null, display: "🕊️" },
      { name: "Pelican", image: null, display: "🦅" },
      { name: "Stork", image: null, display: "🦩" },
      { name: "Woodpecker", image: null, display: "🪶" },
    ],
  },
  {
    id: "playground",
    label: "Playground",
    emoji: "🛝",
    color: "from-lime-400 to-green-500",
    cards: [
      { name: "Slide", image: null, display: "🛝" },
      { name: "Swing", image: null, display: "🎠" },
      { name: "Ball", image: null, display: "⚽" },
      { name: "Bicycle", image: null, display: "🚲" },
      { name: "Kite", image: null, display: "🪁" },
      { name: "Jump Rope", image: null, display: "🤸" },
      { name: "Sandbox", image: null, display: "🏖️" },
      { name: "See Saw", image: null, display: "⚖️" },
      { name: "Frisbee", image: null, display: "🥏" },
      { name: "Balloon", image: null, display: "🎈" },
      { name: "Scooter", image: null, display: "🛴" },
      { name: "Skateboard", image: null, display: "🛹" },
      { name: "Trampoline", image: null, display: "🤸‍♂️" },
      { name: "Bubbles", image: null, display: "🫧" },
      { name: "Hula Hoop", image: null, display: "⭕" },
      { name: "Wagon", image: null, display: "🛻" },
      { name: "Teddy Bear", image: null, display: "🧸" },
      { name: "Blocks", image: null, display: "🧱" },
      { name: "Yo-Yo", image: null, display: "🪀" },
      { name: "Drum", image: null, display: "🥁" },
    ],
  },
  {
    id: "planets",
    label: "Planets",
    emoji: "🪐",
    color: "from-indigo-400 to-purple-600",
    cards: [
      { name: "Sun", image: null, display: "☀️" },
      { name: "Mercury", image: null, display: "🪨" },
      { name: "Venus", image: null, display: "🌕" },
      { name: "Earth", image: null, display: "🌍" },
      { name: "Mars", image: null, display: "🔴" },
      { name: "Jupiter", image: null, display: "🟤" },
      { name: "Saturn", image: null, display: "🪐" },
      { name: "Uranus", image: null, display: "🔵" },
      { name: "Neptune", image: null, display: "🔷" },
      { name: "Moon", image: null, display: "🌙" },
      { name: "Pluto", image: null, display: "⚪" },
      { name: "Comet", image: null, display: "☄️" },
      { name: "Star", image: null, display: "⭐" },
      { name: "Milky Way", image: null, display: "🌌" },
      { name: "Rocket", image: null, display: "🚀" },
      { name: "Astronaut", image: null, display: "🧑‍🚀" },
      { name: "Satellite", image: null, display: "🛰️" },
      { name: "Telescope", image: null, display: "🔭" },
      { name: "Alien", image: null, display: "👽" },
      { name: "Galaxy", image: null, display: "🌌" },
    ],
  },
  {
    id: "food",
    label: "Food",
    emoji: "🍕",
    color: "from-yellow-400 to-red-500",
    cards: [
      { name: "Pizza", image: null, display: "🍕" },
      { name: "Bread", image: null, display: "🍞" },
      { name: "Rice", image: null, display: "🍚" },
      { name: "Egg", image: null, display: "🥚" },
      { name: "Milk", image: null, display: "🥛" },
      { name: "Cheese", image: null, display: "🧀" },
      { name: "Ice Cream", image: null, display: "🍦" },
      { name: "Cake", image: null, display: "🎂" },
      { name: "Cookie", image: null, display: "🍪" },
      { name: "Carrot", image: null, display: "🥕" },
      { name: "Corn", image: null, display: "🌽" },
      { name: "Potato", image: null, display: "🥔" },
      { name: "Broccoli", image: null, display: "🥦" },
      { name: "Pasta", image: null, display: "🍝" },
      { name: "Sandwich", image: null, display: "🥪" },
      { name: "Pancake", image: null, display: "🥞" },
      { name: "Donut", image: null, display: "🍩" },
      { name: "Popcorn", image: null, display: "🍿" },
      { name: "Taco", image: null, display: "🌮" },
      { name: "Candy", image: null, display: "🍬" },
    ],
  },
  {
    id: "countries",
    label: "Countries",
    emoji: "🌍",
    color: "from-teal-400 to-cyan-500",
    cards: [
      { name: "India", image: null, display: "🇮🇳" },
      { name: "United States", image: null, display: "🇺🇸" },
      { name: "United Kingdom", image: null, display: "🇬🇧" },
      { name: "Canada", image: null, display: "🇨🇦" },
      { name: "Australia", image: null, display: "🇦🇺" },
      { name: "Japan", image: null, display: "🇯🇵" },
      { name: "China", image: null, display: "🇨🇳" },
      { name: "France", image: null, display: "🇫🇷" },
      { name: "Germany", image: null, display: "🇩🇪" },
      { name: "Brazil", image: null, display: "🇧🇷" },
      { name: "Italy", image: null, display: "🇮🇹" },
      { name: "Mexico", image: null, display: "🇲🇽" },
      { name: "Spain", image: null, display: "🇪🇸" },
      { name: "Russia", image: null, display: "🇷🇺" },
      { name: "South Korea", image: null, display: "🇰🇷" },
      { name: "South Africa", image: null, display: "🇿🇦" },
      { name: "Egypt", image: null, display: "🇪🇬" },
      { name: "Kenya", image: null, display: "🇰🇪" },
      { name: "Turkey", image: null, display: "🇹🇷" },
      { name: "Singapore", image: null, display: "🇸🇬" },
    ],
  },
  {
    id: "cartoons",
    label: "Cartoons",
    emoji: "🎬",
    color: "from-fuchsia-400 to-pink-500",
    cards: [
      { name: "Mickey Mouse", image: null, display: "🐭" },
      { name: "Donald Duck", image: null, display: "🦆" },
      { name: "SpongeBob", image: null, display: "🧽" },
      { name: "Superman", image: null, display: "🦸" },
      { name: "Spider-Man", image: null, display: "🕷️" },
      { name: "Batman", image: null, display: "🦇" },
      { name: "Elsa", image: null, display: "❄️" },
      { name: "Pikachu", image: null, display: "⚡" },
      { name: "Nemo", image: null, display: "🐠" },
      { name: "Simba", image: null, display: "🦁" },
      { name: "Buzz Lightyear", image: null, display: "🚀" },
      { name: "Woody", image: null, display: "🤠" },
      { name: "Shrek", image: null, display: "🟢" },
      { name: "Dora", image: null, display: "🎒" },
      { name: "Peppa Pig", image: null, display: "🐷" },
      { name: "Tom and Jerry", image: null, display: "🐱" },
      { name: "Winnie the Pooh", image: null, display: "🐻" },
      { name: "Olaf", image: null, display: "⛄" },
      { name: "Lightning McQueen", image: null, display: "🏎️" },
      { name: "Mario", image: null, display: "🍄" },
    ],
  },
  {
    id: "words",
    label: "Small Words",
    emoji: "📝",
    color: "from-sky-400 to-blue-500",
    cards: [
      { name: "Cat", image: null, display: "🐱" },
      { name: "Dog", image: null, display: "🐶" },
      { name: "Sun", image: null, display: "☀️" },
      { name: "Moon", image: null, display: "🌙" },
      { name: "Star", image: null, display: "⭐" },
      { name: "Car", image: null, display: "🚗" },
      { name: "Bus", image: null, display: "🚌" },
      { name: "Hat", image: null, display: "🎩" },
      { name: "Cup", image: null, display: "🥤" },
      { name: "Pen", image: null, display: "🖊️" },
      { name: "Bed", image: null, display: "🛏️" },
      { name: "Egg", image: null, display: "🥚" },
      { name: "Box", image: null, display: "📦" },
      { name: "Key", image: null, display: "🔑" },
      { name: "Ball", image: null, display: "⚽" },
      { name: "Tree", image: null, display: "🌳" },
      { name: "Book", image: null, display: "📖" },
      { name: "Fish", image: null, display: "🐟" },
      { name: "Cake", image: null, display: "🎂" },
      { name: "Rain", image: null, display: "🌧️" },
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
