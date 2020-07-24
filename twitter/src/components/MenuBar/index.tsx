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

const MenuBar: React.FC = () => {
  return (
    <Container>
        <TopSide>
          <Logo/>
          <MenuButton>
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
          <MenuButton className="active">
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
          <Avatar />
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
