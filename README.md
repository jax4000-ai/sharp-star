# Puzzle Star

An interactive A-Z letter puzzle app for toddlers. Kids drag puzzle pieces to match a letter with its picture and word, building early literacy skills through play.

## Live Demo

https://puzzle-star.surge.sh

## Features

- A-Z drag-and-drop puzzle -- each letter has a matching picture (emoji) and word
- 3-piece puzzle assembly -- Letter + Image + Word pieces snap together as the child solves each step
- Voice narration -- "Let's do A!" spoken on every new letter; correct answers read aloud; random encouragement after each completed puzzle
- Toddler-friendly UX -- large puzzle-shaped tiles, generous drop zones, shake animation on wrong answers
- Progress bar -- tracks progress through all 26 letters
- Replay button to hear the letter prompt again

## Encouragement Phrases

After every completed puzzle the app randomly says one of:
"Amazing work!", "You're so smart!", "Fantastic!", "Brilliant!",
"You're a star!", "Wonderful!", "Keep it up!", "You rock!",
"Super job!", "Awesome!", "Well done!", "You did it!",
"That's incredible!", "I'm so proud of you!", "You're doing great!"

## How to Play

1. A letter piece appears on screen with two empty slots
2. Step 1 -- drag the correct picture tile into the image slot
3. Step 2 -- drag the correct word tile into the word slot
4. All 3 pieces lock together -- celebration + voice encouragement
5. Tap Next to move to the next letter

## Tech Stack

- UI: React 19 + Tailwind CSS v4
- Animations: Framer Motion
- Mobile: Capacitor (Android)
- Hosting: Surge.sh

## Getting Started

    npm install        # install dependencies
    npm run dev        # run development server
    npm run build      # build for production
    npx surge dist puzzle-star.surge.sh   # deploy to Surge
    npx cap sync android                  # sync Android
    npx cap open android                  # open Android Studio

## Project Structure

    src/
      LetterPuzzle.jsx   Main puzzle component (A-Z drag-and-drop)
      App.jsx            Original flashcard app
      main.jsx           Entry point (renders LetterPuzzle)
    android/             Capacitor Android project
    public/              Static assets and PWA manifest

## Puzzle Data (A-Z)

A=Apple  B=Ball  C=Cat  D=Dog  E=Elephant
F=Fish   G=Grape H=House I=Ice Cream J=Jungle
K=Kite   L=Lion  M=Monkey N=Nut O=Octopus
P=Pizza  Q=Queen R=Rainbow S=Star T=Tiger
U=Umbrella V=Vanilla W=Whale X=Xylophone
Y=Yacht  Z=Zebra

## License

MIT
