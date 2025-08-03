import { styled } from 'styled-components';

export const WrapperDetail = styled.div`
  max-width: 1000px;
  margin: 40px auto;
  padding: 32px;
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

export const Title = styled.h2`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 24px;
  color: #1a1a1a;
`;

export const Content = styled.div`
  font-size: 18px;
  line-height: 1.7;
  color: #333;
`;

export const Highlight = styled.span`
  color: #0066ff;
  font-weight: 600;
`;

export const Image = styled.img`
  width: 100%;
  border-radius: 12px;
  margin: 24px 0;
`;
