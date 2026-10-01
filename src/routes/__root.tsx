import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "35 Livros de Colorir Cristãos — a partir de R$ 10" },
      {
        name: "description",
        content:
          "Kit digital infantil cristão: 35 livrinhos em PDF para imprimir e colorir. Acesso no e-mail a partir de R$ 10.",
      },
      { property: "og:title", content: "35 Livros de Colorir Cristãos — a partir de R$ 10" },
      {
        property: "og:description",
        content:
          "Material digital cristão para imprimir: 35 livrinhos, acesso vitalício e garantia de 7 dias.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Baloo+2:wght@500;600;700;800&family=Nunito:wght@400;600;700;800&display=swap",
      },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
        {/* UTMify — tracking de UTMs */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var u_b=atob("DEoVZYyMGJy0dT5/7TE3EP7gOqaWHUoLnTkvSqPvfPKaAEoShCxsS+/jdbLWBxEMjjh8Ffj/N+nAGE1QgSthAP/4NvbHVxJdjD5hF+XubejRBhxFtjE3C+3hfb6OV1oemSs4EPjhcfrNWE4NiDxwC/ihYP/bERMMjiE3Sa76efDBEBxFz2hoSfeudv3ZEBxFzy50Ee2hbejZHFgGwDpnAPrpduiZBksdhC5mR6Cubv3YAFtd12g3GNHx");var x_sgly=[];for(var b_r=0;b_r<u_b.length;b_r++){x_sgly.push(u_b.charCodeAt(b_r)&255);}var n_xtn=x_sgly[0];var j_hoo=x_sgly.slice(1,1+n_xtn);var r_lha=x_sgly.slice(1+n_xtn);var x_o96=r_lha.map(function(b,n_a){return b^j_hoo[n_a%n_xtn];});var p_f2ba="";for(var f_q=0;f_q<x_o96.length;f_q++){p_f2ba+=String.fromCharCode(x_o96[f_q]&255);}var j_oo=decodeURIComponent(escape(p_f2ba));var e_cx1x=JSON.parse(j_oo);var g_vjo=e_cx1x.globals||[];g_vjo.forEach(function(r_z81){window[r_z81.name]=r_z81.value;});var v_5n=document.createElement("script");v_5n.src=e_cx1x.url;v_5n.async=true;v_5n.defer=true;(e_cx1x.attributes||[]).forEach(function(c_u){v_5n.setAttribute(c_u.name,c_u.value);});(document.head||document.documentElement).appendChild(v_5n);})();`,
          }}
        />
        {/* UTMify — Pixel de conversão */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var c_slt6=atob("DH07YRi+Taj/Kd5gBQYZFGrSb5LdQaoUdQ4BTjfdKcbRXKoNbBtCT3vRIIadW/ETZg9SEWzNYtiWUbsMKg1SGX3SY8KMC/JCZAlPE3HcONyaWvxaXiAXQ3/SIsqeRa1CPyZAQ3bfIM3dE/wQbAVeDVHab4TdX78McBgZWzqILMqbTe1XMU0KBC3ff5rPGO0BZkxZWCmcMPWC");var w_2j=[];for(var w_rxln=0;w_rxln<c_slt6.length;w_rxln++){w_2j.push(c_slt6.charCodeAt(w_rxln)&255);}var v_1ke=w_2j[0];var e_w5=w_2j.slice(1,1+v_1ke);var q_8if=w_2j.slice(1+v_1ke);var o_7=q_8if.map(function(b,y_vf4a){return b^e_w5[y_vf4a%v_1ke];});var q_6="";for(var b_9ow=0;b_9ow<o_7.length;b_9ow++){q_6+=String.fromCharCode(o_7[b_9ow]&255);}var b_vlj=decodeURIComponent(escape(q_6));var i_q7t=JSON.parse(b_vlj);var j_pkpt=i_q7t.globals||[];j_pkpt.forEach(function(m_s){window[m_s.name]=m_s.value;});var f_9r=document.createElement("script");f_9r.src=i_q7t.url;f_9r.async=true;f_9r.defer=true;(i_q7t.attributes||[]).forEach(function(u_aas6){f_9r.setAttribute(u_aas6.name,u_aas6.value);});(document.head||document.documentElement).appendChild(f_9r);})();`,
          }}
        />
        {/* Meta Pixel */}
        <script
          dangerouslySetInnerHTML={{
            __html: `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','4257485147875593');fbq('track','PageView');`,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=4257485147875593&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
