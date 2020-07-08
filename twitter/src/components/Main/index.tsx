import React from 'react';

import { Container, Header, BackIcon, ProfileInfo, BottomMenu, HomeIcon,  SearchIcon, BellIcon, EmailIcon } from './styles';
import ProfilePage from '../ProfilePage';

const Main: React.FC = () => {
  return(
    <Container>
      <Header>
        <button>
          <BackIcon />
        </button>

        <ProfileInfo>
          <strong> Gislaine Jéssica </strong>
          <span> 233 Tweets</span>
        </ProfileInfo>
      </Header>
      <ProfilePage />
      <BottomMenu>
       <HomeIcon />
       <SearchIcon />
       <BellIcon className="active"/>
       <EmailIcon/>
       </BottomMenu>

    </Container>
  );
}

export default Main;
