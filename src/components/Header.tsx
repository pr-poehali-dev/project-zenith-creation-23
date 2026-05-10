import { Menu, X } from "lucide-react"

interface HeaderProps {
  isMenuOpen: boolean
  setIsMenuOpen: (open: boolean) => void
  scrollToSection: (id: string) => void
}

export function Header({ isMenuOpen, setIsMenuOpen, scrollToSection }: HeaderProps) {
  return (
    <>
      <header className="fixed top-6 left-6 md:w-auto md:right-auto right-6 z-40 border border-white/10 backdrop-blur-md bg-[#0B0C0F]/80 rounded-[16px]">
        <div className="w-full mx-auto px-6">
          <div className="flex items-center gap-6 md:h-14 h-14">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-lg md:text-xl font-semibold font-mono hover:text-pink-400 transition-colors duration-300"
            >
              KILLING FLOOR 3
            </button>

            <nav className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection("metrics")}
                className="text-sm text-[#A7ABB3] hover:text-[#F2F3F5] transition-colors duration-300"
              >
                Статистика
              </button>
              <button
                onClick={() => scrollToSection("map")}
                className="text-sm text-[#A7ABB3] hover:text-[#F2F3F5] transition-colors duration-300"
              >
                Карта зон
              </button>
              <button
                onClick={() => scrollToSection("narrative")}
                className="text-sm text-[#A7ABB3] hover:text-[#F2F3F5] transition-colors duration-300"
              >
                Механики
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="text-sm text-[#A7ABB3] hover:text-[#F2F3F5] transition-colors duration-300"
              >
                FAQ
              </button>
              <button
                onClick={() => scrollToSection("cta")}
                className="text-sm text-[#A7ABB3] hover:text-[#F2F3F5] transition-colors duration-300"
              >
                Играть
              </button>
            </nav>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden ml-auto p-2 hover:bg-white/5 rounded-lg transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {isMenuOpen && (
        <div className="fixed inset-0 bg-[#0B0C0F]/95 backdrop-blur-md z-50 flex flex-col items-start justify-end pb-20 pt-20 px-6">
          <div className="flex flex-col gap-8 items-start text-left w-full">
            <button
              onClick={() => scrollToSection("metrics")}
              className="font-serif text-5xl md:text-7xl font-light text-[#F2F3F5] hover:text-pink-400 transition-colors duration-300"
            >
              Статистика
            </button>
            <button
              onClick={() => scrollToSection("map")}
              className="font-serif text-5xl md:text-7xl font-light text-[#F2F3F5] hover:text-pink-400 transition-colors duration-300"
            >
              Карта зон
            </button>
            <button
              onClick={() => scrollToSection("narrative")}
              className="font-serif text-5xl md:text-7xl font-light text-[#F2F3F5] hover:text-pink-400 transition-colors duration-300"
            >
              Механики
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="font-serif text-5xl md:text-7xl font-light text-[#F2F3F5] hover:text-pink-400 transition-colors duration-300"
            >
              FAQ
            </button>
            <button
              onClick={() => scrollToSection("cta")}
              className="font-serif text-5xl md:text-7xl font-light text-[#F2F3F5] hover:text-pink-400 transition-colors duration-300"
            >
              Играть
            </button>
          </div>
        </div>
      )}
    </>
  )
}
