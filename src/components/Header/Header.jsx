import React from 'react';

import { HeaderComponent, H1, LinkTo } from './Header.styles';

const Header = () => (
  <HeaderComponent>
    <LinkTo to="/">
      <H1>VILLAGE CINEMAS</H1>
    </LinkTo>
  </HeaderComponent>
);

export default Header;
