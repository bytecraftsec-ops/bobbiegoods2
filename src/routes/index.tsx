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
