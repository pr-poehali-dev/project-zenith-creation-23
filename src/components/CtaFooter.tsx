import { Button } from "@/components/ui/button"
import { Youtube, Instagram } from "lucide-react"

export function CtaFooter() {
  return (
    <>
      <section
        id="cta"
        className="relative py-24 md:py-40 px-4 animate-on-scroll overflow-hidden pt-0"
        style={{
          backgroundImage: `url('/earth-cta.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0C0F] via-[#0B0C0F]/60 to-transparent pointer-events-none" />
        <div className="max-w-[800px] w-full mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 glass-pill px-4 py-2 rounded-full mb-8 text-xs md:text-sm text-[#A7ABB3]">
            <span className="w-1.5 h-1.5 rounded-full bg-pink-400 animate-pulse" />
            Готов к бою?
          </div>

          <h2 className="font-serif text-[40px] leading-[1.15] md:text-[64px] md:leading-[1.1] font-medium mb-6 text-balance">
            Вступи в отряд выживших
          </h2>
          <p className="text-[#A7ABB3] text-base md:text-lg mb-10 leading-relaxed max-w-[560px] mx-auto">
            Миллионы игроков уже сражаются с ордами зедов. Твоя команда ждёт тебя прямо сейчас.
          </p>

          <Button className="glass-button text-base rounded-full bg-white/5 border border-white/20 hover:bg-white/15 hover:border-white/30 transition-all duration-300 text-white px-8 py-6 md:text-base">
            Играть сейчас
          </Button>
        </div>
      </section>

      <footer className="relative px-4 border-t border-white/5 py-8">
        <div className="max-w-[1120px] w-full mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-12">
            {/* Brand Column */}
            <div className="flex flex-col gap-4">
              <div className="text-lg font-semibold font-mono">KILLING FLOOR 3</div>
              <p className="text-xs text-[#A7ABB3] leading-relaxed">
                Кооперативный шутер на выживание. Сражайся с ордами зедов вместе с командой.
              </p>
              <div className="flex items-center gap-4 mt-2">
                <a
                  href="#"
                  className="text-[#A7ABB3] hover:text-[#F2F3F5] transition-colors"
                  aria-label="X (Twitter)"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-[#A7ABB3] hover:text-[#F2F3F5] transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="text-[#A7ABB3] hover:text-[#F2F3F5] transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Product Menu */}
            <div className="flex flex-col gap-4">
              <div className="text-xs uppercase tracking-[0.15em] text-[#F2F3F5] font-semibold mb-2">Игра</div>
              <div className="flex flex-col gap-3">
                <a href="#" className="text-sm text-[#A7ABB3] hover:text-[#F2F3F5] transition-colors">
                  Механики
                </a>
                <a href="#" className="text-sm text-[#A7ABB3] hover:text-[#F2F3F5] transition-colors">
                  Классы
                </a>
                <a href="#" className="text-sm text-[#A7ABB3] hover:text-[#F2F3F5] transition-colors">
                  Карты
                </a>
                <a href="#" className="text-sm text-[#A7ABB3] hover:text-[#F2F3F5] transition-colors">
                  Патч-ноуты
                </a>
              </div>
            </div>

            {/* Community Menu */}
            <div className="flex flex-col gap-4">
              <div className="text-xs uppercase tracking-[0.15em] text-[#F2F3F5] font-semibold mb-2">Сообщество</div>
              <div className="flex flex-col gap-3">
                <a href="#" className="text-sm text-[#A7ABB3] hover:text-[#F2F3F5] transition-colors">
                  Discord
                </a>
                <a href="#" className="text-sm text-[#A7ABB3] hover:text-[#F2F3F5] transition-colors">
                  Reddit
                </a>
                <a href="#" className="text-sm text-[#A7ABB3] hover:text-[#F2F3F5] transition-colors">
                  Турниры
                </a>
                <a href="#" className="text-sm text-[#A7ABB3] hover:text-[#F2F3F5] transition-colors">
                  Контакты
                </a>
              </div>
            </div>

            {/* Newsletter */}
            <div className="flex flex-col gap-4">
              <div className="text-xs uppercase tracking-[0.15em] text-[#F2F3F5] font-semibold mb-2">Рассылка</div>
              <p className="text-xs text-[#A7ABB3] mb-3">Получайте новости об обновлениях и ивентах игры.</p>
              <div className="flex flex-col gap-2">
                <input
                  type="email"
                  placeholder="Введите email"
                  className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-xs text-[#F2F3F5] placeholder-[#A7ABB3] focus:outline-none focus:border-pink-400/50 focus:ring-1 focus:ring-pink-400/20 transition-all"
                />
                <button className="px-4 py-2 border rounded-lg text-xs font-medium hover:bg-pink-500/30 hover:border-pink-500/50 transition-all bg-green-800 border-green-700 text-white">
                  Подписаться
                </button>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#A7ABB3]">
            <div>2025 Killing Floor 3. Tripwire Interactive. Все права защищены.</div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-[#F2F3F5] transition-colors">
                Политика конфиденциальности
              </a>
              <a href="#" className="hover:text-[#F2F3F5] transition-colors">
                Условия использования
              </a>
              <a href="#" className="hover:text-[#F2F3F5] transition-colors">
                Настройки cookie
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
