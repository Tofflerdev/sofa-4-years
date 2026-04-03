const kidsMenu = [
  { emoji: '🧃', name: 'Соки в ассортименте' },
  { emoji: '🍕', name: 'Пицца' },
  { emoji: '🍗', name: 'Наггетсы' },
  { emoji: '🧀', name: 'Сырные палочки' },
  { emoji: '🍟', name: 'Картошка фри' },
];

export default function Menu() {
  return (
    <section className="bg-gradient-to-b from-white to-orange-50 py-16 px-6">
      <div className="max-w-xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#FF6B6B] mb-10 text-center font-comfortaa">
          🍽 Угощения
        </h2>

        {/* Kids menu */}
        <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-3xl p-8 shadow-lg mb-6">
          <h3 className="text-xl font-bold text-gray-800 mb-6 text-center font-comfortaa">
            🧒 Детское меню
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {kidsMenu.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl px-4 py-3 flex items-center gap-3 shadow-sm min-w-0"
              >
                <span className="text-2xl flex-shrink-0">{item.emoji}</span>
                <span className="text-gray-700 font-comfortaa text-sm">{item.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Adults */}
        <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-3xl p-8 shadow-lg mb-6">
          <h3 className="text-xl font-bold text-gray-800 mb-3 text-center font-comfortaa">
            🥂 Для взрослых
          </h3>
          <p className="text-gray-600 text-center leading-relaxed font-comfortaa">
            На 2-м этаже будет накрыт фуршет
            <br />
            с закусками и алкогольными напитками
          </p>
        </div>

        {/* Allergy notice */}
        <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-3xl p-6 shadow-lg text-center">
          <p className="text-2xl mb-3">⚠️</p>
          <p className="text-gray-700 font-comfortaa leading-relaxed">
            Если у вашего ребёнка есть <span className="font-bold text-[#FF6B6B]">пищевые аллергии</span> или
            особые предпочтения в еде — пожалуйста, сообщите нам заранее!
          </p>
        </div>
      </div>
    </section>
  );
}
