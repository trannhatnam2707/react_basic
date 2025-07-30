import { useState } from "react";

function App() {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const handleChangeEmail = (e) => {
    setEmail(e.target.value); // cập nhật state khi user Nhập.
  };

  const handleChangePass = (e) => {
    setPass(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // không cho reload trang
    alert(`Xin chào, ${email}!`);
  };

  return (
    <div style={{
      maxWidth: '400px',
      margin: '40px auto',
      padding: '30px',
      border: '1px solid #ccc',
      borderRadius: '10px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f9f9f9'
    }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Form Register</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>
            Nhập email của bạn:
          </label>
          <input
            id="email"
            type="text"
            value={email}
            onChange={handleChangeEmail}
            style={{
              width: '100%',
              padding: '8px',
              borderRadius: '5px',
              border: '1px solid #ccc'
            }}
          />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="pass" style={{ display: 'block', marginBottom: '5px' }}>
            Nhập mật khẩu của bạn:
          </label>
          <input
            id="pass"
            type="password"
            value={pass}
            onChange={handleChangePass}
            style={{
              width: '100%',
              padding: '8px',
              borderRadius: '5px',
              border: '1px solid #ccc'
            }}
          />
        </div>

        <button
          type="submit"
          style={{
            width: '100%',
            padding: '10px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Đăng ký
        </button>
      </form>

      <p style={{ marginTop: '20px', textAlign: 'center' }}>
        Email bạn vừa nhập là: <strong>{email}</strong>
      </p>
    </div>
  );
}

export default App;
