import { styled } from 'styled-components';



export const WrapperPageNotFound = styled.div`
    text-align: center;
    margin-top: 80px;
    font-family: Arial, Helvetica, sans-serif;
    background-color: #f8f8f8;
    padding: 50px;
    border-radius: 12px;
    width: 60%;
    margin: auto;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
`

export const Title = styled.h2`
  font-size: 72px;
  color: #ff4c4c;
  margin-bottom: 20px;
`

export const Messages = styled.p`
     font-size: 24px;
     color: #555;
     margin-bottom: 30px;
`

export const Button = styled.div`
  display: inline-block;
  padding: 10px 20px;
  background-color: #007bff;
  border-radius: 6px;
  transition: background-color 0.3s;

  a {
    text-decoration: none;
    color: #fff;
    font-size: 16px;
  }

  &:hover {
    background-color: #0056b3;
  }
`