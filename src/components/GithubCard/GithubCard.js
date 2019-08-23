import React from 'react';
import styled from 'styled-components';

const Card = styled.a`
  display: flex;
  background: white;
  border-radius: 2px;
  margin: 12px;
  width: 360px;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  transition: transform 400ms;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    transform: scale(1.2);
  }
`;

const Header = styled.h2`
  color: black;
`;

const SubHeader = styled.p`
  color: grey;
`;

const Media = styled.img`
  border-radius: 2px 0 0 2px;
  height: 100px;
  width: 100px;
`;

const Details = styled.div`
  display: flex;
  padding: 12px;
`;

const GithubCard = ({ userName, avatarUrl, githubUrl }) => (
  <Card href={githubUrl}>
    <Media src={avatarUrl} />
    <Details>
      <div>
        <Header>{userName}</Header>
        <SubHeader>{githubUrl}</SubHeader>
      </div>
    </Details>
  </Card>
);

export default GithubCard;
