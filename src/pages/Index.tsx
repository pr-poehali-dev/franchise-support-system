import { useState } from "react";
import Icon from "@/components/ui/icon";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/4407d3e7-19ec-4e93-b2bc-7cfea8db8df4/files/11804ae3-91b0-43c6-8e0b-7a42cea88e6a.jpg";
const PARTNER_IMAGE = "https://cdn.poehali.dev/projects/4407d3e7-19ec-4e93-b2bc-7cfea8db8df4/files/a681206a-cc03-444b-aed9-f438ec39e722.jpg";

const benefits = [
  { icon: "MessageSquareLock", title: "Закрытые чаты для партнёров", desc: "Доступ к сообществу владельцев франшизы" },
  { icon: "Headphones", title: "Поддержка 24/7", desc: "Всегда на связи — ни один вопрос не останется без ответа" },
  { icon: "Boxes", title: "3D конструктор дизайна", desc: "Создавайте проекты для клиентов в режиме реального времени" },
  { icon: "ClipboardList", title: "Готовые бизнес-процессы", desc: "Регламенты, скрипты и стандарты — всё готово к запуску" },
  { icon: "Globe", title: "Сайт", desc: "Готовый продающий сайт под ваш регион" },
  { icon: "BarChart2", title: "CRM система", desc: "Управление клиентами, сделками и командой" },
  { icon: "TrendingUp", title: "Помощь в продвижении", desc: "Маркетинговая поддержка и настройка рекламы" },
  { icon: "FileText", title: "Готовые шаблоны документов", desc: "Договоры, КП, акты — всё готово к использованию" },
  { icon: "Truck", title: "Поставщики", desc: "Проверенные партнёры с лучшими ценами на материалы" },
  { icon: "Palette", title: "Дизайн-решения", desc: "Портфолио и каталог для продаж" },
  { icon: "Scale", title: "Юридическая помощь", desc: "Юристы всегда на вашей стороне" },
  { icon: "Calculator", title: "Бухгалтерская помощь", desc: "Ведение учёта и отчётности" },
  { icon: "Users", title: "Помощь в подборе персонала", desc: "Найдём и обучим вашу команду" },
  { icon: "GraduationCap", title: "Обучение", desc: "Полноценная программа для вас и вашей команды" },
];

const faqs = [
  { q: "Нужен ли офис или склад для старта?", a: "Нет. Бизнес полностью работает без офиса и склада — замеры на объектах, монтажные бригады приезжают на место. Это существенно снижает стартовые вложения." },
  { q: "Какой минимальный бюджет для старта?", a: "Паушальный взнос + первоначальный рекламный бюджет + открытие ИП. Точные цифры обсуждаются индивидуально — запишитесь на консультацию." },
  { q: "Как быстро можно окупить вложения?", a: "При соблюдении бизнес-процессов и активной работе — 3–5 месяцев. Первые 3–4 объекта, как правило, перекрывают паушальный взнос." },
  { q: "Нужен ли опыт в остеклении или строительстве?", a: "Нет. Мы обучим вас и вашу команду с нуля: технологии, продажи, управление, реклама. Достаточно желания работать и развиваться." },
  { q: "Как формируется прибыль?", a: "Доход складывается из маржи с каждого объекта. При среднем чеке и стабильном потоке заявок чистая прибыль в первые месяцы составляет от 250 000 ₽." },
  { q: "Что входит в ежемесячные расходы?", a: "Роялти, налоги, зарплата рекламистов, рекламный бюджет. Все статьи расходов прозрачны и согласуются заранее." },
  { q: "Есть ли эксклюзивность на территорию?", a: "Да. Мы закрепляем за партнёром эксклюзивную территорию — конкуренции внутри сети нет." },
];

const R = "var(--brand-red)";
const RD = "var(--brand-red-dark)";

export default function Index() {
  const [investAmount, setInvestAmount] = useState(500000);
  const [callbackOpen, setCallbackOpen] = useState(false);
  const [callbackName, setCallbackName] = useState("");
  const [callbackPhone, setCallbackPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const monthlyRevenue = Math.round((investAmount / 400000) * 250000);
  const paybackMonths = Math.round(investAmount / monthlyRevenue);

  const handleCallback = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setCallbackOpen(false);
      setSubmitted(false);
      setCallbackName("");
      setCallbackPhone("");
    }, 2500);
  };

  return (
    <div className="min-h-screen font-body bg-white text-[var(--brand-text)]">

      {/* ═══ HEADER ═══ */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: R }}>
              <Icon name="Home" size={18} className="text-white" />
            </div>
            <div>
              <div className="font-display font-black text-[var(--brand-dark)] text-lg leading-none tracking-wide">БАЛКОН</div>
              <div className="text-[10px] font-bold tracking-widest uppercase" style={{ color: R }}>Франшиза</div>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <a href="tel:+79001234567" className="text-gray-600 hover:text-[var(--brand-red)] transition-colors text-sm flex items-center gap-2 font-medium">
              <Icon name="Phone" size={14} />
              +7 (900) 123-45-67
            </a>
            <a href="mailto:info@balcon-franchise.ru" className="text-gray-600 hover:text-[var(--brand-red)] transition-colors text-sm flex items-center gap-2 font-medium">
              <Icon name="Mail" size={14} />
              info@balcon-franchise.ru
            </a>
          </div>

          <div className="flex items-center gap-2">
            <a href="#" className="w-8 h-8 rounded-full bg-gray-100 hover:bg-[#25D366] hover:text-white transition-colors flex items-center justify-center text-gray-600">
              <Icon name="MessageCircle" size={15} />
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-gray-100 hover:bg-[#2AABEE] hover:text-white transition-colors flex items-center justify-center text-gray-600">
              <Icon name="Send" size={15} />
            </a>
            <button
              onClick={() => setCallbackOpen(true)}
              className="hidden md:flex ml-2 items-center gap-2 text-white text-sm font-bold px-4 py-2 rounded-lg transition-all hover:opacity-90"
              style={{ background: R }}
            >
              <Icon name="PhoneCall" size={14} />
              Позвонить
            </button>
          </div>
        </div>
      </header>

      {/* ═══ HERO ═══ */}
      <section className="relative min-h-screen overflow-hidden flex items-center pt-16">
        {/* Left red block */}
        <div className="absolute left-0 top-0 bottom-0 w-1/2 md:w-[55%]" style={{ background: R }} />

        {/* Right image */}
        <div className="absolute right-0 top-0 bottom-0 w-1/2 md:w-[45%]">
          <img src={HERO_IMAGE} alt="Остекление балконов" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--brand-red)] to-transparent" />
        </div>

        {/* Decorative circle */}
        <div className="absolute top-20 left-[48%] w-32 h-32 rounded-full border-4 border-white/20 animate-float" />

        <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-24 grid md:grid-cols-2 gap-12 items-center w-full">
          {/* Left content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-white/20 border border-white/30 rounded-full px-4 py-1.5 mb-6 animate-fade-in-up">
              <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
              <span className="text-white text-sm font-semibold">Франшиза #1 в нише</span>
            </div>

            <h1 className="font-display text-5xl md:text-6xl font-black text-white leading-[1.0] mb-4 animate-fade-in-up-delay-1" style={{ letterSpacing: '-0.02em' }}>
              ФРАНШИЗА<br />
              ОСТЕКЛЕНИЕ<br />
              И РЕМОНТ<br />
              БАЛКОНОВ
            </h1>

            <div className="w-14 h-1 bg-white mb-6 animate-fade-in-up-delay-1" />

            <div className="grid grid-cols-2 gap-2 mb-8 animate-fade-in-up-delay-2">
              {[
                { icon: "TrendingUp", val: "250 000 ₽", label: "Доход от" },
                { icon: "Clock", val: "3–5 мес.", label: "Окупаемость" },
                { icon: "Users", val: "Команда", label: "Обучение всех" },
                { icon: "Zap", val: "Быстрый", label: "Запуск" },
              ].map((m) => (
                <div key={m.val} className="bg-white/15 backdrop-blur-sm border border-white/20 rounded-xl p-3 flex items-center gap-3">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name={m.icon} size={16} className="text-white" />
                  </div>
                  <div>
                    <div className="text-white font-display font-black text-base leading-none">{m.val}</div>
                    <div className="text-white/70 text-[11px] mt-0.5">{m.label}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-l-4 border-white/50 pl-4 mb-8 animate-fade-in-up-delay-2">
              <p className="text-white/60 text-sm italic">[Здесь будет ваш дескриптор]</p>
            </div>

            <div className="flex flex-wrap gap-3 animate-fade-in-up-delay-3">
              <button
                onClick={() => setCallbackOpen(true)}
                className="flex items-center gap-2 bg-white font-bold px-6 py-3.5 rounded-xl transition-all hover:scale-105 shadow-lg"
                style={{ color: R }}
              >
                <Icon name="PhoneIncoming" size={18} />
                Обратный звонок
              </button>
              <a
                href="tel:+79001234567"
                className="flex items-center gap-2 bg-white/15 hover:bg-white/25 border border-white/40 text-white font-bold px-6 py-3.5 rounded-xl transition-all hover:scale-105"
              >
                <Icon name="Phone" size={18} />
                Позвонить
              </a>
            </div>
          </div>

          {/* Right floating card */}
          <div className="hidden md:block" />
        </div>

        {/* Floating badge over right image */}
        <div className="hidden md:block absolute right-[6%] top-1/2 -translate-y-1/2 animate-float">
          <div className="bg-white rounded-2xl p-5 shadow-2xl text-center w-40">
            <div className="font-display font-black text-4xl" style={{ color: R }}>250К+</div>
            <div className="text-gray-500 text-xs mt-1">в месяц</div>
          </div>
        </div>
        <div className="hidden md:block absolute right-[12%] bottom-20 animate-float" style={{ animationDelay: "1.5s" }}>
          <div className="bg-white rounded-2xl px-5 py-3.5 shadow-xl flex items-center gap-3">
            <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
              <Icon name="CheckCircle" size={20} className="text-green-600" />
            </div>
            <div>
              <div className="font-display font-black text-[var(--brand-dark)] text-base">3–4 мес.</div>
              <div className="text-gray-400 text-[11px]">Окупаемость</div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/50">
          <span className="text-[11px]">Листайте вниз</span>
          <Icon name="ChevronDown" size={18} className="animate-bounce" />
        </div>
      </section>

      {/* ═══ STEPS ═══ */}
      <section className="py-20 bg-[var(--brand-gray)]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="mb-14">
            <span className="inline-block text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full border mb-3" style={{ color: R, borderColor: R }}>Путь к результату</span>
            <h2 className="font-display text-4xl md:text-5xl font-black text-[var(--brand-dark)]">
              ПОСЛЕ ЗАКЛЮЧЕНИЯ<br />
              <span style={{ color: R }}>ДОГОВОРА</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-5">
            {[
              { num: "01", icon: "GraduationCap", title: "Обучение", desc: "2–3 недели полного погружения в технологии и продажи" },
              { num: "02", icon: "Megaphone", title: "Запуск рекламы", desc: "Настройка каналов — первые заявки с первого дня" },
              { num: "03", icon: "Ruler", title: "Первые объекты", desc: "Замеры, монтаж — под контролем наших специалистов" },
              { num: "04", icon: "Banknote", title: "Прибыль", desc: "Принимаем деньги и строим систему стабильного дохода" },
            ].map((step, i) => (
              <div key={i} className="group bg-white rounded-2xl p-6 border border-gray-100 card-hover">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center transition-colors duration-300 group-hover:bg-[var(--brand-red)]"
                    style={{ background: `${R}15` }}>
                    <Icon name={step.icon} size={24} style={{ color: R }} className="group-hover:!text-white transition-colors duration-300" />
                  </div>
                  <span className="font-display font-black text-5xl text-gray-100">{step.num}</span>
                </div>
                <h3 className="font-display font-black text-xl text-[var(--brand-dark)] mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ ФИНАНСЫ ═══ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="mb-14">
            <span className="inline-block text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full border mb-3" style={{ color: R, borderColor: R }}>Финансы</span>
            <h2 className="font-display text-4xl md:text-5xl font-black text-[var(--brand-dark)]">
              ВЛОЖИЛ —<br />
              <span style={{ color: R }}>ПОЛУЧИЛ</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* Расходы на старте */}
            <div className="rounded-2xl p-6 border border-gray-100 bg-[var(--brand-gray)]">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center">
                  <Icon name="ArrowUpCircle" size={20} style={{ color: R }} />
                </div>
                <h3 className="font-display font-black text-[var(--brand-dark)] text-lg">РАСХОДЫ НА СТАРТЕ</h3>
              </div>
              <ul className="space-y-3">
                {["Паушальный взнос", "Рекламный бюджет", "Открытие ИП"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-600 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: R }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Ежемесячные */}
            <div className="rounded-2xl p-6 border border-gray-100 bg-[var(--brand-gray)]">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center">
                  <Icon name="RefreshCw" size={20} style={{ color: R }} />
                </div>
                <h3 className="font-display font-black text-[var(--brand-dark)] text-lg">ЕЖЕМЕСЯЧНО</h3>
              </div>
              <ul className="space-y-3">
                {["Роялти", "Налоги", "Рекламисты и сервисы", "Рекламный бюджет"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-600 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: R }} />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <div className="flex items-center gap-2 text-green-600 text-sm font-semibold">
                  <Icon name="CheckCircle" size={15} />
                  Офис и склад НЕ нужны!
                </div>
              </div>
            </div>

            {/* Прибыль */}
            <div className="rounded-2xl p-6 text-white relative overflow-hidden" style={{ background: R }}>
              <div className="absolute -top-6 -right-6 w-28 h-28 bg-white/10 rounded-full" />
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-black/10 rounded-full" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                    <Icon name="TrendingUp" size={20} className="text-white" />
                  </div>
                  <h3 className="font-display font-black text-lg">ЧИСТАЯ ПРИБЫЛЬ</h3>
                </div>
                <div className="font-display font-black text-6xl mb-1">250К+</div>
                <div className="text-white/70 text-sm mb-5">в первые месяцы</div>
                <div className="bg-white/20 rounded-xl p-3 text-center">
                  <div className="font-display font-black text-3xl">3–4 мес.</div>
                  <div className="text-white/70 text-xs mt-0.5">Полная окупаемость</div>
                </div>
              </div>
            </div>
          </div>

          {/* Calculator */}
          <div className="rounded-3xl p-8 md:p-10 border-2" style={{ borderColor: `${R}30`, background: `${R}05` }}>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: `${R}15` }}>
                <Icon name="Calculator" size={20} style={{ color: R }} />
              </div>
              <h3 className="font-display font-black text-[var(--brand-dark)] text-2xl">КАЛЬКУЛЯТОР ДОХОДА</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <label className="text-gray-500 text-sm mb-2 block">Ваши стартовые инвестиции</label>
                <div className="font-display font-black text-4xl mb-4" style={{ color: R }}>
                  {investAmount.toLocaleString("ru-RU")} ₽
                </div>
                <input
                  type="range"
                  min={200000}
                  max={2000000}
                  step={50000}
                  value={investAmount}
                  onChange={(e) => setInvestAmount(Number(e.target.value))}
                  className="w-full cursor-pointer"
                />
                <div className="flex justify-between text-gray-400 text-xs mt-1">
                  <span>200 000 ₽</span>
                  <span>2 000 000 ₽</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-2xl p-5 text-center shadow-sm border border-gray-100">
                  <Icon name="TrendingUp" size={22} className="mx-auto mb-2" style={{ color: R }} />
                  <div className="font-display font-black text-2xl text-[var(--brand-dark)]">{monthlyRevenue.toLocaleString("ru-RU")} ₽</div>
                  <div className="text-gray-400 text-xs mt-1">Прибыль в месяц</div>
                </div>
                <div className="bg-white rounded-2xl p-5 text-center shadow-sm border border-gray-100">
                  <Icon name="Clock" size={22} className="text-green-500 mx-auto mb-2" />
                  <div className="font-display font-black text-2xl text-[var(--brand-dark)]">{paybackMonths} мес.</div>
                  <div className="text-gray-400 text-xs mt-1">Окупаемость</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ ВЫГОДЫ ═══ */}
      <section className="py-20 bg-[var(--brand-gray)]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div className="md:sticky md:top-24">
              <span className="inline-block text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full border mb-3" style={{ color: R, borderColor: R }}>Что входит в пакет</span>
              <h2 className="font-display text-4xl md:text-5xl font-black text-[var(--brand-dark)] mb-4">
                14<br />
                <span style={{ color: R }}>ИНСТРУМЕНТОВ</span><br />
                ДЛЯ УСПЕХА
              </h2>
              <p className="text-gray-500 leading-relaxed mb-6 text-sm">
                Готовая работающая система бизнеса — от рекламы до юридической защиты. Не нужно изобретать велосипед.
              </p>
              <img src={PARTNER_IMAGE} alt="Партнёры" className="rounded-2xl w-full object-cover h-52 shadow-md" />
            </div>

            <div className="grid grid-cols-1 gap-2">
              {benefits.map((b, i) => (
                <div
                  key={i}
                  className="group flex items-center gap-4 p-4 rounded-xl bg-white border border-gray-100 hover:border-[var(--brand-red)] hover:shadow-sm transition-all cursor-default"
                >
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-200"
                    style={{ background: `${R}12` }}>
                    <Icon name={b.icon} size={18} style={{ color: R }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-[var(--brand-dark)] text-sm">{b.title}</div>
                    <div className="text-gray-400 text-xs mt-0.5 truncate">{b.desc}</div>
                  </div>
                  <Icon name="ChevronRight" size={14} className="text-gray-300 group-hover:text-[var(--brand-red)] transition-colors flex-shrink-0" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="py-20" style={{ background: R }}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="w-14 h-1 bg-white/40 mx-auto mb-6" />
          <h2 className="font-display text-4xl md:text-6xl font-black text-white mb-4">ГОТОВЫ НАЧАТЬ?</h2>
          <p className="text-white/70 text-lg mb-10">Бесплатная консультация — 30 минут, всё о старте бизнеса</p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setCallbackOpen(true)}
              className="flex items-center gap-2 bg-white font-black px-8 py-4 rounded-xl hover:scale-105 transition-transform shadow-xl text-lg"
              style={{ color: R }}
            >
              <Icon name="PhoneIncoming" size={20} />
              Обратный звонок
            </button>
            <a
              href="tel:+79001234567"
              className="flex items-center gap-2 bg-white/15 hover:bg-white/25 text-white border border-white/30 font-bold px-8 py-4 rounded-xl transition-all text-lg"
            >
              <Icon name="Phone" size={20} />
              Позвонить
            </a>
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 md:px-8">
          <div className="mb-12">
            <span className="inline-block text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full border mb-3" style={{ color: R, borderColor: R }}>Вопросы и ответы</span>
            <h2 className="font-display text-4xl md:text-5xl font-black text-[var(--brand-dark)]">
              ЧАСТЫЕ<br /><span style={{ color: R }}>ВОПРОСЫ</span>
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="bg-[var(--brand-gray)] border border-gray-100 rounded-2xl px-5 overflow-hidden"
              >
                <AccordionTrigger className="font-display font-bold text-[var(--brand-dark)] text-left hover:no-underline py-4 text-base hover:text-[var(--brand-red)] transition-colors">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-gray-500 text-sm leading-relaxed pb-4">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer className="bg-[var(--brand-dark)] pt-14 pb-6">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-4 gap-10 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: R }}>
                  <Icon name="Home" size={20} className="text-white" />
                </div>
                <div>
                  <div className="font-display font-black text-white text-xl leading-none">БАЛКОН</div>
                  <div className="text-[11px] font-bold tracking-widest uppercase" style={{ color: R }}>Франшиза</div>
                </div>
              </div>
              <p className="text-white/40 text-sm leading-relaxed">Франшиза остекления балконов. Доход от 250 000 ₽.</p>
            </div>

            <div>
              <h4 className="font-display font-black text-white text-sm uppercase tracking-widest mb-4">Контакты</h4>
              <ul className="space-y-3">
                <li>
                  <a href="tel:+79001234567" className="text-white/50 hover:text-[var(--brand-red)] transition-colors text-sm flex items-center gap-2">
                    <Icon name="Phone" size={13} /> +7 (900) 123-45-67
                  </a>
                </li>
                <li>
                  <a href="mailto:info@balcon-franchise.ru" className="text-white/50 hover:text-[var(--brand-red)] transition-colors text-sm flex items-center gap-2">
                    <Icon name="Mail" size={13} /> info@balcon-franchise.ru
                  </a>
                </li>
                <li className="text-white/50 text-sm flex items-start gap-2">
                  <Icon name="MapPin" size={13} className="mt-0.5 flex-shrink-0" />
                  г. Москва, ул. Примерная, д. 1
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-display font-black text-white text-sm uppercase tracking-widest mb-4">Карта сайта</h4>
              <ul className="space-y-2">
                {["О франшизе", "Этапы старта", "Финансы", "Выгоды", "FAQ"].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-white/50 hover:text-[var(--brand-red)] transition-colors text-sm">{link}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-display font-black text-white text-sm uppercase tracking-widest mb-4">Соцсети</h4>
              <div className="flex gap-2 mb-6">
                {[
                  { icon: "MessageCircle", label: "WhatsApp" },
                  { icon: "Send", label: "Telegram" },
                  { icon: "Instagram", label: "Instagram" },
                ].map((s) => (
                  <a key={s.label} href="#" title={s.label}
                    className="w-9 h-9 rounded-xl bg-white/10 hover:bg-[var(--brand-red)] flex items-center justify-center transition-colors">
                    <Icon name={s.icon} size={15} className="text-white" />
                  </a>
                ))}
              </div>
              <div className="space-y-2">
                <a href="#" className="text-white/30 hover:text-white/60 transition-colors text-xs block">Политика конфиденциальности</a>
                <a href="#" className="text-white/30 hover:text-white/60 transition-colors text-xs block">Договор оферты</a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 pt-6 text-center">
            <p className="text-white/20 text-xs">© 2024 Балкон Франшиза. Все права защищены.</p>
          </div>
        </div>
      </footer>

      {/* ═══ MODAL ═══ */}
      {callbackOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setCallbackOpen(false)} />
          <div className="relative bg-white rounded-3xl p-8 w-full max-w-md shadow-2xl animate-scale-in">
            <button
              onClick={() => setCallbackOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
            >
              <Icon name="X" size={15} className="text-gray-500" />
            </button>

            {submitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="CheckCircle" size={32} className="text-green-500" />
                </div>
                <h3 className="font-display font-black text-[var(--brand-dark)] text-2xl mb-2">Заявка отправлена!</h3>
                <p className="text-gray-400 text-sm">Мы перезвоним в ближайшее время</p>
              </div>
            ) : (
              <>
                <div className="mb-6">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4" style={{ background: `${R}15` }}>
                    <Icon name="PhoneIncoming" size={22} style={{ color: R }} />
                  </div>
                  <h3 className="font-display font-black text-[var(--brand-dark)] text-2xl">Обратный звонок</h3>
                  <p className="text-gray-400 text-sm mt-1">Перезвоним в течение 15 минут</p>
                </div>
                <form onSubmit={handleCallback} className="space-y-4">
                  <div>
                    <label className="text-sm font-semibold text-gray-700 mb-1.5 block">Ваше имя</label>
                    <input
                      type="text"
                      value={callbackName}
                      onChange={(e) => setCallbackName(e.target.value)}
                      placeholder="Иван Иванов"
                      required
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none transition-colors"
                      style={{ outlineColor: R }}
                      onFocus={(e) => (e.target.style.borderColor = R)}
                      onBlur={(e) => (e.target.style.borderColor = '')}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-gray-700 mb-1.5 block">Номер телефона</label>
                    <input
                      type="tel"
                      value={callbackPhone}
                      onChange={(e) => setCallbackPhone(e.target.value)}
                      placeholder="+7 (___) ___-__-__"
                      required
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none transition-colors"
                      onFocus={(e) => (e.target.style.borderColor = R)}
                      onBlur={(e) => (e.target.style.borderColor = '')}
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full text-white font-black py-3.5 rounded-xl transition-opacity hover:opacity-90"
                    style={{ background: R }}
                  >
                    Отправить заявку
                  </button>
                  <p className="text-gray-300 text-xs text-center">Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности</p>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

// suppress unused variable warning
void R; void RD;
