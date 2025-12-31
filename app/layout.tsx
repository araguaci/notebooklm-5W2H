import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://notebooklm-5w2h.vercel.app";
const siteName = "📋5W2H: Guia Prático para Planejamento e Execução de Planos de Ação";
const description = "As fontes exploram metodologias de gestão e planejamento estratégico, destacando como ferramentas estruturadas auxiliam na resolução de problemas e na eficiência operacional. Os textos esclarecem as diferenças entre o 5 Porquês, focado em investigar a causa raiz de falhas, e o 5W2H, utilizado para elaborar planos de ação detalhados. Estudos de caso práticos demonstram a aplicação dessas técnicas na área da saúde para padronizar processos e na indústria portuguesa através do sistema Lean Six Sigma. Além disso, discute-se a importância de adaptar esses modelos para a realidade de micro e pequenas empresas, garantindo sua sobrevivência no mercado. A integração dessas ferramentas é apresentada como o caminho ideal para transformar diagnósticos precisos em execuções estratégicas bem-sucedidas.";

export const metadata: Metadata = {
  title: siteName,
  description: description,
  keywords: ["5W2H", "5 Porquês", "Planejamento Estratégico", "Gestão", "Metodologia", "Plano de Ação", "NotebookLM", "Google NotebookLM"],
  authors: [{ name: "NotebookLM 5W2H" }],
  creator: "NotebookLM 5W2H",
  publisher: "NotebookLM 5W2H",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    title: siteName,
    description: description,
    siteName: "5W2H - Guia Prático",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: siteName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: description,
    images: [`${siteUrl}/og-image.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "5W2H Guia Prático",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon-192.svg", sizes: "192x192", type: "image/svg+xml" },
      { url: "/icon-512.svg", sizes: "512x512", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-touch-icon.svg", sizes: "180x180", type: "image/svg+xml" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

