import React from 'react';

import Feed from '../Feed';

import { Container, Banner, Avatar, ProfileData, LocationIcon, CakeIcon, FollowAge, EditButton } from './styles';
//import { Edit } from 'styled-icons/material-outlined';
import image from '../../images/unicorn.jpg';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar  src={image} alt="perfil">
          {/* <img style={{width: 25, height: 25}} src={image} alt="perfil"/> */}
        </Avatar>

      </Banner>

      <ProfileData>
     <EditButton outlined> Editar Perfil</EditButton>
        <h1>Gislaine Jèssica</h1>
        <h2>@jessy_code</h2>

        <p>
          More info at <a href="https://github.com/gislainejessica"> @github/gislainejessica </a>
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
