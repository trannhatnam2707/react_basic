import styled from 'styled-components';

export const WrapperHome = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 60px 80px;
  background: linear-gradient(to right, #a18cd1, #fbc2eb);
  min-height: 80vh;
  color: white;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 40px 20px;
    text-align: center;
  }
`;

export const Title = styled.h2`
  font-size: 36px;
  margin-bottom: 16px;
`;

export const Subtitle = styled.p`
  font-size: 18px;
  margin-bottom: 24px;
`;

export const CTAButton = styled.button`
  padding: 12px 24px;
  font-size: 16px;
  background-color: #ffffff;
  color: #6a11cb;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s;

  &:hover {
    background-color: #eee;
  }
`;

export const Image = styled.img`
  width: 200px;
  height: auto;

  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;
