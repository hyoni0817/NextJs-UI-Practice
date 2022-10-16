import React from 'react';
import styled from 'styled-components';
import KeywordInput from '../components/food/KeywordInput';

const InputTags = () => {
  const handleSelectKeyword = (value: string[]) => {
    console.log({ value });
  };

  return (
    <>
      <h1>Food Keywords</h1>
      <div>
        <KeywordInput onSelect={handleSelectKeyword} />
      </div>
    </>
  );
};

export default InputTags;
