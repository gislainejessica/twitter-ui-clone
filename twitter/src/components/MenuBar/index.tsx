import React from 'react';
import Button from '../Button';
import {
  Container,
  TopSide,
  Logo,
  MenuButton,
  HomeIcon,
  BellIcon,
  EmailIcon,
  FavoriteIcon,
  ExitIcon,
  BottomSide,
  Avatar,
  ProfileData,
  ProfileIcon} from './styles';

import image from '../../images/unicorn.jpg';

const MenuBar: React.FC = () => {
  return (
    <Container>
        <TopSide>
          <Logo/>
          <MenuButton className="active">
            <HomeIcon />
            <span> Pagina inicial</span>
          </MenuButton>
          <MenuButton>
            <BellIcon />
            <span> Notificações</span>
          </MenuButton>
          <MenuButton>
            <EmailIcon />
            <span> Mensagens</span>
          </MenuButton>
          <MenuButton >
            <FavoriteIcon />
            <span> Favoritados</span>
          </MenuButton>
          <MenuButton>
            <ProfileIcon />
            <span> Perfil </span>
          </MenuButton>
          <Button>
            <span> Tweetar </span>
          </Button>
        </TopSide>

        <BottomSide>
          <Avatar src={image} alt="perfil" />
          <ProfileData>
            <strong>Gislaine Jéssica</strong>
            <span>@jessy_code</span>
          </ProfileData>
          <ExitIcon />
        </BottomSide>
    </Container>
    );
}

export default MenuBar;
