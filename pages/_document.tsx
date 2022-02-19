import { Html, Head, Main, NextScript } from 'next/document';

const Document = () => {
    return (
        <Html lang="en">
          <Head>
          </Head>
          <body className="bg-white dark:bg-zinc-900 text-white dark:text-black">
            <Main />
            <NextScript />
          </body>
        </Html>
        )          
}

export default Document