import Link from 'next/link';
import { Menu, Segment } from 'semantic-ui-react';
import Container from './Container';

export interface NavbarConfig {
  name: string,
  url: string,
  position: 'left' | 'right'
}

interface Props {
  config: NavbarConfig[]
}

const Navbar: React.FC<Props> = ({config}) => {
  return(
    <Menu inverted fixed="top" size="large">
      <Container>
        {config.map(item => (
          <Link href={item.url}>
            <Menu.Item name={item.name} position={item.position} />
          </Link>
        ))}
      </Container>
    </Menu>
  )
}

export default Navbar
