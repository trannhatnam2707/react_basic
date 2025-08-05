import { Input, Button } from 'antd';
import { WrapperSearch, SearchContainer } from './style';
import { useState } from 'react';

const SearchComponent = () => {
  const [value, setValue] = useState('');

  const handleSearch = () => {
    console.log(value);
  };

  return (
    <WrapperSearch>
      <SearchContainer>
        <Input
          placeholder="Nhập từ khóa tìm kiếm"
          allowClear
          size="large"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Button type="primary" size="large" onClick={handleSearch}>
          Tìm kiếm
        </Button>
      </SearchContainer>
    </WrapperSearch>
  );
};

export default SearchComponent;
