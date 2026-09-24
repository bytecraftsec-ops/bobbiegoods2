import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  BookOpen,
  Check,
  Clock,
  Crown,
  GraduationCap,
  Gift,
  Heart,
  Church,
  Printer,
  ShieldCheck,
  Star,
  Sparkles,
  Users,
  Zap,
  ChevronDown,
} from "lucide-react";
import { Carousel } from "@/components/Carousel";
import { Reveal } from "@/components/Reveal";
import hero from "@/assets/hero.jpg";
import book1 from "@/assets/book-1.jpg";
import book2 from "@/assets/book-2.jpg";
import book3 from "@/assets/book-3.jpg";

const CHECKOUT_BASICO = "https://pay.cakto.com.br/n2t4fub";
const CHECKOUT_PREMIUM = "https://pay.cakto.com.br/8amwnbd";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "35 Livros de Colorir Cristãos — Só R$ 8,90" },
      {
        name: "description",
        content:
          "35 livros de colorir cristãos em PDF para imprimir quantas vezes quiser. Ideais para célula, escola dominical e devocional em família. Acesso vitalício a partir de R$ 8,90.",
      },
      { property: "og:title", content: "35 Livros de Colorir Cristãos — Só R$ 8,90" },
      {
        property: "og:description",
        content:
          "Momentos de fé com as crianças: 35 livros de colorir em PDF, acesso vitalício e impressão ilimitada.",
      },
    ],
  }),
  component: Index,
});

const beneficios = [
  {
    icon: Users,
    title: "Células e Grupos",
    text: "Atividades interativas para engajar crianças durante as reuniões",
    color: "bg-gradient-to-br from-brand to-brand-dark",
  },
  {
    icon: Church,
    title: "Escola Dominical",
    text: "Material complementar para aulas mais dinâmicas e envolventes",
    color: "bg-gradient-to-br from-[oklch(0.58_0.22_300)] to-[oklch(0.48_0.22_295)]",
  },
  {
    icon: Heart,
    title: "Devocional Familiar",
    text: "Momentos especiais de conexão com Deus em família",
    color: "bg-gradient-cta",
  },
  {
    icon: GraduationCap,
    title: "Uso Pedagógico",
    text: "Ferramenta educativa que desenvolve coordenação e criatividade",
    color: "bg-gradient-to-br from-gold to-[oklch(0.68_0.18_50)]",
  },
];

const livros = [
  { img: book1, title: "Pedro Discípulo" },
  { img: book2, title: "A Arca de Noé" },
  { img: book3, title: "Jonas e a Baleia" },
  { img: hero, title: "Yeshua" },
];

const depoimentos = Array.from({ length: 10 }, (_, index) => ({
  src: `/depoimentos/prompt${index + 1}.png`,
  alt: `Depoimento real de cliente ${index + 1}`,
}));

const faq = [
  {
    q: "Como recebo os livros?",
    a: "Na hora. Assim que o pagamento é aprovado você recebe o acesso no seu e-mail para baixar todos os PDFs.",
  },
  {
    q: "Posso imprimir quantas vezes quiser?",
    a: "Sim! O acesso é vitalício e a impressão é ilimitada, para sua família, célula ou turma inteira.",
  },
  {
    q: "Qual a faixa etária recomendada?",
    a: "De 2 a 12 anos. Há desenhos com traços grandes para os menores e mais detalhados para os maiores.",
  },
  {
    q: "Como funciona o bônus mensal?",
    a: "No pacote premium você recebe 2 novos livros por mês, sem pagar nada a mais.",
  },
  {
    q: "E se eu não gostar?",
    a: "Você tem 7 dias de garantia. Se não gostar, devolvemos 100% do valor sem burocracia.",
  },
];

function CTA({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`shine-overlay animate-pulse-glow inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-cta px-6 py-4 text-center text-base font-extrabold uppercase tracking-wide text-cta-foreground transition-transform hover:scale-[1.03] active:scale-[0.99] sm:text-lg ${className}`}
    >
      {children}
    </a>
  );
}


function Index() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Barra de urgência */}
      <div className="border-b border-border bg-white px-4 py-2.5 text-center text-xs font-bold text-foreground sm:text-sm"><span className="inline-flex items-center justify-center gap-2"><ShieldCheck className="size-4 text-cta" /> Produto digital • Pagamento seguro • Acesso após a confirmação</span></div>

      {/* Hero */}
      <header className="relative overflow-hidden bg-gradient-brand px-4 pb-14 pt-10 text-brand-foreground sm:pb-20 sm:pt-14">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
          <div className="order-2 text-center lg:order-1 lg:text-left">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-xs font-extrabold uppercase tracking-wide backdrop-blur sm:text-sm"><Sparkles className="size-4 text-gold" /> Kit digital infantil</span>
            <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl">Uma atividade que a criança<br /><span className="text-gold">vai querer fazer de novo.</span></h1>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-brand-foreground/90 lg:mx-0">Um kit com <strong>35 livros de colorir em PDF</strong> para você imprimir em casa e transformar um tempinho livre em uma atividade simples, criativa e especial.</p>

            <ul className="mx-auto mt-6 max-w-md space-y-3 lg:mx-0">
              {[
                { icon: Users, t: "Células" },
                { icon: Church, t: "Escola Dominical" },
                { icon: Heart, t: "Devocional Familiar" },
                { icon: GraduationCap, t: "Pedagogia" },
              ].map(({ icon: Icon, t }) => (
                <li
                  key={t}
                  className="flex items-center gap-3 rounded-2xl bg-white/12 px-4 py-3 text-left font-bold backdrop-blur"
                >
                  <Icon className="size-5 text-gold" />
                  {t}
                </li>
              ))}
            </ul>

            <div className="mx-auto mt-7 max-w-md lg:mx-0">
              <CTA href="#ofertas">Quero ver as ofertas</CTA>
              <p className="mt-3 flex items-center justify-center gap-2 text-xs text-brand-foreground/80 lg:justify-start">
                <Zap className="size-4" /> Acesso imediato · <ShieldCheck className="size-4" /> 7
                dias de garantia
              </p>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <img
              src={hero}
              alt="Ilustração cristã infantil para colorir"
              width={912}
              height={912}
              className="animate-float mx-auto w-64 rounded-3xl shadow-card sm:w-80 lg:w-full lg:max-w-md"
            />
          </div>
        </div>
      </header>

      {/* Ticker de benefícios */}
      <div className="overflow-hidden border-y border-border bg-gold/15 py-3">
        <div className="animate-ticker flex w-max items-center gap-8 whitespace-nowrap text-sm font-extrabold uppercase tracking-wide text-foreground/80">
          {[0, 1].map((n) => (
            <div key={n} className="flex items-center gap-8" aria-hidden={n === 1}>
              {[
                "Acesso imediato",
                "Impressão ilimitada",
                "35 livros em PDF",
                "Acesso vitalício",
                "7 dias de garantia",
                "Bônus mensais no premium",
              ].map((t) => (
                <span key={t} className="inline-flex items-center gap-2">
                  <Star className="size-4 fill-gold text-gold" /> {t}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Benefícios */}
      <section className="px-4 py-14 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-extrabold sm:text-4xl">
            Perfeito para cada momento
          </h2>
          <p className="mt-3 text-center text-muted-foreground">
            Um material, infinitas formas de ensinar a Palavra
          </p>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {beneficios.map(({ icon: Icon, title, text, color }, i) => (
              <Reveal key={title} delay={i * 100}>
                <div className="h-full rounded-3xl border border-border bg-card p-6 text-center shadow-soft transition-transform duration-300 hover:-translate-y-1.5 hover:shadow-card">
                  <div
                    className={`mx-auto flex size-14 items-center justify-center rounded-full ${color}`}
                  >
                    <Icon className="size-7 text-brand-foreground" />
                  </div>
                  <h3 className="mt-4 text-lg font-extrabold">{title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mx-auto mt-10 max-w-sm">
            <CTA href="#ofertas">Quero ver as ofertas</CTA>
          </div>
        </div>
      </section>

      {/* Páginas demonstrativas */}
      <section className="bg-secondary px-4 py-14 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-extrabold sm:text-4xl">
            Conheça nossos livros de colorir
          </h2>
          <p className="mt-3 text-center text-muted-foreground">
            Páginas reais do material — arraste para o lado para ver mais
          </p>

          <div className="mt-10">
            <Carousel label="Páginas demonstrativas dos livros">
              {livros.map((l) => (
                <figure
                  key={l.title}
                  className="overflow-hidden rounded-3xl border border-border bg-card shadow-card"
                >
                  <img
                    src={l.img}
                    alt={l.title}
                    loading="lazy"
                    width={912}
                    height={912}
                    className="aspect-square w-full object-cover"
                  />
                  <figcaption className="p-4 text-center font-bold">{l.title}</figcaption>
                </figure>
              ))}
            </Carousel>
          </div>

          <div className="mx-auto mt-10 max-w-sm">
            <CTA href="#ofertas">Quero ver as ofertas</CTA>
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS REAIS */}
      <section className="relative overflow-hidden bg-[#fffaf3] px-4 py-14 sm:py-20">
        <div className="pointer-events-none absolute -left-20 top-10 size-56 rounded-full bg-gold/15 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 bottom-10 size-56 rounded-full bg-brand/10 blur-3xl" />
        <Reveal className="relative mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-cta/10 px-4 py-2 text-xs font-extrabold uppercase tracking-wider text-cta-dark">
              <Star className="size-4 fill-gold text-gold" /> Relatos reais
            </span>
            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">Quem recebeu o material conta como foi</h2>
            <p className="mt-3 leading-7 text-muted-foreground">
              Depoimentos enviados por clientes após receberem e utilizarem o material.
            </p>
          </div>

          <div className="mt-10">
            <Carousel label="Depoimentos reais de clientes" itemClassName="w-[88%] sm:w-[60%] lg:w-[46%]" hideArrows>
              {depoimentos.map((depoimento) => (
                <figure
                  key={depoimento.src}
                  className="overflow-hidden rounded-[1.75rem] border border-border bg-white shadow-soft"
                >
                  <img
                    src={depoimento.src}
                    alt={depoimento.alt}
                    loading="lazy"
                    className="h-auto w-full object-contain"
                  />
                </figure>
              ))}
            </Carousel>
          </div>

          <p className="mt-5 text-center text-xs font-bold text-muted-foreground">
            Arraste para o lado no celular para ver mais depoimentos.
          </p>
        </Reveal>
      </section>

      {/* Ofertas */}
      <section id="ofertas" className="scroll-mt-16 bg-secondary px-4 py-14 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto w-fit rounded-full bg-alert px-5 py-2 text-center text-sm font-bold text-alert-foreground">
            <span className="inline-flex items-center gap-2">
              <Clock className="size-4" /> Oferta válida somente hoje
            </span>
          </div>
          <h2 className="mt-6 text-center text-3xl font-extrabold sm:text-4xl">
            Escolha sua oferta especial
          </h2>
          <p className="mt-3 text-center text-muted-foreground">
            Livros de qualidade profissional para enriquecer seus momentos de fé
          </p>

          <div className="mt-10 grid items-start gap-6 lg:grid-cols-2">
            {/* Básico */}
            <Reveal>
            <div className="rounded-3xl border border-border bg-card p-7 shadow-soft">
              <h3 className="flex items-center justify-center gap-2 text-xl font-extrabold">
                <Star className="size-6 fill-gold text-gold" /> Pacote Básico
              </h3>
              <p className="mt-4 text-center text-lg font-bold text-alert line-through">R$ 47,00</p>
              <p className="mx-auto mt-1 w-fit rounded-full bg-cta px-3 py-1 text-xs font-bold text-cta-foreground">
                -81%
              </p>
              <p className="mt-2 text-center text-5xl font-extrabold text-cta">R$ 8,90</p>
              <p className="mt-2 text-center text-sm text-muted-foreground">
                Você economiza R$ 38,10
              </p>

              <ul className="mt-6 space-y-3">
                {[
                  "35 Livros de Colorir em PDF",
                  "Temas Bíblicos Variados",
                  "Acesso Vitalício",
                  "Impressão Ilimitada",
                  "Garantia de 7 dias",
                ].map((i) => (
                  <li key={i} className="flex items-center gap-3 text-[15px]">
                    <Check className="size-5 shrink-0 text-cta" /> {i}
                  </li>
                ))}
              </ul>

              <div className="mt-7">
                <CTA href={CHECKOUT_BASICO}>Quero o pacote básico</CTA>
              </div>
            </div>
            </Reveal>

            {/* Premium */}
            <Reveal delay={120}>
            <div className="animate-wiggle relative rounded-3xl border-2 border-gold bg-card p-7 pt-10 shadow-card ring-4 ring-gold/25">
              <span className="absolute -top-4 left-1/2 inline-flex -translate-x-1/2 items-center gap-2 rounded-full bg-gold px-4 py-2 text-xs font-extrabold uppercase text-gold-foreground shadow-soft">
                <Crown className="size-4" /> Mais vendido
              </span>
              <h3 className="flex items-center justify-center gap-2 text-xl font-extrabold">
                <Crown className="size-6 text-gold" /> Pacote Premium
              </h3>
              <p className="mt-4 text-center text-lg font-bold text-alert line-through">
                R$ 256,00
              </p>
              <p className="mx-auto mt-1 w-fit rounded-full bg-cta px-3 py-1 text-xs font-bold text-cta-foreground">
                -93%
              </p>
              <p className="mt-2 text-center text-5xl font-extrabold text-cta">R$ 19,90</p>
              <p className="mt-2 text-center text-sm text-muted-foreground">
                Você economiza R$ 239,00
              </p>

              <p className="mt-6 rounded-2xl bg-cta/10 py-3 text-center font-extrabold text-cta-dark">
                TUDO DO PACOTE BÁSICO +
              </p>

              <ul className="mt-4 space-y-3">
                {[
                  ["BÔNUS 1: 2 novos livros por mês", "R$ 89/ano"],
                  ["BÔNUS 2: Vídeos de Histórias Bíblicas", "R$ 27,00"],
                  ["BÔNUS 3: 15 Versículos Ilustrados", "R$ 19,00"],
                  ["BÔNUS 4: Calendário Bíblico Semanal", "R$ 17,00"],
                  ["BÔNUS 5: Suporte no WhatsApp", "R$ 37,00"],
                ].map(([t, v]) => (
                  <li key={t} className="flex items-start gap-3 rounded-2xl bg-gold/12 p-3">
                    <Gift className="mt-0.5 size-5 shrink-0 text-gold" />
                    <span>
                      <span className="block text-sm font-extrabold">{t}</span>
                      <span className="block text-xs font-bold text-alert line-through">{v}</span>
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-7">
                <CTA href={CHECKOUT_PREMIUM}>Quero o pacote premium</CTA>
              </div>
            </div>
            </Reveal>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              { icon: Zap, t: "Acesso imediato" },
              { icon: Printer, t: "Imprima quantas vezes quiser" },
              { icon: ShieldCheck, t: "7 dias de garantia" },
            ].map(({ icon: Icon, t }) => (
              <div
                key={t}
                className="flex items-center justify-center gap-2 rounded-2xl bg-card px-4 py-4 text-center text-sm font-bold shadow-soft"
              >
                <Icon className="size-5 text-cta" /> {t}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-14 sm:py-20">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-center text-3xl font-extrabold sm:text-4xl">Perguntas frequentes</h2>
          <div className="mt-8 space-y-3">
            {faq.map((f, i) => (
              <div key={f.q} className="overflow-hidden rounded-2xl bg-secondary">
                <button
                  type="button"
                  onClick={() => setOpen(open === i ? null : i)}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left font-extrabold"
                >
                  {f.q}
                  <ChevronDown
                    className={`size-5 shrink-0 transition-transform ${open === i ? "rotate-180" : ""}`}
                  />
                </button>
                {open === i && (
                  <p className="px-5 pb-5 text-[15px] text-muted-foreground">{f.a}</p>
                )}
              </div>
            ))}
          </div>

          <div className="mt-8">
            <CTA href={CHECKOUT_PREMIUM}>Tirei minhas dúvidas, quero comprar</CTA>
          </div>
        </div>
      </section>

      {/* Fechamento */}
      <section className="bg-gradient-brand px-4 py-14 text-center text-brand-foreground sm:py-20">
        <div className="mx-auto max-w-2xl">
          <BookOpen className="mx-auto size-12 text-gold" />
          <h2 className="mt-5 text-3xl font-extrabold sm:text-4xl">
            Comece hoje a colorir a fé das suas crianças
          </h2>
          <p className="mt-4 text-brand-foreground/90">
            35 livros digitais para imprimir quando quiser, com acesso conforme as condições da oferta.
          </p>
          <div className="mx-auto mt-8 max-w-sm space-y-3">
            <CTA href={CHECKOUT_PREMIUM}>Quero o pacote premium — R$ 19,90</CTA>
            <a
              href={CHECKOUT_BASICO}
              className="block rounded-full border-2 border-white/40 px-6 py-3.5 text-sm font-extrabold uppercase tracking-wide"
            >
              Prefiro o básico — R$ 8,90
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-card px-4 py-8 text-center text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} · Livros de Colorir Cristãos. Todos os direitos reservados.</p>
        <p className="mt-2">Produto digital entregue em PDF. Garantia de 7 dias.</p>
      </footer>

      {/* CTA fixo no mobile */}
      <div className="sticky bottom-0 z-30 border-t border-border bg-background/95 p-3 backdrop-blur lg:hidden">
        <CTA href={CHECKOUT_PREMIUM} className="py-3.5 text-sm">
          Garantir meus 35 livros
        </CTA>
      </div>
    </div>
  );
}
