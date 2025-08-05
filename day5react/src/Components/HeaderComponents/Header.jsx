import React from 'react'
import { WrapperHeaders } from './style'
import { Col } from 'antd';
import SearchComponent from '../SearchComponent/Search';
import { Link} from 'react-router-dom';

const Header = () => {
  return (
    <header style={{ background:'#777777'}}>
        <WrapperHeaders>
            <Col span={6}>
                <h1>App</h1>
            </Col>
             <Col span={12}>
                <SearchComponent/>
            </Col>
             <Col span={6}>
                <nav>
                    <Link to='/'>Home</Link>
                    <Link to='/about'>About</Link>
                </nav>
            </Col>
        </WrapperHeaders>
    </header>
  )
}

export default Header