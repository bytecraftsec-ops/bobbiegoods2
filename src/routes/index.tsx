import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  BookOpen,
  Check,
  ChevronDown,
  Crown,
  Download,
  FileText,
  Gift,
  Heart,
  Printer,
  ShieldCheck,
  Sparkles,
  Star,
  X,
  Zap,
} from "lucide-react";
import hero from "@/assets/hero.jpg";
import book1 from "@/assets/book-1.jpg";
import book2 from "@/assets/book-2.jpg";
import book3 from "@/assets/book-3.jpg";

const CHECKOUT_BASICO = "https://pay.cakto.com.br/n2t4fub";
const CHECKOUT_PREMIUM = "https://pay.cakto.com.br/8amwnbd";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "35 Livros Infantis para Imprimir | Acesso Imediato" },
      {
        name: "description",
        content:
          "Kit digital com 35 livros de colorir cristãos em PDF para imprimir em casa. Acesso imediato, impressão ilimitada e garantia de 7 dias.",
      },
      { property: "og:title", content: "35 Livros Infantis para Imprimir" },
      {
        property: "og:description",
        content:
          "Um kit digital para criar momentos especiais com as crianças. Veja algumas páginas antes de comprar.",
      },
    ],
  }),
  component: Index,
});

function CTA({
  href,
  children,
  secondary = false,
}: {
  href: string;
  children: React.ReactNode;
  secondary?: boolean;
}) {
  return (
    <a
      href={href}
      className={
        secondary
          ? "inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-brand px-6 py-4 text-center text-base font-extrabold text-brand transition hover:bg-brand/5 sm:text-lg"
          : "shine-overlay inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-cta px-6 py-4 text-center text-base font-extrabold uppercase tracking-wide text-cta-foreground shadow-card transition hover:scale-[1.02] active:scale-[0.99] sm:text-lg"
      }
    >
      {children}
    </a>
  );
}

function FAQItem({
  question,
  answer,
  open,
  onClick,
}: {
  question: string;
  answer: string;
  open: boolean;
  onClick: () => void;
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card">
      <button
        type="button"
        onClick={onClick}
        className="flex w-full items-center justify-between gap-4 p-5 text-left font-extrabold"
      >
        {question}
        <ChevronDown className={`size-5 shrink-0 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <p className="px-5 pb-5 text-[15px] leading-7 text-muted-foreground">{answer}</p>}
    </div>
  );
}

function Index() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    [
      "O que eu recebo?",
      "Você recebe um kit digital com 35 livros de colorir em PDF. É um produto digital: você baixa os arquivos e pode imprimir em casa.",
    ],
    [
      "Quando recebo o acesso?",
      "Após a confirmação do pagamento, o acesso é enviado para o e-mail informado na compra. Confira também a pasta de spam ou promoções.",
    ],
    [
      "Posso imprimir mais de uma vez?",
      "Sim. Os arquivos são digitais e podem ser impressos novamente sempre que você precisar, dentro das condições de uso do produto.",
    ],
    [
      "Preciso ter uma impressora em casa?",
      "Não necessariamente. Você pode baixar os PDFs e levar os arquivos a uma gráfica ou papelaria para imprimir.",
    ],
    [
      "Para qual idade é indicado?",
      "O material foi pensado para crianças, com desenhos e atividades que podem ser usados em diferentes idades. Você pode escolher as páginas de acordo com a criança.",
    ],
    [
      "E se eu comprar e me arrepender?",
      "A oferta informa garantia de 7 dias. Dentro desse prazo, você pode solicitar o reembolso conforme as condições apresentadas no checkout.",
    ],
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Topo: clareza antes de qualquer coisa */}
      <div className="border-b border-border bg-white px-4 py-2.5 text-center text-xs font-bold text-foreground sm:text-sm">
        <span className="inline-flex items-center justify-center gap-2">
          <ShieldCheck className="size-4 text-cta" />
          Produto digital • Pagamento seguro • Acesso após a confirmação
        </span>
      </div>

      {/* HERO */}
      <header className="overflow-hidden bg-gradient-brand px-4 py-10 text-brand-foreground sm:py-16">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.05fr_.95fr]">
          <div className="text-center lg:text-left">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-xs font-extrabold uppercase tracking-wide backdrop-blur sm:text-sm">
              <Sparkles className="size-4 text-gold" />
              Kit digital infantil
            </span>

            <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl">
              Menos tela.
              <br />
              <span className="text-gold">Mais momentos para criar juntos.</span>
            </h1>

            <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-brand-foreground/90 lg:mx-0">
              Um kit com <strong>35 livros de colorir em PDF</strong> para você imprimir em casa e
              transformar um tempinho livre em uma atividade simples, criativa e especial.
            </p>

            <div className="mx-auto mt-7 grid max-w-xl grid-cols-2 gap-3 text-left sm:grid-cols-4 lg:mx-0">
              {[
                [Download, "PDF digital"],
                [Printer, "Imprima em casa"],
                [Zap, "Acesso rápido"],
                [ShieldCheck, "7 dias de garantia"],
              ].map(([Icon, text]) => (
                <div
                  key={text as string}
                  className="rounded-2xl bg-white/10 p-3 backdrop-blur"
                >
                  <Icon className="size-5 text-gold" />
                  <p className="mt-2 text-xs font-bold">{text as string}</p>
                </div>
              ))}
            </div>

            <div className="mx-auto mt-8 max-w-xl lg:mx-0">
              <CTA href="#ofertas">
                Quero conhecer o kit
                <span aria-hidden>↓</span>
              </CTA>
              <p className="mt-3 text-xs text-brand-foreground/75">
                Veja páginas do material abaixo antes de decidir.
              </p>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute -inset-5 rounded-[3rem] bg-gold/15 blur-2xl" />
            <div className="relative rounded-[2rem] bg-white p-3 shadow-card">
              <img
                src={hero}
                alt="Exemplo de página infantil do kit de livros para colorir"
                width={912}
                height={912}
                className="aspect-square w-full rounded-[1.4rem] object-cover"
              />
              <div className="flex items-center justify-between gap-3 px-2 pb-1 pt-4">
                <div>
                  <p className="text-sm font-extrabold text-foreground">Veja o que você está comprando</p>
                  <p className="text-xs text-muted-foreground">Algumas páginas do material</p>
                </div>
                <span className="rounded-full bg-cta/10 px-3 py-1 text-xs font-extrabold text-cta-dark">
                  35 PDFs
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* PROVA DO PRODUTO — sem números sociais não comprovados */}
      <section className="px-4 py-14 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-extrabold uppercase tracking-wider text-brand">
              Antes de comprar, veja o material
            </span>
            <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">
              Você recebe arquivos para realmente usar
            </h2>
            <p className="mt-3 leading-7 text-muted-foreground">
              Não é uma promessa vaga: abaixo estão exemplos visuais do próprio produto.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              [book1, "Colorindo Versículos"],
              [book2, "Histórias do Novo Testamento"],
              [book3, "Noé e a Arca"],
              [hero, "Jesus e as Crianças"],
            ].map(([img, title]) => (
              <div
                key={title as string}
                className="overflow-hidden rounded-3xl border border-border bg-card shadow-soft"
              >
                <img
                  src={img}
                  alt={title as string}
                  loading="lazy"
                  width={912}
                  height={912}
                  className="aspect-square w-full object-cover"
                />
                <div className="flex items-center gap-2 p-4">
                  <Check className="size-5 shrink-0 text-cta" />
                  <span className="text-sm font-extrabold">{title as string}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section className="bg-secondary px-4 py-14 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <span className="text-sm font-extrabold uppercase tracking-wider text-brand">
              Feito para a rotina real
            </span>
            <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">
              Uma atividade simples para tirar do papel
            </h2>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {[
              {
                icon: Heart,
                title: "Um momento longe das telas",
                text: "Separe alguns minutos para colorir, conversar e acompanhar a criança.",
              },
              {
                icon: BookOpen,
                title: "Conteúdo com temática cristã",
                text: "Livros e páginas inspirados em histórias e ensinamentos bíblicos.",
              },
              {
                icon: Printer,
                title: "Imprima somente o que precisar",
                text: "Você baixa os PDFs e escolhe as páginas que quer imprimir naquele momento.",
              },
              {
                icon: Gift,
                title: "Premium com bônus",
                text: "Além do kit principal, o pacote Premium inclui os bônus descritos na oferta.",
              },
            ].map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="rounded-3xl border border-border bg-card p-6 shadow-soft"
              >
                <div className="flex size-12 items-center justify-center rounded-2xl bg-brand/10">
                  <Icon className="size-6 text-brand" />
                </div>
                <h3 className="mt-4 text-lg font-extrabold">{title}</h3>
                <p className="mt-2 leading-7 text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="px-4 py-14 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <span className="text-sm font-extrabold uppercase tracking-wider text-brand">
              É bem simples
            </span>
            <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">Do pagamento à atividade em 3 passos</h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              ["01", "Escolha seu pacote", "Você pode começar pelo Básico ou escolher o Premium com os bônus."],
              ["02", "Receba o acesso", "Depois da confirmação, os arquivos digitais ficam disponíveis conforme as instruções da compra."],
              ["03", "Baixe e imprima", "Abra os PDFs, escolha uma atividade e imprima em casa ou em uma gráfica."],
            ].map(([number, title, text]) => (
              <div key={number} className="relative rounded-3xl border border-border bg-card p-6 shadow-soft">
                <span className="text-4xl font-extrabold text-brand/20">{number}</span>
                <h3 className="mt-3 text-xl font-extrabold">{title}</h3>
                <p className="mt-2 leading-7 text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OFERTA */}
      <section id="ofertas" className="scroll-mt-8 bg-secondary px-4 py-14 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand px-4 py-2 text-xs font-extrabold uppercase text-brand-foreground">
              <Star className="size-4 fill-gold text-gold" />
              Escolha como começar
            </span>
            <h2 className="mt-5 text-3xl font-extrabold sm:text-4xl">
              O que faz mais sentido para você?
            </h2>
            <p className="mt-3 text-muted-foreground">
              Os dois pacotes são digitais e dão acesso ao material descrito abaixo.
            </p>
          </div>

          <div className="mt-10 grid items-start gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-border bg-card p-7 shadow-soft">
              <p className="text-sm font-extrabold uppercase tracking-wide text-muted-foreground">Comece pelo essencial</p>
              <h3 className="mt-2 text-2xl font-extrabold">Pacote Básico</h3>
              <p className="mt-5 text-sm font-bold text-muted-foreground line-through">De R$ 47,00</p>
              <p className="mt-1 text-5xl font-extrabold text-cta">R$ 10,00</p>
              <p className="mt-2 text-sm text-muted-foreground">pagamento único</p>

              <ul className="mt-7 space-y-3">
                {[
                  "35 livros de colorir em PDF",
                  "Temas bíblicos variados",
                  "Acesso vitalício",
                  "Impressão ilimitada",
                  "Garantia de 7 dias",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[15px]">
                    <Check className="mt-0.5 size-5 shrink-0 text-cta" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-7">
                <CTA href={CHECKOUT_BASICO}>Quero o pacote básico</CTA>
              </div>
            </div>

            <div className="relative rounded-3xl border-2 border-gold bg-card p-7 pt-10 shadow-card">
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gold px-5 py-2 text-xs font-extrabold uppercase text-gold-foreground shadow-soft">
                Mais completo
              </span>

              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-extrabold uppercase tracking-wide text-muted-foreground">Para quem quer o pacote completo</p>
                  <h3 className="mt-2 flex items-center gap-2 text-2xl font-extrabold">
                    <Crown className="size-6 text-gold" /> Pacote Premium
                  </h3>
                </div>
              </div>

              <p className="mt-5 text-sm font-bold text-muted-foreground line-through">De R$ 256,00</p>
              <p className="mt-1 text-5xl font-extrabold text-cta">R$ 19,90</p>
              <p className="mt-2 text-sm text-muted-foreground">pagamento único</p>

              <div className="mt-6 rounded-2xl bg-cta/10 p-4">
                <p className="font-extrabold text-cta-dark">Tudo do Básico + bônus</p>
              </div>

              <ul className="mt-4 space-y-3">
                {[
                  ["35 livros de colorir em PDF", "Kit principal"],
                  ["2 novos livros por mês", "Bônus 1"],
                  ["Vídeos de Histórias Bíblicas", "Bônus 2"],
                  ["15 Versículos Ilustrados", "Bônus 3"],
                  ["Calendário Bíblico Semanal", "Bônus 4"],
                  ["Suporte no WhatsApp", "Bônus 5"],
                ].map(([item, label]) => (
                  <li key={item} className="flex items-start gap-3 rounded-2xl bg-gold/10 p-3">
                    <Gift className="mt-0.5 size-5 shrink-0 text-gold" />
                    <span>
                      <span className="block text-sm font-extrabold">{item}</span>
                      <span className="block text-xs text-muted-foreground">{label}</span>
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-7">
                <CTA href={CHECKOUT_PREMIUM}>
                  Quero o Premium por R$ 19,90
                  <Zap className="size-5" />
                </CTA>
              </div>
              <p className="mt-3 text-center text-xs text-muted-foreground">
                Checkout seguro • garantia de 7 dias
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GARANTIA / OBJEÇÕES */}
      <section className="px-4 py-14 sm:py-20">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-cta/20 bg-cta/5 p-7 sm:p-10">
          <div className="flex flex-col items-center text-center sm:flex-row sm:text-left">
            <div className="flex size-16 shrink-0 items-center justify-center rounded-full bg-cta/15">
              <ShieldCheck className="size-9 text-cta" />
            </div>
            <div className="mt-5 sm:ml-6 sm:mt-0">
              <p className="text-sm font-extrabold uppercase tracking-wide text-cta-dark">Compra com garantia</p>
              <h2 className="mt-1 text-2xl font-extrabold">Você tem 7 dias para conhecer o material</h2>
              <p className="mt-2 leading-7 text-muted-foreground">
                A oferta informa garantia de 7 dias. Se a compra não fizer sentido para você dentro desse prazo,
                siga as condições de reembolso apresentadas no checkout.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-secondary px-4 py-14 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <span className="text-sm font-extrabold uppercase tracking-wider text-brand">Dúvidas?</span>
            <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">Antes de comprar, veja as respostas</h2>
          </div>

          <div className="mt-8 space-y-3">
            {faqs.map(([question, answer], i) => (
              <FAQItem
                key={question}
                question={question}
                answer={answer}
                open={openFaq === i}
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* FECHAMENTO */}
      <section className="bg-gradient-brand px-4 py-14 text-center text-brand-foreground sm:py-20">
        <div className="mx-auto max-w-2xl">
          <BookOpen className="mx-auto size-12 text-gold" />
          <h2 className="mt-5 text-3xl font-extrabold sm:text-4xl">
            Pronta para criar um momento especial com as crianças?
          </h2>
          <p className="mt-4 leading-7 text-brand-foreground/85">
            Veja o material, escolha o pacote que combina com você e receba o acesso após a confirmação do pagamento.
          </p>
          <div className="mx-auto mt-8 max-w-md">
            <CTA href={CHECKOUT_PREMIUM}>Quero o Premium por R$ 19,90</CTA>
            <p className="mt-3 text-xs text-brand-foreground/70">
              Pagamento único • Produto digital • 7 dias de garantia
            </p>
          </div>
        </div>
      </section>

      <footer className="bg-card px-4 py-8 text-center text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} · Livros de Colorir Cristãos. Todos os direitos reservados.</p>
        <p className="mt-2">Produto digital entregue em PDF. Consulte as condições da oferta e da garantia no checkout.</p>
      </footer>

      {/* CTA mobile */}
      <div className="sticky bottom-0 z-30 border-t border-border bg-background/95 p-3 backdrop-blur lg:hidden">
        <CTA href={CHECKOUT_PREMIUM}>Ver Premium — R$ 19,90</CTA>
      </div>
    </div>
  );
}
