import { useState, useEffect } from 'react';

const PARTY_DATE = new Date('2026-05-08T17:00:00+03:00');

function getTimeLeft() {
  const now = new Date();
  const diff = PARTY_DATE - now;

  if (diff <= 0) return null;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return { days, hours, minutes, seconds };
}

function CountdownUnit({ value, label }) {
  return (
    <div className="flex flex-col items-center mx-2 md:mx-4">
      <div className="bg-gradient-to-b from-[#FF6B6B] to-[#FFA07A] text-white text-3xl md:text-5xl font-bold rounded-2xl w-16 h-16 md:w-20 md:h-20 flex items-center justify-center shadow-lg font-comfortaa">
        {String(value).padStart(2, '0')}
      </div>
      <span className="text-sm md:text-base text-gray-600 mt-2 font-comfortaa">{label}</span>
    </div>
  );
}

export default function Details() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft);

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  const yandexMapsUrl = 'https://yandex.ru/maps/org/loft_leon/52369192691/';

  return (
    <section id="details" className="bg-white py-16 px-6">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#FF6B6B] mb-8 font-comfortaa">
          🌺 Когда и где?
        </h2>

        <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-3xl p-8 shadow-lg mb-8">
          <p className="text-2xl md:text-3xl font-bold text-gray-800 mb-2 font-comfortaa">
            8 мая 2026
          </p>
          <p className="text-lg text-gray-600 font-comfortaa">
            Четверг, начало в 17:00
          </p>
        </div>

        {timeLeft && (
          <div className="mb-10">
            <p className="text-gray-500 mb-4 font-comfortaa">До вечеринки осталось:</p>
            <div className="flex justify-center">
              <CountdownUnit value={timeLeft.days} label="дней" />
              <CountdownUnit value={timeLeft.hours} label="часов" />
              <CountdownUnit value={timeLeft.minutes} label="минут" />
              <CountdownUnit value={timeLeft.seconds} label="секунд" />
            </div>
          </div>
        )}

        <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-3xl p-8 shadow-lg">
          <p className="text-xl font-bold text-gray-800 mb-2 font-comfortaa">
            🏝 Лофт Leon
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed font-comfortaa text-sm md:text-base">
            Москва, Новомосковский административный округ,
            <br />
            район Коммунарка,
            <br />
            Скандинавский бульвар, 5, корп. 2
          </p>
          <a
            href={yandexMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-[#FF6B6B] to-[#FFA07A] text-white px-6 py-3 rounded-full hover:shadow-lg transition-all duration-300 font-comfortaa"
          >
            Открыть на карте 🗺
          </a>
        </div>
      </div>
    </section>
  );
}
