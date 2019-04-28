import Head from "next/head";

export default function BaseLayout({ title, children, bgcolor = "#aaaaaa" }) {
  return (
    <div style={{ backgroundColor: bgcolor }}>
      <Head>
        <title>{title}</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      </Head>
      {children}
    </div>
  )
}