import styled from 'styled-components';
import { Row } from 'antd';

export const WrapperHeaders = styled(Row)`
  align-items: center;
  h1 {
    color: white;
    margin: 0;
    font-size: 24px;
  }

  nav {
    display: flex;
    /* justify-content: flex-end; */
    gap: 20px;
  }

  nav a {
    color: white;
    text-decoration: none;
    font-weight: 500;
    font-size: 16px;
    transition: color 0.2s;

    &:hover {
      color: #ffcc00;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;

    nav {
      justify-content: center;
    }
  }
`;
