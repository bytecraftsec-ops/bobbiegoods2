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
      { title: "+ de 30 Livros de Colorir Cristãos — a partir de R$ 8,90" },
      {
        name: "description",
        content:
          "+ de 30 livros de colorir cristãos em PDF para imprimir quantas vezes quiser. Ideais para célula, escola dominical e devocional em família. Acesso vitalício a partir de R$ 8,90.",
      },
      { property: "og:title", content: "+ de 30 Livros de Colorir Cristãos — a partir de R$ 8,90" },
      {
        property: "og:description",
        content:
          "Momentos de fé com as crianças: + de 30 livros de colorir em PDF, acesso vitalício e impressão ilimitada.",
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
      <div className="border-b border-border bg-white px-4 py-2.5 text-center text-xs font-bold text-foreground sm:text-sm">
        <span className="inline-flex items-center justify-center gap-2">
          <ShieldCheck className="size-4 text-cta" /> Produto digital • Pagamento seguro • Acesso imediato no e-mail
        </span>
      </div>

      <header className="relative overflow-hidden bg-gradient-brand px-4 pb-14 pt-10 text-brand-foreground sm:pb-20 sm:pt-14">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
          <div className="order-2 text-center lg:order-1 lg:text-left">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-xs font-extrabold uppercase tracking-wide backdrop-blur sm:text-sm">
              <Sparkles className="size-4 text-gold" /> Kit digital infantil cristão
            </span>

            <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl">
              <span className="text-gold">+ de 30 livrinhos cristãos</span>
              <br />
              para imprimir e colorir
            </h1>

            <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-brand-foreground/90 lg:mx-0">
              Material pronto para mães que querem uma atividade simples, criativa e com valores cristãos para fazer com as crianças em casa, na célula ou na escola dominical.
            </p>

            <div className="mx-auto mt-5 flex max-w-md flex-wrap items-center justify-center gap-2 lg:mx-0 lg:justify-start">
              <span className="rounded-full bg-white/15 px-3 py-2 text-sm font-extrabold">PDF para imprimir</span>
              <span className="rounded-full bg-white/15 px-3 py-2 text-sm font-extrabold">Acesso imediato</span>
              <span className="rounded-full bg-gold px-3 py-2 text-sm font-extrabold text-gold-foreground">
                A partir de R$ 8,90
              </span>
            </div>

            <ul className="mx-auto mt-6 max-w-md space-y-3 lg:mx-0">
              {[
                { icon: Users, t: "Células e grupos" },
                { icon: Church, t: "Escola Dominical" },
                { icon: Heart, t: "Devocional em família" },
                { icon: GraduationCap, t: "Uso pedagógico" },
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

            <div className="mx-auto mt-7 max-w-md space-y-3 lg:mx-0">
              <CTA href="#ofertas">Quero ver os pacotes a partir de R$ 8,90</CTA>
              <a
                href={CHECKOUT_PREMIUM}
                className="block rounded-full border-2 border-white/50 bg-white/10 px-6 py-3.5 text-center text-sm font-extrabold uppercase tracking-wide backdrop-blur transition hover:bg-white/20"
              >
                Quero o Premium — R$ 17,90
              </a>
              <p className="flex items-center justify-center gap-2 text-xs text-brand-foreground/80 lg:justify-start">
                <Zap className="size-4" /> Acesso imediato · <ShieldCheck className="size-4" /> 7 dias de garantia
              </p>
              <p className="text-center text-xs font-bold text-brand-foreground/70 lg:text-left">
                ★ Centenas de mães e professoras já usam o material
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

      <div className="overflow-hidden border-y border-border bg-gold/15 py-3">
        <div className="animate-ticker flex w-max items-center gap-8 whitespace-nowrap text-sm font-extrabold uppercase tracking-wide text-foreground/80">
          {[0, 1].map((n) => (
            <div key={n} className="flex items-center gap-8" aria-hidden={n === 1}>
              {[
                "Acesso imediato",
                "Impressão ilimitada",
                "+ de 30 livros em PDF",
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

      <section className="px-4 py-14 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-extrabold sm:text-4xl">Perfeito para cada momento</h2>
          <p className="mt-3 text-center text-muted-foreground">
            Um material, várias formas de ensinar a Palavra com as crianças
          </p>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {beneficios.map(({ icon: Icon, title, text, color }, i) => (
              <Reveal key={title} delay={i * 100}>
                <div className="h-full rounded-3xl border border-border bg-card p-6 text-center shadow-soft transition-transform duration-300 hover:-translate-y-1.5 hover:shadow-card">
                  <div className={`mx-auto flex size-14 items-center justify-center rounded-full ${color}`}>
                    <Icon className="size-7 text-brand-foreground" />
                  </div>
                  <h3 className="mt-4 text-lg font-extrabold">{title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mx-auto mt-10 max-w-sm">
            <CTA href="#ofertas">Ver os pacotes</CTA>
          </div>
        </div>
      </section>

      <section className="bg-secondary px-4 py-14 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-extrabold sm:text-4xl">Veja exemplos do material</h2>
          <p className="mt-3 text-center text-muted-foreground">
            Confira alguns dos temas disponíveis no kit antes de escolher seu pacote
          </p>

          <div className="mt-10">
            <Carousel label="Exemplos do material de colorir">
              {livros.map((l) => (
                <figure key={l.title} className="overflow-hidden rounded-3xl border border-border bg-card shadow-card">
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
            <CTA href="#ofertas">Quero esse material</CTA>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#fffaf3] px-4 py-14 sm:py-20">
        <div className="pointer-events-none absolute -left-20 top-10 size-56 rounded-full bg-gold/15 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 bottom-10 size-56 rounded-full bg-brand/10 blur-3xl" />
        <Reveal className="relative mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-cta/10 px-4 py-2 text-xs font-extrabold uppercase tracking-wider text-cta-dark">
              <Star className="size-4 fill-gold text-gold" /> Relatos reais
            </span>
            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              O que as mães e professoras estão falando
            </h2>
            <p className="mt-3 leading-7 text-muted-foreground">
              Prints reais de conversas de quem já recebeu e usou o material com as crianças.
            </p>
          </div>

          <div className="mt-10">
            <Carousel label="Depoimentos reais de clientes" itemClassName="w-[96%] sm:w-[70%] lg:w-[52%]" hideArrows>
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

      <section id="ofertas" className="scroll-mt-16 bg-secondary px-4 py-14 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto w-fit rounded-full bg-alert px-5 py-2 text-center text-sm font-bold text-alert-foreground">
            <span className="inline-flex items-center gap-2">
              <Clock className="size-4" /> Oferta especial por tempo limitado
            </span>
          </div>

          <h2 className="mt-6 text-center text-3xl font-extrabold sm:text-4xl">Escolha seu pacote</h2>
          <p className="mt-3 text-center text-muted-foreground">
            Acesso imediato · Garantia de 7 dias · Impressão ilimitada
          </p>

          <div className="mt-10 grid items-start gap-6 lg:grid-cols-2">
            <Reveal>
              <div className="rounded-3xl border border-border bg-card p-7 shadow-soft">
                <h3 className="flex items-center justify-center gap-2 text-xl font-extrabold">
                  <Star className="size-6 fill-gold text-gold" /> Pacote Básico
                </h3>
                <p className="mt-5 text-center text-sm font-extrabold uppercase tracking-wide text-cta-dark">
                  Ideal para começar
                </p>
                <p className="mt-2 text-center text-5xl font-extrabold text-cta">R$ 8,90</p>
                <p className="mt-2 text-center text-sm text-muted-foreground">
                  Pagamento único • acesso vitalício
                </p>
                <ul className="mt-6 space-y-3">
                  {[
                    "+ de 30 Livros de Colorir em PDF",
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

            <Reveal delay={120}>
              <div className="animate-wiggle relative rounded-3xl border-2 border-gold bg-card p-7 pt-10 shadow-card ring-4 ring-gold/25">
                <span className="absolute -top-4 left-1/2 inline-flex -translate-x-1/2 items-center gap-2 rounded-full bg-gold px-4 py-2 text-xs font-extrabold uppercase text-gold-foreground shadow-soft">
                  <Crown className="size-4" /> Mais completo
                </span>
                <h3 className="flex items-center justify-center gap-2 text-xl font-extrabold">
                  <Crown className="size-6 text-gold" /> Pacote Premium
                </h3>
                <p className="mt-5 text-center text-sm font-extrabold uppercase tracking-wide text-cta-dark">
                  Tudo do Básico + bônus extras
                </p>
                <p className="mt-2 text-center text-5xl font-extrabold text-cta">R$ 17,90</p>
                <p className="mt-2 text-center text-sm text-muted-foreground">
                  Pagamento único • acesso vitalício
                </p>

                <div className="mt-6 rounded-2xl bg-cta/10 p-4 text-center">
                  <p className="text-xs font-extrabold uppercase tracking-wide text-cta-dark">
                    No Premium você recebe
                  </p>
                  <p className="mt-1 text-sm font-bold text-foreground">
                    Tudo do Básico + 5 benefícios extras
                  </p>
                </div>

                <ul className="mt-4 space-y-3">
                  {[
                    ["2 novos livros por mês", "Bônus mensal"],
                    ["Vídeos de Histórias Bíblicas", "Bônus"],
                    ["15 Versículos Ilustrados", "Bônus"],
                    ["Calendário Bíblico Semanal", "Bônus"],
                    ["Suporte no WhatsApp", "Bônus"],
                  ].map(([t, v]) => (
                    <li key={t} className="flex items-start gap-3 rounded-2xl bg-gold/12 p-3">
                      <Gift className="mt-0.5 size-5 shrink-0 text-gold" />
                      <span>
                        <span className="block text-sm font-extrabold">{t}</span>
                        <span className="block text-xs font-bold text-cta-dark">{v}</span>
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
                  <ChevronDown className={`size-5 shrink-0 transition-transform ${open === i ? "rotate-180" : ""}`} />
                </button>
                {open === i && <p className="px-5 pb-5 text-[15px] text-muted-foreground">{f.a}</p>}
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-3xl border border-cta/20 bg-cta/5 p-6 text-center">
            <ShieldCheck className="mx-auto size-8 text-cta" />
            <h3 className="mt-3 text-xl font-extrabold">Compra protegida por 7 dias</h3>
            <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-muted-foreground">
              Você pode conhecer o material com tranquilidade. Se não ficar satisfeito dentro do prazo da garantia, é só solicitar o reembolso.
            </p>
          </div>

          <div className="mt-8">
            <CTA href={CHECKOUT_PREMIUM}>Já tirei minhas dúvidas — quero o Premium</CTA>
          </div>
        </div>
      </section>

      <section className="bg-gradient-brand px-4 py-14 text-center text-brand-foreground sm:py-20">
        <div className="mx-auto max-w-2xl">
          <BookOpen className="mx-auto size-12 text-gold" />
          <h2 className="mt-5 text-3xl font-extrabold sm:text-4xl">
            Comece hoje a colorir a fé das suas crianças
          </h2>
          <p className="mt-4 text-brand-foreground/90">
            + de 30 livros digitais para imprimir quando quiser. Acesso imediato + garantia de 7 dias.
          </p>
          <div className="mx-auto mt-8 max-w-sm space-y-3">
            <CTA href={CHECKOUT_PREMIUM}>Quero o Premium — R$ 17,90</CTA>
            <a
              href={CHECKOUT_BASICO}
              className="block rounded-full border-2 border-white/40 px-6 py-3.5 text-sm font-extrabold uppercase tracking-wide transition hover:bg-white/10"
            >
              Prefiro o Básico — R$ 8,90
            </a>
          </div>
          <p className="mt-4 text-xs font-bold text-brand-foreground/70">
            ★ Centenas de famílias já usam · 7 dias de garantia
          </p>
        </div>
      </section>

      <footer className="bg-card px-4 py-8 text-center text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} · Livros de Colorir Cristãos. Todos os direitos reservados.</p>
        <p className="mt-2">Produto digital entregue em PDF. Garantia de 7 dias.</p>
      </footer>

      <div className="sticky bottom-0 z-30 border-t border-border bg-background/95 p-3 backdrop-blur lg:hidden">
        <CTA href="#ofertas" className="py-3.5 text-sm">
          Quero o material a partir de R$ 8,90
        </CTA>
      </div>
    </div>
  );
}
