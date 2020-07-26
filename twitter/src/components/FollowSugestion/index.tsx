import React from 'react';
import image from '../../images/unicorn.jpg';
import { Container, Avatar, Info, FollowButton } from './styles';

interface Props {
  name: string;
  nickname: string;
}

const FollowSugestion: React.FC<Props> = ({
  name, nickname
}) => {
  return (
    <Container>
      <div>
        <Avatar src={image} alt="perfil" />

        <Info>
          <strong>{name}</strong>
          <span>{nickname}</span>
        </Info>

      </div>
      <FollowButton >
          Seguir
        </FollowButton>
    </Container>
  );
}

export default FollowSugestion;
