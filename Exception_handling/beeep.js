function beep() {
  let ctx = new (window.AudioContext || window.webkitAudioContext)();
  let oscillator = ctx.createOscillator();
  let gain = ctx.createGain();

  oscillator.type = "sine";        // wave type: sine, square, etc.
  oscillator.frequency.value = 440; // 440Hz = A tone

  oscillator.connect(gain);
  gain.connect(ctx.destination);

  oscillator.start();
  setTimeout(() => oscillator.stop(), 300); // play for 300ms
}

beep(); // call function to play sound
