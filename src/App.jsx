import React, { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, RotateCcw, ChevronLeft } from "lucide-react";
import CATEGORIES from "./data";

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
    default:
      return null;
  }
}

/* ─── Card back content (picture side) ─── */
function CardBack({ card }) {
  if (card.image) {
    return (
      <img
        src={card.image}
        alt={card.name}
        className="h-full w-full object-cover rounded-3xl"
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
  if (card.display) {
    return (
      <div className="flex items-center justify-center h-full">
        <span className="text-[6rem] leading-none">{card.display}</span>
      </div>
    );
  }
  return null;
}

/* ─── Single Flashcard ─── */
function Flashcard({ card, flipped, onFlip }) {
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
            <p className="text-sm text-slate-400 mb-2">Tap to reveal</p>
            <h2 className="text-5xl font-extrabold text-slate-800 tracking-tight">
              {card.name}
            </h2>
          </div>
        </div>

        {/* Back — Picture */}
        <div
          className="absolute inset-0 rounded-3xl bg-gradient-to-br from-slate-700 to-slate-900 shadow-xl overflow-hidden"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <CardBack card={card} />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
            <p className="text-center text-2xl font-bold text-white">{card.name}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

/* ─── Flashcard Deck (within a category) ─── */
function FlashcardDeck({ category, onBack }) {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const cards = category.cards;

  const goNext = useCallback(() => {
    setFlipped(false);
    setIndex((i) => (i + 1) % cards.length);
  }, [cards.length]);

  const goPrev = useCallback(() => {
    setFlipped(false);
    setIndex((i) => (i - 1 + cards.length) % cards.length);
  }, [cards.length]);

  const reset = useCallback(() => {
    setFlipped(false);
    setIndex(0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col">
      {/* Toolbar */}
      <div className="flex items-center justify-between px-4 py-3">
        <button
          onClick={onBack}
          className="flex items-center gap-1 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
        >
          <ChevronLeft className="h-5 w-5" />
          Back
        </button>
        <h1 className="text-lg font-bold text-slate-800">
          {category.emoji} {category.label}
        </h1>
        <button
          onClick={reset}
          className="text-slate-500 hover:text-slate-800 transition-colors"
        >
          <RotateCcw className="h-5 w-5" />
        </button>
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
              onFlip={() => setFlipped((f) => !f)}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Nav buttons */}
      <div className="flex items-center justify-center gap-6 pb-8">
        <button
          onClick={goPrev}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-md text-slate-600 hover:bg-slate-50 transition-colors"
        >
          <ArrowLeft className="h-6 w-6" />
        </button>
        <button
          onClick={goNext}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 shadow-md text-white hover:opacity-90 transition-opacity"
        >
          <ArrowRight className="h-6 w-6" />
        </button>
      </div>
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
            🧒🏽 Smart David
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

/* ─── App Root ─── */
export default function App() {
  const [activeCategory, setActiveCategory] = useState(null);

  if (activeCategory) {
    return (
      <FlashcardDeck
        category={activeCategory}
        onBack={() => setActiveCategory(null)}
      />
    );
  }

  return <CategoryGrid onSelect={setActiveCategory} />;
}
