import React from 'react';

import { Container,
  Retweeted,
   Body,
   Avatar,
   Content,
   Header,
   Dot ,
  Description,
   ImageContent,
   Icons,
   Status,
   CommentIcone,
   RetweetIcone,
   LikeIcon } from './styles';

import image from '../../images/unicorn.jpg';

const Tweet: React.FC = () => {
  return(
    <Container>
      <Retweeted>
        <RetweetIcone />
        Você Retweetou
      </Retweeted>
      <Body>
        <Avatar src={image} alt="perfil"/>
        <Content>
          <Header>
            <strong>Rockeseat</strong>
            <span>@rocketseat</span>
            <Dot />
            <time>20 de jun</time>
          </Header>
          <Description> Foquete não tem ré </Description>
          <ImageContent />
          <Icons>
            <Status>
              <CommentIcone />
              19
            </Status>
            <Status>
              <RetweetIcone />
              09
            </Status>
            <Status>
              <LikeIcon />
              59
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
}

export default Tweet;
