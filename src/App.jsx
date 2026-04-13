
import React, { useState, useCallback, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CATEGORIES, { LANGUAGES } from "./data";

/* ─── Twemoji: convert emoji char to local SVG path ─── */
function emojiToTwemoji(emoji) {
  const codepoints = [...emoji]
    .map((c) => c.codePointAt(0).toString(16))
    .filter((cp) => cp !== "fe0f")
    .join("-");
  return `/emoji/${codepoints}.svg`;
}
// ...existing code...

/* ─── Text-to-Speech helper ─── */
function speak(text, lang) {
  if ("speechSynthesis" in window) {
    window.speechSynthesis.cancel();
    const synth = window.speechSynthesis;
    const voices = synth.getVoices();
    let voice = null;
    // Malayalam fallback: if no ml-IN, try hi-IN, else default
    if (lang === "ml-IN") {
      voice = voices.find(v => v.lang === "ml-IN");
      if (!voice) voice = voices.find(v => v.lang === "hi-IN");
      if (!voice) voice = voices.find(v => v.lang.startsWith("en"));
      if (!voice && voices.length > 0) voice = voices[0];
    } else {
      voice = voices.find(v => v.lang === lang);
      if (!voice) voice = voices.find(v => v.lang.startsWith(lang.split("-")[0]));
      if (!voice) voice = voices.find(v => v.lang.startsWith("en"));
      if (!voice && voices.length > 0) voice = voices[0];
    }
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.85;
    utterance.pitch = 1.1;
    utterance.lang = (voice && voice.lang) ? voice.lang : lang;
    if (voice) utterance.voice = voice;
    synth.speak(utterance);
  }
}
// ...existing code ends here...

/* ─── Kids shouting "Hurray!" then cheer message ─── */
function playCelebration(cheerText, lang) {
  if ("speechSynthesis" in window) {
    window.speechSynthesis.cancel();
    // First: excited kid shout
    const shout = new SpeechSynthesisUtterance("Hurray!");
    shout.rate = 0.9;
    shout.pitch = 2.0;
    shout.volume = 1.0;
    shout.lang = lang;
    window.speechSynthesis.speak(shout);
    // Then: excited cheer message (queued after hurray)
    if (cheerText) {
      const cheer = new SpeechSynthesisUtterance(cheerText);
      cheer.rate = 1.0;
      cheer.pitch = 1.4;
      cheer.volume = 1.0;
      cheer.lang = lang;
      window.speechSynthesis.speak(cheer);
    }
  }
}

/* ─── Cheer voice (for every 5 cards) ─── */
function speakCheer(text, lang) {
  if ("speechSynthesis" in window) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.9;
    utterance.pitch = 1.5;
    utterance.volume = 1.0;
    utterance.lang = lang;
    window.speechSynthesis.speak(utterance);
  }
}

/* ─── Encouragement phrases ─── */
const CHEERS = [
  "Yay!", "Super!", "Great job!", "Awesome!", "Wow!",
  "Amazing!", "You're a star!", "Fantastic!", "Brilliant!",
  "Well done!", "Hurray!", "Wonderful!", "Keep going!",
  "You rock!", "So smart!",
];
function randomCheer() {
  return CHEERS[Math.floor(Math.random() * CHEERS.length)];
}

/* Unlock audio on iOS — must be called from a user tap */
function unlockAudio() {
  if ("speechSynthesis" in window) {
    const u = new SpeechSynthesisUtterance("");
    u.volume = 0;
    window.speechSynthesis.speak(u);
  }
}

/* ─── Shape SVGs for the shapes category ─── */
function ShapeDisplay({ shape }) {
  const cls = "w-32 h-32";
  switch (shape) {
    case "circle":
      return <div className={`${cls} rounded-full bg-blue-500`} />;
    case "square":
      return <div className={`${cls} rounded-lg bg-red-500`} />;
    case "triangle":
      return (
        <svg viewBox="0 0 100 100" className={cls}>
          <polygon points="50,10 90,90 10,90" fill="#22C55E" />
        </svg>
      );
    case "star":
      return (
        <svg viewBox="0 0 100 100" className={cls}>
          <polygon points="50,5 63,38 98,38 70,60 80,95 50,73 20,95 30,60 2,38 37,38" fill="#EAB308" />
        </svg>
      );
    case "heart":
      return (
        <svg viewBox="0 0 100 100" className={cls}>
          <path d="M50,88 C25,65 5,50 5,30 A22,22,0,0,1,50,30 A22,22,0,0,1,95,30 C95,50 75,65 50,88Z" fill="#EC4899" />
        </svg>
      );
    case "diamond":
      return (
        <svg viewBox="0 0 100 100" className={cls}>
          <polygon points="50,5 95,50 50,95 5,50" fill="#A855F7" />
        </svg>
      );
    case "pentagon":
      // Pentagon points (5 sides)
      return (
        <svg viewBox="0 0 100 100" className={cls}>
          <polygon points="50,10 95,38 79,90 21,90 5,38" fill="#06B6D4" />
        </svg>
      );
    case "hexagon":
      // Hexagon points (6 sides)
      return (
        <svg viewBox="0 0 100 100" className={cls}>
          <polygon points="50,8 93,30 93,70 50,92 7,70 7,30" fill="#F59E42" />
        </svg>
      );
    default:
      return null;
  }
}

/* ─── Card back content (picture side) ─── */
function CardBack({ card }) {
  // Animal/emoji cards: render SVG from emoji
  if (card.display) {
    return (
      <img
        src={emojiToTwemoji(card.display)}
        alt={card.name}
        className="h-full w-full object-contain rounded-3xl"
      />
    );
  }
  if (card.image) {
    return (
      <img
        src={card.image}
        alt={card.name}
        className="h-full w-full object-contain rounded-3xl"
      />
    );
  }
  if (card.hex) {
    return (
      <div className="flex flex-col items-center justify-center gap-3 h-full">
        <div
          className="w-32 h-32 rounded-2xl border-4 border-white/30 shadow-lg"
          style={{ backgroundColor: card.hex }}
        />
        <span className="text-4xl font-bold text-white/80">{card.name}</span>
      </div>
    );
  }
  if (card.shape) {
    return (
      <div className="flex flex-col items-center justify-center gap-3 h-full">
        <ShapeDisplay shape={card.shape} />
      </div>
    );
  }
  return null;
}

// --- App Root ---
export default function App() {
  // All hooks must be at the top, before any return
  const [audioUnlocked, setAudioUnlocked] = useState(false);
  const [started, setStarted] = useState(false);
  const [catIndex, setCatIndex] = useState(0);
  const [done, setDone] = useState(false);
  const [celebrating, setCelebrating] = useState(false);
  const [language, setLanguage] = useState("");

  // Handler to reset to language selection
  const handleChangeLanguage = useCallback(() => {
    setStarted(false);
    setCatIndex(0);
    setDone(false);
    setCelebrating(false);
  }, []);


  // Start only after user selects a language
  const handleLanguageSelect = (e) => {
    const lang = e.target.value;
    setLanguage(lang);
    setStarted(true);
  };

  // Handler for the Tap to Enable Sound button
  const handleEnableSound = () => {
    if ("speechSynthesis" in window) {
      const unlock = new window.SpeechSynthesisUtterance("");
      unlock.volume = 0;
      window.speechSynthesis.speak(unlock);
    }
    setAudioUnlocked(true);
  };
  // Unlock audio after app starts (user gesture)
  // (No longer needed, handled in handleLanguageSelect for iOS reliability)

  const handleCategoryDone = useCallback(() => setCelebrating(true), []);
  const handleCelebrationDone = useCallback(() => {
    setCelebrating(false);
    if (catIndex < CATEGORIES.length - 1) {
      setCatIndex((i) => i + 1);
    } else {
      setDone(true);
    }
  }, [catIndex]);
  const handleRestart = useCallback(() => {
    setCatIndex(0);
    setDone(false);
    setCelebrating(false);
  }, []);

  // App header with Change Language button
  const AppHeader = () => (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={handleChangeLanguage}
        className="px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 font-semibold shadow-lg hover:bg-indigo-200 transition border border-indigo-200"
        style={{ minWidth: 48 }}
      >
        Change Language
      </button>
    </div>
  );

  if (!audioUnlocked) {
    return (
      <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <span className="text-8xl block mb-4">🔊</span>
          <h1 className="text-4xl font-extrabold text-slate-800 mb-2">Sharp Star™</h1>
          <p className="text-slate-500 mb-8">Tap below to enable sound (required on iPhone/iPad)</p>
          <button
            onClick={handleEnableSound}
            className="px-6 py-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold shadow-lg text-xl"
          >
            Tap to Enable Sound
          </button>
        </motion.div>
      </div>
    );
  }

  if (!started) {
    return (
      <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <span className="text-8xl block mb-4">🌟</span>
          <h1 className="text-4xl font-extrabold text-slate-800 mb-2">Sharp Star™</h1>
          <p className="text-slate-500 mb-8">Select a language to start learning!</p>
          <div className="mb-6">
            <label htmlFor="language-select" className="block text-slate-700 font-semibold mb-2">Language:</label>
            <select
              id="language-select"
              value={language}
              onChange={handleLanguageSelect}
              className="px-4 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            >
              <option value="" disabled>Select language…</option>
              {LANGUAGES.map(lang => (
                <option key={lang.code} value={lang.code}>{lang.label}</option>
              ))}
            </select>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-slate-100">
      <AppHeader />
      {done ? (
        <DoneScreen onRestart={handleRestart} language={language} />
      ) : celebrating ? (
        <CelebrationScreen
          category={CATEGORIES[catIndex]}
          onContinue={handleCelebrationDone}
          language={language}
        />
      ) : (
        <FlashcardDeck
          key={catIndex}
          category={CATEGORIES[catIndex]}
          onDone={handleCategoryDone}
          language={language}
        />
      )}
    </div>
  );
}

function getCardTranslation(card, lang) {
  if (card.translations && card.translations[lang]) return card.translations[lang];
  if (card.translations && card.translations["en-US"]) return card.translations["en-US"];
  return card.name;
}

function Flashcard({ card, flipped, onFlip, language }) {
  const displayName = getCardTranslation(card, language);
  return (
    <div
      className="relative w-full aspect-[3/4] max-w-xs mx-auto cursor-pointer"
      style={{ perspective: 1000 }}
      onClick={onFlip}
    >
      <motion.div
        className="absolute inset-0"
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front — Name */}
        <div
          className="absolute inset-0 flex items-center justify-center rounded-3xl bg-white shadow-xl border-4 border-slate-100"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="text-center px-6">
            <h2 className="text-5xl font-extrabold text-slate-800 tracking-tight">
              {displayName}
            </h2>
          </div>
        </div>

        {/* Back — Picture */}
        <div
          className="absolute inset-0 rounded-3xl bg-gradient-to-br from-slate-700 to-slate-900 shadow-xl overflow-hidden"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <CardBack card={card} />
        </div>
      </motion.div>
    </div>
  );
}

/* ─── Flashcard Deck (within a category) ─── */
function FlashcardDeck({ category, onDone, language }) {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const cards = category.cards;
  const timerRef = useRef(null);

  // Translated intro phrase for each language
  function getIntroPhrase(category, lang) {
    // Find language label from LANGUAGES array
    const langObj = LANGUAGES.find(l => l.code === lang);
    const langLabel = langObj ? langObj.label : lang;
    // Always use the same pattern for all categories
    if (lang === "en-US") {
      return `Let's do ${category.label}!`;
    }
    return `Let's do ${category.label} in ${langLabel}!`;
  }

  // Intro: Translated phrase then auto-start, ensure voices loaded
  useEffect(() => {
    if (!showIntro) return;
    let voicesReady = false;
    function doSpeak() {
      speak(getIntroPhrase(category, language), language);
      timerRef.current = setTimeout(() => setShowIntro(false), 3500);
    }
    function handleVoicesChanged() {
      if (!voicesReady) {
        voicesReady = true;
        doSpeak();
      }
    }
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      const voices = window.speechSynthesis.getVoices();
      if (voices && voices.length > 0) {
        doSpeak();
      } else {
        window.speechSynthesis.addEventListener('voiceschanged', handleVoicesChanged);
      }
    } else {
      doSpeak();
    }
    return () => {
      clearTimeout(timerRef.current);
      if (typeof window !== 'undefined' && window.speechSynthesis) {
        window.speechSynthesis.removeEventListener('voiceschanged', handleVoicesChanged);
      }
    };
  }, [showIntro, category, language]);

  // Card auto-play
  useEffect(() => {
    if (showIntro) return;
    setFlipped(false);
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setFlipped(true);
      // Every 5 cards, add encouragement after the name
      const cardWord = getCardTranslation(cards[index], language);
      if (index > 0 && index % 5 === 0) {
        speak(cardWord, language);
        timerRef.current = setTimeout(() => {
          speakCheer(randomCheer(), language);
          timerRef.current = setTimeout(() => {
            if (index < cards.length - 1) {
              setIndex((i) => i + 1);
            } else {
              onDone();
            }
          }, 1200);
        }, 800);
      } else {
        speak(cardWord, language);
        timerRef.current = setTimeout(() => {
          if (index < cards.length - 1) {
            setIndex((i) => i + 1);
          } else {
            onDone();
          }
        }, 1000);
      }
    }, 500);
    return () => clearTimeout(timerRef.current);
  }, [index, cards, showIntro, onDone, language]);

  if (showIntro) {
    return (
      <div className="min-h-screen bg-slate-100 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <span className="text-7xl block mb-4">{category.emoji}</span>
          <h1 className={`text-3xl font-extrabold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
            {getIntroPhrase(category, language)}
          </h1>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-center px-4 py-3">
        <h1 className="text-lg font-bold text-slate-800">
          {category.emoji} {category.label}
        </h1>
      </div>

      {/* Progress */}
      <div className="px-4 mb-2">
        <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
          <span>{index + 1} / {cards.length}</span>
        </div>
        <div className="h-1.5 rounded-full bg-slate-200">
          <motion.div
            className={`h-full rounded-full bg-gradient-to-r ${category.color}`}
            animate={{ width: `${((index + 1) / cards.length) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      {/* Card */}
      <div className="flex-1 flex items-center justify-center px-4 py-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="w-full max-w-xs"
          >
            <Flashcard
              card={cards[index]}
              flipped={flipped}
              onFlip={() => {}}
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

/* ─── Done Screen ─── */
function DoneScreen({ onRestart, language }) {
  useEffect(() => {
    playCelebration("Yay! Great job! You finished everything! You are a super star!", language);
  }, [language]);

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center"
      >
        <motion.span
          className="text-8xl block mb-4"
          animate={{ rotate: [0, -10, 10, -10, 10, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 1, repeat: Infinity, repeatDelay: 1 }}
        >🎉</motion.span>
        <h1 className="text-3xl font-extrabold text-slate-800 mb-2">Yay! Great Job!</h1>
        <p className="text-slate-500 mb-2">You finished all the cards!</p>
        <p className="text-2xl mb-6">👏👏👏 🌟⭐🌟</p>
        <button
          onClick={onRestart}
          className="px-6 py-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold shadow-lg"
        >
          Start Again
        </button>
      </motion.div>
    </div>
  );
}

/* ─── Celebration Screen (between categories) ─── */
function CelebrationScreen({ category, onContinue, language }) {
  const cheer = React.useMemo(() => randomCheer(), []);
  useEffect(() => {
    playCelebration(`${cheer} You finished ${category.label}!`, language);
    const t = setTimeout(onContinue, 7000);
    return () => clearTimeout(t);
  }, [category, onContinue, cheer, language]);

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center"
      >
        <motion.span
          className="text-7xl block mb-4"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 0.6, repeat: 3 }}
        >👏</motion.span>
        <h1 className={`text-3xl font-extrabold bg-gradient-to-r ${category.color} bg-clip-text text-transparent mb-2`}>
          {cheer}
        </h1>
        <p className="text-slate-500 text-lg">You finished {category.label}!</p>
        <p className="text-3xl mt-3">🌟⭐🎉⭐🌟</p>
      </motion.div>
    </div>
  );
}

/* ─── Category Selection Screen ─── */
function CategoryGrid({ onSelect }) {
  return (
    <div className="min-h-screen bg-slate-100 p-4 md:p-8">
      <div className="mx-auto max-w-md">
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-extrabold text-slate-800 tracking-tight">
            🌟 Sharp Star™
          </h1>
          <p className="mt-1 text-sm text-slate-500">Pick a category to start learning!</p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {CATEGORIES.map((cat) => (
            <motion.button
              key={cat.id}
              whileTap={{ scale: 0.95 }}
              onClick={() => onSelect(cat)}
              className={`flex flex-col items-center justify-center gap-2 rounded-2xl bg-gradient-to-br ${cat.color} p-6 text-white shadow-lg hover:shadow-xl transition-shadow`}
            >
              <span className="text-4xl">{cat.emoji}</span>
              <span className="text-sm font-semibold">{cat.label}</span>
              <span className="text-xs opacity-80">{cat.cards.length} cards</span>
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
}

