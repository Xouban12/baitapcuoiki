import React from 'react';
import styled from 'styled-components';

const Welcome = (props) => {
  return (
    <Container>
      <Title> Quản lý sách </Title> <Title> Người thực hiện Xuban </Title>{' '}
    </Container>
  );
};

export default Welcome;
const Container = styled.div`
  margin: 0 auto;
  width: min(100%, 960px);
  height: 300px;
  display: flex;
  flex-direction: column;
  background: blue;
`;

const Title = styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: white;
  margin: 0 auto;
  margin-top: 1rem;
`;
