import React from 'react';

const PageNotFound = () => {
  return (
    <div style={{
      textAlign: 'center',
      marginTop: '80px',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f8f8f8',
      padding: '50px',
      borderRadius: '12px',
      width: '60%',
      marginLeft: 'auto',
      marginRight: 'auto',
      boxShadow: '0 0 10px rgba(0,0,0,0.1)'
    }}>
      <h1 style={{ fontSize: '72px', color: '#ff4c4c', marginBottom: '20px' }}>404</h1>
      <p style={{ fontSize: '24px', color: '#555' }}>Oops! Trang bạn tìm không tồn tại.</p>
      <a
        href="/"
        style={{
          marginTop: '30px',
          display: 'inline-block',
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: '#007bff',
          color: '#fff',
          textDecoration: 'none',
          borderRadius: '6px'
        }}
      >
        Quay về trang chủ
      </a>
    </div>
  );
};

export default PageNotFound;
