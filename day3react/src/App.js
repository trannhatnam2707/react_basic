import React, { useEffect, useState } from "react";

import './App.css';

function App() {
  const [users, setUsers] = useState([]);        // Lưu danh sách người dùng
  const [loading, setLoading] = useState(true);  // Trạng thái đang tải
  const [error, setError] = useState(null);      // Trạng thái lỗi (nếu có)

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users") // Gọi API
      .then((response) => {
        if (!response.ok) {
          throw new Error("Lỗi khi gọi API");     // Nếu không phải status 200-299
        }
        return response.json();                   // Chuyển dữ liệu về JSON
      })
      .then((data) => {
        setUsers(data);      // Lưu dữ liệu vào state
        setLoading(false);   // Tắt loading
      })
      .catch((err) => {
        setError(err.message);  // Ghi lại lỗi
        setLoading(false);      // Tắt loading dù lỗi hay không
      });
  }, []);

  // Xử lý khi đang tải
  if (loading)
    {
       return <p>Đang tải dữ liệu...</p>;
    }

  // Xử lý khi có lỗi
  if (error) return <p >Đã xảy ra lỗi: {error}</p>;

  // Hiển thị danh sách người dùng
  return (
    <div>
      <h2>Danh sách người dùng</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <strong>{user.name}</strong> - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}


export default App;




