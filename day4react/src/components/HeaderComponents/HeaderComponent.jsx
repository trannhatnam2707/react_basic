import React from 'react';
import { WrapperHeader } from './style';
import { Link } from 'react-router-dom';
import { Col } from 'antd';
import SearchComponent from '../SearchComponent/Search';

const Headers = () => {
  return (
    <header style={{ background: "#6666FF"}}>
      <WrapperHeader>
        <Col span={6}>
          <h1>WeHappi</h1>
        </Col>
        <Col span={12}>
          <SearchComponent />
        </Col>
        <Col span={6}>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/detail">Detail</Link>
          </nav>
        </Col>
      </WrapperHeader>
    </header>
  );
};

export default Headers;