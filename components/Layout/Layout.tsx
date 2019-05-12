import Link from 'next/link'
import * as React from 'react'
import BaseLayout from './BaseLayout';

const Layout = ({ children, title = 'This is the default title' }) => (
  <BaseLayout title='{props.title}'>
    <header>
      <nav>
        <Link href='/'><a>Home</a></Link> | {' '}
        <Link href='/list-class'><a>List Example</a></Link> | {' '}
        <Link href='/list-fc'><a>List Example (as Functional Component)</a></Link> | {' '}
        <Link href='/about'><a>About</a></Link> | {' '}
      </nav>
    </header>
    {children}
    <footer>
      <hr />
      <span>I'm here to stay (Footer)</span>
    </footer>
  </BaseLayout>
)

export default Layout
