import React from 'react';
import Button from '../Button';
import { Container,
   Topside,
   Logo,
   MenuButton,
   HomeIcon,
   BellIcon,
   FavoriteIcon,
   EmailIcon,
   ProfileIcon,
   BottomSide,
  Avatar,
  ProfileData,
  ExitIcon
   } from './styles';

const MenuBar: React.FC = () => {
  return(
    <Container>
      <Topside>
        <Logo />

        <MenuButton>
          <HomeIcon />
          <span> Pagina Inicial </span>
        </MenuButton>
        <MenuButton>
          <BellIcon />
          <span> Notificações </span>
        </MenuButton>
        <MenuButton>
          <EmailIcon />
          <span> Mensagens</span>
        </MenuButton>
        <MenuButton>
          <FavoriteIcon />
          <span> Favoritados </span>
        </MenuButton>
        <MenuButton>
          <ProfileIcon className="active"/>
          <span> Perfil </span>
        </MenuButton>
        <Button>
          <span>Tweetar </span>
        </Button>
      </Topside>
      <BottomSide>
        <Avatar />
        <ProfileData>
          <strong>Gislaine Jèssica</strong>
          <span>@jessy_code</span>
        </ProfileData>
        <ExitIcon />
      </BottomSide>
    </Container>
    );
}

export default MenuBar;
