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
  { img: "/livros-opt/livro-01.jpg", title: "Criação" },
  { img: "/livros-opt/livro-02.jpg", title: "Noé e a Arca" },
  { img: "/livros-opt/livro-03.jpg", title: "Moisés" },
  { img: "/livros-opt/livro-04.jpg", title: "Davi e Golias" },
  { img: "/livros-opt/livro-05.jpg", title: "Jonas" },
  { img: "/livros-opt/livro-06.jpg", title: "Jesus e as Crianças" },
  { img: "/livros-opt/livro-07.jpg", title: "A Vida de Jesus" },
  { img: "/livros-opt/livro-08.jpg", title: "Versículos" },
  { img: "/livros-opt/livro-09.jpg", title: "Histórias Bíblicas" },
  { img: "/livros-opt/livro-16.jpg", title: "Pastor" },
  { img: "/livros-opt/livro-17.jpg", title: "Capa — A Vida de Jesus" },
];

const provasReais = [
  { src: "/provas-opt/prova-1.jpg", alt: "Criança colorindo Jesus acalma a tempestade" },
  { src: "/provas-opt/prova-2.jpg", alt: "Mãe e filha colorindo juntas Jesus ama as crianças" },
  { src: "/provas-opt/prova-3.jpg", alt: "Menino pintando A Arca de Noé" },
  { src: "/provas-opt/prova-4.jpg", alt: "Criança colorindo material bíblico" },
  { src: "/provas-opt/prova-5.jpg", alt: "Família usando os livros de colorir" },
  { src: "/provas-opt/prova-6.jpg", alt: "Material impresso sendo usado" },
];

const depoimentos = Array.from({ length: 10 }, (_, index) => ({
  src: `/depoimentos/prompt${index + 1}.png`,
  alt: `Depoimento real de cliente ${index + 1}`,
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
    q: "Como funciona o bônus mensal do Premium?",
    a: "No pacote Premium você recebe 2 novos livros por mês, sem pagar nada a mais.",
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
              <CTA href={CHECKOUT_BASICO}>Quero meu kit — R$ 10,00</CTA>
              <a
                href={CHECKOUT_PREMIUM}
                className="block px-4 py-2 text-center text-xs font-bold tracking-wide text-brand-foreground/85 underline-offset-2 transition hover:text-brand-foreground hover:underline sm:text-sm"
              >
                Ver Premium — R$ 19,90
              </a>
              <p className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-xs text-brand-foreground/80 lg:justify-start">
                <span className="inline-flex items-center gap-1">
                  <Zap className="size-3.5" /> Acesso após o pagamento
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
              src="/hero-colorir.jpg"
              alt="Criança colorindo livros cristãos com giz de cera"
              width={720}
              height={899}
              className="animate-float mx-auto w-52 rounded-3xl shadow-card object-cover sm:w-72 lg:w-full lg:max-w-md"
            />
          </div>
        </div>
      </header>

      {/* CONTINUED_IN_NEXT - this is incomplete intentionally if truncated */}
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
              <li key={text} className="flex items-start gap-3 rounded-2xl border border-border bg-card px-4 py-3.5 shadow-soft">
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
                <span key={t} className="rounded-full border border-border bg-secondary px-3 py-1.5 text-xs font-bold text-foreground sm:text-sm">{t}</span>
              ))}
            </div>
          </div>
          <div className="mx-auto mt-7 max-w-sm sm:mt-8">
            <CTA href={CHECKOUT_BASICO}>Quero meu kit — R$ 10</CTA>
          </div>
        </div>
      </section>

      <section id="ofertas" className="scroll-mt-16 bg-secondary px-4 py-8 sm:py-10">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-2xl font-extrabold sm:text-3xl">Escolha seu pacote</h2>
          <p className="mt-2 text-center text-sm text-muted-foreground">Acesso no e-mail · Garantia de 7 dias · Impressão ilimitada</p>
          <div className="mt-7 grid items-start gap-5 sm:mt-8 lg:grid-cols-2 lg:gap-6">
            <div className="rounded-3xl border border-border bg-card p-5 shadow-soft sm:p-7">
              <h3 className="flex items-center justify-center gap-2 text-lg font-extrabold sm:text-xl">
                <Star className="size-5 fill-gold text-gold sm:size-6" /> Pacote Básico
              </h3>
              <p className="mt-3 text-center text-xs font-extrabold uppercase tracking-wide text-cta-dark sm:mt-4">Ideal para começar</p>
              <p className="mt-1 text-center text-4xl font-extrabold text-cta sm:text-5xl">R$ 10,00</p>
              <p className="mt-1 text-center text-sm text-muted-foreground">Pagamento único · acesso vitalício</p>
              <ul className="mt-5 space-y-2.5">
                {["35 livrinhos de colorir em PDF", "Temas bíblicos variados", "Acesso vitalício", "Impressão ilimitada", "Garantia de 7 dias"].map((i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm sm:text-[15px]">
                    <Check className="mt-0.5 size-4 shrink-0 text-cta" /> {i}
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <CTA href={CHECKOUT_BASICO}>Quero o Básico — R$ 10</CTA>
              </div>
            </div>
            <div className="relative rounded-3xl border-2 border-cta bg-card p-5 shadow-card sm:p-7">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-cta px-3 py-1 text-xs font-extrabold uppercase text-cta-foreground">Mais completo</span>
              <h3 className="flex items-center justify-center gap-2 text-lg font-extrabold sm:text-xl">
                <Crown className="size-5 text-gold sm:size-6" /> Pacote Premium
              </h3>
              <p className="mt-3 text-center text-xs font-extrabold uppercase tracking-wide text-cta-dark sm:mt-4">Tudo do Básico + bônus</p>
              <p className="mt-1 text-center text-4xl font-extrabold text-cta sm:text-5xl">R$ 19,90</p>
              <p className="mt-1 text-center text-sm text-muted-foreground">Pagamento único · acesso vitalício</p>
              <ul className="mt-5 space-y-2.5">
                {["Tudo do Pacote Básico", "5 benefícios extras", "Bônus mensal: 2 livros novos", "Prioridade no suporte", "Garantia de 7 dias"].map((i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm sm:text-[15px]">
                    <Check className="mt-0.5 size-4 shrink-0 text-cta" /> {i}
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <CTA href={CHECKOUT_PREMIUM}>Quero o Premium — R$ 19,90</CTA>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-white/95 p-3 backdrop-blur lg:hidden">
        <CTA href={CHECKOUT_BASICO} className="py-3.5 text-sm">
          Quero por R$ 10 — pagar no Pix
        </CTA>
        <p className="mt-1 text-center text-[10px] font-bold text-muted-foreground sm:text-[11px]">
          Acesso no e-mail · 7 dias de garantia
        </p>
      </div>
    </div>
  );
}
