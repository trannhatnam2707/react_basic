import { Input } from 'antd';
import { WrapperSearch } from './style';


const { Search } = Input;

const SearchComponent = () => (
    <WrapperSearch>
        <Search
            placeholder="Nhập từ khóa tìm kiếm"
            allowClear
            enterButton="Tìm kiếm"
            size="large"
            onSearch={value => console.log(value)}
        />
    </WrapperSearch>
  
);

export default SearchComponent;