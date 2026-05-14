import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function BagtopLandingPage() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  const heroRef = useRef<HTMLDivElement>(null)
  const benefitsRef = useRef<HTMLElement>(null)
  const aboutRef = useRef<HTMLElement>(null)
  const desireRef = useRef<HTMLElement>(null)
  const instigateRef = useRef<HTMLElement>(null)
  const whyRef = useRef<HTMLElement>(null)
  const pricingRef = useRef<HTMLElement>(null)
  const ctaRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const duration = 3000
    const interval = 30
    const steps = duration / interval
    const increment = 100 / steps
    let currentProgress = 0

    const timer = setInterval(() => {
      currentProgress += increment
      if (currentProgress >= 100) {
        currentProgress = 100
        clearInterval(timer)
        setTimeout(() => {
          setIsLoading(false)
        }, 200)
      }
      setProgress(currentProgress)
    }, interval)

    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    if (isLoading) return

    const ctx = gsap.context(() => {
      gsap.from(heroRef.current?.querySelector(".hero-content"), {
        opacity: 0,
        y: 60,
        duration: 1.2,
        ease: "power3.out",
      })

      gsap.from(heroRef.current?.querySelector(".hero-image"), {
        opacity: 0,
        scale: 0.9,
        duration: 1.2,
        delay: 0.3,
        ease: "power3.out",
      })

      gsap.from(benefitsRef.current?.querySelector(".benefits-title"), {
        scrollTrigger: {
          trigger: benefitsRef.current,
          start: "top 80%",
        },
        opacity: 0,
        x: -60,
        duration: 1,
        ease: "power3.out",
      })

      gsap.from(benefitsRef.current?.querySelectorAll(".benefit-card"), {
        scrollTrigger: {
          trigger: benefitsRef.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 40,
        stagger: 0.2,
        duration: 0.8,
        ease: "power3.out",
      })

      gsap.from(aboutRef.current?.querySelector(".about-image"), {
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 80%",
        },
        opacity: 0,
        scale: 0.95,
        duration: 1,
        ease: "power3.out",
      })

      gsap.from(aboutRef.current?.querySelector(".about-content"), {
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 80%",
        },
        opacity: 0,
        x: 60,
        duration: 1,
        ease: "power3.out",
      })

      gsap.from(desireRef.current?.querySelector("h2"), {
        scrollTrigger: {
          trigger: desireRef.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power3.out",
      })

      gsap.from(desireRef.current?.querySelectorAll(".desire-image"), {
        scrollTrigger: {
          trigger: desireRef.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 60,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out",
      })

      gsap.from(instigateRef.current?.querySelector(".instigate-content"), {
        scrollTrigger: {
          trigger: instigateRef.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power3.out",
      })

      gsap.from(instigateRef.current?.querySelector(".instigate-image"), {
        scrollTrigger: {
          trigger: instigateRef.current,
          start: "top 80%",
        },
        opacity: 0,
        scale: 0.95,
        duration: 1.2,
        delay: 0.2,
        ease: "power3.out",
      })

      gsap.from(whyRef.current?.querySelector(".why-content"), {
        scrollTrigger: {
          trigger: whyRef.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power3.out",
      })

      gsap.from(whyRef.current?.querySelector(".why-image"), {
        scrollTrigger: {
          trigger: whyRef.current,
          start: "top 80%",
        },
        opacity: 0,
        scale: 0.95,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
      })

      gsap.from(pricingRef.current?.querySelectorAll(".pricing-card"), {
        scrollTrigger: {
          trigger: pricingRef.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 60,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out",
      })

      gsap.from(ctaRef.current?.querySelector(".cta-box"), {
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top 80%",
        },
        opacity: 0,
        scale: 0.95,
        duration: 1,
        ease: "power3.out",
      })
    })

    return () => ctx.revert()
  }, [isLoading])

  return (
    <>
      {isLoading && (
        <div className="fixed inset-0 z-[100000] flex flex-col items-center justify-center bg-white">
          <div className="flex flex-col items-center gap-8 px-6">
            <h1 className="font-serif text-4xl tracking-tight text-[#1A1A1A] md:text-5xl lg:text-6xl">
              BAG
              <span className="block text-[#C0392B]">TOP</span>
            </h1>

            <div className="w-full max-w-md">
              <div className="h-2 w-full overflow-hidden rounded-full bg-[#F0F0F0]">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[#E74C3C] to-[#C0392B] transition-all duration-300 ease-out"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <p className="mt-4 text-center text-sm text-[#888888]">{Math.round(progress)}%</p>
            </div>
          </div>
        </div>
      )}

      <main className="w-full overflow-x-hidden bg-white">
        {/* Hero */}
        <section
          ref={heroRef}
          className="relative flex min-h-[600px] w-full items-center justify-center px-6 py-16 md:min-h-[800px] md:px-20 md:py-24 lg:min-h-[1030px] lg:px-80"
          style={{
            backgroundImage: `radial-gradient(74.86% 63.04% at 50% 71.13%, rgba(255,255,255,0) 0%, #fff 100%), linear-gradient(190.21deg, rgba(255,255,255,0) 48.79%, #fff 91.19%), url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hero-background-QatnDXVXAGi0F0KCe4tuAQxe2m4T4E.png)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="flex w-full max-w-7xl flex-col items-center gap-8 md:gap-12 lg:gap-14">
            <div className="hero-content flex flex-col items-center gap-5 text-center">
              <h1 className="text-balance font-serif text-3xl leading-tight tracking-tight text-[#1A1A1A] md:text-5xl lg:text-[56px]">
                Сумки, которые говорят<br />о вашем стиле
              </h1>
              <p className="max-w-4xl text-pretty text-base leading-relaxed tracking-tight text-[#555555] md:text-lg">
                BAGTOP — премиальные женские сумки из натуральной кожи. Элегантность, которую вы чувствуете с первого прикосновения.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-2.5">
                <Button className="h-12 rounded-xl bg-[#C0392B] px-4 font-serif text-base text-white hover:bg-[#C0392B]/90 md:text-lg">
                  Смотреть коллекцию
                </Button>
                <Button
                  variant="outline"
                  className="h-12 rounded-xl border-[#C0392B] bg-transparent font-serif text-base text-[#C0392B] hover:bg-[#C0392B]/10 md:text-lg"
                >
                  О бренде
                </Button>
              </div>
            </div>
            <div className="hero-image relative h-[300px] w-full max-w-2xl md:h-[400px] lg:h-[583px] lg:max-w-[884px]">
              <img
                src="https://cdn.poehali.dev/projects/c53a7eee-e772-4a63-8b96-6ac28cf9c61a/files/2c9e277d-198b-4d4b-91bf-3708fa9ffe51.jpg"
                alt="BAGTOP — премиальные женские сумки"
                className="h-full w-full object-contain"
              />
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section ref={benefitsRef} className="w-full px-6 py-16 md:px-20 md:py-24 lg:px-80 lg:py-28">
          <div className="mx-auto flex max-w-7xl flex-col items-start gap-8 lg:flex-row lg:gap-12">
            <div className="benefits-title flex flex-col gap-6 lg:flex-1">
              <h2 className="text-balance font-serif text-3xl leading-tight tracking-tight text-[#1A1A1A] md:text-4xl lg:text-5xl">
                Качество, которое невозможно не заметить
              </h2>
              <p className="text-pretty text-base leading-relaxed tracking-tight text-[#555555] md:text-lg">
                Каждая сумка BAGTOP создана вручную из отборной натуральной кожи. Мы не идём на компромисс — только premium материалы, точные швы и безупречная фурнитура.
              </p>
            </div>
            <div className="flex flex-col gap-2 lg:flex-1">
              <div className="benefit-card flex flex-col gap-2 rounded-[20px] bg-gradient-to-r from-[#C0392B] to-[#E74C3C] p-6 md:p-8">
                <h3 className="font-serif text-2xl leading-tight tracking-tight text-white md:text-4xl">Натуральная кожа</h3>
                <p className="text-sm leading-relaxed tracking-tight text-white md:text-base">
                  Только отборная кожа высшего сорта — мягкая, долговечная, с благородной текстурой.
                </p>
              </div>
              <div className="benefit-card flex flex-col gap-2 rounded-[20px] bg-gradient-to-r from-[#C0392B] to-[#E74C3C] p-6 md:p-8">
                <h3 className="font-serif text-2xl leading-tight tracking-tight text-white md:text-4xl">
                  Ручная работа
                </h3>
                <p className="text-sm leading-relaxed tracking-tight text-white md:text-base">
                  Каждое изделие проходит через руки мастера — от раскроя до последнего стежка.
                </p>
              </div>
              <div className="benefit-card flex flex-col gap-2 rounded-[20px] bg-gradient-to-r from-[#C0392B] to-[#E74C3C] p-6 md:p-8">
                <h3 className="font-serif text-2xl leading-tight tracking-tight text-white md:text-4xl">
                  Вечная классика
                </h3>
                <p className="text-sm leading-relaxed tracking-tight text-white md:text-base">
                  Дизайн вне трендов — сумки BAGTOP актуальны сегодня, через год и через десять лет.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section ref={aboutRef} className="w-full px-6 py-16 md:px-20 md:py-24 lg:px-80 lg:py-28">
          <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 lg:flex-row lg:gap-12">
            <div className="about-image w-full lg:flex-1">
              <img
                src="https://cdn.poehali.dev/projects/c53a7eee-e772-4a63-8b96-6ac28cf9c61a/files/8752fbef-f4e8-40ff-93c9-617253759cd4.jpg"
                alt="Коллекция сумок BAGTOP"
                className="h-auto w-full rounded-2xl object-cover"
              />
            </div>
            <div className="about-content flex flex-col gap-6 lg:flex-1">
              <h2 className="font-serif text-3xl leading-tight tracking-tight text-[#1A1A1A] md:text-4xl lg:text-5xl">
                История бренда
              </h2>
              <p className="text-pretty text-base leading-relaxed tracking-tight text-[#555555] md:text-lg">
                BAGTOP родился из любви к настоящему качеству и женской элегантности. Мы убеждены: сумка — это не просто аксессуар, это продолжение личности. Каждая модель проектируется с вниманием к деталям, удобству и долговечности. Мы выбираем только лучшие материалы и работаем с мастерами, которые вкладывают душу в каждое изделие. BAGTOP — это когда красота и функциональность неразделимы.
              </p>
              <Button className="h-12 w-full rounded-[20px] bg-gradient-to-r from-[#C0392B] to-[#E74C3C] font-serif text-lg text-white hover:opacity-90 md:text-xl">
                Смотреть коллекцию
              </Button>
            </div>
          </div>
        </section>

        {/* Desire */}
        <section ref={desireRef} className="w-full px-6 py-16 md:px-20 md:py-24 lg:px-80 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="rounded-[40px] border-2 border-[#F0F0F0] bg-[#FAFAFA] px-6 py-12 md:px-12 md:py-16 lg:px-24">
              <h2 className="mb-8 text-balance text-center font-serif text-3xl leading-tight tracking-tight text-[#1A1A1A] md:mb-12 md:text-4xl lg:text-[56px]">
                Почувствуйте разницу настоящего премиума
              </h2>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
                <div className="desire-image overflow-hidden rounded-2xl rounded-b-none">
                  <img
                    src="https://cdn.poehali.dev/projects/c53a7eee-e772-4a63-8b96-6ac28cf9c61a/files/682791a1-2c32-46bf-b5f0-5b0a60b0177b.jpg"
                    alt="Сумка BAGTOP — деталь"
                    className="h-[300px] w-full object-cover transition-transform duration-500 hover:scale-105 md:h-[400px]"
                  />
                </div>
                <div className="desire-image overflow-hidden rounded-2xl rounded-b-none md:mt-12">
                  <img
                    src="https://cdn.poehali.dev/projects/c53a7eee-e772-4a63-8b96-6ac28cf9c61a/files/3636ff73-f6ba-49f2-97bc-24f84ab7092f.jpg"
                    alt="Сумка BAGTOP — стиль"
                    className="h-[300px] w-full object-cover transition-transform duration-500 hover:scale-105 md:h-[400px]"
                  />
                </div>
                <div className="desire-image overflow-hidden rounded-2xl rounded-b-none">
                  <img
                    src="https://cdn.poehali.dev/projects/c53a7eee-e772-4a63-8b96-6ac28cf9c61a/files/f3029810-8fa0-4e8f-a806-0c5679901cd9.jpg"
                    alt="Сумка BAGTOP — образ жизни"
                    className="h-[300px] w-full object-cover transition-transform duration-500 hover:scale-105 md:h-[400px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Instigate */}
        <section ref={instigateRef} className="w-full px-6 py-16 md:px-20 md:py-24 lg:px-80 lg:py-28">
          <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 lg:flex-row-reverse lg:gap-12">
            <div className="instigate-image w-full lg:flex-1">
              <img
                src="https://cdn.poehali.dev/projects/c53a7eee-e772-4a63-8b96-6ac28cf9c61a/files/21afe72c-12ad-4d13-ac1f-a77e2f0c3541.jpg"
                alt="Детали сумки BAGTOP"
                className="h-auto w-full rounded-2xl object-cover"
              />
            </div>
            <div className="instigate-content flex flex-col gap-6 lg:flex-1">
              <h2 className="font-serif text-3xl leading-tight tracking-tight text-[#1A1A1A] md:text-4xl lg:text-5xl">
                Каждая деталь имеет значение
              </h2>
              <p className="text-pretty text-base leading-relaxed tracking-tight text-[#555555] md:text-lg">
                Молнии, замки, кольца — только качественная металлическая фурнитура. Подкладка из плотной ткани. Ремни с регулировкой. Внутренние карманы продуманы так, чтобы всё было под рукой. BAGTOP — это не просто красивая внешность, это сумка, которая работает каждый день.
              </p>
              <Button className="h-12 w-full rounded-[20px] bg-gradient-to-r from-[#C0392B] to-[#E74C3C] font-serif text-lg text-white hover:opacity-90 md:text-xl">
                Выбрать свою сумку
              </Button>
            </div>
          </div>
        </section>

        {/* Why */}
        <section ref={whyRef} className="w-full px-6 py-16 md:px-20 md:py-24 lg:px-80 lg:py-28">
          <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 lg:flex-row lg:gap-12">
            <div className="why-content flex flex-col gap-6 lg:flex-1">
              <h2 className="font-serif text-3xl leading-tight tracking-tight text-[#1A1A1A] md:text-4xl lg:text-5xl">
                Почему выбирают BAGTOP?
              </h2>
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#C0392B] text-white font-bold">1</div>
                  <div>
                    <h3 className="font-semibold text-[#1A1A1A] md:text-lg">Проверено временем</h3>
                    <p className="text-sm text-[#777777] md:text-base">Сумки BAGTOP служат годами без потери внешнего вида.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#C0392B] text-white font-bold">2</div>
                  <div>
                    <h3 className="font-semibold text-[#1A1A1A] md:text-lg">Подходит к любому образу</h3>
                    <p className="text-sm text-[#777777] md:text-base">Классические силуэты, которые дополняют любой стиль — от делового до повседневного.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#C0392B] text-white font-bold">3</div>
                  <div>
                    <h3 className="font-semibold text-[#1A1A1A] md:text-lg">Гарантия качества</h3>
                    <p className="text-sm text-[#777777] md:text-base">Мы несём ответственность за каждое изделие и готовы помочь с любым вопросом.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="why-image w-full lg:flex-1">
              <img
                src="https://cdn.poehali.dev/projects/c53a7eee-e772-4a63-8b96-6ac28cf9c61a/files/3636ff73-f6ba-49f2-97bc-24f84ab7092f.jpg"
                alt="Почему BAGTOP"
                className="h-auto w-full rounded-2xl object-cover"
              />
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section ref={pricingRef} className="w-full px-6 py-16 md:px-20 md:py-24 lg:px-[420px] lg:py-28">
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 items-stretch">
            {/* Card 1 */}
            <Card className="pricing-card flex flex-col overflow-hidden rounded-2xl border border-[#F0F0F0] bg-white shadow-md group">
              <div className="aspect-square w-full overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/projects/c53a7eee-e772-4a63-8b96-6ac28cf9c61a/files/682791a1-2c32-46bf-b5f0-5b0a60b0177b.jpg"
                  alt="BAGTOP — классическая сумка-тоут"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col gap-3 p-5">
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-[#1A1A1A] md:text-lg">Классическая тоут</h3>
                  <p className="text-xs text-[#777777]">Натуральная кожа, 3 цвета</p>
                </div>
                <p className="text-2xl font-bold text-[#C0392B] md:text-3xl">26 700 р.</p>
                <Button className="h-10 w-full rounded-xl bg-[#C0392B] text-sm font-medium text-white hover:bg-[#C0392B]/90">
                  ЗАКАЗАТЬ
                </Button>
              </div>
            </Card>

            {/* Card 2 */}
            <Card className="pricing-card flex flex-col overflow-hidden rounded-2xl border border-[#F0F0F0] bg-white shadow-md group">
              <div className="aspect-square w-full overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/projects/c53a7eee-e772-4a63-8b96-6ac28cf9c61a/files/f3029810-8fa0-4e8f-a806-0c5679901cd9.jpg"
                  alt="BAGTOP — сумка через плечо"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col gap-3 p-5">
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-[#1A1A1A] md:text-lg">Кросс-боди</h3>
                  <p className="text-xs text-[#777777]">Компактная, регулируемый ремень</p>
                </div>
                <p className="text-2xl font-bold text-[#C0392B] md:text-3xl">19 500 р.</p>
                <Button className="h-10 w-full rounded-xl bg-[#C0392B] text-sm font-medium text-white hover:bg-[#C0392B]/90">
                  ЗАКАЗАТЬ
                </Button>
              </div>
            </Card>

            {/* Card 3 */}
            <Card className="pricing-card flex flex-col overflow-hidden rounded-2xl border border-[#F0F0F0] bg-white shadow-md group">
              <div className="aspect-square w-full overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/projects/c53a7eee-e772-4a63-8b96-6ac28cf9c61a/files/9c632931-c554-4e64-a626-a77143858659.jpg"
                  alt="BAGTOP — деловая сумка"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col gap-3 p-5">
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-[#1A1A1A] md:text-lg">Деловая сумка</h3>
                  <p className="text-xs text-[#777777]">Вместительная, с отделением для ноутбука</p>
                </div>
                <p className="text-2xl font-bold text-[#C0392B] md:text-3xl">38 700 р.</p>
                <Button className="h-10 w-full rounded-xl bg-[#C0392B] text-sm font-medium text-white hover:bg-[#C0392B]/90">
                  ЗАКАЗАТЬ
                </Button>
              </div>
            </Card>

            {/* Card 4 */}
            <Card className="pricing-card flex flex-col overflow-hidden rounded-2xl border border-[#F0F0F0] bg-white shadow-md group">
              <div className="aspect-square w-full overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/projects/c53a7eee-e772-4a63-8b96-6ac28cf9c61a/files/a085f210-aee0-46d9-85a6-c0e7a0af96f1.jpg"
                  alt="BAGTOP — вечерний клатч"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col gap-3 p-5">
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-[#1A1A1A] md:text-lg">Вечерний клатч</h3>
                  <p className="text-xs text-[#777777]">Элегантный, цепочка в комплекте</p>
                </div>
                <p className="text-2xl font-bold text-[#C0392B] md:text-3xl">14 700 р.</p>
                <Button className="h-10 w-full rounded-xl bg-[#C0392B] text-sm font-medium text-white hover:bg-[#C0392B]/90">
                  ЗАКАЗАТЬ
                </Button>
              </div>
            </Card>
          </div>
        </section>

        {/* CTA */}
        <section ref={ctaRef} className="w-full px-6 py-16 md:px-20 md:py-24 lg:px-[420px] lg:py-28">
          <div className="mx-auto max-w-5xl">
            <div className="cta-box flex flex-col items-center gap-6 rounded-[20px] bg-gradient-to-r from-[#C0392B] to-[#E74C3C] p-6 md:flex-row md:gap-8 md:p-12 lg:p-16">
              <p className="flex-1 text-balance text-center font-semibold leading-tight tracking-tight text-white md:text-left md:text-2xl lg:text-[26px]">
                Хотите найти свою идеальную сумку? Напишите нам — поможем с выбором!
              </p>
              <Button className="h-12 w-full rounded-xl bg-white text-base text-[#C0392B] hover:bg-white/90 md:w-auto md:px-8 md:text-lg font-semibold">
                Написать нам
              </Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="w-full border-t border-[#F0F0F0] px-6 py-12 md:px-20 lg:px-[420px]">
          <div className="mx-auto flex max-w-5xl flex-col items-center justify-center gap-6">
            <h2 className="font-serif text-2xl tracking-tight text-[#1A1A1A] md:text-3xl">
              BAG<span className="text-[#C0392B]">TOP</span>
            </h2>
            <p className="text-center text-sm leading-relaxed tracking-tight text-[#777777] md:text-base">
              2026 — BAGTOP. Все права защищены.
            </p>
          </div>
        </footer>
      </main>
    </>
  )
}