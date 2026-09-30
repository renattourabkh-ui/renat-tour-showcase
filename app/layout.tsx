import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://renat-tour-abkhazia.renat-tour-abkh.chatgpt.site"),
  title: "RENAT TOUR — путешествия по Абхазии",
  description: "Авторские, групповые и индивидуальные туры по Абхазии, однодневные маршруты и аренда кабриолетов.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: {
    title: "RENAT TOUR — путешествия по Абхазии",
    description: "Камерные туры, дикие дороги и свобода без туристической суеты.",
    images: [{ url: "/og.png", width: 1730, height: 909, alt: "RENAT TOUR — Абхазия. Выбирай свой маршрут." }],
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RENAT TOUR — путешествия по Абхазии",
    description: "Камерные туры, дикие дороги и свобода без туристической суеты.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ru"><body>{children}</body></html>;
}
