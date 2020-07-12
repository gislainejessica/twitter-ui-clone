import React from 'react';

import Feed from '../Feed';

import { Container, Banner, Avatar, ProfileData, LocationIcon, CakeIcon, FollowAge, EditButton } from './styles';
//import { Edit } from 'styled-icons/material-outlined';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
     <EditButton outlined> Editar Perfil</EditButton>
        <h1>Gislaine Jèssica</h1>
        <h2>@jessy_code</h2>

        <p>
          Developer at <a href="https://udna.life"> @udna </a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            Vitória, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 18 de Abril de 1989
          </li>
        </ul>
        <FollowAge>
          <span> seguindo <strong> 87</strong></span>
          <span> <strong>789</strong> seguidores </span>
        </FollowAge>
      </ProfileData>
      <Feed />
    </Container>
  );
}

export default ProfilePage;
