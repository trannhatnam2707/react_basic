import React from 'react'
import { WrapperPageNotFound, Title, Messages, Button} from './style';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <WrapperPageNotFound>
      <Title>Page Not Found </Title>
      <Messages> Oops! Trang này không tồn tại !!</Messages>
      <Button>
          <Link to='/' >Quay về trang chủ</Link>
      </Button>
    </WrapperPageNotFound>
  )
}

export default PageNotFound