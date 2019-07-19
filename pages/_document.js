// 自定义的document.js，主要是为了使用传统的less

import Document, {
  Head, Main, NextScript,
} from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <html lang="zh">
        <Head>
          <link rel="icon" href="/static/img/rose.ico" type="image/x-icon" />
          <link rel="shortcut icon" href="/static/img/rose.ico" type="image/x-icon" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
          <meta name="theme-color" content="#183d50" />
          <link rel="stylesheet" href="/_next/static/style.css" />
          <title>菲菲爱蕾蕾</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
