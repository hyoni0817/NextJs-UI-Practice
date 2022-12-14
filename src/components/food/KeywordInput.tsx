import React, { FC, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { BsX } from 'react-icons/bs';

const KeywordInputBox = styled.div`
  padding: 15px 10px;
  width: 100%;
  height: 300px;
  box-shadow: inset 0 0 0 1px #ccc;

  &:hover {
    cursor: text;
  }
`;

const KeywordListBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const ItemBox = styled.div`
  padding: 2px 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 8px;
  background: #f8a8a8;
  color: #ffffff;
`;

const RemoveButton = styled.button`
  padding: 0;
  line-height: 1;
  border: none;
  background: none;
  cursor: pointer;
`;

const Input = styled.input`
  border: none;
  outline: none;
`;

type KeywordInputProps = {
  onSelect: (value: string[]) => void;
};

const KeywordInput: FC<KeywordInputProps> = (props) => {
  const { onSelect } = props;
  const [value, setValue] = useState<string>('');
  const [keywordList, setKeywordList] = useState<string[]>([]);
  const keywordInput = useRef(null);

  useEffect(() => {
    onSelect(keywordList);
  }, [keywordList]);

  const handleChangeValue = (e) => {
    setValue(e.target.value);
  };

  const handleKeyPress = ({ nativeEvent }) => {
    if (nativeEvent.key === 'Enter') {
      setKeywordList([...keywordList, nativeEvent.target.value]);
      setValue('');
    }
  };

  const handleKeyDown = ({ nativeEvent }) => {
    // 아무런 값 입력이 안 된 상태에서 백스페이스 클릭시 키워드 제거
    if (nativeEvent.keyCode === 8 && !value) {
      const removeKeyword = keywordList.slice(0, keywordList.length - 1);
      setKeywordList(removeKeyword);
    }
  };

  const handleClickRemove = (keyword: string) => {
    const removeKeyword = keywordList.filter((item) => item !== keyword);
    setKeywordList(removeKeyword);
  };

  const handleClickKeywordInputBox = () => {
    keywordInput.current.focus();
  };

  return (
    <KeywordInputBox onClick={handleClickKeywordInputBox}>
      <KeywordListBox>
        {keywordList.map((item) => (
          <ItemBox>
            <span>{item}</span>
            <RemoveButton type="button" onClick={() => handleClickRemove(item)}>
              <BsX />
            </RemoveButton>
          </ItemBox>
        ))}
        <Input
          type="text"
          value={value}
          onChange={handleChangeValue}
          onKeyPress={handleKeyPress}
          onKeyDown={handleKeyDown}
          ref={keywordInput}
        />
      </KeywordListBox>
    </KeywordInputBox>
  );
};

export default KeywordInput;
