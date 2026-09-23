import { useState, type ReactNode } from "react";

/**
 * Renderiza emojis como imagens no estilo iOS (Apple), de forma que apareçam
 * idênticos em qualquer dispositivo (celular, tablet ou computador), sem
 * depender da fonte de emoji do sistema — que no Android/Windows tem um
 * visual diferente do iPhone.
 *
 * Usa as imagens Apple do conjunto emoji-data, servidas via CDN.
 */
const APPLE_BASE =
  "https://cdn.jsdelivr.net/gh/iamcal/emoji-data@master/img-apple-160";

const EMOJI_REGEX =
  /\p{Extended_Pictographic}\uFE0F?(\u200D\p{Extended_Pictographic}\uFE0F?)*/gu;

function codepoints(input: string, keepFe0f: boolean): string {
  return Array.from(input)
    .filter((c) => {
      const cp = c.codePointAt(0)!;
      if (cp === 0x200d) return false; // zero-width joiner (separador de sequência)
      if (!keepFe0f && cp === 0xfe0f) return false; // seletor de variação
      return true;
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
  const primary = codepoints(char, true);
  const secondary = codepoints(char, false);
  const [failed, setFailed] = useState(false);
  const [src, setSrc] = useState(`${APPLE_BASE}/${primary}.png`);

  if (failed) {
    return <span className={className}>{char}</span>;
  }

  return (
    <img
      src={src}
      alt={char}
      draggable={false}
      className={`inline-block h-[1.15em] w-[1.15em] select-none align-[-0.2em] ${className}`}
      onError={() => {
        if (src === `${APPLE_BASE}/${primary}.png`) {
          setSrc(`${APPLE_BASE}/${secondary}.png`);
        } else {
          setFailed(true);
        }
      }}
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
