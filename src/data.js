/*
  Smart David — Flashcard Data

  Each category has an array of cards.
  Each card has:
    - name: the word shown on the front
    - image: a URL shown on the back (using public-domain / free illustrations)

  To add your own pictures, drop images into public/images/ and reference them
  like "/images/my-photo.jpg", or paste any URL.
*/

const CATEGORIES = [
  {
    id: "animals",
    label: "Animals",
    emoji: "🐾",
    color: "from-amber-400 to-orange-500",
    cards: [
      { name: "Dog", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/YellowLabradorLooking_new.jpg/1200px-YellowLabradorLooking_new.jpg" },
      { name: "Cat", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/1200px-Cat_November_2010-1a.jpg" },
      { name: "Elephant", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/African_Bush_Elephant.jpg/1200px-African_Bush_Elephant.jpg" },
      { name: "Lion", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Lion_waiting_in_Namibia.jpg/1200px-Lion_waiting_in_Namibia.jpg" },
      { name: "Fish", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Georgia_Aquarium_-_Giant_Grouper_edit.jpg/1200px-Georgia_Aquarium_-_Giant_Grouper_edit.jpg" },
      { name: "Bird", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Eopsaltria_australis_-_Mogo_Campground.jpg/1200px-Eopsaltria_australis_-_Mogo_Campground.jpg" },
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
    ],
  },
  {
    id: "fruits",
    label: "Fruits",
    emoji: "🍎",
    color: "from-green-400 to-emerald-500",
    cards: [
      { name: "Apple", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Red_Apple.jpg/800px-Red_Apple.jpg" },
      { name: "Banana", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Banana-Single.jpg/800px-Banana-Single.jpg" },
      { name: "Orange", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Orange-Fruit-Pieces.jpg/800px-Orange-Fruit-Pieces.jpg" },
      { name: "Grapes", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Table_grapes_on_vine.jpg/800px-Table_grapes_on_vine.jpg" },
      { name: "Strawberry", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/PerfectStrawberry.jpg/800px-PerfectStrawberry.jpg" },
      { name: "Watermelon", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Taiwan_2009_Tainan_City_Fruit_Selling_Street_Vendor_FRD_7958.jpg/800px-Taiwan_2009_Tainan_City_Fruit_Selling_Street_Vendor_FRD_7958.jpg" },
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
    ],
  },
  {
    id: "numbers",
    label: "Numbers",
    emoji: "🔢",
    color: "from-violet-400 to-indigo-500",
    cards: [
      { name: "1", image: null, display: "1️⃣" },
      { name: "2", image: null, display: "2️⃣" },
      { name: "3", image: null, display: "3️⃣" },
      { name: "4", image: null, display: "4️⃣" },
      { name: "5", image: null, display: "5️⃣" },
      { name: "6", image: null, display: "6️⃣" },
      { name: "7", image: null, display: "7️⃣" },
      { name: "8", image: null, display: "8️⃣" },
      { name: "9", image: null, display: "9️⃣" },
      { name: "10", image: null, display: "🔟" },
    ],
  },
];

export default CATEGORIES;
