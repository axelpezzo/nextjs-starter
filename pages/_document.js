import Document, { Html, Head, Main, NextScript } from 'next/document'

class DocumentWrapper extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {

    const siteTitle = 'Next.js Sample Website'
    
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Learn how to build a personal website using Next.js"
          />
        </Head>
        <body className="wrap">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default DocumentWrapper