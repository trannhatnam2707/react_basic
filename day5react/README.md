# useContext Hook 
useContext() là một Hook dùng để truy cập dữ liệu từ một Context trong React. Nó giúp truyền dữ liệu xuống nhiều cấp component mà không cần truyền props thủ công ở từng cấp.

# Axios:
Axios là thư viện JavaScript để gửi request HTTP (GET, POST, PUT, DELETE) từ frontend (React, Vue, v.v.).
Nó không phải là backend, mà là công cụ để gọi API.


## Sử dụng
1. Tạo 1 Context():
    import {createContext} from 'React'

    export const Themecontext = createContext();
2. Cung cấp giá trị với Provider (sẽ để ở Component cha)

    import { ThemeContext } from './ThemeContext';

    function App() {
            const theme = "dark";
            return (
                <ThemeContext.Provider value={theme}>
                <ChildComponent />
                </ThemeContext.Provider>
            );
            }
3. Dùng useContext() để lấy giá trị trong component con

            import React, { useContext } from 'react';
            import { ThemeContext } from './ThemeContext';

            function ChildComponent() {
                    const theme = useContext(ThemeContext);
                    return <div>The current theme is {theme}</div>;
            }

# Cài đặt các thư viện

1. Antd Design: npm install antd
2. React Router: npm install react-router-dom
3. Axios: npm install axios
4. Json Server: npm install -g json-server


# Run App
    chạy front-end: npm start

    chạy Server: json-server --watch db.json --port 3001

