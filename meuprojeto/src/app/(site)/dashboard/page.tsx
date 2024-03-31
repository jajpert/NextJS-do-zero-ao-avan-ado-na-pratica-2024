import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Painel - Aprendendo NextJS",
	description: "Entre em contato",
  keywords: ['HTML', 'CSS', "JavaScript", 'Programação'],
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


export default function Dashboard() {
	return (
		<div>
			<h1>Página painel</h1>
			<span>Bem vindo ao site</span>
		</div>
	);
}
