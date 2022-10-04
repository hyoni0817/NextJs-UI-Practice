import React, { FC } from 'react';
import styled from 'styled-components';

const Input = styled.input`
  width: 100%;
  padding: 8px 16px;
  border: 1px solid #ccc;
  border-radius: 24px;
`;

type SearchInputProps = {
  onChange: (e: any) => void;
  onOpenList: () => void;
  value: string;
};

const SearchInput: FC<SearchInputProps> = (props) => {
  const { onChange, value, onOpenList } = props;

  return (
    <Input
      type="text"
      onChange={onChange}
      onClick={onOpenList}
      value={value}
      placeholder="검색할 책  제목을 입력해주세요. "
    />
  );
};

export default SearchInput;
