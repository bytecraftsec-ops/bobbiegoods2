import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect } from "react";
import {
  Check,
  Crown,
  Mail,
  ShieldCheck,
  Sparkles,
  Star,
  Zap,
} from "lucide-react";

export const Route = createFileRoute("/obrigado")({
  head: () => ({
    meta: [
      { title: "Compra confirmada — obrigado!" },
      {
        name: "description",
        content:
          "Seu acesso chega no e-mail. Aproveite a oferta exclusiva e complete com o Pacote Premium.",
      },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: ObrigadoPage,
});

const premiumExtras = [
  "Tudo do Básico incluso",
  "Bônus exclusivos do Premium",
  "Material mais completo para célula e escola dominical",
  "Acesso vitalício + impressão ilimitada",
  "Garantia de 7 dias",
];

function ObrigadoPage() {
  useEffect(() => {
    const existing = document.querySelector(
      'script[src="https://snippets.kiwify.com/upsell-v2/upsell.min.js"]',
    );
    if (existing) return;

    const script = document.createElement("script");
    script.src = "https://snippets.kiwify.com/upsell-v2/upsell.min.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="border-b border-border bg-white px-4 py-2.5 text-center text-xs font-bold text-foreground sm:text-sm">
        <span className="inline-flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
          <ShieldCheck className="size-4 shrink-0 text-cta" />
          Pagamento confirmado · Acesso no e-mail
        </span>
      </div>

      <header className="bg-gradient-brand px-4 pb-10 pt-8 text-brand-foreground sm:pb-12 sm:pt-12">
        <div className="mx-auto max-w-xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1.5 text-xs font-extrabold uppercase tracking-wide backdrop-blur sm:text-sm">
            <Sparkles className="size-4 text-gold" /> Pedido recebido
          </span>

          <h1 className="mt-4 text-2xl font-extrabold leading-tight sm:text-4xl">
            Obrigado pela compra!
          </h1>

          <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-brand-foreground/90 sm:text-base sm:leading-7">
            Seu acesso aos livrinhos em PDF será enviado para o <strong>e-mail</strong> usado no
            pagamento. Confira também a caixa de spam ou promoções.
          </p>

          <div className="mx-auto mt-5 flex max-w-sm flex-col gap-2 rounded-2xl border border-white/20 bg-white/10 px-4 py-4 text-left text-sm backdrop-blur">
            <p className="flex items-start gap-2 font-bold">
              <Mail className="mt-0.5 size-4 shrink-0 text-gold" />
              Acesso digital no e-mail após a confirmação
            </p>
            <p className="flex items-start gap-2 font-bold">
              <Zap className="mt-0.5 size-4 shrink-0 text-gold" />
              Liberação rápida após PIX ou cartão aprovado
            </p>
            <p className="flex items-start gap-2 font-bold">
              <ShieldCheck className="mt-0.5 size-4 shrink-0 text-gold" />
              7 dias de garantia
            </p>
          </div>
        </div>
      </header>

      <section className="px-4 py-8 sm:py-10">
        <div className="mx-auto max-w-lg">
          <div className="relative overflow-hidden rounded-3xl border-2 border-gold bg-card p-5 shadow-card sm:p-7">
            <div className="absolute right-3 top-3 rounded-full bg-gold px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wide text-gold-foreground sm:text-xs">
              Oferta só agora
            </div>

            <div className="flex items-center gap-2">
              <span className="flex size-10 items-center justify-center rounded-full bg-cta/10">
                <Crown className="size-5 text-cta" />
              </span>
              <div>
                <p className="text-xs font-extrabold uppercase tracking-wide text-cta-dark">
                  Upsell exclusivo
                </p>
                <h2 className="text-xl font-extrabold sm:text-2xl">Complete com o Premium</h2>
              </div>
            </div>

            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              Você já garantiu o Básico. Ative o <strong className="text-foreground">Pacote Premium</strong> e
              leve o material mais completo + bônus — ideal para célula, escola dominical e uso em casa.
            </p>

            <ul className="mt-5 space-y-2.5">
              {premiumExtras.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm font-bold">
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-cta/15">
                    <Check className="size-3.5 text-cta" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            {/* Upsell nativo Kiwify */}
            <div
              id="kiwify-upsell-Mp9pLbx"
              data-upsell-url=""
              data-downsell-url=""
              className="mt-6 space-y-3"
              style={
                {
                  "--kiwify-upsell-accept-bg": "#27AF60",
                  "--kiwify-upsell-accept-color": "#FFFFFF",
                } as React.CSSProperties
              }
            >
              <button
                id="kiwify-upsell-trigger-Mp9pLbx"
                type="button"
                className="shine-overlay animate-pulse-glow inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#27AF60] px-6 py-4 text-center text-base font-extrabold uppercase tracking-wide text-white transition-transform hover:scale-[1.02] active:scale-[0.99] sm:text-lg"
              >
                Sim, eu aceito essa oferta especial!
              </button>
              <div
                id="kiwify-upsell-cancel-trigger-Mp9pLbx"
                className="cursor-pointer text-center text-sm font-bold text-muted-foreground underline-offset-2 hover:underline"
              >
                Não, eu gostaria de recusar essa oferta
              </div>
            </div>

            <p className="mt-3 text-center text-xs font-bold text-muted-foreground">
              Pagamento seguro via Kiwify · acesso no e-mail
            </p>
          </div>

          <p className="mt-6 text-center text-sm text-muted-foreground">
            Preferir sair —{" "}
            <Link to="/" className="font-extrabold text-cta underline-offset-2 hover:underline">
              voltar ao início
            </Link>
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs font-bold text-muted-foreground">
            <span className="inline-flex items-center gap-1">
              <Star className="size-3.5 fill-gold text-gold" /> Produto digital
            </span>
            <span className="inline-flex items-center gap-1">
              <ShieldCheck className="size-3.5 text-cta" /> Pagamento seguro
            </span>
            <span className="inline-flex items-center gap-1">
              <Mail className="size-3.5 text-cta" /> Entrega no e-mail
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
