export default function Wishlist() {
  return (
    <section className="bg-gradient-to-b from-orange-50 to-white py-16 px-6">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#FF6B6B] mb-6 font-comfortaa">
          🎁 Вишлист
        </h2>

        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 shadow-lg">
          <p className="text-gray-600 leading-relaxed font-comfortaa mb-6">
            Мы составили небольшой список идей для подарков —
            исключительно для удобства тех, кто не знает что подарить.
            <br />
            <span className="text-gray-500 text-sm">
              Совершенно необязательно выбирать подарок из этого списка!
            </span>
          </p>

          <a
            href="https://followish.io/mywishlist/nnokcnq6rpi0sc"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-[#FF6B6B] to-[#FFA07A] text-white px-8 py-3 rounded-full hover:shadow-lg transition-all duration-300 font-comfortaa"
          >
            Открыть вишлист 🎁
          </a>
        </div>
      </div>
    </section>
  );
}
