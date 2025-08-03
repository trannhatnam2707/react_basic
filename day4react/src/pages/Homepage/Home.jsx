import React from 'react';
import { WrapperHome, Title, Subtitle, CTAButton, Image } from './style';

const Home = () => {
  return (
    <WrapperHome>
      <div>
        <Title>Chào mừng đến với WeHappi 🎉</Title>
        <Subtitle>Nơi kết nối cảm xúc và sẻ chia niềm vui.</Subtitle>
        <CTAButton>Bắt đầu ngay</CTAButton>
      </div>
      <Image src="https://cdn-icons-png.flaticon.com/512/3159/3159066.png" alt="Happy icon" />
    </WrapperHome>
  );
};

export default Home;
