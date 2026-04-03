const events = [
  { time: '17:00 — 17:30', title: 'Сбор гостей', emoji: '🌺', description: 'Встречаем в гавайском стиле!' },
  { time: '17:30 — 19:30', title: 'Анимация', emoji: '🎭', description: 'Приглашённый герой и веселье!' },
  { time: '19:15', title: 'Бумажная дискотека', emoji: '🪩', description: 'Танцуем до упаду!' },
  { time: '20:00', title: 'Вынос торта', emoji: '🎂', description: 'Задуваем свечки!' },
  { time: 'до 21:30', title: 'Веселье продолжается', emoji: '🎉', description: 'Свободное время и общение' },
];

export default function Timeline() {
  return (
    <section className="bg-gradient-to-b from-white via-orange-50 to-white py-16 px-6">
      <div className="max-w-xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#FF6B6B] mb-10 text-center font-comfortaa">
          🌴 Программа
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#FF6B6B] via-[#FFD700] to-[#2ECC71]" />

          {events.map((event, index) => (
            <div key={index} className="relative flex items-start mb-8 last:mb-0">
              {/* Dot */}
              <div className="relative z-10 flex-shrink-0 w-16 h-16 rounded-full bg-white border-4 border-[#FFA07A] flex items-center justify-center text-2xl shadow-md">
                {event.emoji}
              </div>

              {/* Content */}
              <div className="ml-4 pt-1">
                <p className="text-sm font-bold text-[#FF6B6B] font-comfortaa">{event.time}</p>
                <p className="text-lg font-bold text-gray-800 font-comfortaa">{event.title}</p>
                <p className="text-gray-500 text-sm font-comfortaa">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
