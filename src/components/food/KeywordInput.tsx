import React, { useState } from 'react';
import styled from 'styled-components';

const KeywordInputBox = styled.div`
  width: 100%;
  height: 300px;
  box-shadow: inset 0 0 0 1px #ccc;
`;

const KeywordListBox = styled.div`
  display: flex;
  gap: 10px;
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
          <span>{item}</span>
        ))}
        <input type="text" value={value} onChange={handleChangeValue} onKeyPress={handleKeyPress} />
      </KeywordListBox>
    </KeywordInputBox>
  );
};

export default KeywordInput;
