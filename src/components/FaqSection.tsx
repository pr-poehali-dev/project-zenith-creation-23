import { ChevronDown } from "lucide-react"

interface FaqSectionProps {
  openFaqIndex: number | null
  setOpenFaqIndex: (i: number | null) => void
}

const faqs = [
  {
    question: "Что такое Killing Floor 3?",
    answer:
      "Killing Floor 3 — кооперативный шутер на выживание от Tripwire Interactive. До 6 игроков сражаются против орд биомеханических мутантов — зедов. Игра предлагает напряжённый волновой геймплей, богатый арсенал и систему прокачки персонажей.",
  },
  {
    question: "На каких платформах доступна игра?",
    answer:
      "Killing Floor 3 выходит на PC (Steam), PlayStation 5 и Xbox Series X|S. Все версии поддерживают кросс-плей, чтобы игроки с разных платформ могли сражаться вместе.",
  },
  {
    question: "Сколько игроков поддерживает кооп?",
    answer:
      "Основной режим поддерживает до 6 игроков в кооперативе. Также есть одиночный режим для тех, кто хочет испытать себя в одиночку. Система подбора игроков находит союзников автоматически.",
  },
  {
    question: "Какие классы (перки) есть в игре?",
    answer:
      "В Killing Floor 3 более 10 уникальных классов: Берсерк (ближний бой), Коммандо (штурмовые винтовки), Снайпер, Подрывник, Огнемётчик, Медик, Шантажист и другие. Каждый класс имеет уникальное дерево навыков.",
  },
  {
    question: "Есть ли в игре PvP-режим?",
    answer:
      "Основной фокус Killing Floor 3 — кооперативное PvE-выживание. Режим Versus позволяет одним игрокам управлять зедами против другой команды выживших, создавая уникальный асимметричный PvP-опыт.",
  },
  {
    question: "Есть ли микротранзакции?",
    answer:
      "В игре есть косметические предметы (скины, наряды) приобретаемые за внутриигровую валюту или реальные деньги. Всё игровое оружие и перки прокачиваются исключительно через геймплей — pay-to-win отсутствует.",
  },
]

export function FaqSection({ openFaqIndex, setOpenFaqIndex }: FaqSectionProps) {
  return (
    <section id="faq" className="relative py-20 md:py-32 px-4 animate-on-scroll">
      <div className="max-w-[800px] w-full mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <div className="text-[10px] md:text-xs uppercase tracking-[0.15em] text-[#A7ABB3] mb-6 flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-pink-400 animate-pulse" />
            ЧАСТЫЕ ВОПРОСЫ
          </div>
          <h2 className="font-serif text-[32px] leading-[1.15] md:text-[48px] md:leading-[1.1] font-medium mb-6 text-balance">
            Есть{" "}
            <span
              className="inline-block"
              style={{
                background: "linear-gradient(135deg, #d9a7c7 0%, #fffcdc 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              вопросы
            </span>
            ?
          </h2>
          <p className="text-[#A7ABB3] text-sm md:text-base max-w-[600px] mx-auto leading-relaxed">
            Всё, что нужно знать о Killing Floor 3 перед тем, как вступить в бой.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-white/10 rounded-xl overflow-hidden transition-all duration-300 hover:border-white/20"
            >
              <button
                onClick={() => setOpenFaqIndex(openFaqIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="text-base md:text-lg font-medium pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 flex-shrink-0 text-[#A7ABB3] transition-transform duration-300 ${
                    openFaqIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openFaqIndex === i ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="px-6 pb-6 text-sm md:text-base text-[#A7ABB3] leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
