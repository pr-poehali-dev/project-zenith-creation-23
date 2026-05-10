import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { AnimatedText } from "@/components/animated-text"
import { WorldMap } from "@/components/world-map"
import { experiences } from "@/lib/experience-data"
import Icon from "@/components/ui/icon"
import type { Experience } from "@/lib/experience-data"

function AnimatedCounter({ value }: { value: string }) {
  const [displayValue, setDisplayValue] = useState("0")
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const numericStr = value.replace(/[^0-9.]/g, "")
          const targetNum = Number.parseFloat(numericStr)
          const unit = value.replace(/[0-9.]/g, "")

          let current = 0
          const increment = targetNum / 60
          const interval = setInterval(() => {
            current += increment
            if (current >= targetNum) {
              setDisplayValue(`${targetNum}${unit}`)
              clearInterval(interval)
            } else {
              setDisplayValue(`${current.toFixed(1)}${unit}`.replace(".0", ""))
            }
          }, 16)

          observer.disconnect()
        }
      },
      { threshold: 0.5 },
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [value])

  return (
    <div className="text-8xl" ref={ref}>
      {displayValue}
    </div>
  )
}

interface HeroSectionProps {
  isLoaded: boolean
  scrollY: number
  dashboardRef: React.RefObject<HTMLDivElement>
  heroRef: React.RefObject<HTMLDivElement>
  dashboardScrollOffset: number
  dynamicWordIndex: number
  wordFade: boolean
  dynamicWords: string[]
  selectedFeature: number
  imageFade: boolean
  setSelectedFeature: (i: number) => void
  setImageFade: (v: boolean) => void
  setAutoRotationKey: (fn: (prev: number) => number) => void
  selectedExperience: Experience | null
  setSelectedExperience: (e: Experience | null) => void
}

export function HeroSection({
  isLoaded,
  scrollY,
  dashboardRef,
  heroRef,
  dashboardScrollOffset,
  dynamicWordIndex,
  wordFade,
  dynamicWords,
  selectedFeature,
  imageFade,
  setSelectedFeature,
  setImageFade,
  setAutoRotationKey,
  selectedExperience,
  setSelectedExperience,
}: HeroSectionProps) {
  return (
    <>
      {/* Hero */}
      <section
        ref={heroRef}
        className={`relative min-h-screen flex flex-col items-center justify-center px-4 pt-24 pb-16 md:pt-32 md:pb-24 transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden ${isLoaded ? "scale-100 opacity-100" : "scale-[1.03] opacity-0"}`}
        style={{
          backgroundImage: `url('https://cdn.poehali.dev/projects/886e95cb-d62d-423e-938d-fde33fec4e33/files/c0832032-1151-4f19-8cf2-38c4e3e5c625.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
            backgroundImage: `url('https://cdn.poehali.dev/projects/886e95cb-d62d-423e-938d-fde33fec4e33/files/c0832032-1151-4f19-8cf2-38c4e3e5c625.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C0F] via-[#0B0C0F]/70 to-transparent pointer-events-none" />

        <div
          className="max-w-[1120px] w-full mx-auto relative z-10"
          style={{
            transform: `translateY(${scrollY * 0.2}px)`,
          }}
        >
          <div className="text-center mb-8 md:mb-12">
            <h1 className="font-serif text-[44px] leading-[1.1] md:text-[72px] md:leading-[1.05] font-medium mb-6 text-balance">
              <span
                className={`block stagger-reveal text-7xl font-light transition-all duration-500 md:text-8xl ${
                  wordFade ? "opacity-100 blur-0" : "opacity-0 blur-lg"
                }`}
              >
                Уничтожь <AnimatedText key={dynamicWordIndex} text={dynamicWords[dynamicWordIndex]} delay={0} />
              </span>
              <span className="block stagger-reveal text-7xl font-light md:text-8xl" style={{ animationDelay: "90ms" }}>
                любой ценой
              </span>
            </h1>
            <p
              className="text-[#A7ABB3] text-base md:text-lg max-w-[520px] mx-auto mb-8 leading-relaxed stagger-reveal text-white"
              style={{ animationDelay: "180ms" }}
            >
              Кооперативный шутер на выживание нового поколения. Сражайся с ордами мутантов, прокачивай перки и держись до последнего вместе с командой.
            </p>
            <div className="stagger-reveal" style={{ animationDelay: "270ms" }}>
              <Button className="glass-button px-8 py-6 text-base rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 text-white">
                Играть сейчас
              </Button>
            </div>
          </div>

          <div className="mt-12 md:mt-20 stagger-reveal" style={{ animationDelay: "360ms" }} ref={dashboardRef}>
            <div style={{ perspective: "1200px" }}>
              <div
                className="relative aspect-[16/10] md:aspect-[16/9] rounded-[24px] overflow-hidden"
                style={{
                  transform: `rotateX(${dashboardScrollOffset}deg)`,
                  transformStyle: "preserve-3d",
                  transition: "transform 0.05s linear",
                }}
              >
                <img
                  src="/dashboard-screenshot.png"
                  alt="Панель мониторинга KILLING FLOOR 3"
                  className="object-cover dashboard-image w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logos marquee */}
      <section className="relative py-12 border-y border-white/5 bg-[#0B0C0F] overflow-hidden md:py-8 md:pt-8 md:pb-4">
        <div className="w-full">
          <p className="text-center text-xs md:text-sm uppercase tracking-[0.2em] text-[#A7ABB3] mb-8">
            Доступно на платформах
          </p>
          <div className="logo-marquee">
            <div className="logo-marquee-content">
              {[
                "/logos/frame-11.png",
                "/logos/frame-55.png",
                "/logos/frame-4.png",
                "/logos/frame-6.png",
                "/logos/frame-8.png",
                "/logos/frame-2.png",
                "/logos/frame-3.png",
                "/logos/frame-7.png",
                "/logos/frame-11.png",
                "/logos/frame-55.png",
                "/logos/frame-4.png",
                "/logos/frame-6.png",
                "/logos/frame-8.png",
                "/logos/frame-2.png",
                "/logos/frame-3.png",
                "/logos/frame-7.png",
              ].map((logo, i) => (
                <div key={i} className="px-8 md:px-12 flex items-center justify-center flex-shrink-0">
                  <img
                    src={logo || "/placeholder.svg"}
                    alt={`Логотип партнера ${i + 1}`}
                    className="h-32 md:h-24 w-auto object-contain opacity-60 hover:opacity-60 transition-all duration-300 brightness-0 invert"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section id="metrics" className="relative py-20 md:py-32 px-4 animate-on-scroll md:pt-24 md:pb-20">
        <div className="max-w-[1120px] w-full mx-auto">
          <h2 className="font-serif text-[32px] leading-[1.15] md:text-[48px] md:leading-[1.1] font-medium mb-6 md:mb-8 text-center text-balance">
            Боевая{" "}
            <span
              className="inline-block"
              style={{
                background: "linear-gradient(135deg, #d9a7c7 0%, #fffcdc 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              статистика
            </span>{" "}
            в цифрах
          </h2>

          <p className="text-[#A7ABB3] text-sm md:text-base mb-12 md:mb-16 text-center max-w-[600px] mx-auto leading-relaxed">
            Миллионы игроков по всему миру уже сражаются с ордами зедов. Твой отряд ждёт.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 max-w-[800px] mx-auto">
            {[
              { label: "ИГРОКОВ В СЕТИ", value: "4.2M", desc: "активных бойцов", color: "pink" },
              { label: "ЗЕДОВ УНИЧТОЖЕНО", value: "18B+", desc: "мутантов за всё время", color: "purple" },
              { label: "КАРТ В ИГРЕ", value: "24+", desc: "уникальных локаций", color: "pink" },
              { label: "РЕЙТИНГ ИГРОКОВ", value: "96%", desc: "положительных отзывов", color: "purple" },
            ].map((metric, i) => (
              <div
                key={i}
                className="p-6 md:p-10 text-center border border-white/10 border-t-0 border-b border-l-0 border-r-0 md:py-10 md:pb-20"
              >
                <div
                  className={`text-[10px] md:text-xs uppercase tracking-[0.15em] text-[#A7ABB3] mb-4 flex items-center justify-center gap-2`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${metric.color === "pink" ? "bg-pink-400/60" : "bg-purple-400/60"}`}
                  />
                  {metric.label}
                </div>
                <div className="font-serif text-[48px] md:text-[72px] leading-none font-medium">
                  <AnimatedCounter value={metric.value} />
                </div>
                <div className="text-[11px] md:text-xs text-[#A7ABB3] mt-3">{metric.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map */}
      <section id="map" className="relative py-20 md:py-32 animate-on-scroll bg-[#0B0C0F]">
        <div className="text-center mb-12 md:mb-16 px-4">
          <div className="text-[10px] md:text-xs uppercase tracking-[0.15em] text-[#A7ABB3] mb-6 flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-pink-400 animate-pulse" />
            АКТИВНЫЕ ЗОНЫ ЗАРАЖЕНИЯ
          </div>
          <h2 className="font-serif text-[32px] leading-[1.15] md:text-[48px] md:leading-[1.1] font-medium mb-6 text-balance">
            Карта активных зон
          </h2>
          <p className="text-[#A7ABB3] text-sm md:text-base max-w-[600px] mx-auto leading-relaxed">
            Зеды захватили города по всему миру. Выбери зону и вступи в бой вместе с отрядом
          </p>
        </div>

        <WorldMap
          experiences={experiences}
          selectedExperience={selectedExperience}
          onSelectExperience={setSelectedExperience}
        />
      </section>

      {/* Narrative */}
      <section id="narrative" className="relative py-20 md:py-32 px-4 animate-on-scroll">
        <div className="max-w-[1120px] w-full mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-stretch">
            <div className="max-w-[720px]">
              <div className="text-[10px] md:text-xs uppercase tracking-[0.15em] text-[#A7ABB3] mb-6 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-pink-400 animate-pulse" />
                ИГРОВЫЕ МЕХАНИКИ
              </div>
              <h2 className="font-serif text-[36px] leading-[1.15] md:text-[56px] md:leading-[1.1] font-medium mb-8 text-balance">
                Каждый бой{" "}
                <span
                  className="inline-block"
                  style={{
                    background: "linear-gradient(135deg, #d9a7c7 0%, #fffcdc 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  уникален
                </span>
              </h2>
              <p className="text-[#A7ABB3] text-base md:text-lg leading-relaxed mb-12">
                Killing Floor 3 предлагает динамичный кооп на 6 игроков, десятки классов с уникальными перками, разрушаемое окружение и сотни видов оружия. Каждая волна зедов — новый вызов.
              </p>

              <div className="md:hidden mb-8">
                <div className="rounded-[24px] p-1 w-full aspect-square overflow-hidden">
                  <img
                    src={
                      [
                        "/drone.png",
                        "/real-time-satellite.png",
                        "/biodiversity-tracking.png",
                        "/deforestation-detect.png",
                      ][selectedFeature] || "/placeholder.svg"
                    }
                    alt="Превью функции"
                    className={`w-full h-full object-cover rounded-[20px] transition-opacity duration-300 ${
                      imageFade ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </div>
              </div>

              <div className="space-y-6">
                {[
                  {
                    title: "Кооп до 6 игроков",
                    desc: "Сражайся в команде с друзьями или незнакомцами — координация решает всё",
                    iconName: "Users",
                    image: "/drone.png",
                  },
                  {
                    title: "Система перков",
                    desc: "10+ уникальных классов: Берсерк, Снайпер, Подрывник, Медик и другие",
                    iconName: "Zap",
                    image: "/real-time-satellite.png",
                  },
                  {
                    title: "Волновой геймплей",
                    desc: "Уничтожай волны зедов и готовься к боссу в конце каждого раунда",
                    iconName: "Swords",
                    image: "/biodiversity-tracking.png",
                  },
                  {
                    title: "Арсенал оружия",
                    desc: "Сотни видов оружия: от дробовиков до плазменных пушек",
                    iconName: "Target",
                    image: "/deforestation-detect.png",
                  },
                ].map((feature, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setImageFade(false)
                      setTimeout(() => {
                        setSelectedFeature(i)
                        setImageFade(true)
                        setAutoRotationKey((prev) => prev + 1)
                      }, 300)
                    }}
                    className={`relative w-full text-left flex gap-4 items-start p-5 transition-all duration-300 rounded-xs py-4 overflow-hidden ${
                      selectedFeature === i ? "border border-white/20" : "border border-white/10"
                    }`}
                  >
                    <Icon
                      name={feature.iconName}
                      fallback="CircleAlert"
                      className={`w-6 h-6 flex-shrink-0 mt-1 transition-colors ${
                        selectedFeature === i ? "text-pink-400" : "text-pink-500/60"
                      }`}
                    />
                    <div className="flex-1">
                      <h3 className="text-base md:text-lg font-medium mb-1">{feature.title}</h3>
                      <p className="text-sm md:text-base text-[#A7ABB3]">{feature.desc}</p>
                    </div>
                    {selectedFeature === i && (
                      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/10">
                        <div className="h-full bg-white progress-bar" />
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            <div className="hidden md:flex items-stretch justify-center">
              <div className="relative w-full h-full min-h-[500px]">
                {[
                  { title: "Кооп до 6 игроков", image: "/drone.png" },
                  { title: "Система перков", image: "/real-time-satellite.png" },
                  { title: "Волновой геймплей", image: "/biodiversity-tracking.png" },
                  { title: "Арсенал оружия", image: "/deforestation-detect.png" },
                ].map((feature, i) => {
                  const positionInStack = (i - selectedFeature + 4) % 4
                  const isActive = positionInStack === 0

                  return (
                    <div
                      key={i}
                      className="absolute inset-0 p-1 transition-all duration-600 ease-out"
                      style={{
                        zIndex: 4 - positionInStack,
                        transform: `translateX(${positionInStack * 16}px) scale(${1 - positionInStack * 0.02})`,
                        opacity: isActive ? (imageFade ? 1 : 1) : 0.6 - positionInStack * 0.15,
                      }}
                    >
                      <img
                        src={feature.image || "/placeholder.svg"}
                        alt={feature.title}
                        className="w-full h-full object-cover rounded-[20px]"
                      />
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
