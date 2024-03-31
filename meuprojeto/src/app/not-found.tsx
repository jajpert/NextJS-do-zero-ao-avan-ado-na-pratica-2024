import Link from "next/link";


export default function NotFound() {
  return(
    <div>
      <h2>Pagina nao encontrada!</h2>
      <p>Parece que essa página que está tentando acessar nao existe!</p>
      <Link href='/'>Voltar para home</Link>
    </div>
  )
}