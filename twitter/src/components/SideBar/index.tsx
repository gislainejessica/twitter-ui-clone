import React from 'react';
import StickyBox from 'react-sticky-box';

import News from '../News';
import List from '../List';
import FollowSugestion from '../FollowSugestion';

import { Container,
   SearchWrapper,
   SearchInput,
   SearchIcon,
   Body } from './styles';

const SideBar: React.FC = () => {
  return (
  <Container>
    <SearchWrapper>
      <SearchInput placeholder="Buscar no twitter" />
      <SearchIcon />
    </SearchWrapper>
    <StickyBox>
      <Body>
      <List
        title="Talvez você curta"
        elements={[
        <FollowSugestion
          name="Gislaine Jéssica"
          nickname='@jessy_code'
        />,
        <FollowSugestion
          name="Gislaine Jéssica"
          nickname='@jessy_code'
      />,
        <FollowSugestion
          name="Gislaine Jéssica"
          nickname='@jessy_code'
        />]}
      />
        <List
        title="Talvez você curta"
        elements={[<News />, <News />, <News />]}
      />
        <List
        title="Talvez você curta"
        elements={[<News />, <News />, <News />]}
      />
        <List
        title="Talvez você curta"
        elements={[<News />, <News />, <News />]}
      />
        <List
        title="Talvez você curta"
        elements={[<News />, <News />, <News />]}
      />
      </Body>
    </StickyBox>
  </Container>);
}

export default SideBar;
