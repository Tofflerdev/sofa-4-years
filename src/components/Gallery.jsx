const photos = [
  { src: 'photos/hero.webp', alt: 'Софья' },
  { src: 'photos/IMG_20260403_103911_752.webp', alt: 'Софья' },
  { src: 'photos/IMG_20260403_103915_076.webp', alt: 'Софья' },
  { src: 'photos/IMG_20260403_103921_483.webp', alt: 'Софья' },
  { src: 'photos/photo_2026-04-03_10-45-05.webp', alt: 'Софья' },
];

const rotations = ['-rotate-2', 'rotate-2', '-rotate-1', 'rotate-3', '-rotate-2'];

export default function Gallery() {
  return (
    <section className="bg-gradient-to-b from-white to-[#FFF5E6] py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#FF6B6B] mb-10 text-center font-comfortaa">
          🌸 Наша именинница
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {photos.map((photo, index) => (
            <div
              key={index}
              className={`${rotations[index]} hover:rotate-0 transition-transform duration-300 ${
                index === 0 ? 'col-span-2 md:col-span-1' : ''
              }`}
            >
              <div className="bg-white p-2 md:p-3 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img
                  src={import.meta.env.BASE_URL + photo.src}
                  alt={photo.alt}
                  className="w-full aspect-[3/4] object-cover object-top rounded-xl"
                  loading="eager"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
