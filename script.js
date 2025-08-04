const quotes = [
  "When you’re lost in the darkness, remember who you are.",
  "You can’t change what you are, only what you do.",
  "It’s not about the destination, it’s about the ride.",
  "Loyalty is the foundation of any family.",
  "Sometimes the right path isn’t the easiest one.",
  "The past don’t define your future.",
  "True freedom comes from within.",
  "We all have our ghosts to face.",
  "A man’s word is his bond.",
  "Redemption is a journey, not a destination.",
  "Courage is standing up even when you’re scared.",
  "Family is what you make of it.",
  "Horses teach you patience and trust.",
  "In the end, it’s the choices that define us.",
  "The law is what’s written; honor is what’s in your heart.",
  "There’s no shame in asking for help.",
  "You reap what you sow.",
  "Sometimes you gotta ride alone.",
  "The West is changing, but some things stay the same.",
  "Keep your friends close and your enemies guessing.",
  "A true outlaw has a code.",
  "Every sunset is a chance to start anew.",
  "Respect is earned, not given.",
  "Survival means adapting, not surrendering.",
  "Life’s about the moments that take your breath away.",
  "Don’t let fear dictate your choices.",
  "The road to redemption is paved with sacrifice.",
  "Sometimes silence speaks louder than words.",
  "A legacy is built one day at a time.",
  "Never forget where you came from.",
  "Your scars tell your story.",
  "Hope is the last thing to die.",
  "Even the strongest men need a friend.",
  "Justice isn’t always black and white.",
  "Trust your instincts, but question everything.",
  "The bonds you forge are stronger than any chain.",
  "In the wild, every decision matters.",
  "A good horse is worth more than gold.",
  "Keep your head down and your eyes open.",
  "What’s done can’t be undone, but you can change tomorrow.",
  "Sometimes the greatest strength is knowing when to walk away.",
  "The past is a shadow that follows us all.",
  "Every outlaw has a story worth telling.",
  "True courage is acting despite fear.",
  "The heart can be both a weapon and a shield.",
  "Life’s a gamble; play your hand wisely.",
  "The Wild West isn’t just a place, it’s a state of mind.",
  "In the end, we all want to be remembered.",
  "Never lose sight of what matters most."
];

function getQuote() {
  const quoteEl = document.getElementById("quote");
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteEl.textContent = quotes[randomIndex];
}

function openTab(tabId) {
  const tabs = document.querySelectorAll('.tab');
  tabs.forEach(tab => tab.classList.remove('active-tab'));

  const buttons = document.querySelectorAll('.tab-button');
  buttons.forEach(btn => btn.classList.remove('active'));

  document.getElementById(tabId).classList.add('active-tab');
  document.querySelector(`button[onclick="openTab('${tabId}')"]`).classList.add('active');
}

window.onload = () => {
  getQuote();
  openTab('history');
};