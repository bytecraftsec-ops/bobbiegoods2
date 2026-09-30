import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  BookOpen,
  Check,
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
  FileText,
  Mail,
  Infinity,
} from "lucide-react";
import { Carousel } from "@/components/Carousel";

const CHECKOUT_BASICO = "https://pay.kiwify.com.br/cChHXVu";
const CHECKOUT_PREMIUM = "https://pay.kiwify.com.br/NedckcM";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "35 Livros de Colorir Cristãos — a partir de R$ 10" },
      {
        name: "description",
        content:
          "Kit digital infantil cristão: 35 livrinhos em PDF para imprimir e colorir. Histórias bíblicas, versículos e atividades. Acesso no e-mail a partir de R$ 10.",
      },
      { property: "og:title", content: "35 Livros de Colorir Cristãos — a partir de R$ 10" },
      {
        property: "og:description",
        content:
          "Material digital cristão para imprimir: 35 livrinhos, acesso vitalício e garantia de 7 dias.",
      },
    ],
  }),
  component: Index,
});

const oQueRecebe = [
  { icon: BookOpen, text: "Livrinhos cristãos para imprimir e colorir" },
  { icon: FileText, text: "Arquivos em PDF prontos para impressão" },
  { icon: Heart, text: "Histórias bíblicas e versículos" },
  { icon: Printer, text: "Impressão ilimitada" },
  { icon: Mail, text: "Acesso digital no e-mail após a compra" },
  { icon: Infinity, text: "Acesso vitalício" },
];

const temas = [
  "A Criação",
  "Noé e a Arca",
  "Moisés",
  "Davi e Golias",
  "Jonas",
  "Jesus e as Crianças",
  "A Vida de Jesus",
  "Versículos",
  "Histórias Bíblicas",
  "Pastor",
];

const beneficios = [
  {
    icon: Users,
    title: "Células e Grupos",
    text: "Atividades para engajar crianças nas reuniões",
  },
  {
    icon: Church,
    title: "Escola Dominical",
    text: "Material complementar para aulas mais dinâmicas",
  },
  {
    icon: Heart,
    title: "Devocional em família",
    text: "Momentos de conexão com Deus em casa",
  },
  {
    icon: GraduationCap,
    title: "Uso pedagógico",
    text: "Estimula coordenação e criatividade",
  },
];

const livros = [
  { img: "/livros-opt/01.webp", title: "Página para colorir" },
  { img: "/livros-opt/17.webp", title: "História bíblica" },
  { img: "/livros-opt/26.webp", title: "Atividade cristã" },
  { img: "/livros-opt/27.webp", title: "Página do material" },
  { img: "/livros-opt/35.webp", title: "Versículo ilustrado" },
  { img: "/livros-opt/Screenshot_9.webp", title: "Página para colorir" },
  { img: "/livros-opt/Screenshot_10.webp", title: "História bíblica" },
  { img: "/livros-opt/Screenshot_11.webp", title: "Atividade cristã" },
  { img: "/livros-opt/Screenshot_12.webp", title: "Página do material" },
  { img: "/livros-opt/Screenshot_13.webp", title: "Desenho para colorir" },
];

const provasReais = [
  { src: "/provas-opt/prova-1.webp", alt: "Exemplo de uso do material" },
  { src: "/provas-opt/prova-2.webp", alt: "Exemplo de atividade para colorir" },
  { src: "/provas-opt/prova-3.webp", alt: "Exemplo de uso do material" },
  { src: "/provas-opt/prova-4.webp", alt: "Exemplo de atividade para colorir" },
  { src: "/provas-opt/prova-5.webp", alt: "Exemplo de uso do material" },
  { src: "/provas-opt/prova-6.webp", alt: "Exemplo de material impresso" },
];

const depoimentos = Array.from({ length: 10 }, (_, index) => ({
  src: `/depoimentos/prompt${index + 1}.webp`,
  alt: `Depoimento de cliente ${index + 1}`,
}));

const faq = [
  {
    q: "O produto é digital?",
    a: "Sim. Você recebe os arquivos em PDF no e-mail após a confirmação do pagamento. Não há envio físico.",
  },
  {
    q: "Como e quando recebo o material?",
    a: "Assim que o pagamento é aprovado, o acesso chega no seu e-mail para baixar todos os PDFs. É imediato.",
  },
  {
    q: "Posso imprimir quantas vezes quiser?",
    a: "Sim. O acesso é vitalício e a impressão é ilimitada — para casa, célula ou turma.",
  },
  {
    q: "Em qual tamanho posso imprimir?",
    a: "Os arquivos são PDF e você pode imprimir no tamanho que preferir. O mais comum é papel A4.",
  },
  {
    q: "Para qual idade é indicado?",
    a: "De 2 a 12 anos. Há desenhos com traços grandes para os menores e mais detalhados para os maiores.",
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
    <div className="min-h-screen bg-background pb-24 text-foreground lg:pb-0">
      <div className="border-b border-border bg-white px-4 py-2.5 text-center text-xs font-bold text-foreground sm:text-sm">
        <span className="inline-flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
          <ShieldCheck className="size-4 shrink-0 text-cta" />
          Produto digital · Pagamento seguro · Acesso no e-mail
        </span>
      </div>

      <header className="relative overflow-hidden bg-gradient-brand px-4 pb-10 pt-7 text-brand-foreground sm:pb-14 sm:pt-11">
        <div className="mx-auto grid max-w-6xl items-center gap-7 lg:grid-cols-2 lg:gap-10">
          <div className="order-2 text-center lg:order-1 lg:text-left">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1.5 text-xs font-extrabold uppercase tracking-wide backdrop-blur sm:px-4 sm:py-2 sm:text-sm">
              <Sparkles className="size-4 text-gold" /> Kit digital infantil cristão
            </span>

            <h1 className="mt-3.5 text-[1.7rem] font-extrabold leading-[1.12] sm:mt-5 sm:text-5xl lg:text-6xl">
              <span className="text-gold">35 livrinhos cristãos</span>
              <br />
              para imprimir e colorir
            </h1>

            <p className="mx-auto mt-3.5 max-w-xl text-[15px] leading-6 text-brand-foreground/90 sm:mt-5 sm:text-lg sm:leading-8 lg:mx-0">
              Histórias bíblicas e atividades em PDF — prontas para usar em casa, na célula ou na escola dominical.
            </p>

            <div className="mx-auto mt-4 flex max-w-md flex-wrap items-center justify-center gap-2 lg:mx-0 lg:justify-start">
              <span className="rounded-full bg-white/15 px-3 py-1.5 text-xs font-extrabold sm:text-sm">
                PDF digital
              </span>
              <span className="rounded-full bg-white/15 px-3 py-1.5 text-xs font-extrabold sm:text-sm">
                Acesso no e-mail
              </span>
              <span className="rounded-full bg-gold px-3 py-1.5 text-xs font-extrabold text-gold-foreground sm:text-sm">
                A partir de R$ 10,00
              </span>
            </div>
            <p className="mx-auto mt-2.5 max-w-md text-center text-xs font-bold text-brand-foreground/75 lg:mx-0 lg:text-left sm:text-sm">
              35 livros por R$ 10 · menos de R$ 0,30 cada
            </p>

            <div className="mx-auto mt-5 max-w-md space-y-2.5 lg:mx-0 sm:mt-6 sm:space-y-3">
              <CTA href={CHECKOUT_PREMIUM}>Quero o Premium — R$ 19,90</CTA>
              <a
                href={CHECKOUT_BASICO}
                className="block rounded-full border-2 border-white/40 bg-white/10 px-6 py-3 text-center text-sm font-extrabold tracking-wide text-brand-foreground backdrop-blur transition hover:bg-white/20 sm:text-base"
              >
                Ou leve o Básico por R$ 10,00
              </a>
              <p className="text-center text-xs font-bold text-brand-foreground/90 lg:text-left sm:text-sm">
                Acesso imediato no e-mail após o PIX ou cartão
              </p>
              <p className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-xs text-brand-foreground/80 lg:justify-start">
                <span className="inline-flex items-center gap-1">
                  <Zap className="size-3.5" /> Liberação na hora
                </span>
                <span className="opacity-50">·</span>
                <span className="inline-flex items-center gap-1">
                  <ShieldCheck className="size-3.5" /> 7 dias de garantia
                </span>
              </p>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <img
              src="/hero-colorir.webp"
              alt="Criança colorindo livros cristãos com giz de cera"
              width={720}
              height={899}
              className="animate-float mx-auto w-52 rounded-3xl shadow-card object-cover sm:w-72 lg:w-full lg:max-w-md"
            />
          </div>
        </div>
      </header>

      <div className="border-y border-border bg-gold/15 py-2.5 sm:py-3">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-5 gap-y-1.5 px-4 text-xs font-extrabold uppercase tracking-wide text-foreground/80 sm:text-sm">
          {["Produto digital", "PDF para imprimir", "Acesso vitalício", "7 dias de garantia"].map((t) => (
            <span key={t} className="inline-flex items-center gap-1.5">
              <Star className="size-3.5 fill-gold text-gold sm:size-4" /> {t}
            </span>
          ))}
        </div>
      </div>

      <section className="px-4 py-8 sm:py-10">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-2xl font-extrabold sm:text-3xl">O que você recebe</h2>
          <p className="mt-2 text-center text-sm text-muted-foreground sm:text-base">
            Tudo digital, pronto para baixar e imprimir
          </p>

          <ul className="mt-7 grid gap-3 sm:mt-8 sm:grid-cols-2">
            {oQueRecebe.map(({ icon: Icon, text }) => (
              <li
                key={text}
                className="flex items-start gap-3 rounded-2xl border border-border bg-card px-4 py-3.5 shadow-soft"
              >
                <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-full bg-cta/10">
                  <Icon className="size-4 text-cta" />
                </span>
                <span className="text-sm font-bold leading-snug sm:text-[15px]">{text}</span>
              </li>
            ))}
          </ul>

          <div className="mt-7 sm:mt-8">
            <p className="text-center text-sm font-extrabold text-foreground">Temas incluídos no material</p>
            <div className="mt-3.5 flex flex-wrap justify-center gap-2 sm:mt-4">
              {temas.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-border bg-secondary px-3 py-1.5 text-xs font-bold text-foreground sm:text-sm"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="mx-auto mt-7 max-w-sm space-y-2 sm:mt-8">
            <CTA href={CHECKOUT_BASICO}>Quero meu kit — R$ 10</CTA>
            <p className="text-center text-xs font-bold text-muted-foreground">
              Acesso imediato no e-mail após o PIX ou cartão
            </p>
          </div>
        </div>
      </section>

      <section className="bg-secondary px-4 py-8 sm:py-10">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-2xl font-extrabold sm:text-3xl">Páginas reais do material</h2>
          <p className="mt-2 text-center text-sm text-muted-foreground sm:text-base">
            Arraste para ver a qualidade dos desenhos
          </p>

          <div className="mt-7 sm:mt-8">
            <Carousel label="Exemplos do material de colorir">
              {livros.map((l) => (
                <figure key={l.title + l.img} className="overflow-hidden rounded-3xl border border-border bg-card shadow-card">
                  <img
                    src={l.img}
                    alt={l.title}
                    loading="lazy"
                    width={800}
                    height={571}
                    className="aspect-[4/3] w-full object-cover"
                  />
                  <figcaption className="p-3 text-center text-sm font-bold sm:p-4">{l.title}</figcaption>
                </figure>
              ))}
            </Carousel>
          </div>

          <div className="mx-auto mt-7 max-w-sm space-y-2 sm:mt-8">
            <CTA href={CHECKOUT_BASICO}>Garantir meu kit</CTA>
            <p className="text-center text-xs font-bold text-muted-foreground">
              Acesso imediato no e-mail após o PIX ou cartão
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 py-6 sm:py-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-xl font-extrabold sm:text-2xl">Para usar onde você precisar</h2>
          <p className="mt-1.5 text-center text-xs text-foreground/70 sm:text-sm">
            Um material, várias formas de ensinar a Palavra
          </p>

          <div className="mt-5 grid grid-cols-2 gap-2.5 sm:mt-6 sm:gap-3 lg:grid-cols-4">
            {beneficios.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="h-full rounded-xl border border-border bg-card p-3.5 text-center shadow-md sm:p-4"
              >
                <div className="mx-auto flex size-9 items-center justify-center rounded-full bg-cta/10 sm:size-10">
                  <Icon className="size-4 text-cta sm:size-5" />
                </div>
                <h3 className="mt-2 text-sm font-extrabold sm:text-[15px]">{title}</h3>
                <p className="mt-1 text-xs leading-snug text-foreground/65 sm:text-sm">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-card px-4 py-8 sm:py-10">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-cta/10 px-3 py-1.5 text-xs font-extrabold uppercase tracking-wider text-cta-dark">
              <Heart className="size-3.5 fill-cta text-cta" /> Exemplos de uso
            </span>
            <h2 className="mt-3 text-2xl font-extrabold sm:text-3xl">Crianças usando o material</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground sm:text-base">
              Exemplos de como o material pode ser usado.
            </p>
          </div>

          <div className="mt-7 sm:mt-8">
            <Carousel label="Exemplos de uso do material" itemClassName="w-[88%] sm:w-[55%] lg:w-[38%]">
              {provasReais.map((p) => (
                <figure
                  key={p.src}
                  className="overflow-hidden rounded-[1.5rem] border border-border bg-white shadow-soft"
                >
                  <img src={p.src} alt={p.alt} loading="lazy" className="h-auto w-full object-cover" />
                </figure>
              ))}
            </Carousel>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#fffaf3] px-4 py-8 sm:py-10">
        <div className="relative mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-cta/10 px-3 py-1.5 text-xs font-extrabold uppercase tracking-wider text-cta-dark">
              <Star className="size-3.5 fill-gold text-gold" /> Depoimentos
            </span>
            <h2 className="mt-3 text-2xl font-extrabold sm:text-3xl">
              Clientes satisfeitos
            </h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground sm:text-base">
              Veja o que estão falando sobre o material.
            </p>
          </div>

          <div className="mt-7 sm:mt-8">
            <Carousel
              label="Depoimentos de clientes"
              itemClassName="w-[94%] sm:w-[70%] lg:w-[52%]"
            >
              {depoimentos.map((d) => (
                <figure
                  key={d.src}
                  className="overflow-hidden rounded-[1.5rem] border border-border bg-white shadow-soft"
                >
                  <img src={d.src} alt={d.alt} loading="lazy" className="h-auto w-full object-contain" />
                </figure>
              ))}
            </Carousel>
          </div>

          <p className="mt-4 text-center text-xs font-bold text-muted-foreground">
            Arraste para o lado no celular para ver mais.
          </p>
        </div>
      </section>

      <section id="ofertas" className="scroll-mt-16 bg-secondary px-4 py-8 sm:py-10">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-2xl font-extrabold sm:text-3xl">Escolha seu pacote</h2>
          <p className="mt-2 text-center text-sm text-muted-foreground">
            Acesso no e-mail · Garantia de 7 dias · Impressão ilimitada
          </p>

          <div className="mt-7 grid items-start gap-5 sm:mt-8 lg:grid-cols-2 lg:gap-6">
            <div className="rounded-3xl border border-border bg-card p-5 shadow-soft sm:p-7">
              <h3 className="flex items-center justify-center gap-2 text-lg font-extrabold sm:text-xl">
                <Star className="size-5 fill-gold text-gold sm:size-6" /> Pacote Básico
              </h3>
              <p className="mt-3 text-center text-xs font-extrabold uppercase tracking-wide text-cta-dark sm:mt-4">
                Ideal para começar
              </p>
              <p className="mt-1 text-center text-4xl font-extrabold text-cta sm:text-5xl">R$ 10,00</p>
              <p className="mt-1 text-center text-sm text-muted-foreground">
                Pagamento único · acesso vitalício
              </p>
              <ul className="mt-5 space-y-2.5">
                {[
                  "35 livrinhos de colorir em PDF",
                  "Temas bíblicos variados",
                  "Acesso vitalício",
                  "Impressão ilimitada",
                  "Garantia de 7 dias",
                ].map((i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm sm:text-[15px]">
                    <Check className="mt-0.5 size-4 shrink-0 text-cta" /> {i}
                  </li>
                ))}
              </ul>
              <div className="mt-6 space-y-2">
                <CTA href={CHECKOUT_BASICO}>Quero o Básico — R$ 10</CTA>
                <p className="text-center text-xs font-bold text-muted-foreground">
                  Acesso imediato no e-mail após o PIX ou cartão
                </p>
              </div>
            </div>

            <div className="relative scale-[1.02] rounded-3xl border-2 border-cta bg-gradient-to-b from-cta/5 to-card p-5 shadow-card ring-2 ring-cta/30 sm:p-7 lg:scale-105">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-cta to-amber-500 px-4 py-1.5 text-xs font-extrabold uppercase tracking-wide text-white shadow-md">
                ★ Mais vendido
              </span>
              <h3 className="flex items-center justify-center gap-2 text-lg font-extrabold sm:text-xl">
                <Crown className="size-5 text-gold sm:size-6" /> Pacote Premium
              </h3>
              <p className="mt-3 text-center text-xs font-extrabold uppercase tracking-wide text-cta-dark sm:mt-4">
                Escolha de quem quer o máximo
              </p>
              <p className="mt-1 text-center text-4xl font-extrabold text-cta sm:text-5xl">R$ 19,90</p>
              <p className="mt-1 text-center text-sm text-muted-foreground">
                Pagamento único · acesso vitalício
              </p>

              <div className="mt-5 rounded-2xl bg-emerald-50 px-3 py-2 text-center">
                <p className="text-xs font-extrabold uppercase tracking-wide text-emerald-700 sm:text-sm">
                  Tudo do Pacote Básico +
                </p>
              </div>

              <ul className="mt-3 space-y-2">
                {[
                  { title: "BÔNUS 1: 2 Novos livros/mês", price: "R$ 89/ano" },
                  { title: "BÔNUS 2: Vídeos de Histórias Bíblicas", price: "R$ 27,00" },
                  { title: "BÔNUS 3: 15 Versículos Ilustrados", price: "R$ 19,00" },
                  { title: "BÔNUS 4: Calendário Bíblico Semanal", price: "R$ 35,00" },
                ].map((b) => (
                  <li
                    key={b.title}
                    className="flex items-center gap-2.5 rounded-xl bg-amber-50/80 px-3 py-2.5"
                  >
                    <Gift className="size-5 shrink-0 text-amber-500" />
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-extrabold leading-snug sm:text-[15px]">{b.title}</p>
                      <p className="text-xs font-bold sm:text-sm">
                        <span className="text-red-500 line-through">{b.price}</span>
                        <span className="ml-1.5 font-extrabold uppercase text-emerald-600">Grátis</span>
                      </p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-6 space-y-2">
                <CTA href={CHECKOUT_PREMIUM}>Quero o Premium — R$ 19,90</CTA>
                <p className="text-center text-xs font-bold text-muted-foreground">
                  Acesso imediato no e-mail após o PIX ou cartão
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-8 sm:py-10">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-2xl font-extrabold sm:text-3xl">Perguntas frequentes</h2>
          <div className="mt-7 space-y-2 sm:mt-8">
            {faq.map((item, i) => (
              <div key={item.q} className="overflow-hidden rounded-2xl border border-border bg-card">
                <button
                  type="button"
                  onClick={() => setOpen(open === i ? null : i)}
                  className="flex w-full items-center justify-between gap-3 px-4 py-3.5 text-left text-sm font-extrabold sm:px-5 sm:text-[15px]"
                >
                  {item.q}
                  <ChevronDown
                    className={`size-5 shrink-0 text-muted-foreground transition ${open === i ? "rotate-180" : ""}`}
                  />
                </button>
                {open === i && (
                  <p className="border-t border-border px-4 py-3 text-sm leading-6 text-foreground/80 sm:px-5">
                    {item.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-brand px-4 py-12 text-brand-foreground sm:py-16">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-2xl font-extrabold sm:text-3xl">Pronto para começar?</h2>
          <p className="mt-2 text-sm text-brand-foreground/85 sm:text-base">
            Acesso imediato no e-mail após o PIX ou cartão · Garantia de 7 dias
          </p>
          <div className="mx-auto mt-8 max-w-sm space-y-3 pb-2">
            <CTA href={CHECKOUT_PREMIUM}>Quero o Premium — R$ 19,90</CTA>
            <a
              href={CHECKOUT_BASICO}
              className="block rounded-full border-2 border-white/40 bg-white/10 px-6 py-3 text-center text-sm font-extrabold tracking-wide text-brand-foreground backdrop-blur transition hover:bg-white/20"
            >
              Ou o Básico por R$ 10,00
            </a>
          </div>
        </div>
      </section>

      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-white/95 p-3 backdrop-blur lg:hidden">
        <CTA href={CHECKOUT_PREMIUM} className="py-3.5 text-sm">
          Quero o Premium — R$ 19,90
        </CTA>
        <p className="mt-1 text-center text-[10px] font-bold text-muted-foreground sm:text-[11px]">
          Acesso imediato no e-mail · 7 dias de garantia
        </p>
      </div>
    </div>
  );
}
