import { Marquee } from "@/registry/spell-ui/marquee";
import Image from "next/image";

const logos = [
  { src: "/logos/vercel.svg", alt: "Vercel logo" },
  { src: "/logos/google.svg", alt: "Google logo" },
  { src: "/logos/framer.svg", alt: "Framer logo" },
  { src: "/logos/discord.svg", alt: "Discord logo" },
  { src: "/logos/openai.svg", alt: "OpenAI logo" },
  { src: "/logos/phantom.svg", alt: "Phantom logo" },
  { src: "/logos/descript.svg", alt: "Descript logo" },
  { src: "/logos/netflix.svg", alt: "Netflix logo" },
  { src: "/logos/linear.svg", alt: "Linear logo" },
  { src: "/logos/notion.svg", alt: "Notion logo" },
  { src: "/logos/shopify.svg", alt: "Shopify logo" },
  { src: "/logos/duolingo.svg", alt: "Duolingo logo" },
  { src: "/logos/ramp.svg", alt: "Ramp logo" },
  { src: "/logos/tesla.svg", alt: "Tesla logo" },
  { src: "/logos/opensea.svg", alt: "OpenSea logo" },
  { src: "/logos/cursor.svg", alt: "Cursor logo" },
];

export function Demo() {
  return (
    <Marquee className="flex py-4" duration={40}>
      {logos.map((logo) => (
        <Image
          key={logo.src}
          src={logo.src}
          alt={logo.alt}
          width={96}
          height={96}
          className="mx-8 h-24 w-24 object-contain opacity-70 not-dark:invert-100 pointer-events-none select-none"
          unoptimized
        />
      ))}
    </Marquee>
  );
}
