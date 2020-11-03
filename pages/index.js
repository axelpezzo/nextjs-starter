import Layout from '../components/layout'
import Date from '../components/date'

import Head from 'next/head'
import Link from 'next/link'

import utilStyles from '../styles/utils.module.scss'

import { getSortedPostsData } from '../lib/posts'

export default function Home ({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>Homepage</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Sono appassionato di Web e Informatica, passione portata avanti fin da quando ero bambino. Per questo motivo mi sono diplomato come Perito Tecnico Informatico all’ITIS di Mantova. Nonostante l’interruzione degli studi per dedicarmi a quest’attività a tempo pieno, mi ritaglio ogni settimana del tempo dedito alla formazione e allo studio.</p>
        <p>Lavoro da anni come sviluppatore Full-Stack, con tecnologie Web come Drupal e AWS, partecipando ogni anno ad eventi o corsi di formazione.</p>
        <p>Negli ultimi anni mi sono avvicinato molto al mondo dello sviluppo di Applicazioni Web e Mobile Ibrido, studiando e sperimentando tecnologie fra le quali: Node.js, React (+Redux) e Angular (Ionic).</p>
        <p>Sono curioso di natura, amo le sfide e il mettermi continuamente in gioco.</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}