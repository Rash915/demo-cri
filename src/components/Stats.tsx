import { stats } from '../data';

export default function Stats() {
  return (
    <section className="py-8 sm:py-12 bg-white border-y w-full" style={{ borderColor: 'var(--border)' }}>
      <div className="w-full px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center group">
              <div className="text-2xl sm:text-3xl mb-1 sm:mb-2">{stat.icon}</div>
              <div
                className="text-2xl sm:text-3xl md:text-4xl font-bold mb-0.5 sm:mb-1"
                style={{ fontFamily: 'DM Serif Display, serif', color: 'var(--primary)' }}
              >
                {stat.value}
              </div>
              <div className="text-gray-500 text-xs sm:text-sm font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
