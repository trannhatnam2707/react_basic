import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import { route } from './Router';
import Headers from './../../day5react/src/Components/HeaderComponents/Header'
import { TaskProvider } from './Context/TaskContext';

function App() {

  const location = useLocation();

  console.log (location);
  const currentRoute = route.find(r => r.path === location.pathname) || {};
  
  return (
    <TaskProvider>
    <div className="App">
        {currentRoute.isShowHeader && <Headers/>}
          <Routes>
              {route.map((route,index) => (
                <Route key={index} path={route.path} element={<route.page/>}/>
              ))}
          </Routes>
    </div>
    </TaskProvider>
  );
}

export default App;
