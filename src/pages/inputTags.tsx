import React from 'react';
import styled from 'styled-components';
import KeywordInput from '../components/food/KeywordInput';

const H1 = styled.h1`
  text-align: center;
`;

const Container = styled.div`
  width: 100&;
  padding: 0 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  flex-direction: column;
`;

const FoodKeywordBox = styled.div`
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 728px;
  }
`;

const InputTags = () => {
  const handleSelectKeyword = (value: string[]) => {
    console.log({ value });
  };

  return (
    <Container>
      <FoodKeywordBox>
        <H1>🍒Food Keywords🍒</H1>
        <KeywordInput onSelect={handleSelectKeyword} />
      </FoodKeywordBox>
    </Container>
  );
};

export default InputTags;
