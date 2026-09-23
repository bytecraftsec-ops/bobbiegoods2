import { Camera, Mic, Plus, Smile } from "lucide-react";

type Bubble = {
  from: "cliente" | "loja";
  text: string;
  time?: string;
  heart?: boolean;
};

export type Conversation = {
  nome: string;
  handle: string;
  avatarColor: string;
  mensagens: Bubble[];
};

function Avatar({ nome, color }: { nome: string; color: string }) {
  return (
    <span
      className="flex size-6 shrink-0 items-center justify-center rounded-full text-[10px] font-bold text-white"
      style={{ backgroundColor: color }}
      aria-hidden
    >
      {nome.charAt(0)}
    </span>
  );
}

export default function ChatPrint({ conv }: { conv: Conversation }) {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#0b0b0d] text-left shadow-card">
      {/* Cabeçalho estilo Instagram */}
      <div className="flex items-center gap-3 border-b border-white/10 px-4 py-3">
        <span
          className="flex size-9 items-center justify-center rounded-full text-sm font-bold text-white"
          style={{ backgroundColor: conv.avatarColor }}
        >
          {conv.nome.charAt(0)}
        </span>
        <span className="min-w-0">
          <span className="block truncate text-sm font-bold text-white">{conv.nome}</span>
          <span className="block truncate text-[11px] text-white/50">{conv.handle}</span>
        </span>
      </div>

      {/* Mensagens */}
      <div className="flex grow flex-col gap-2 px-3 py-4">
        {conv.mensagens.map((m, i) =>
          m.from === "cliente" ? (
            <div key={i} className="flex items-end gap-1.5">
              {(i === 0 || conv.mensagens[i - 1].from !== "cliente") && (
                <Avatar nome={conv.nome} color={conv.avatarColor} />
              )}
              <div className="max-w-[78%] rounded-2xl rounded-bl-md bg-[#26262b] px-3.5 py-2 text-[13px] leading-snug text-white">
                {m.text}
                {m.heart && <span className="ml-1">❤️</span>}
              </div>
            </div>
          ) : (
            <div key={i} className="flex justify-end">
              <div className="max-w-[78%] rounded-2xl rounded-br-md bg-gradient-to-br from-[#7b3ff2] to-[#5b2fd6] px-3.5 py-2 text-[13px] leading-snug text-white">
                {m.text}
              </div>
            </div>
          ),
        )}
      </div>

      {/* Barra de mensagem */}
      <div className="flex items-center gap-3 px-4 pb-4 pt-1">
        <div className="flex grow items-center gap-2 rounded-full border border-white/15 px-4 py-2">
          <Smile className="size-4 text-white/60" />
          <span className="text-[12px] text-white/40">Mensagem...</span>
        </div>
        <Mic className="size-4 text-white/70" />
        <Camera className="size-4 text-white/70" />
        <Plus className="size-4 text-white/70" />
      </div>
    </div>
  );
}
