import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          {/* <title>
            Niwax - Web Design &amp; Digital Marketing Agency HTML Template
          </title> */}
          <meta
            name="description"
            content="Creative Agency, Marketing Agency Template"
          />
          <meta name="keywords" content="Creative Agency, Marketing Agency" />
          <meta name="author" content="" />
          {/* <meta name="viewport" content="width=device-width,initial-scale=1" /> */}
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="theme-color" content="#2e2a8f" />
          <link href="images/favicon.png" rel="icon" />
          <link href="/css/bootstrap.min.css" rel="stylesheet" />
          <link href="/css/plugin.min.css" rel="stylesheet" />
          <link href="/css/all.min.css" rel="stylesheet" />
          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&family=Poppins:wght@300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          />
          <link href="/css/style.css" rel="stylesheet" />
          <link href="/css/responsive.css" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
          {/* <script src="js/preloader.js"></script> */}
          <script src="/js/vendor/modernizr-3.5.0.min.js"></script>
          <script src="/js/jquery.min.js"></script>
          <script src="/js/bootstrap.bundle.min.js"></script>
          <script src="/js/plugin.min.js"></script>
          <script src="/js/main.js"></script>
        </body>
      </Html>
    )
  }
}

export default MyDocument
