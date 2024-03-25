
import styles from '@/styles/home.module.scss';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Apaixonado por tecnologia - Sujeito Programador</title>
      </Head>
      <main className={styles.container}>
        <div className={styles.containerHeader}>
          <section className={styles.ctaText}>
            <h1>Levando você ao próximo nível</h1>
            <span>Uma plataforma com sursos que vão do zero até o profissional na prática, direto ao ponto aplicando o que usamps no mercado de trabalho</span>
            <a>
              <button>COMEÇAR AGORA!</button>
            </a>
            
            <img src='/images/banner-conteudos.png' alt='Conteúdos Sujeito Programador'/>
          </section>
        </div>
      </main>
    </>
  );
}