import { styled } from 'styled-components';

export const WrapperHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* padding: 12px 24px; */
  color: white;

  h1 {
    margin: 0;
    font-size: 24px;
    font-weight: bold;
  }

  nav {
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: left;
  }

  nav a {
    color: white;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s;
    font-size: 16px;
    padding: 8px 12px;
    border-radius: 8px;
  }

  nav a:hover {
    color: #ffcc00;
    transform: scale(1.05);
  }
`;
