export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-[#FF6B6B] via-[#FFA07A] to-[#FFD700]">
      {/* Floating decorations */}
      <span className="absolute top-8 left-6 text-5xl animate-float opacity-80 select-none">🌺</span>
      <span className="absolute top-16 right-8 text-4xl animate-float-reverse opacity-80 select-none">🌴</span>
      <span className="absolute bottom-32 left-10 text-4xl animate-sway opacity-70 select-none">🌸</span>
      <span className="absolute bottom-20 right-6 text-5xl animate-float opacity-70 select-none">🍍</span>
      <span className="absolute top-1/3 left-2 text-3xl animate-float-reverse opacity-60 select-none">🌊</span>
      <span className="absolute top-1/4 right-4 text-3xl animate-sway opacity-60 select-none">🦩</span>
      <span className="absolute bottom-48 left-1/2 text-3xl animate-float opacity-50 select-none">🐚</span>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center px-6 py-12 text-center">
        <p className="text-xl md:text-2xl text-white/90 mb-4 animate-fade-in-up font-comfortaa">
          Алоха! 🤙
        </p>

        <div className="relative mb-8 animate-fade-in-up animation-delay-200">
          <div className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-white/80 shadow-2xl animate-pulse-glow">
            <img
              src={import.meta.env.BASE_URL + "photos/hero.webp"}
              alt="Софья Максимовна"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="absolute -bottom-2 -right-2 text-5xl animate-sway">🌺</span>
        </div>

        <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg mb-4 animate-fade-in-up animation-delay-400 font-comfortaa leading-tight">
          Софье Максимовне
          <br />
          <span className="text-[#FFD700] text-5xl md:text-7xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
            4 года!
          </span>
        </h1>

        <p className="text-lg md:text-xl text-white/90 mt-4 animate-fade-in-up animation-delay-600 font-comfortaa">
          Приглашаем на гавайскую вечеринку!
        </p>

        <div className="mt-10 animate-fade-in-up animation-delay-800">
          <a
            href="#details"
            className="inline-block bg-white/20 backdrop-blur-sm text-white px-8 py-3 rounded-full border-2 border-white/50 hover:bg-white/30 transition-all duration-300 text-lg font-comfortaa"
          >
            Узнать подробности 🌴
          </a>
        </div>
      </div>

      {/* Wave bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 60L48 52C96 44 192 28 288 24C384 20 480 28 576 40C672 52 768 68 864 72C960 76 1056 68 1152 56C1248 44 1344 28 1392 20L1440 12V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0V60Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
