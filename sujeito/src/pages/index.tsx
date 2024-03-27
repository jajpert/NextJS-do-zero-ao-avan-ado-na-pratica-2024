import { GetStaticProps } from 'next';

import styles from '@/styles/home.module.scss';
import Head from 'next/head';

import Image from 'next/image';
import techImage from '@/../public/images/techs.svg';

import { getPrismicClient } from '@/services/prismic';
import Prismic from '@prismicio/client';
import { RichText } from 'prismic-dom';


type Content = {
  title: string;
  titleContent: string;
  linkAction: string;
  mobileContent: string;
  mobileBanner: string;
  webTitle: string;
  webContent: string;
  webBanner: string;
}

interface ContentProps{
  content: Content
}

export default function Home({ content }: ContentProps) {
  console.log(content);
  
  return (
    <>
      <Head>
        <title>Apaixonado por tecnologia - Sujeito Programador</title>
      </Head>
      <main className={styles.container}>
        <div className={styles.containerHeader}>
          <section className={styles.ctaText}>
            <h1>Levando você ao próximo nível!</h1>
            <span>Uma plataforma com sursos que vão do zero até o profissional na prática, direto ao ponto aplicando o que usamos no mercado de trabalho</span>
            <br/>
            <a>
              <button>COMEÇAR AGORA!</button>
            </a>
          </section>
          <img src='/images/banner-conteudos.png' alt='Conteúdos Sujeito Programador'/>
        </div>
        
        <hr className={styles.divisor}/>

        <div className={styles.sectionContent}>
          <section>
            <h2>Aprenda a criar aplicativos para Android e IOS</h2>
            <span>Você vai descobrir o jeito mais moderno de desenvolver apps nativos para IOS e Android, construindo aplicativos do zero até aplicações</span>
          </section>
          
          <img src='/images/financasApp.png' alt='Conteúdos desenvolvimento de apps'/>
        </div>

        <hr className={styles.divisor}/>

        <div className={styles.sectionContent}>
          <img src='/images/webDev.png' alt='Conteúdos desenvolvimento de apps'/>
          
          <section>
            <h2>Aprenda a criar sistemas web</h2>
            <span>Criar sistemas web, sites usando as tecnologias mais modernas e requisitadas pelo mercado...</span>
          </section>
        </div>

        <div className={styles.nextLevelContent}>
          <Image src={techImage} alt='Tecnologia'/>

          <h2>Mais de <span className={styles.alunos}>15 mil</span> já levaram sua carreira ao próximo nível.</h2>
          <span>E você vai perder a chance de evoluir de uma vez por todas?</span>
          <a>
            <button>ACESSAR TURMA!</button>
          </a>
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.query([
    Prismic.Predicates.at('document.type', 'home')
  ])

  //console.log(response.results[0].data);
  const {
    title, sub_title, link_action,
    mobile, mobile_content, mobile_banner,
    title_web, web_content, web_banner
  } = response.results[0].data;

  const content = {
    title: RichText.asText(title),
    titleContent: RichText.asText(sub_title),
    linkAction: link_action.url,
    mobileContent: RichText.asText(mobile_content),
    mobileBanner: mobile_banner.url,
    webTitle: RichText.asText(title_web),
    webContent: RichText.asText(web_content),
    webBanner: web_banner.url
  }

  return{
    props:{
      content
    },
    revalidate: 60 * 2 // a cada 2 minutos
  }
}