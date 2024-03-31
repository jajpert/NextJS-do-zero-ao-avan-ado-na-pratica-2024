import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Contatos - Aprendendo NextJS",
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

export default function Contatos() {
	return (
		<div>
			<h1>Contatos</h1>
		</div>
	);
}
