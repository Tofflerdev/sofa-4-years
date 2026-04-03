export default function DressCode() {
  return (
    <section className="bg-gradient-to-b from-[#FFF5E6] to-white py-16 px-6">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#FF6B6B] mb-6 font-comfortaa">
          👗 Дресс-код
        </h2>

        <div className="bg-gradient-to-br from-cyan-50 to-teal-50 rounded-3xl p-8 shadow-lg">
          <div className="text-6xl mb-6 flex justify-center gap-4">
            <span className="animate-sway">🩴</span>
            <span className="animate-float">🕶</span>
            <span className="animate-sway" style={{ animationDelay: '0.5s' }}>🌺</span>
            <span className="animate-float-reverse">👙</span>
          </div>

          <p className="text-xl md:text-2xl font-bold text-gray-800 mb-4 font-comfortaa">
            Aloha style!
          </p>
          <p className="text-gray-600 text-lg leading-relaxed font-comfortaa">
            Дресс-кода нет — приходите в чём удобно!
            <br />
            <span className="text-[#FF6B6B] font-bold">
              Хоть в купальных костюмах! 🏊‍♀️
            </span>
          </p>
          <p className="text-gray-400 text-sm mt-4 font-comfortaa">
            Гавайские рубашки, цветочные венки и шлёпанцы приветствуются 🤙
          </p>
        </div>
      </div>
    </section>
  );
}
