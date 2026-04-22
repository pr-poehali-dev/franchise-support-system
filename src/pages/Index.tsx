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
  {
    q: "Нужен ли офис или склад для старта?",
    a: "Нет. Бизнес полностью работает без офиса и склада — замеры на объектах, монтажные бригады приезжают на место. Это существенно снижает стартовые вложения.",
  },
  {
    q: "Какой минимальный бюджет для старта?",
    a: "Паушальный взнос + первоначальный рекламный бюджет + открытие ИП. Точные цифры обсуждаются индивидуально — запишитесь на консультацию.",
  },
  {
    q: "Как быстро можно окупить вложения?",
    a: "При соблюдении бизнес-процессов и активной работе — 3–5 месяцев. Первые 3–4 объекта, как правило, перекрывают паушальный взнос.",
  },
  {
    q: "Нужен ли опыт в остеклении или строительстве?",
    a: "Нет. Мы обучим вас и вашу команду с нуля: технологии, продажи, управление, реклама. Достаточно желания работать и развиваться.",
  },
  {
    q: "Как формируется прибыль?",
    a: "Доход складывается из маржи с каждого объекта. При среднем чеке и стабильном потоке заявок чистая прибыль в первые месяцы составляет от 250 000 ₽.",
  },
  {
    q: "Что входит в ежемесячные расходы?",
    a: "Роялти, налоги, зарплата рекламистов, рекламный бюджет. Все статьи расходов прозрачны и согласуются заранее.",
  },
  {
    q: "Есть ли эксклюзивность на территорию?",
    a: "Да. Мы закрепляем за партнёром эксклюзивную территорию — конкуренции внутри сети нет.",
  },
];

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
    <div className="min-h-screen font-body bg-white">

      {/* ═══════════════════ HEADER ═══════════════════ */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--brand-navy)]/95 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-[var(--brand-orange)] rounded-lg flex items-center justify-center">
              <Icon name="Home" size={18} className="text-white" />
            </div>
            <div>
              <div className="font-display font-bold text-white text-lg leading-none tracking-wide">БАЛКОН</div>
              <div className="text-[var(--brand-orange)] text-[10px] font-semibold tracking-widest uppercase">Франшиза</div>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <a href="tel:+79001234567" className="text-white/80 hover:text-[var(--brand-orange)] transition-colors font-body text-sm flex items-center gap-2">
              <Icon name="Phone" size={15} />
              +7 (900) 123-45-67
            </a>
            <a href="mailto:info@balcon-franchise.ru" className="text-white/80 hover:text-[var(--brand-orange)] transition-colors font-body text-sm flex items-center gap-2">
              <Icon name="Mail" size={15} />
              info@balcon-franchise.ru
            </a>
          </div>

          <div className="flex items-center gap-2">
            <a href="#" className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#25D366] transition-colors flex items-center justify-center">
              <Icon name="MessageCircle" size={15} className="text-white" />
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#2AABEE] transition-colors flex items-center justify-center">
              <Icon name="Send" size={15} className="text-white" />
            </a>
            <a href="tel:+79001234567" className="hidden md:flex ml-2 items-center gap-2 bg-[var(--brand-orange)] hover:bg-[var(--brand-orange-dark)] text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors">
              <Icon name="PhoneCall" size={15} />
              Позвонить
            </a>
          </div>
        </div>
      </header>

      {/* ═══════════════════ HERO ═══════════════════ */}
      <section className="relative min-h-screen hero-bg overflow-hidden flex items-center pt-16">
        <div className="absolute inset-0">
          <img src={HERO_IMAGE} alt="Остекление балконов" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628] via-[#0f1a2e]/90 to-transparent" />
        </div>

        <div className="absolute top-24 right-20 w-64 h-64 rounded-full bg-[var(--brand-orange)]/10 blur-3xl animate-float" />
        <div className="absolute bottom-32 right-40 w-40 h-40 rounded-full bg-[var(--brand-gold)]/10 blur-2xl animate-float" style={{ animationDelay: "2s" }} />

        <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-[var(--brand-orange)]/20 border border-[var(--brand-orange)]/40 rounded-full px-4 py-2 mb-6 animate-fade-in-up">
              <div className="w-2 h-2 rounded-full bg-[var(--brand-orange)] animate-pulse" />
              <span className="text-[var(--brand-orange)] text-sm font-semibold">Франшиза #1 в нише</span>
            </div>

            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-6 animate-fade-in-up-delay-1">
              ФРАНШИЗА<br />
              <span className="text-gradient">ОСТЕКЛЕНИЕ</span><br />
              И РЕМОНТ БАЛКОНОВ
            </h1>

            <div className="grid grid-cols-2 gap-3 mb-8 animate-fade-in-up-delay-2">
              {[
                { icon: "TrendingUp", val: "250 000 ₽", label: "Доход от" },
                { icon: "Clock", val: "3–5 мес.", label: "Окупаемость" },
                { icon: "Users", val: "Команда", label: "Обучение всех" },
                { icon: "Zap", val: "Быстрый", label: "Запуск" },
              ].map((m) => (
                <div key={m.val} className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-xl p-3 flex items-center gap-3">
                  <div className="w-9 h-9 bg-[var(--brand-orange)]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name={m.icon} size={18} className="text-[var(--brand-orange)]" />
                  </div>
                  <div>
                    <div className="text-white font-display font-bold text-lg leading-none">{m.val}</div>
                    <div className="text-white/60 text-xs mt-0.5">{m.label}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-l-4 border-[var(--brand-orange)] pl-4 mb-8 animate-fade-in-up-delay-2">
              <p className="text-white/50 text-sm italic">[Здесь будет ваш дескриптор — краткое описание уникальности предложения]</p>
            </div>

            <div className="flex flex-wrap gap-3 animate-fade-in-up-delay-3">
              <button
                onClick={() => setCallbackOpen(true)}
                className="flex items-center gap-2 bg-[var(--brand-orange)] hover:bg-[var(--brand-orange-dark)] text-white font-semibold px-6 py-3.5 rounded-xl transition-all hover:scale-105 orange-glow"
              >
                <Icon name="PhoneIncoming" size={18} />
                Обратный звонок
              </button>
              <a
                href="tel:+79001234567"
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-6 py-3.5 rounded-xl transition-all hover:scale-105"
              >
                <Icon name="Phone" size={18} />
                Позвонить
              </a>
            </div>
          </div>

          <div className="hidden md:block relative">
            <div className="relative animate-float">
              <img src={HERO_IMAGE} alt="Балкон" className="rounded-2xl w-full object-cover h-96 shadow-2xl" />
              <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl p-4 shadow-xl flex items-center gap-3 w-56">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <Icon name="CheckCircle" size={24} className="text-green-600" />
                </div>
                <div>
                  <div className="font-display font-bold text-[var(--brand-navy)] text-lg">3–4 мес.</div>
                  <div className="text-gray-500 text-xs">Полная окупаемость</div>
                </div>
              </div>
              <div className="absolute -top-5 -right-5 bg-[var(--brand-orange)] rounded-2xl p-4 shadow-xl text-white text-center">
                <div className="font-display font-bold text-2xl">250К+</div>
                <div className="text-white/80 text-xs">в месяц</div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40">
          <span className="text-xs font-body">Листайте вниз</span>
          <Icon name="ChevronDown" size={20} className="animate-bounce" />
        </div>
      </section>

      {/* ═══════════════════ STEPS ═══════════════════ */}
      <section className="py-20 bg-[var(--brand-light)]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-14">
            <span className="inline-block bg-[var(--brand-orange)]/10 text-[var(--brand-orange)] font-semibold text-sm px-4 py-1.5 rounded-full mb-4">Путь к результату</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[var(--brand-navy)]">
              ПОСЛЕ ЗАКЛЮЧЕНИЯ<br />
              <span className="text-[var(--brand-orange)]">ДОГОВОРА</span>
            </h2>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-[var(--brand-orange)] via-[var(--brand-gold)] to-[var(--brand-orange)] opacity-30" />
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { num: "01", icon: "GraduationCap", title: "Обучение", desc: "Для вас и вашей команды — 2–3 недели полного погружения в технологии и продажи" },
                { num: "02", icon: "Megaphone", title: "Запуск рекламы", desc: "Настройка и запуск рекламных каналов — первые заявки идут с первого дня" },
                { num: "03", icon: "Ruler", title: "Первые объекты", desc: "Считаем, замеряем, монтируем — под контролем наших специалистов" },
                { num: "04", icon: "Banknote", title: "Прибыль", desc: "Принимаем первые деньги и выстраиваем систему стабильного дохода" },
              ].map((step, i) => (
                <div key={i} className="relative group">
                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 card-hover h-full flex flex-col items-center text-center">
                    <div className="relative mb-4">
                      <div className="w-16 h-16 bg-[var(--brand-navy)] rounded-2xl flex items-center justify-center group-hover:bg-[var(--brand-orange)] transition-colors duration-300">
                        <Icon name={step.icon} size={28} className="text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-7 h-7 bg-[var(--brand-orange)] rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-display font-bold">{step.num}</span>
                      </div>
                    </div>
                    <h3 className="font-display font-bold text-xl text-[var(--brand-navy)] mb-2">{step.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ ФИНАНСЫ + КАЛЬКУЛЯТОР ═══════════════════ */}
      <section className="py-20 bg-[var(--brand-navy)]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-14">
            <span className="inline-block bg-[var(--brand-orange)]/20 text-[var(--brand-orange)] font-semibold text-sm px-4 py-1.5 rounded-full mb-4">Финансы</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
              ВЛОЖИЛ —<br />
              <span className="text-gradient">ПОЛУЧИЛ</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-14">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-red-500/20 rounded-xl flex items-center justify-center">
                  <Icon name="ArrowUpCircle" size={20} className="text-red-400" />
                </div>
                <h3 className="font-display font-bold text-white text-xl">РАСХОДЫ НА СТАРТЕ</h3>
              </div>
              <ul className="space-y-3">
                {["Паушальный взнос", "Рекламный бюджет", "Открытие ИП"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-white/70">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-yellow-500/20 rounded-xl flex items-center justify-center">
                  <Icon name="RefreshCw" size={20} className="text-yellow-400" />
                </div>
                <h3 className="font-display font-bold text-white text-xl">ЕЖЕМЕСЯЧНО</h3>
              </div>
              <ul className="space-y-3">
                {["Роялти", "Налоги", "Рекламисты и сервисы", "Рекламный бюджет"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-white/70">
                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-4 pt-4 border-t border-white/10">
                <div className="flex items-center gap-2 text-green-400 text-sm font-semibold">
                  <Icon name="CheckCircle" size={16} />
                  Офис и склад НЕ нужны!
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[var(--brand-orange)] to-[#ea6c0a] rounded-2xl p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-x-8 -translate-y-8" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                    <Icon name="TrendingUp" size={20} className="text-white" />
                  </div>
                  <h3 className="font-display font-bold text-white text-xl">ЧИСТАЯ ПРИБЫЛЬ</h3>
                </div>
                <div className="text-white font-display font-bold text-5xl mb-2">250К+</div>
                <div className="text-white/80 text-sm mb-4">в первые месяцы</div>
                <div className="bg-white/20 rounded-xl p-3 text-center">
                  <div className="text-white font-display font-bold text-2xl">3–4 мес.</div>
                  <div className="text-white/80 text-xs">Полная окупаемость</div>
                </div>
              </div>
            </div>
          </div>

          {/* Calculator */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-[var(--brand-orange)]/20 rounded-xl flex items-center justify-center">
                <Icon name="Calculator" size={20} className="text-[var(--brand-orange)]" />
              </div>
              <h3 className="font-display font-bold text-white text-2xl">КАЛЬКУЛЯТОР ДОХОДА</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <label className="text-white/70 text-sm mb-3 block">Ваши стартовые инвестиции</label>
                <div className="text-[var(--brand-orange)] font-display font-bold text-4xl mb-4">
                  {investAmount.toLocaleString("ru-RU")} ₽
                </div>
                <input
                  type="range"
                  min={200000}
                  max={2000000}
                  step={50000}
                  value={investAmount}
                  onChange={(e) => setInvestAmount(Number(e.target.value))}
                  className="w-full accent-[var(--brand-orange)] cursor-pointer"
                />
                <div className="flex justify-between text-white/40 text-xs mt-1">
                  <span>200К</span>
                  <span>2 млн</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 rounded-2xl p-5 text-center">
                  <Icon name="TrendingUp" size={24} className="text-[var(--brand-gold)] mx-auto mb-2" />
                  <div className="text-white font-display font-bold text-3xl">{monthlyRevenue.toLocaleString("ru-RU")} ₽</div>
                  <div className="text-white/50 text-xs mt-1">Прибыль в месяц</div>
                </div>
                <div className="bg-white/10 rounded-2xl p-5 text-center">
                  <Icon name="Clock" size={24} className="text-green-400 mx-auto mb-2" />
                  <div className="text-white font-display font-bold text-3xl">{paybackMonths} мес.</div>
                  <div className="text-white/50 text-xs mt-1">Окупаемость</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ ВЫГОДЫ ═══════════════════ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block bg-[var(--brand-orange)]/10 text-[var(--brand-orange)] font-semibold text-sm px-4 py-1.5 rounded-full mb-4">Что входит в пакет</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-[var(--brand-navy)] mb-6">
                ВСЕГО<br />
                <span className="text-[var(--brand-orange)]">14 ИНСТРУМЕНТОВ</span><br />
                ДЛЯ УСПЕХА
              </h2>
              <p className="text-gray-500 leading-relaxed mb-6">
                Мы передаём готовую работающую систему бизнеса — от рекламы до юридической защиты. Вам не нужно изобретать велосипед.
              </p>
              <img src={PARTNER_IMAGE} alt="Партнёры" className="rounded-2xl w-full object-cover h-56 shadow-lg" />
            </div>

            <div className="grid grid-cols-2 gap-3">
              {benefits.map((b, i) => (
                <div
                  key={i}
                  className="group flex items-start gap-3 p-3.5 rounded-xl border border-gray-100 hover:border-[var(--brand-orange)]/40 hover:bg-orange-50/50 transition-all cursor-default"
                >
                  <div className="w-9 h-9 bg-[var(--brand-navy)] group-hover:bg-[var(--brand-orange)] rounded-lg flex items-center justify-center flex-shrink-0 transition-colors">
                    <Icon name={b.icon} size={16} className="text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-[var(--brand-navy)] text-sm leading-snug">{b.title}</div>
                    <div className="text-gray-400 text-xs mt-0.5 leading-snug hidden group-hover:block">{b.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ CTA BANNER ═══════════════════ */}
      <section className="py-16 bg-gradient-to-r from-[var(--brand-orange)] to-[#ea6c0a] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-white blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-white blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">ГОТОВЫ НАЧАТЬ?</h2>
          <p className="text-white/80 text-lg mb-8">Запишитесь на бесплатную консультацию и узнайте всё о старте за 30 минут</p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setCallbackOpen(true)}
              className="flex items-center gap-2 bg-white text-[var(--brand-orange)] font-bold px-8 py-4 rounded-xl hover:scale-105 transition-transform shadow-lg"
            >
              <Icon name="PhoneIncoming" size={20} />
              Обратный звонок
            </button>
            <a
              href="tel:+79001234567"
              className="flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white border border-white/40 font-bold px-8 py-4 rounded-xl transition-all"
            >
              <Icon name="Phone" size={20} />
              Позвонить сейчас
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════ FAQ ═══════════════════ */}
      <section className="py-20 bg-[var(--brand-light)]">
        <div className="max-w-3xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <span className="inline-block bg-[var(--brand-orange)]/10 text-[var(--brand-orange)] font-semibold text-sm px-4 py-1.5 rounded-full mb-4">Вопросы и ответы</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[var(--brand-navy)]">
              ЧАСТЫЕ<br /><span className="text-[var(--brand-orange)]">ВОПРОСЫ</span>
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="bg-white border border-gray-100 rounded-2xl px-6 shadow-sm overflow-hidden"
              >
                <AccordionTrigger className="font-display font-semibold text-[var(--brand-navy)] text-left hover:no-underline py-5 text-base md:text-lg hover:text-[var(--brand-orange)] transition-colors">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-gray-500 text-sm leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ═══════════════════ FOOTER ═══════════════════ */}
      <footer className="bg-[var(--brand-navy)] pt-14 pb-6">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-4 gap-10 mb-12">
            <div className="md:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[var(--brand-orange)] rounded-xl flex items-center justify-center">
                  <Icon name="Home" size={20} className="text-white" />
                </div>
                <div>
                  <div className="font-display font-bold text-white text-xl leading-none">БАЛКОН</div>
                  <div className="text-[var(--brand-orange)] text-xs font-semibold tracking-widest uppercase">Франшиза</div>
                </div>
              </div>
              <p className="text-white/40 text-sm leading-relaxed">Франшиза остекления и ремонта балконов. Доход от 250 000 ₽.</p>
            </div>

            <div>
              <h4 className="font-display font-bold text-white text-sm uppercase tracking-widest mb-4">Контакты</h4>
              <ul className="space-y-3">
                <li>
                  <a href="tel:+79001234567" className="text-white/50 hover:text-[var(--brand-orange)] transition-colors text-sm flex items-center gap-2">
                    <Icon name="Phone" size={14} /> +7 (900) 123-45-67
                  </a>
                </li>
                <li>
                  <a href="mailto:info@balcon-franchise.ru" className="text-white/50 hover:text-[var(--brand-orange)] transition-colors text-sm flex items-center gap-2">
                    <Icon name="Mail" size={14} /> info@balcon-franchise.ru
                  </a>
                </li>
                <li className="text-white/50 text-sm flex items-start gap-2">
                  <Icon name="MapPin" size={14} className="mt-0.5 flex-shrink-0" />
                  <span>г. Москва, ул. Примерная, д. 1</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-display font-bold text-white text-sm uppercase tracking-widest mb-4">Карта сайта</h4>
              <ul className="space-y-2">
                {["О франшизе", "Этапы старта", "Финансы", "Выгоды", "Вопросы и ответы"].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-white/50 hover:text-[var(--brand-orange)] transition-colors text-sm">{link}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-display font-bold text-white text-sm uppercase tracking-widest mb-4">Мы в соцсетях</h4>
              <div className="flex gap-2 mb-6">
                {[
                  { icon: "MessageCircle", label: "WhatsApp" },
                  { icon: "Send", label: "Telegram" },
                  { icon: "Instagram", label: "Instagram" },
                ].map((s) => (
                  <a
                    key={s.label}
                    href="#"
                    title={s.label}
                    className="w-9 h-9 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                  >
                    <Icon name={s.icon} size={16} className="text-white" />
                  </a>
                ))}
              </div>
              <div className="space-y-2">
                <a href="#" className="text-white/40 hover:text-white/70 transition-colors text-xs block">Политика конфиденциальности</a>
                <a href="#" className="text-white/40 hover:text-white/70 transition-colors text-xs block">Договор оферты</a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-6 text-center">
            <p className="text-white/25 text-xs">© 2024 Балкон Франшиза. Все права защищены.</p>
          </div>
        </div>
      </footer>

      {/* ═══════════════════ CALLBACK MODAL ═══════════════════ */}
      {callbackOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setCallbackOpen(false)} />
          <div className="relative bg-white rounded-3xl p-8 w-full max-w-md shadow-2xl animate-fade-in-up">
            <button
              onClick={() => setCallbackOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
            >
              <Icon name="X" size={16} className="text-gray-600" />
            </button>

            {submitted ? (
              <div className="text-center py-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="CheckCircle" size={32} className="text-green-500" />
                </div>
                <h3 className="font-display font-bold text-[var(--brand-navy)] text-2xl mb-2">Заявка отправлена!</h3>
                <p className="text-gray-500">Мы перезвоним вам в ближайшее время</p>
              </div>
            ) : (
              <>
                <div className="mb-6">
                  <div className="w-12 h-12 bg-[var(--brand-orange)]/10 rounded-2xl flex items-center justify-center mb-4">
                    <Icon name="PhoneIncoming" size={24} className="text-[var(--brand-orange)]" />
                  </div>
                  <h3 className="font-display font-bold text-[var(--brand-navy)] text-2xl">Обратный звонок</h3>
                  <p className="text-gray-500 text-sm mt-1">Перезвоним в течение 15 минут</p>
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
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[var(--brand-orange)] transition-colors"
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
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[var(--brand-orange)] transition-colors"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[var(--brand-orange)] hover:bg-[var(--brand-orange-dark)] text-white font-bold py-3.5 rounded-xl transition-colors"
                  >
                    Отправить заявку
                  </button>
                  <p className="text-gray-400 text-xs text-center">Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности</p>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}