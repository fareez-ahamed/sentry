import Head from "next/head";

export default function BaseLayout({ title, children, bgcolor = "#aaaaaa" }) {
  return (
    <div style={{ backgroundColor: bgcolor }}>
      <Head>
        <title>{title}</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
      </Head>
      {children}
    </div>
  )
}