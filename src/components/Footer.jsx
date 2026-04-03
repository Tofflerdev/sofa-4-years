export default function Footer() {
  return (
    <section className="relative bg-gradient-to-b from-white via-[#FFA07A] to-[#FF6B6B] py-16 px-6 overflow-hidden">
      {/* Floating decorations */}
      <span className="absolute top-8 left-6 text-4xl animate-float opacity-60 select-none">🌴</span>
      <span className="absolute top-12 right-8 text-3xl animate-float-reverse opacity-60 select-none">🌺</span>
      <span className="absolute bottom-8 left-1/4 text-3xl animate-sway opacity-50 select-none">🐚</span>
      <span className="absolute bottom-12 right-1/4 text-3xl animate-float opacity-50 select-none">🦩</span>

      <div className="relative z-10 max-w-xl mx-auto text-center">
        <p className="text-5xl mb-6">🎉</p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-comfortaa drop-shadow-lg">
          Ждём вас!
        </h2>
        <p className="text-white/90 text-lg mb-8 font-comfortaa">
          Будет весело, тропически и незабываемо!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+70000000000"
            className="inline-block bg-white text-[#FF6B6B] px-8 py-3 rounded-full font-bold hover:shadow-lg transition-all duration-300 font-comfortaa"
          >
            Позвонить 📞
          </a>
          <a
            href="https://t.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white/20 backdrop-blur-sm text-white px-8 py-3 rounded-full border-2 border-white/50 font-bold hover:bg-white/30 transition-all duration-300 font-comfortaa"
          >
            Написать в Telegram ✈️
          </a>
        </div>

        <p className="text-white/60 text-sm mt-12 font-comfortaa">
          8 мая 2026 · Лофт Leon · Коммунарка
        </p>
      </div>

      {/* Wave top */}
      <div className="absolute top-0 left-0 right-0 rotate-180">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 30L48 26C96 22 192 14 288 12C384 10 480 14 576 20C672 26 768 34 864 36C960 38 1056 34 1152 28C1248 22 1344 14 1392 10L1440 6V60H1392C1344 60 1248 60 1152 60C1056 60 960 60 864 60C768 60 672 60 576 60C480 60 384 60 288 60C192 60 96 60 48 60H0V30Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
