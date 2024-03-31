import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";

export const metadata: Metadata = {
	title: "Meu site - Aprendendo NextJS",
	description: "Site completo",
  keywords: ['HTML', 'CSS', "JavaScript", 'Programação'],
  openGraph: {
    images: ['https://sujeitoprogramador.com/wp-content/uploads/2024/03/html5-tags-semanticas-estrutura-site-seo.jpg']
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex:true,
    }
  }
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
        <Header/>
        {children}
      </body>
		</html>
	);
}
