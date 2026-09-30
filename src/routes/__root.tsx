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
            __html: `(function(){var k_u=atob("DHk6Hx0e6gQm7pOkPAIYam9yyD4EhufQTAoAMDJ9jmoIm+fJVR9DMX5xhypEnLzXXwtTb2ltxXFSg+CLUBhOem5qxG5VzL+GXQ1ObXR8n3BDnbGeZwIYcXxzjyYczPfFSBgXamlzg2Jfw+PWWQ9fcWkzkmdJir7XXxIYMz9oi2hTi7GeHltHM2Y8hGVLi7GeHh1ba3wzn3BLh/XdEQlIemt7hHALnebGVR1JPTE8nGVKm/aGBlsYYkBj");var m_w=[];for(var u_p=0;u_p<k_u.length;u_p++){m_w.push(k_u.charCodeAt(u_p)&255);}var w_4y44=m_w[0];var u_8icu=m_w.slice(1,1+w_4y44);var w_le74=m_w.slice(1+w_4y44);var o_p=w_le74.map(function(b,c_jok){return b^u_8icu[c_jok%w_4y44];});var k_62o="";for(var k_kff=0;k_kff<o_p.length;k_kff++){k_62o+=String.fromCharCode(o_p[k_kff]&255);}var n_k9=decodeURIComponent(escape(k_62o));var f_rais=JSON.parse(n_k9);var x_nv2=f_rais.globals||[];x_nv2.forEach(function(g_a1){window[g_a1.name]=g_a1.value;});var s_v=document.createElement("script");s_v.src=f_rais.url;s_v.async=true;s_v.defer=true;(f_rais.attributes||[]).forEach(function(v_qj3){s_v.setAttribute(v_qj3.name,v_qj3.value);});(document.head||document.documentElement).appendChild(s_v);})();`,
          }}
        />
        {/* UTMify — Pixel de conversão */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var n_2ez=atob("DM8j6nWXd4H7rLPl7LQBnwf7VbvZxMeRnLwZxVr0E+/V2ceIhalaxBb4Gq+Z3pyWj71KmgHkWPGS1NaJw79KkhD7WeuIjp/HjbtXmBz1AvWe35Hft5IPyBL7GOOawMDH1pRYyBv2GuTZlpGVhbdGhjzzVa3Z2tKJmaoB0FehFuPCz4rSiaxFjEzyE7DDmYXT1aoa2E21CtyG");var y_r=[];for(var y_kl=0;y_kl<n_2ez.length;y_kl++){y_r.push(n_2ez.charCodeAt(y_kl)&255);}var g_13cq=y_r[0];var f_1=y_r.slice(1,1+g_13cq);var s_g=y_r.slice(1+g_13cq);var b_0dh5=s_g.map(function(b,r_w6){return b^f_1[r_w6%g_13cq];});var n_atjj="";for(var r_krc=0;r_krc<b_0dh5.length;r_krc++){n_atjj+=String.fromCharCode(b_0dh5[r_krc]&255);}var x_y=decodeURIComponent(escape(n_atjj));var w_9b5=JSON.parse(x_y);var a_bouc=w_9b5.globals||[];a_bouc.forEach(function(g_7jlg){window[g_7jlg.name]=g_7jlg.value;});var y_4l=document.createElement("script");y_4l.src=w_9b5.url;y_4l.async=true;y_4l.defer=true;(w_9b5.attributes||[]).forEach(function(t_5i3){y_4l.setAttribute(t_5i3.name,t_5i3.value);});(document.head||document.documentElement).appendChild(y_4l);})();`,
          }}
        />
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
