import type { ReactNode } from "react";

/**
 * Renderiza emojis como imagens no estilo iOS, de forma que apareçam idênticos
 * em qualquer dispositivo (celular, tablet ou computador), sem depender da
 * fonte de emoji do sistema (que no Android/Windows tem visual diferente).
 * Usa o conjunto Twemoji servido via CDN.
 */
const TWEMOJI_BASE =
  "https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg";

const EMOJI_REGEX =
  /\p{Extended_Pictographic}\uFE0F?(\u200D\p{Extended_Pictographic}\uFE0F?)*/gu;

function toCodepoint(input: string): string {
  return Array.from(input)
    .filter((c) => {
      const cp = c.codePointAt(0);
      return cp !== 0xfe0f && cp !== 0x200d;
    })
    .map((c) => c.codePointAt(0)!.toString(16))
    .join("-");
}

export function Emoji({
  char,
  className = "",
}: {
  char: string;
  className?: string | undefined;
}) {
  const code = toCodepoint(char);
  return (
    <img
      src={`${TWEMOJI_BASE}/${code}.svg`}
      alt={char}
      draggable={false}
      className={`inline-block h-[1.15em] w-[1.15em] select-none align-[-0.2em] ${className}`}
    />
  );
}

export function Emojify({
  text,
  className,
}: {
  text: string;
  className?: string | undefined;
}) {
  const parts: ReactNode[] = [];
  let last = 0;
  let m: RegExpExecArray | null;
  EMOJI_REGEX.lastIndex = 0;
  let key = 0;
  while ((m = EMOJI_REGEX.exec(text)) !== null) {
    if (m.index > last) parts.push(text.slice(last, m.index));
    parts.push(<Emoji key={`e${key++}`} char={m[0]} className={className} />);
    last = m.index + m[0].length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return <>{parts}</>;
}
