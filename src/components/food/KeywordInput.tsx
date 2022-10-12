import React, { useState } from 'react';
import styled from 'styled-components';

const KeywordInputBox = styled.div`
  width: 100%;
  height: 300px;
  box-shadow: inset 0 0 0 1px #ccc;
`;

const KeywordListBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const KeywordSpan = styled.span`
  padding: 2px 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 8px;
  background: #f8a8a8;
  color: #ffffff;
`;

const KeywordInput = () => {
  const [value, setValue] = useState<string>('');
  const [keywordList, setKeywordList] = useState<string[]>([]);

  const handleChangeValue = (e) => {
    setValue(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      setKeywordList([...keywordList, e.target.value]);
      setValue('');
    }
  };

  return (
    <KeywordInputBox>
      <KeywordListBox>
        {keywordList.map((item) => (
          <KeywordSpan>{item}</KeywordSpan>
        ))}
        <input type="text" value={value} onChange={handleChangeValue} onKeyPress={handleKeyPress} />
      </KeywordListBox>
    </KeywordInputBox>
  );
};

export default KeywordInput;
